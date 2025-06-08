import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';
import Svg, {Circle, G} from 'react-native-svg';

const SIZE = 220;
const STROKE_WIDTH = 15;
const RADIUS = (SIZE - STROKE_WIDTH) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS; // 원 전체
const HALF_CIRCUMFERENCE = CIRCUMFERENCE / 2;
const ANIMATION_DURATION = 1000;

type Props = {
  score?: number;
  percentage?: number; // 0~100
  name?: string;
};

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export default function RoundProgressbar({
  score = 40,
  percentage = 68,
  name = '석왕 익끼',
}: Props) {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const strokeDashoffset = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: [HALF_CIRCUMFERENCE, 0], // 반원만 채우기
  });

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: percentage,
      duration: ANIMATION_DURATION,
      useNativeDriver: false,
    }).start();
  }, [percentage]);

  return (
    <View style={styles.container}>
      <Svg width={SIZE} height={SIZE}>
        <G rotation="-90" origin={`${SIZE / 2}, ${SIZE / 2}`}>
          {/* 전체 배경 원 */}
          <Circle
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={RADIUS}
            stroke="#eee"
            strokeWidth={STROKE_WIDTH}
            fill="none"
          />
          {/* 반원만 보이게 조정된 파란색 원 */}
          <AnimatedCircle
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={RADIUS}
            stroke="#007BFF"
            strokeWidth={STROKE_WIDTH}
            strokeLinecap="round"
            fill="none"
            strokeDasharray={`${HALF_CIRCUMFERENCE}, ${CIRCUMFERENCE}`}
            strokeDashoffset={strokeDashoffset}
          />
        </G>
      </Svg>

      <View style={styles.textContainer}>
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.imageText}>이미지{'\n'}삽입 예정</Text>
        <Text style={styles.scoreText}>{score}점</Text>
        <Text style={styles.percentText}>상위 {percentage}%</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 30,
  },
  textContainer: {
    position: 'absolute',
    top: 50,
    alignItems: 'center',
  },
  nameText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#444',
  },
  imageText: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginTop: 4,
  },
  scoreText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#222',
    marginTop: 30,
  },
  percentText: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
});
