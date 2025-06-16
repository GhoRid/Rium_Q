import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Svg, {Path, Defs, LinearGradient, Stop, Circle} from 'react-native-svg';
import * as shape from 'd3-shape';
import * as d3 from 'd3-scale';

type DataPoint = {
  date: string;
  value: number;
};

const CHART_HEIGHT = 90;
const PADDING = 20;

const originalData: DataPoint[] = [
  {date: '5/12', value: 4},
  {date: '5/13', value: 3.5},
  {date: '5/14', value: 4},
  {date: '5/15', value: 6.5},
  {date: '5/16', value: 5},
  {date: '오늘', value: 6.8},
];

type LineGraphProps = {
  parentWidth: number; // 부모 컴포넌트의 너비
};

const LineGraph = ({parentWidth}: LineGraphProps) => {
  if (parentWidth === 0) return null;

  const chartWidth = parentWidth - PADDING * 2 - 20; // 30은 Y축 레이블 공간
  const data = [
    {date: '시작', value: originalData[0].value},
    ...originalData,
    {date: '끝', value: originalData[originalData.length - 1].value},
  ];

  const x = d3
    .scaleLinear()
    .domain([0, data.length - 1])
    .range([0, chartWidth]);

  const y = d3.scaleLinear().domain([0, 8]).range([CHART_HEIGHT, 0]);

  const linePath = shape
    .line<DataPoint>()
    .x((_, i) => x(i))
    .y(d => y(d.value))
    .curve(shape.curveCatmullRom.alpha(0.5))(data as any) as string;

  const areaPath = shape
    .area<DataPoint>()
    .x((_, i) => x(i))
    .y0(CHART_HEIGHT + 20)
    .y1(d => y(d.value))
    .curve(shape.curveCatmullRom.alpha(0.5))(data as any) as string;

  const lastIdx = originalData.length - 1;
  const cx = x(lastIdx + 1);
  const cy = y(originalData[lastIdx].value);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {/* Y축 숫자 */}
        <View style={styles.yAxis}>
          {[8, 4, 0].map(value => (
            <View key={value}>
              <Text style={styles.yLabel}>{value}</Text>
            </View>
          ))}
        </View>

        {/* 그래프 */}
        <Svg width={chartWidth} height={CHART_HEIGHT + 20}>
          <Defs>
            <LinearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
              <Stop offset="0" stopColor="#1C2E4A" stopOpacity="0.5" />
              <Stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
            </LinearGradient>
          </Defs>

          <Path d={areaPath} fill="url(#grad)" />
          <Path d={linePath} fill="none" stroke="#1C2E4A" strokeWidth={2} />
          <Circle cx={cx} cy={cy} r={5} fill="#1C2E4A" />
          <Circle
            cx={cx}
            cy={cy}
            r={8}
            stroke="#ccc"
            strokeWidth={1.5}
            fill="white"
          />
        </Svg>
      </View>
    </View>
  );
};

export default LineGraph;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  yAxis: {
    width: 20,
    height: CHART_HEIGHT,
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  yLabel: {
    fontSize: 12,
    color: '#666',
  },
});
