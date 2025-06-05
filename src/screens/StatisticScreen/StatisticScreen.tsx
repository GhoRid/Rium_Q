import {View, Text, StyleSheet} from 'react-native';
import StudyTimeOverviewSection from './components/StudyTimeOverviewSection';
import RankingComparisonSection from './components/RankingComparisonSection';

const StatisticScreen = () => {
  return (
    <View style={styles.container}>
      {/* 학습 통계 요약 */}
      <StudyTimeOverviewSection />
      {/* 개별 학습 시간 */}
      <RankingComparisonSection />
    </View>
  );
};

export default StatisticScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
  },
});
