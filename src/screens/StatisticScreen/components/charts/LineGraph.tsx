import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
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
const TOP_OFFSET = 16; // ✅ 위쪽 여백
const TICK_COUNT = 6;

const LineGraph = ({data}: LineGraphProps) => {
  const x = scale
    .scaleLinear()
    .domain([0, data.length - 1])
    .range([LEFT_PADDING, width - RIGHT_PADDING]);

  const y = scale.scaleLinear().domain([0, 60]).range([CHART_HEIGHT, 0]);

  const area = shape
    .area<{hour: number; value: number}>()
    .x((_, i) => x(i))
    .y0(() => y(0))
    .y1(d => y(d.value))
    .curve(shape.curveMonotoneX)(data);

  const line = shape
    .line<{hour: number; value: number}>()
    .x((_, i) => x(i))
    .y(d => y(d.value))
    .curve(shape.curveMonotoneX)(data);

  const yTicks = y.ticks(TICK_COUNT);
  const xLabels = data.map((d, i) => ({
    label: d.hour.toString(),
    x: x(i),
  }));

  return (
    <View style={styles.container}>
      <Svg width={width} height={CHART_HEIGHT + TOP_OFFSET + 20}>
        {/* 수평 가이드선 + Y축 숫자 */}
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

        {/* 단위 텍스트 */}
        <SvgText
          x={RIGHT_PADDING}
          y={y(yTicks[6]) + TOP_OFFSET - 8}
          fontSize={10}
          fill="#888">
          (분)
        </SvgText>

        {/* 면 채움 영역 */}
        <Defs>
          <LinearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
            <Stop offset="0%" stopColor="#007BFF" stopOpacity={0.25} />
            <Stop offset="100%" stopColor="#007BFF" stopOpacity={0} />
          </LinearGradient>
        </Defs>
        <Path
          d={area!}
          fill="url(#grad)"
          transform={`translate(0, ${TOP_OFFSET})`}
        />
        <Path
          d={line!}
          fill="none"
          stroke="#007BFF"
          strokeWidth={2}
          transform={`translate(0, ${TOP_OFFSET})`}
        />

        {/* X축 시간 라벨 */}
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
