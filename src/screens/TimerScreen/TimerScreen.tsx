import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Easing,
  StatusBar,
  Text,
} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import SvgIcon from '../../components/SvgIcon';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../types/screens';
import {formatHHMMSS} from '../../utils/timeTranslate';
import {loadTimer, saveTimer} from '../../storage';
import FinishedView from './components/FinishedView';
import RunningTimerView from './components/RunningTimerView';
import {useMutation} from '@tanstack/react-query';
import {saveStudyTimer} from '../../apis/api/timer';

const TimerScreen = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [seconds, setSeconds] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const animation = useRef(new Animated.Value(0)).current;
  const [planId, setPlanId] = useState<number | null>(0);

  const now = new Date();
  console.log('ISO 시간:', now.toISOString());

  const {mutate: saveStudyTime} = useMutation({
    mutationFn: saveStudyTimer,
    onSuccess: () => {
      console.log('타이머 저장 성공');
    },
    onError: error => {
      console.error('타이머 저장 실패:', error);
    },
  });

  // const handleSaveTimer = async () => {
  //   const startTime = new Date(Date.now() - totalTime * 1000).toISOString();

  //   saveStudyTime({planId: 1, startTime, endTime}); // planId는 실제로 사용되는 값으로 변경 필요
  // };

  useEffect(() => {
    const load = async () => {
      const value = await loadTimer();
      setTotalTime(value);
    };
    load();
  }, []);

  useEffect(() => {
    Animated.timing(animation, {
      toValue: isRunning ? 1 : 0,
      duration: 500,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: false,
    }).start();
  }, [isRunning]);

  useEffect(() => {
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
        translucent
      />
      <SafeAreaView style={{flex: 1}}>
        {/* 헤더 */}
        <View style={styles.headerBox}>
          {!isRunning && !isFinished && (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <SvgIcon name="좌측방향" size={32} color="#888" />
            </TouchableOpacity>
          )}
        </View>

        {/* 본문 */}
        {isFinished ? (
          <FinishedView blackToWhite={blackToWhite} />
        ) : (
          <RunningTimerView
            blackToWhite={blackToWhite}
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
    width: '100%',
    height: 60,
    paddingHorizontal: 16,
    flexDirection: 'row',
  },
});
