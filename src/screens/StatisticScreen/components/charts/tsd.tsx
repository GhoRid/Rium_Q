import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Svg, {Circle} from 'react-native-svg';

type SubjectData = {
  label: string;
  value: number;
  color: string;
  time: string;
};

type DonutChartProps = {
  data: SubjectData[];
};

const radius = 60;
const strokeWidth = 20;
const center = radius + strokeWidth;
const circumference = 2 * Math.PI * radius;

const DonutChart = ({data}: DonutChartProps) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  let startAngle = 0;

  return (
    <View style={styles.container}>
      <Svg width={center * 2} height={center * 2}>
        {/* 각 항목 원 */}
        {data.map((item, index) => {
          const percentage = item.value / total;
          const dash = circumference * percentage;
          const gap = circumference - dash;

          const circle = (
            <Circle
              key={index}
              cx={center}
              cy={center}
              r={radius}
              stroke={item.color}
              strokeWidth={strokeWidth}
              strokeDasharray={`${dash} ${gap}`}
              strokeDashoffset={circumference - startAngle}
              strokeLinecap="butt"
              rotation="-90"
              origin={`${center}, ${center}`}
            />
          );

          startAngle += dash;
          return circle;
        })}

        {/* ✅ 중앙 흰색 덮개로 도넛처럼 보이게 */}
        {/* <Circle
          cx={center}
          cy={center}
          r={radius - strokeWidth / 2}
          fill="white"
        /> */}
      </Svg>

      {/* 오른쪽 범례 */}
      <View style={styles.legend}>
        {data.map((item, idx) => (
          <View key={idx} style={styles.legendRow}>
            <View style={[styles.colorDot, {backgroundColor: item.color}]} />
            <Text style={styles.label}>{item.label}</Text>
            <Text style={styles.time}>{item.time}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default DonutChart;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  legend: {
    marginLeft: 20,
    justifyContent: 'center',
  },
  legendRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  colorDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 6,
  },
  label: {
    fontSize: 14,
    marginRight: 10,
    width: 70,
    color: '#333',
  },
  time: {
    fontSize: 13,
    color: '#888',
  },
});
