import {View, StyleSheet} from 'react-native';
import BubbleChartForce from './charts/BubbleChart';

const DATA = [
  {name: 'Apples', value: 700},
  {name: 'Oranges', value: 440},
  {name: 'Kiwis', value: 650},
  {name: 'Bananas', value: 390},
  {name: 'Pears', value: 300},
  // {name: 'Satsumas', value: 25},
  // {name: 'Pineapples', value: 30},
];

const BySubjectChartTab = () => {
  return (
    <View style={styles.placeholder}>
      <BubbleChartForce DATA={DATA} key={1} />
    </View>
  );
};

export default BySubjectChartTab;

const styles = StyleSheet.create({
  placeholder: {
    flex: 1,
    alignItems: 'center',
  },
});
