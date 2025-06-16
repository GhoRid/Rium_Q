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
import {formatHHMMSS} from '../../utils/time';
import {loadTimer, saveTimer} from '../../storage';
import FinishedView from './components/FinishedView';

const TimerScreen = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [seconds, setSeconds] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const animation = useRef(new Animated.Value(0)).current;

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

  const subTextColor = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['#888888', '#888888'],
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
          <FinishedView animation={animation} blackToWhite={blackToWhite} />
        ) : (
          <>
            <Animated.Text style={[styles.timer, {color: blackToWhite}]}>
              {formatHHMMSS(seconds)}
            </Animated.Text>

            {isRunning && (
              <>
                <View style={styles.row}>
                  <Animated.Text
                    style={[styles.todayLabel, {color: subTextColor}]}>
                    오늘
                  </Animated.Text>
                  <Animated.Text
                    style={[styles.todayTime, {color: blackToWhite}]}>
                    {formatHHMMSS(totalTime)}
                  </Animated.Text>
                </View>
                <Animated.Text style={[styles.caution, {color: blackToWhite}]}>
                  학습 시 주의사항
                </Animated.Text>
              </>
            )}

            <View style={{flex: 1}} />

            <TouchableOpacity onPress={toggleTimer}>
              <Animated.View
                style={[styles.button, {borderColor: blackToWhite}]}>
                <Animated.Text
                  style={[styles.buttonText, {color: blackToWhite}]}>
                  {isRunning ? '공부 종료' : '공부 시작'}
                </Animated.Text>
              </Animated.View>
            </TouchableOpacity>
          </>
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
  timer: {
    fontSize: 50,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 40,
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
  finishText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  bottomButton: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 16,
  },
  bottomButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
});
