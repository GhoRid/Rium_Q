import {Pressable, Text, View} from 'react-native';
import BubbleChart from '../StatisticScreen/components/BubbleChart';
import {useState} from 'react';

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
    <View>
      <Text>dd</Text>
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
      </Pressable>
    </View>
  );
};

export default TestScreen;
