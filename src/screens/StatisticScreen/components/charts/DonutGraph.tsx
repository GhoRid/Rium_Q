import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Svg, {Circle, G, Text as SvgText} from 'react-native-svg';

type SubjectData = {
  label: string;
  value: number; // 퍼센트
  color: string;
  time: string;
};

type DonutChartProps = {
  data: SubjectData[];
};

const radius = 80; // ✅ 더 크게
const strokeWidth = 40; // ✅ 두께도 키움
const center = radius + strokeWidth;
const circumference = 2 * Math.PI * radius;

const DonutChart = ({data}: DonutChartProps) => {
  let startAngle = 0;

  return (
    <View style={styles.wrapper}>
      <Svg width={center * 2} height={center * 2}>
        {data.map((item, index) => {
          const dash = (circumference * item.value) / 100;
          const gap = circumference - dash;
          const offset = circumference - startAngle;
          const angle = ((startAngle + dash / 2) / circumference) * 360;
          startAngle += dash;

          // 중심 좌표 계산
          const rad = (angle - 90) * (Math.PI / 180); // 시작점이 위이므로 -90도 보정
          const textRadius = radius; // 퍼센트 표시 위치
          const x = center + textRadius * Math.cos(rad);
          const y = center + textRadius * Math.sin(rad);

          return (
            <React.Fragment key={index}>
              <Circle
                cx={center}
                cy={center}
                r={radius}
                stroke={item.color}
                strokeWidth={strokeWidth}
                strokeDasharray={`${dash} ${gap}`}
                strokeDashoffset={offset}
                strokeLinecap="butt"
                fill="none"
                rotation="-90"
                origin={`${center}, ${center}`}
              />
              {item.value >= 8 && ( // 작은 조각에는 글자 생략
                <SvgText
                  x={x - 4} // 가로 정렬 조정
                  y={y + 4} // 세로 정렬 조정
                  fontSize="10"
                  fill="white"
                  fontWeight="bold"
                  textAnchor="middle">
                  {item.value}%
                </SvgText>
              )}
            </React.Fragment>
          );
        })}
      </Svg>

      <View style={styles.legendContainer}>
        {data.map((item, index) => (
          <View key={index} style={styles.legendItem}>
            <View style={[styles.dot, {backgroundColor: item.color}]} />
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
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  legendContainer: {},
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 8,
  },
  label: {
    fontSize: 14,
    color: '#222',
    marginRight: 8,
  },
  time: {
    fontSize: 14,
    color: '#999',
  },
});
