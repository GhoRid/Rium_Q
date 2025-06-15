import {View, Text, StyleSheet} from 'react-native';
import shadow from '../../../styles/shadow';
import DonutChart from './charts/DonutGraph';

const donutData = [
  {label: '수학', value: 32, time: '04:30:24', color: '#0667FF'},
  {label: '국어', value: 25, time: '03:30:31', color: '#3E82FF'},
  {label: '영어', value: 17, time: '02:24:13', color: '#70A3FF'},
  {label: '생활과 윤리', value: 15, time: '02:06:11', color: '#A8C9FF'},
  {label: '그 외', value: 11, time: '01:30:13', color: '#ccc'},
];

const TodayStudyTime = () => {
  return (
    <View style={styles.container}>
      <View style={styles.timeText}>
        {/* 날짜 정보 */}
        <View style={styles.header}>
          <Text style={styles.periodLabel}>6월 15일(일)</Text>
        </View>

        {/* 통계 카드 */}
        <View style={styles.card}>
          {/* 총 시간 */}
          <View style={styles.timeItem}>
            <Text style={styles.titleText}>총 시간</Text>
            <Text style={styles.valueText}>44:44:44</Text>
          </View>

          {/* 하루 평균 */}
          <View style={styles.timeItem}>
            <Text style={styles.titleText}>최대 집중 시간</Text>
            <Text style={styles.valueText}>00:44:44</Text>
          </View>
        </View>
      </View>

      {/* 도넛 그래프 컴포넌트 */}
      <DonutChart data={donutData} />
    </View>
  );
};

export default TodayStudyTime;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingBottom: 10,
  },
  timeText: {
    padding: 25,
    gap: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  periodLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  dateRangeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  dateRangeText: {
    color: '#999',
    fontSize: 14,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    ...shadow,
  },
  timeItem: {
    alignItems: 'center',
    gap: 4,
  },
  titleText: {
    color: '#0667FF',
    fontSize: 14,
  },
  valueText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#222',
  },
});
