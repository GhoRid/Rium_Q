import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, TouchableOpacity, View} from 'react-native';
import {formatHHMMSS} from '../../../utils/formatTime';
import AppText from '../../../components/AppText';
import {formatDateToKorean} from '../../../utils/formatDate';
import SubjectTimeAccordion from './SubjectTimeAccordion';

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

const mockData = [
  {
    subject: '국어',
    totalTime: 8492, // 초 단위
    records: [
      {title: '2024학년도 6월 국어 모의고사', time: 4830},
      {title: '2024학년도 6월 국어 모의고사', time: 3662},
    ],
  },
  {
    subject: '수학',
    totalTime: 3836,
    records: [],
  },
  {
    subject: '영어',
    totalTime: 0,
    records: [],
  },
];

const RunningTimerView = ({
  blackToWhite,
  date,
  totalTime,
  seconds,
  isRunning,
  toggleTimer,
}: RunningTimerViewProps) => {
  const translateY = useRef(new Animated.Value(-ANIMATED_HEIGHT)).current;

  const cautionMessages = [
    '타이머는 시작 후 일시정지할 수 없습니다.',
    '집중 가능한 상태에서 시작해주세요.',
    '학습 외 활동이 많아질 경우 기록이 왜곡될 수 있어요.',
    '타이머 실행 중 전화 수신, 앱 종료 등에 주의해주세요.',
    '배터리가 충분한지 확인하고, 알림은 미리 꺼두는 걸 추천해요.',
    '기록은 학습 리포트에 반영됩니다.',
  ];

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
        style={{
          transform: [{translateY}],
          marginTop: ANIMATED_HEIGHT,
          height: 100,
        }}>
        {!isRunning ? (
          <AppText style={styles.dateText}>{formatDateToKorean(date)}</AppText>
        ) : (
          <View style={{height: 20}} />
        )}
        <AnimatedAppText style={[styles.timer, {color: blackToWhite}]}>
          {formatHHMMSS(seconds)}
        </AnimatedAppText>
      </Animated.View>

      {isRunning ? (
        <>
          <View style={styles.row}>
            <AnimatedAppText style={styles.todayLabel}>오늘</AnimatedAppText>
            <AnimatedAppText style={styles.todayTime}>
              {formatHHMMSS(totalTime)}
            </AnimatedAppText>
          </View>

          <View style={styles.cautionBox}>
            <AnimatedAppText style={[styles.cautionTitle]}>
              학습 시 주의사항
            </AnimatedAppText>
            {cautionMessages.map((msg, idx) => (
              <AnimatedAppText key={idx} style={styles.caution}>
                ※ {msg}
              </AnimatedAppText>
            ))}
          </View>
        </>
      ) : (
        <SubjectTimeAccordion data={mockData} />
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
  cautionBox: {
    padding: 20,
  },
  cautionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#888',
    marginBottom: 12,
  },
  caution: {
    fontSize: 14,
    marginTop: 4,
    color: '#888',
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
