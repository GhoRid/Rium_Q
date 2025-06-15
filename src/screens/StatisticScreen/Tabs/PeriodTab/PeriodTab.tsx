import {StyleSheet, View} from 'react-native';
import StudyTimeSummaryBox from '../../components/StudyTimeSummaryBox';
import StudyTimeOverviewCharts from '../../components/StudyTimeOverviewCharts';
import AverageFocusTimeChartBox from '../../components/AverageFocusTimeChartBox';
import StudyTimeDetails from '../../components/StudyTimeDetails';
import RankBarCard from '../../components/RankBarCard';

type PeriodTabProps = {
  period: string;
};

const PeriodTab = ({period}: PeriodTabProps) => {
  return (
    <View style={styles.container}>
      {/* 공부 시간 요약 */}
      <StudyTimeSummaryBox period={period} />

      {/* 학습 통계 요약 */}
      <StudyTimeOverviewCharts />

      {/* 평균 집중 시간 차트 */}
      <AverageFocusTimeChartBox />

      {/* 개별 학습 시간 */}
      <StudyTimeDetails />

      {/* 랭킹 바 차트 */}
      <RankBarCard />
    </View>
  );
};
export default PeriodTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
  },
});
