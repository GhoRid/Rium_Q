import React, {useEffect, useRef} from 'react';
import {StyleSheet, Animated, View} from 'react-native';
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  Path,
  G,
  Text as SvgText,
} from 'react-native-svg';

type BarProps = {
  value: number;
  label: string;
  color: string;
};

const CHART_HEIGHT = 120;
const BAR_WIDTH = 40;
const RADIUS = 20;
const SVG_WIDTH = 60;

const Bar = ({value, label, color}: BarProps) => {
  const animatedHeight = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const height = (value / 8) * CHART_HEIGHT;

    Animated.timing(animatedHeight, {
      toValue: height,
      duration: 600,
      useNativeDriver: false,
    }).start();
  }, [value]);

  const AnimatedPath = Animated.createAnimatedComponent(Path);
  const AnimatedG = Animated.createAnimatedComponent(G);

  const animatedY = animatedHeight.interpolate({
    inputRange: [0, CHART_HEIGHT],
    outputRange: [CHART_HEIGHT, 0],
  });

  const finalHeight = (value / 8) * CHART_HEIGHT;
  const labelY = CHART_HEIGHT - finalHeight - 6;
  const movedUp = Animated.subtract(finalHeight, animatedHeight);

  // 막대의 path를 만들어주는 함수 (상단만 둥근 사각형)
  const createRoundedBarPath = (
    x: number,
    y: number,
    width: number,
    height: number,
    radius: number,
  ) => {
    return `
      M${x},${y + radius}
      A${radius},${radius} 0 0 1 ${x + radius},${y}
      H${x + width - radius}
      A${radius},${radius} 0 0 1 ${x + width},${y + radius}
      V${y + height}
      H${x}
      Z
    `;
  };

  const barX = (SVG_WIDTH - BAR_WIDTH) / 2;

  return (
    <View style={styles.wrapper}>
      <Svg width={SVG_WIDTH} height={CHART_HEIGHT}>
        <Defs>
          <LinearGradient id={`grad-${label}`} x1="0" y1="0" x2="0" y2="1">
            <Stop offset="0" stopColor={color} stopOpacity="1" />
            <Stop offset="1" stopColor={color} stopOpacity="0.1" />
          </LinearGradient>
        </Defs>

        {/* 애니메이션 Path */}
        <AnimatedPath
          d={Animated.multiply(animatedHeight, 1).interpolate({
            inputRange: [0, CHART_HEIGHT],
            outputRange: [
              createRoundedBarPath(barX, CHART_HEIGHT, BAR_WIDTH, 0, RADIUS),
              createRoundedBarPath(barX, 0, BAR_WIDTH, CHART_HEIGHT, RADIUS),
            ],
          })}
          fill={`url(#grad-${label})`}
        />

        {/* 숫자 텍스트 */}
        <AnimatedG transform={[{translateY: movedUp}]}>
          <SvgText
            x={SVG_WIDTH / 2}
            y={labelY}
            fontSize="14"
            fill={color}
            fontWeight="bold"
            textAnchor="middle">
            {value} 시간
          </SvgText>
        </AnimatedG>
      </Svg>

      {/* 하단 라벨 */}
      <View style={[styles.labelContainer, {width: SVG_WIDTH}]}>
        <Animated.Text style={[styles.label, {color}]} numberOfLines={1}>
          {label}
        </Animated.Text>
      </View>
    </View>
  );
};

export default Bar;

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    marginHorizontal: 10,
    justifyContent: 'center',
  },
  labelContainer: {
    marginTop: 8,
  },
  label: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
