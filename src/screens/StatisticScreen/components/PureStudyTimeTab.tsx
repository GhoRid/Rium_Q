import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import BarChart from './BarChart';
import {useState} from 'react';

interface PureStudyTimeTabProps {
  data: {
    label: string;
    value: number;
  }[];
}

type Period = '월별' | '주별' | '일별';

const PureStudyTimeTab = ({data}: PureStudyTimeTabProps) => {
  const [selected, setSelected] = useState<Period>('월별');
  const options: Period[] = ['월별', '주별', '일별'];

  return (
    <View style={styles.container}>
      <BarChart data={data} key={JSON.stringify(data)} />
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

export default PureStudyTimeTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    alignItems: 'center',
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
    width: '80%',
    // gap: 70,
    // paddingHorizontal: 60,
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
