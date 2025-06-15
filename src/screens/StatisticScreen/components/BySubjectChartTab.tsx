import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import BubbleChartForce from './BubbleChart';
import {useState} from 'react';

const DATA = [
  {name: 'Apples', value: 700},
  {name: 'Oranges', value: 440},
  {name: 'Kiwis', value: 650},
  {name: 'Bananas', value: 390},
  {name: 'Pears', value: 300},
  // {name: 'Satsumas', value: 25},
  // {name: 'Pineapples', value: 30},
];

type Period = '1주일' | '1개월' | '3개월' | '6개월';

const BySubjectChartTab = () => {
  const [selected, setSelected] = useState<Period>('1주일');
  const options: Period[] = ['1주일', '1개월', '3개월', '6개월'];

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
    gap: 20,
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
  },
});
