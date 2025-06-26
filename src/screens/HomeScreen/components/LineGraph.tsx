import React, {useEffect, useRef, useState} from 'react';
import {View, StyleSheet, Animated, Easing} from 'react-native';
import Svg, {
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
  Rect,
} from 'react-native-svg';
import * as shape from 'd3-shape';
import * as d3 from 'd3-scale';
import AppText from '../../../components/AppText';

type DataPoint = {
  date: string;
  value: number;
};

const CHART_HEIGHT = 100;
const PADDING = 20;
const INTERVAL = 6000;
const DATA_COUNT = 6;

type LineGraphProps = {
  parentWidth: number;
};

const AnimatedPath = Animated.createAnimatedComponent(Path);
const AnimatedRect = Animated.createAnimatedComponent(Rect);

const generateRandomData = (): DataPoint[] => {
  const now = new Date();
  return Array.from({length: DATA_COUNT}, (_, i) => {
    const d = new Date(now);
    d.setDate(d.getDate() + i);
    return {
      date: d.toLocaleDateString('ko-KR').slice(5),
      value: parseFloat((Math.random() * 8).toFixed(1)),
    };
  });
};

const LineGraph = ({parentWidth}: LineGraphProps) => {
  const [data, setData] = useState<DataPoint[]>(generateRandomData());
  const [pathLength, setPathLength] = useState(0);

  const animation = useRef(new Animated.Value(0)).current;
  const pathRef = useRef<any>(null);

  const chartWidth = parentWidth - PADDING * 2 - 20;
  const maxValue = Math.max(...data.map(d => d.value)) * 1.1;

  const extendedData = [
    {date: '시작', value: data[0]?.value ?? 0},
    ...data,
    {date: '끝', value: data.at(-1)?.value ?? 0},
  ];

  const x = d3
    .scaleLinear()
    .domain([0, extendedData.length - 1])
    .range([0, chartWidth]);

  const y = d3.scaleLinear().domain([0, maxValue]).range([CHART_HEIGHT, 0]);

  const linePath = shape
    .line<DataPoint>()
    .x((_, i) => x(i))
    .y(d => y(d.value))
    .curve(shape.curveCatmullRom.alpha(0.5))(extendedData as any) as string;

  const areaPath = shape
    .area<DataPoint>()
    .x((_, i) => x(i))
    .y0(CHART_HEIGHT + 20)
    .y1(d => y(d.value))
    .curve(shape.curveCatmullRom.alpha(0.5))(extendedData as any) as string;

  const strokeDashoffset = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [pathLength, 0],
  });

  const clipWidth = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, chartWidth],
  });

  // ✅ 자동 갱신
  useEffect(() => {
    const loop = setInterval(() => {
      animation.setValue(0);
      setData(generateRandomData());
    }, INTERVAL);
    return () => clearInterval(loop);
  }, []);

  // ✅ pathLength 계산
  useEffect(() => {
    let attempts = 0;

    const tryLength = () => {
      requestAnimationFrame(() => {
        try {
          const node = pathRef.current?.getNode?.();
          const length = node?.getTotalLength?.();
          if (length && length > 0) {
            setPathLength(length);
          } else if (attempts++ < 10) {
            tryLength();
          }
        } catch {}
      });
    };

    tryLength();
  }, [linePath]);

  // ✅ 선 그리기 애니메이션
  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 2000,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  }, [data]);

  if (!parentWidth) return null;

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.yAxis}>
          {[8, 4, 0].map(value => (
            <View key={value}>
              <AppText style={styles.yLabel}>{value}</AppText>
            </View>
          ))}
        </View>

        <Svg width={chartWidth + 10} height={CHART_HEIGHT + 40}>
          <Defs>
            <LinearGradient id="grad" x1="0" y1="0" x2="0" y2="0.9">
              <Stop offset="0" stopColor="#1C2E4A" stopOpacity="0.5" />
              <Stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
            </LinearGradient>
            <ClipPath id="clipPath">
              <AnimatedRect
                x={0}
                y={0}
                height={CHART_HEIGHT + 20}
                width={clipWidth}
              />
            </ClipPath>
          </Defs>

          <Path d={areaPath} fill="url(#grad)" clipPath="url(#clipPath)" />

          <AnimatedPath
            ref={ref => (pathRef.current = ref ?? pathRef.current)}
            d={linePath}
            stroke="#1C2E4A"
            strokeWidth={2}
            fill="none"
            strokeDasharray={pathLength}
            strokeDashoffset={strokeDashoffset}
            clipPath="url(#clipPath)"
          />
        </Svg>
      </View>
    </View>
  );
};

export default LineGraph;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  yAxis: {
    width: 20,
    height: CHART_HEIGHT,
    justifyContent: 'space-between',
  },
  yLabel: {
    fontSize: 12,
    color: '#666',
  },
});
