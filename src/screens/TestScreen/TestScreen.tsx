import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BubbleChart from '../StatisticScreen/components/BubbleChart';
import {useState} from 'react';
import YearMonthPicker from './YearMonthPicker';
import SvgIcon from '../../components/SvgIcon';

const DATA = [
  {name: 'Apples', value: 70},
  {name: 'Oranges', value: 44},
  {name: 'Kiwis', value: 65},
  {name: 'Bananas', value: 39},
  {name: 'Pears', value: 10},
  // {name: 'Satsumas', value: 25},
  // {name: 'Pineapples', value: 30},
];

const TestScreen = () => {
  const [countUp, setCountUp] = useState(0);
  return (
    <View style={styles.container}>
      {/* <Text>dd</Text>
      <BubbleChart key={countUp} DATA={DATA} />
      <Pressable
        onPress={() => {
          setCountUp(prev => prev + 1);
        }}
        style={{
          width: 100,
          height: 50,
          backgroundColor: '#ddd',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>버튼</Text>
      </Pressable> */}
      {/* <YearMonthPicker /> */}
      <Text style={styles.timeText}> 12시간 10분 2초</Text>
      <Text style={styles.ddText}> 총 시간: 12시간 10분 2초</Text>
      <TouchableOpacity
        onPress={() => {
          setCountUp(prev => prev + 1);
        }}
        style={{
          width: 100,
          height: 100,
          backgroundColor: '#ddd',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 100,
        }}>
        <SvgIcon name="우측방향" size={40} />
      </TouchableOpacity>
    </View>
  );
};

export default TestScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  timeText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#333',
  },
  ddText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
});
