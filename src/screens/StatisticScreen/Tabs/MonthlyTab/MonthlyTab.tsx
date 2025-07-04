import {StyleSheet, View} from 'react-native';
import CalendarByMonth from './CalendarByMonth';
import StudyTimeSummaryBox from '../../components/StudyTimeSummaryBox';
import StudyTimeOverviewCharts from '../../components/StudyTimeOverviewCharts';
import AverageFocusTimeChartBox from '../../components/AverageFocusTimeChartBox';
import StudyTimeDetails from '../../components/StudyTimeDetails';
import RankBarCard from '../../components/RankBarCard';

type MonthlyTabProps = {
  period: string;
};

const MonthlyTab = ({period}: MonthlyTabProps) => {
  return (
    <View style={styles.container}>
      {/* 월간 달력 */}
      <CalendarByMonth />

      {/* 이번달 학습 시간 */}
      <View>
        {/* 학습 통계 요약 */}
        <StudyTimeSummaryBox period={period} />
        <StudyTimeOverviewCharts />
      </View>
      {/* 평균 집중 시간 차트 */}
      <AverageFocusTimeChartBox />

      {/* 개별 학습 시간 */}
      <StudyTimeDetails />

      {/* 랭킹 바 차트 */}
      <RankBarCard />
    </View>
  );
};
export default MonthlyTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
  },
});
