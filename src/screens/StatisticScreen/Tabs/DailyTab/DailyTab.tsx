import {StyleSheet, View} from 'react-native';
import RankBarCard from '../../components/RankBarCard';
import StudyTimeDetails from '../../components/StudyTimeDetails';
import CalendarByDate from './CalendarByDate';
import DonutChart from '../../components/charts/DonutGraph';
import StudyTimeSummaryBox from '../../components/StudyTimeSummaryBox';

type DailyTabProps = {
  period: string;
};

const donutData = [
  {label: '수학', value: 32, time: '04:30:24', color: '#0667FF'},
  {label: '국어', value: 25, time: '03:30:31', color: '#3E82FF'},
  {label: '영어', value: 17, time: '02:24:13', color: '#70A3FF'},
  {label: '생활과 윤리', value: 15, time: '02:06:11', color: '#A8C9FF'},
  {label: '그 외', value: 11, time: '01:30:13', color: '#ccc'},
];

const DailyTab = ({period}: DailyTabProps) => {
  return (
    <View style={styles.container}>
      {/* 일간 달력 */}
      <CalendarByDate />

      {/* 오늘 학습 시간 */}
      <View>
        <StudyTimeSummaryBox period={period} />
        <DonutChart data={donutData} />
      </View>

      {/* 개별 학습 시간 */}
      <StudyTimeDetails />

      {/* 랭킹 바 차트 */}
      <RankBarCard />
    </View>
  );
};
export default DailyTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
  },
});
