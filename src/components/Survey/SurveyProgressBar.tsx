import React, {useEffect, useRef} from 'react';
import {View, StyleSheet, Animated, Dimensions} from 'react-native';

type Props = {
  currentStep: number; // 0부터 시작
  totalSteps: number;
};

const {width} = Dimensions.get('window');
const PADDING_HORIZONTAL = 30;

const SurveyProgressBar = ({currentStep, totalSteps}: Props) => {
  const progressAnim = useRef(new Animated.Value(0)).current;

  const progressWidth = (currentStep + 1) / totalSteps;

  useEffect(() => {
    Animated.timing(progressAnim, {
      toValue: progressWidth,
      duration: 400,
      useNativeDriver: false,
    }).start();
  }, [progressWidth]);

  const animatedWidth = progressAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, width - PADDING_HORIZONTAL * 2],
  });

  return (
    <View style={styles.wrapper}>
      <View style={styles.barBackground}>
        <Animated.View style={[styles.barFill, {width: animatedWidth}]} />
      </View>
    </View>
  );
};

export default SurveyProgressBar;

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: PADDING_HORIZONTAL,
    marginTop: 16,
    marginBottom: 24,
  },
  barBackground: {
    height: 4,
    width: '100%',
    borderRadius: 2,
    backgroundColor: '#eee',
    overflow: 'hidden',
  },
  barFill: {
    height: 4,
    backgroundColor: '#0B1F44',
    borderRadius: 2,
  },
});
