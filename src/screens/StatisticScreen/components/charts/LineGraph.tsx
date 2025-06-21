import React, {useRef, useEffect, useState} from 'react';
import {View, StyleSheet, Dimensions, Animated} from 'react-native';
import Svg, {
  Path,
  Defs,
  LinearGradient,
  Stop,
  Line,
  Text as SvgText,
} from 'react-native-svg';
import * as shape from 'd3-shape';
import * as scale from 'd3-scale';

type LineGraphProps = {
  data: {hour: number; value: number}[];
};

const {width} = Dimensions.get('window');
const CHART_HEIGHT = 220;
const LEFT_PADDING = 40;
const RIGHT_PADDING = 20;
const TOP_OFFSET = 16;
const TICK_COUNT = 6;

const LineGraph = ({data}: LineGraphProps) => {
  const x = scale
    .scaleLinear()
    .domain([0, data.length - 1])
    .range([LEFT_PADDING, width - RIGHT_PADDING]);

  const y = scale.scaleLinear().domain([0, 60]).range([CHART_HEIGHT, 0]);

  const yTicks = y.ticks(TICK_COUNT);
  const xLabels = data.map((d, i) => ({
    label: d.hour.toString(),
    x: x(i),
  }));

  const animatedValue = useRef(new Animated.Value(0)).current;
  const [animatedPath, setAnimatedPath] = useState('');
  const [animatedArea, setAnimatedArea] = useState('');

  useEffect(() => {
    const id = animatedValue.addListener(({value}) => {
      const interpolated = data.map(d => ({
        ...d,
        value: d.value * value,
      }));

      const line = shape
        .line<{hour: number; value: number}>()
        .x((_, i) => x(i))
        .y(d => y(d.value))
        .curve(shape.curveMonotoneX)(interpolated);

      const area = shape
        .area<{hour: number; value: number}>()
        .x((_, i) => x(i))
        .y0(() => y(0))
        .y1(d => y(d.value))
        .curve(shape.curveMonotoneX)(interpolated);

      setAnimatedPath(line || '');
      setAnimatedArea(area || '');
    });

    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false, // 꼭 false!
    }).start();

    return () => animatedValue.removeListener(id);
  }, [data]);

  return (
    <View style={styles.container}>
      <Svg width={width} height={CHART_HEIGHT + TOP_OFFSET + 20}>
        {yTicks.map((tick, index) => (
          <React.Fragment key={`y-tick-${index}`}>
            <Line
              x1={LEFT_PADDING}
              x2={width - RIGHT_PADDING}
              y1={y(tick) + TOP_OFFSET}
              y2={y(tick) + TOP_OFFSET}
              stroke="#E0E0E0"
              strokeWidth={1}
            />
            <SvgText
              x={LEFT_PADDING - 8}
              y={y(tick) + TOP_OFFSET + 4}
              fontSize={10}
              fill="#888"
              textAnchor="end">
              {tick}
            </SvgText>
          </React.Fragment>
        ))}

        <SvgText
          x={RIGHT_PADDING}
          y={y(yTicks[6]) + TOP_OFFSET - 8}
          fontSize={10}
          fill="#888">
          (분)
        </SvgText>

        <Defs>
          <LinearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
            <Stop offset="0%" stopColor="#007BFF" stopOpacity={0.25} />
            <Stop offset="100%" stopColor="#007BFF" stopOpacity={0} />
          </LinearGradient>
        </Defs>

        {/* 애니메이션 영역 */}
        <Path
          d={animatedArea}
          fill="url(#grad)"
          transform={`translate(0, ${TOP_OFFSET})`}
        />
        <Path
          d={animatedPath}
          stroke="#007BFF"
          strokeWidth={2}
          fill="none"
          transform={`translate(0, ${TOP_OFFSET})`}
        />

        {/* X축 라벨 */}
        {xLabels.map(({label, x}, i) => (
          <SvgText
            key={`x-label-${i}`}
            x={x}
            y={CHART_HEIGHT + TOP_OFFSET + 12}
            fontSize={10}
            fill="#333"
            textAnchor="middle">
            {label}
          </SvgText>
        ))}
      </Svg>
    </View>
  );
};

export default LineGraph;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
