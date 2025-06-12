import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Easing,
  StatusBar,
} from 'react-native';

const TimerScreen = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const animation = useRef(new Animated.Value(0)).current;

  // 색상 애니메이션 트리거
  useEffect(() => {
    Animated.timing(animation, {
      toValue: isRunning ? 1 : 0,
      duration: 500,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: false,
    }).start();
  }, [isRunning]);

  // 타이머 로직
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning]);

  const formatTime = (totalSeconds: number): string => {
    const h = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const m = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const s = String(totalSeconds % 60).padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  // 배경 및 텍스트 색상 애니메이션
  const whiteToBlack = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['#ffffff', '#000000'],
  });

  const blackToWhite = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['#000000', '#ffffff'],
  });

  const subTextColor = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['#888888', '#888888'], // 회색은 고정
  });

  const buttonBorderColor = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['#000000', '#ffffff'],
  });

  return (
    <Animated.View style={[styles.container, {backgroundColor: whiteToBlack}]}>
      <StatusBar
        barStyle={isRunning ? 'light-content' : 'dark-content'}
        backgroundColor="transparent"
      />

      <Animated.Text style={[styles.timer, {color: blackToWhite}]}>
        {formatTime(seconds)}
      </Animated.Text>

      {isRunning && (
        <View style={styles.row}>
          <Animated.Text style={[styles.todayLabel, {color: subTextColor}]}>
            오늘
          </Animated.Text>
          <Animated.Text style={[styles.todayTime, {color: blackToWhite}]}>
            {formatTime(seconds)}
          </Animated.Text>
        </View>
      )}

      {isRunning && (
        <Animated.Text style={[styles.caution, {color: blackToWhite}]}>
          학습 시 주의사항
        </Animated.Text>
      )}

      <View style={{flex: 1}} />

      <TouchableOpacity
        onPress={() => {
          setIsRunning(prev => !prev);
        }}>
        <Animated.View
          style={[styles.button, {borderColor: buttonBorderColor}]}>
          <Animated.Text style={[styles.buttonText, {color: blackToWhite}]}>
            {isRunning ? '공부 종료' : '공부 시작'}
          </Animated.Text>
        </Animated.View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default TimerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: 24,
  },
  timer: {
    fontSize: 40,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  todayLabel: {
    fontSize: 16,
    marginRight: 8,
  },
  todayTime: {
    fontSize: 16,
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
