import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Easing,
  StatusBar,
} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import SvgIcon from '../../components/SvgIcon';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../types/screens';
import {formatHHMMSS} from '../../utils/time';
import {loadTimer, saveTimer} from '../../storage';

const TimerScreen = () => {
  const insets = useSafeAreaInsets();

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  // 총 공부 시간 가져오기
  const [seconds, setSeconds] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const load = async () => {
      const value = await loadTimer();
      setTotalTime(value);
    };
    load();
  }, []);

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
        setTotalTime(prev => prev + 1); // 화면에 반영
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
    setIsRunning(prev => !prev);
    if (isRunning === true) {
      console.log('공부 끝');
      await saveTimer(totalTime);
    }
  };

  // 색상 애니메이션 설정
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
        {/* 헤더 영역 */}
        <View style={styles.headerBox}>
          {!isRunning && (
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <SvgIcon name="좌측방향" size={32} color="#888" />
            </TouchableOpacity>
          )}
        </View>

        <Animated.Text style={[styles.timer, {color: blackToWhite}]}>
          {formatHHMMSS(seconds)}
        </Animated.Text>

        {isRunning && (
          <View style={styles.row}>
            <Animated.Text style={[styles.todayLabel, {color: subTextColor}]}>
              오늘
            </Animated.Text>
            <Animated.Text style={[styles.todayTime, {color: blackToWhite}]}>
              {formatHHMMSS(totalTime)}
            </Animated.Text>
          </View>
        )}

        {isRunning && (
          <Animated.Text style={[styles.caution, {color: blackToWhite}]}>
            학습 시 주의사항
          </Animated.Text>
        )}

        {/* 중간 여백 채우기 */}
        <View style={{flex: 1}} />

        <TouchableOpacity onPress={toggleTimer}>
          <Animated.View style={[styles.button, {borderColor: blackToWhite}]}>
            <Animated.Text style={[styles.buttonText, {color: blackToWhite}]}>
              {isRunning ? '공부 종료' : '공부 시작'}
            </Animated.Text>
          </Animated.View>
        </TouchableOpacity>
      </SafeAreaView>
    </Animated.View>
  );
};

export default TimerScreen;

const styles = StyleSheet.create({
  timer: {
    fontSize: 40,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  headerBox: {
    width: '100%',
    height: 60,
    paddingHorizontal: 16,
    flexDirection: 'row',
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
