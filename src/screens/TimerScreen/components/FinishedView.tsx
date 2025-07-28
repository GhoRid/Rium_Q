import {
  CommonActions,
  NavigationProp,
  StackActions,
  useNavigation,
} from '@react-navigation/native';
import {Animated, StyleSheet, TouchableOpacity, View} from 'react-native';
import {RootStackParamList} from '../../../types/screens';
import {palette} from '../../../styles/palette';
import AppText from '../../../components/AppText';
import {formatReadableTime} from '../../../utils/formatTime';
import SubjectTimeAccordion from './SubjectTimeAccordion';
import {useEffect, useRef, useState} from 'react';

type FinishedViewProps = {
  whiteToBlack?: Animated.AnimatedInterpolation<string>;
  seconds: number;
  totalTime: number;
  setIsFinished: React.Dispatch<React.SetStateAction<boolean>>;
};

const mockData = [
  {
    subject: '국어',
    totalTime: 8492, // 초 단위
    records: [
      {planId: 1, title: '2024학년도 6월 국어 모의고사', time: 4830},
      {planId: 2, title: '2024학년도 6월 국어 모의고사', time: 3662},
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

const FinishedView = ({
  whiteToBlack,
  seconds,
  totalTime,
  setIsFinished,
}: FinishedViewProps) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [continueSeconds, setContinueSeconds] = useState<number>(60);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (continueSeconds === 0 && intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, [continueSeconds]);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setContinueSeconds(prev => prev - 1);
    }, 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <>
      <View style={styles.textBox}>
        <AppText style={styles.title}>고생했어요!</AppText>

        <View style={styles.timeInfoTextBox}>
          <AppText style={styles.timeText}>
            총 {formatReadableTime(seconds)} 집중했어요
          </AppText>
          <AppText style={styles.todayMaxText}>
            {'오늘 최대 집중 시간  '}
            <AppText style={{color: palette.app_blue}}>
              {formatReadableTime(totalTime)}
            </AppText>
          </AppText>
        </View>
      </View>

      <SubjectTimeAccordion data={mockData} whiteToBlack={whiteToBlack} />

      <View style={{flex: 1}} />

      <View style={styles.bottomContent}>
        {continueSeconds > 0 && (
          <AppText style={styles.continueTipText}>
            {continueSeconds}초 이내에 시작하면 집중이 이어집니다.
          </AppText>
        )}

        {/* 하단 버튼 */}
        <View style={styles.buttonRowBox}>
          <TouchableOpacity
            style={[styles.bottomButton, {backgroundColor: '#F3F4F6'}]}
            onPress={() => setIsFinished(false)}>
            <AppText style={[styles.bottomButtonText, {color: '#111'}]}>
              이어서 공부하기
            </AppText>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.bottomButton,
              {backgroundColor: palette.app_main_color},
            ]}
            onPress={() => {
              navigation.dispatch(StackActions.popTo('Tab', {screen: 'Home'}));
            }}>
            <AppText style={[styles.bottomButtonText, {color: '#fff'}]}>
              홈으로
            </AppText>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default FinishedView;

const styles = StyleSheet.create({
  textBox: {
    height: 150,
    paddingHorizontal: 20,
    gap: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  timeText: {
    fontSize: 20,
    fontWeight: 'semibold',
  },
  timeInfoTextBox: {
    gap: 10,
  },
  todayMaxText: {
    fontSize: 14,
    color: '#bcbcbc',
  },
  bottomContent: {
    gap: 10,
  },
  continueTipText: {
    fontSize: 14,
    color: palette.app_blue,
    textAlign: 'center',
  },
  buttonRowBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 40,
    paddingHorizontal: 20,
    gap: 10,
  },
  bottomButton: {
    flex: 1,
    borderRadius: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomButtonText: {
    fontSize: 16,
    fontWeight: 600,
  },
});
