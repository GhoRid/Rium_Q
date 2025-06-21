import {View, Text, StyleSheet} from 'react-native';
import SvgIcon from '../../../components/SvgIcon';
import shadow from '../../../styles/shadow';

type StudyTimeSummaryBoxProps = {
  period: string;
  data?: {
    totalTime: string; // 총 시간
    averageTime: string; // 하루 평균 시간
  };
};

const StudyTimeSummaryBox = ({period, data}: StudyTimeSummaryBoxProps) => {
  return (
    <View style={styles.container}>
      {/* 날짜 정보 */}
      {period === '기간' ? (
        <View style={[styles.header, {justifyContent: 'space-between'}]}>
          <Text style={styles.periodLabel}>지난 28일</Text>
          <View style={styles.dateRangeContainer}>
            <Text style={styles.dateRangeText}>5/15 ~ 6/11</Text>
            <SvgIcon name="아래방향" size={16} />
          </View>
        </View>
      ) : (
        <View style={[styles.header, {justifyContent: 'center'}]}>
          <Text style={styles.periodLabel}>6월 15일(일)</Text>
        </View>
      )}

      {/* 통계 카드 */}
      <View style={styles.card}>
        {/* 총 시간 */}
        <View style={styles.timeItem}>
          <Text style={styles.titleText}>총 시간</Text>
          <Text style={styles.valueText}>44:44:44</Text>
        </View>

        {/* 하루 평균 */}
        <View style={styles.timeItem}>
          <Text style={styles.titleText}>하루 평균</Text>
          <Text style={styles.valueText}>00:44:44</Text>
        </View>
      </View>
    </View>
  );
};

export default StudyTimeSummaryBox;

const styles = StyleSheet.create({
  container: {
    padding: 25,
    backgroundColor: 'white',
    gap: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    alignItems: 'center',
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
