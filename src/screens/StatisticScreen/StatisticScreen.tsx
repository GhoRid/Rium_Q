import {View, Text, StyleSheet, ScrollView} from 'react-native';
import StudyTimeOverviewSection from './components/StudyTimeOverviewSection';
import RankBarCard from './components/RankBarCard';
import StudyTimeDetails from './components/StudyTimeDetails';
import StudyTimeSummaryBox from './components/StudyTimeSummaryBox';
import PeriodSelector from './components/PeriodSelector';

const StatisticScreen = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <PeriodSelector />

      {/* 공부 시간 요약 */}
      <StudyTimeSummaryBox />

      {/* 학습 통계 요약 */}
      <StudyTimeOverviewSection />

      {/* 개별 학습 시간 */}
      <StudyTimeDetails />

      {/* 랭킹 바 차트 */}
      <RankBarCard />
    </ScrollView>
  );
};

export default StatisticScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
  },
});
