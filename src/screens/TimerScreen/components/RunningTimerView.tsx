import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, TouchableOpacity, View} from 'react-native';
import {formatHHMMSS} from '../../../utils/timeTranslate';
import AppText from '../../../components/AppText';
import {formatDateToKorean} from '../../../utils/formatDate';

type RunningTimerViewProps = {
  blackToWhite: Animated.AnimatedInterpolation<string>;
  date: Date;
  totalTime: number;
  seconds: number;
  isRunning: boolean;
  toggleTimer: () => void;
};

const AnimatedAppText = Animated.createAnimatedComponent(AppText);

const ANIMATED_HEIGHT = 50; // 애니메이션 높이

const RunningTimerView = ({
  blackToWhite,
  date,
  totalTime,
  seconds,
  isRunning,
  toggleTimer,
}: RunningTimerViewProps) => {
  const translateY = useRef(new Animated.Value(-ANIMATED_HEIGHT)).current;

  useEffect(() => {
    if (isRunning) {
      Animated.timing(translateY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      translateY.setValue(-ANIMATED_HEIGHT);
    }
  }, [isRunning]);

  return (
    <>
      <Animated.View
        style={{transform: [{translateY}], marginTop: ANIMATED_HEIGHT}}>
        {!isRunning ? (
          <AppText style={styles.dateText}>{formatDateToKorean(date)}</AppText>
        ) : (
          <View style={{height: 20}} />
        )}
        <AnimatedAppText style={[styles.timer, {color: blackToWhite}]}>
          {formatHHMMSS(seconds)}
        </AnimatedAppText>
      </Animated.View>

      {isRunning && (
        <>
          <View style={styles.row}>
            <AnimatedAppText style={styles.todayLabel}>오늘</AnimatedAppText>
            <AnimatedAppText style={styles.todayTime}>
              {formatHHMMSS(totalTime)}
            </AnimatedAppText>
          </View>
          <AnimatedAppText style={[styles.caution, {color: blackToWhite}]}>
            학습 시 주의사항
          </AnimatedAppText>
        </>
      )}

      <View style={{flex: 1}} />

      <TouchableOpacity onPress={toggleTimer}>
        <Animated.View style={[styles.button, {borderColor: blackToWhite}]}>
          <AnimatedAppText style={[styles.buttonText, {color: blackToWhite}]}>
            {isRunning ? '공부 종료' : '공부 시작'}
          </AnimatedAppText>
        </Animated.View>
      </TouchableOpacity>
    </>
  );
};

export default RunningTimerView;

const styles = StyleSheet.create({
  dateText: {
    alignSelf: 'center',
    color: '#333',
    fontSize: 16,
    height: 20,
  },
  timer: {
    fontSize: 60,
    fontWeight: '900',
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  todayLabel: {
    fontSize: 20,
    marginRight: 8,
    color: '#888',
  },
  todayTime: {
    fontSize: 20,
    color: '#a7a7a7',
  },
  caution: {
    fontSize: 14,
    marginTop: 8,
    textAlign: 'center',
  },
  button: {
    alignSelf: 'center',
    marginBottom: 40,
    width: '80%',
    alignItems: 'center',
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 100,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
});
