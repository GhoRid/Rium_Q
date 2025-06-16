import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Svg, {Path, Defs, LinearGradient, Stop, Circle} from 'react-native-svg';
import * as shape from 'd3-shape';
import * as d3 from 'd3-scale';

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const CHART_HEIGHT = 120;
const PADDING = 20;

type DataPoint = {
  date: string;
  value: number;
};

const originalData: DataPoint[] = [
  {date: '5/12', value: 4},
  {date: '5/13', value: 3.5},
  {date: '5/14', value: 4},
  {date: '5/15', value: 6.5},
  {date: '5/16', value: 5},
  {date: '오늘', value: 6.8},
];

const LineGraph = () => {
  const chartWidth = SCREEN_WIDTH - PADDING * 2;

  // 부드럽게 시작하고 끝나도록 양 옆에 가짜 포인트 추가
  const data = [
    {date: '시작', value: originalData[0].value},
    ...originalData,
    {date: '끝', value: originalData[originalData.length - 1].value},
  ];

  const x = d3
    .scaleLinear()
    .domain([0, data.length - 1])
    .range([0, chartWidth]);

  const y = d3
    .scaleLinear()
    .domain([0, 8]) // 수직 기준값
    .range([CHART_HEIGHT, 0]);

  const linePath = shape
    .line<DataPoint>()
    .x((_, i) => x(i))
    .y(d => y(d.value))
    .curve(shape.curveCatmullRom.alpha(0.5))(data as any) as string;

  const areaPath = shape
    .area<DataPoint>()
    .x((_, i) => x(i))
    .y0(CHART_HEIGHT + 20) // ✅ 그림자 잘림 방지
    .y1(d => y(d.value))
    .curve(shape.curveCatmullRom.alpha(0.5))(data as any) as string;

  // 마지막 실제 포인트 위치
  const lastIdx = originalData.length - 1;
  const cx = x(lastIdx + 1); // +1: 시작점 하나 추가됐기 때문
  const cy = y(originalData[lastIdx].value);

  return (
    <View style={styles.container}>
      <Svg width={chartWidth} height={CHART_HEIGHT + 20}>
        <Defs>
          <LinearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
            <Stop offset="0" stopColor="#C3D7FF" stopOpacity="0.4" />
            <Stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
          </LinearGradient>
        </Defs>

        {/* 그림자 영역 */}
        <Path d={areaPath} fill="url(#grad)" />

        {/* 선 */}
        <Path d={linePath} fill="none" stroke="#2F3C6E" strokeWidth={2} />

        {/* 마지막 값 강조 */}
        <Circle cx={cx} cy={cy} r={5} fill="#2F3C6E" />
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
  );
};

export default LineGraph;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: PADDING,
    paddingTop: 20,
  },
});
