import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, Animated, Easing, StatusBar} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../types/screens';
import {formatHHMMSS} from '../../utils/formatTime';
import {loadTimer, saveTimer} from '../../storage';
import FinishedView from './components/FinishedView';
import RunningTimerView from './components/RunningTimerView';
import {useMutation} from '@tanstack/react-query';
import {saveStudyTimer} from '../../apis/api/timer';
import CustomHeader from '../../components/Header/CustomHeader';
import BackButtonHeaderLeft from '../../components/Header/BackButtonHeaderLeft';
import {formatDateToKorean} from '../../utils/formatDate';
import AppText from '../../components/AppText';

const TimerScreen = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const now = new Date();

  const [seconds, setSeconds] = useState(84999);
  const [totalTime, setTotalTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const animation = useRef(new Animated.Value(0)).current;
  const [planId, setPlanId] = useState<number | null>(0);

  const {mutate: saveStudyTime} = useMutation({
    mutationFn: saveStudyTimer,
    onSuccess: () => {
      console.log('타이머 저장 성공');
    },
    onError: error => {
      console.error('타이머 저장 실패:', error);
    },
  });

  useEffect(() => {
    const load = async () => {
      const value = await loadTimer();
      setTotalTime(value);
    };
    load();
  }, []);

  useEffect(() => {
    //화면 전환 애니메이션
    Animated.timing(animation, {
      toValue: isRunning ? 1 : 0,
      duration: 500,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: false,
    }).start();

    // 타이머 시간 관련
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds(prev => prev + 1);
        setTotalTime(prev => prev + 1);
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

  const toggleTimer = async () => {
    if (isRunning) {
      await saveTimer(totalTime);
      setIsRunning(false);
      setIsFinished(true);
    } else {
      setIsRunning(true);
      setIsFinished(false);
    }
  };

  const whiteToBlack = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['#ffffff', '#000000'],
  });

  const blackToWhite = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['#000000', '#ffffff'],
  });

  return (
    <Animated.View
      style={{flex: 1, backgroundColor: whiteToBlack, paddingTop: -insets.top}}>
      <StatusBar
        barStyle={isRunning ? 'light-content' : 'dark-content'}
        backgroundColor="transparent"
        // translucent
      />
      <SafeAreaView style={{flex: 1}}>
        {/* ✅ 헤더 */}
        {!isRunning && !isFinished ? (
          <CustomHeader leftItem={<BackButtonHeaderLeft />} />
        ) : (
          <Animated.View style={styles.headerBox} />
        )}
        {/* 본문 */}
        {isFinished ? (
          <FinishedView
            whiteToBlack={whiteToBlack}
            seconds={seconds}
            totalTime={totalTime}
            setIsFinished={setIsFinished}
          />
        ) : (
          <RunningTimerView
            blackToWhite={blackToWhite}
            date={now}
            totalTime={totalTime}
            seconds={seconds}
            isRunning={isRunning}
            toggleTimer={toggleTimer}
          />
        )}
      </SafeAreaView>
    </Animated.View>
  );
};

export default TimerScreen;

const styles = StyleSheet.create({
  headerBox: {
    height: 60,
  },
});
