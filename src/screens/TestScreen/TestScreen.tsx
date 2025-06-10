import {Text, View} from 'react-native';
import BubbleChart from './BubbleChart';

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
  return (
    <View>
      <Text>dd</Text>
      <BubbleChart key={JSON.stringify('ㄴ에ㅔㅇ에')} DATA={DATA} />
    </View>
  );
};

export default TestScreen;
