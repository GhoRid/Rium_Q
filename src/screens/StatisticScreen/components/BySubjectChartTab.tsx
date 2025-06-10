import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import BubbleChartForce from '../../TestScreen/BubbleChart';
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

type Period = '1주일' | '1개월' | '3개월' | '6개월';

const BySubjectChartTab = () => {
  const [selected, setSelected] = useState<Period>('1주일');
  const options: Period[] = ['1주일', '1개월', '3개월', '6개월'];

  return (
    <View style={styles.placeholder}>
      <BubbleChartForce key={JSON.stringify('ㄴ에ㅔㅇ에')} DATA={DATA} />

      <View style={styles.periodTabContainer}>
        {options.map(option => (
          <TouchableOpacity
            key={option}
            style={styles.segment}
            activeOpacity={1}
            onPress={() => setSelected(option)}>
            <Text
              style={[styles.text, selected === option && styles.textActive]}>
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
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
  periodTabContainer: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '90%',
  },
  segment: {
    paddingVertical: 12, // 세로 터치 영역 확보
  },
  text: {
    fontSize: 14,
    color: '#A0A0A0', // 비활성 텍스트 색
    fontWeight: '500',
  },
  textActive: {
    color: '#222222', // 활성 텍스트 색 (진한 색)
    fontWeight: '700', // 활성 글자 볼드
  },
});
