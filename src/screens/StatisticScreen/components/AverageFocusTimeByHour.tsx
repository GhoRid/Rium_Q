import {StyleSheet, View} from 'react-native';
import LineGraph from './charts/LineGraph';

const focusData = [
  {hour: 5, value: 0},
  {hour: 6, value: 0},
  {hour: 7, value: 0},
  {hour: 8, value: 35},
  {hour: 9, value: 40},
  {hour: 10, value: 45},
  {hour: 11, value: 50},
  {hour: 12, value: 60},
  {hour: 13, value: 20},
  {hour: 14, value: 45},
  {hour: 15, value: 40},
  {hour: 16, value: 50},
  {hour: 17, value: 30},
  {hour: 18, value: 20},
  {hour: 19, value: 50},
  {hour: 20, value: 40},
  {hour: 21, value: 45},
  {hour: 22, value: 35},
  {hour: 23, value: 30},
  {hour: 24, value: 20},
  {hour: 1, value: 10},
  {hour: 2, value: 5},
  {hour: 3, value: 0},
  {hour: 4, value: 0},
];

const AverageFocusTimeByHour = () => {
  return (
    <View>
      <LineGraph data={focusData} />
    </View>
  );
};

export default AverageFocusTimeByHour;

const styles = StyleSheet.create({
  placeholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
