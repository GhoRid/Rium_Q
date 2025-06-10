import {View, Text, StyleSheet} from 'react-native';
import BubbleChartForce from '../../TestScreen/BubbleChart';

const DATA = [
  {name: 'Apples', value: 70},
  {name: 'Oranges', value: 44},
  {name: 'Kiwis', value: 65},
  {name: 'Bananas', value: 39},
  {name: 'Pears', value: 10},
  // {name: 'Satsumas', value: 25},
  // {name: 'Pineapples', value: 30},
];

const BySubjectChartTab = () => (
  <View style={styles.placeholder}>
    <BubbleChartForce key={JSON.stringify('ㄴ에ㅔㅇ에')} DATA={DATA} />
  </View>
);

export default BySubjectChartTab;

const styles = StyleSheet.create({
  placeholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
