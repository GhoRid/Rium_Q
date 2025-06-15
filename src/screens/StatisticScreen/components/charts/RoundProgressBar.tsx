import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';
import Svg, {Circle, G} from 'react-native-svg';
import palette from '../../../../styles/palette';

type RoundProgressbarProps = {
  score: number;
  percentage: number; // 0~100
  name: string;
};

const SIZE = 300;
const STROKE_WIDTH = 10;
const RADIUS = (SIZE - STROKE_WIDTH) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const HALF_CIRCUMFERENCE = CIRCUMFERENCE / 2;
const HEIGHT = SIZE / 2 + STROKE_WIDTH;

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const RoundProgressbar = ({score, percentage, name}: RoundProgressbarProps) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const strokeDashoffset = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: [HALF_CIRCUMFERENCE, 0], // 길어지는 느낌
    extrapolate: 'clamp',
  });

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: percentage,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [percentage]);

  return (
    <View style={styles.container}>
      <Svg width={SIZE} height={HEIGHT}>
        <G rotation="-180" origin={`${SIZE / 2}, ${SIZE / 2}`}>
          {/* 배경 반원 */}
          <Circle
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={RADIUS}
            stroke="#F1F1F1"
            strokeWidth={STROKE_WIDTH}
            strokeLinecap="round"
            fill="none"
            strokeDasharray={HALF_CIRCUMFERENCE}
            strokeDashoffset={0}
          />
          {/* 애니메이션 반원 */}
          <AnimatedCircle
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={RADIUS}
            stroke={palette.app_blue}
            strokeWidth={STROKE_WIDTH}
            strokeLinecap="round"
            fill="none"
            // 중요 - strokeDasharray는 전체 둘레를 기준으로 설정
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
};

export default RoundProgressbar;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 30,
  },
  textContainer: {
    position: 'absolute',
    top: 30,
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
