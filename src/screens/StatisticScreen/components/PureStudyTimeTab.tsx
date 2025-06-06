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
            style={[
              styles.segment,
              // 선택된 탭이면 배경색을 조금 더 밝게(또는 강조) 보여주고 싶다면 이곳에 추가 스타일
              // 여기에선 전체 컨테이너이므로 배경은 동일하지만, 필요시 segment별 스타일 조절 가능
            ]}
            activeOpacity={0.7}
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
    justifyContent: 'center',
  },
  periodTabContainer: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4', // 전체 바탕을 연회색으로
    borderRadius: 15, // 둥근 모서리
    paddingVertical: 10, // 상하 여백
    paddingHorizontal: 4, // 좌우 여백 (각 segment 간격 확보)
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%', // 전체 너비 사용
  },
  segment: {
    flex: 1, // 동일 너비
    alignItems: 'center',
    paddingVertical: 6, // 세로 터치 영역 확보
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
