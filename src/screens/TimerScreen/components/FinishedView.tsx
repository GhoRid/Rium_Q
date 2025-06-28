import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Animated, StyleSheet, TouchableOpacity, View} from 'react-native';
import {RootStackParamList} from '../../../types/screens';
import palette from '../../../styles/palette';
import AppText from '../../../components/AppText';
import {formatReadableTime} from '../../../utils/formatTime';

type FinishedViewProps = {
  blackToWhite: Animated.AnimatedInterpolation<string>;
  seconds: number;
  totalTime: number;
  setIsFinished: React.Dispatch<React.SetStateAction<boolean>>;
};

const FinishedView = ({
  blackToWhite,
  seconds,
  totalTime,
  setIsFinished,
}: FinishedViewProps) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  console.log(seconds);

  return (
    <>
      <View>
        <AppText style={styles.title}>고생했어요!</AppText>
        <AppText style={styles.timeText}>
          총 {formatReadableTime(seconds)} 집중했어요
        </AppText>

        <AppText style={styles.todayMaxText}>
          오늘 최대 집중 시간
          <AppText style={{color: palette.app_blue}}>
            {formatReadableTime(totalTime)}
          </AppText>
        </AppText>
        {/* <AppText style={styles.todayMaxText}>{totalTime}</AppText> */}
      </View>

      <View style={{flex: 1}} />

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
          onPress={() => navigation.navigate('Tab', {screen: 'Home'})}>
          <AppText style={[styles.bottomButtonText, {color: '#fff'}]}>
            홈으로
          </AppText>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default FinishedView;

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  timeText: {
    fontSize: 20,
    fontWeight: 'semibold',
  },
  todayMaxText: {
    fontSize: 14,
    color: '#bcbcbc',
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
