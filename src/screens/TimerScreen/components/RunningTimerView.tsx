import {Animated, StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {formatHHMMSS} from '../../../utils/timeTranslate';

type RunningTimerViewProps = {
  blackToWhite: Animated.AnimatedInterpolation<string>;
  totalTime: number;
  seconds: number;
  isRunning: boolean;
  toggleTimer: () => void;
};

const RunningTimerView = ({
  blackToWhite,
  totalTime,
  seconds,
  isRunning,
  toggleTimer,
}: RunningTimerViewProps) => {
  console.log(totalTime);

  return (
    <>
      <Animated.Text style={[styles.timer, {color: blackToWhite}]}>
        {formatHHMMSS(seconds)}
      </Animated.Text>

      {isRunning && (
        <>
          <View style={styles.row}>
            <Animated.Text style={styles.todayLabel}>오늘</Animated.Text>
            <Animated.Text style={[styles.todayTime, {color: blackToWhite}]}>
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
        <Animated.View style={[styles.button, {borderColor: blackToWhite}]}>
          <Animated.Text style={[styles.buttonText, {color: blackToWhite}]}>
            {isRunning ? '공부 종료' : '공부 시작'}
          </Animated.Text>
        </Animated.View>
      </TouchableOpacity>
    </>
  );
};

export default RunningTimerView;

const styles = StyleSheet.create({
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
    color: '#888',
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
