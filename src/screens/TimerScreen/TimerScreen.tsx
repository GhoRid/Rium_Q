import {View, Text, StyleSheet} from 'react-native';
import TimerTabView from './components/TimerTabView';

const TimerScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.timeBox}>
        <Text style={styles.time}>00:00:51</Text>
      </View>
      <TimerTabView />
    </View>
  );
};
export default TimerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  timeBox: {
    height: 200,
    backgroundColor: '#FF7D03',
    justifyContent: 'center',
    alignItems: 'center',
  },
  time: {
    fontSize: 40,
    fontWeight: '700',
    color: '#fff',
  },
});
