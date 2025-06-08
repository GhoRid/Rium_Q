import {Text, View} from 'react-native';
import BubbleChart from './BubbleChart';

const TestScreen = () => {
  return (
    <View>
      <Text>dd</Text>
      <BubbleChart key={JSON.stringify('ㄴ에ㅔㅇ에')} />
    </View>
  );
};

export default TestScreen;
