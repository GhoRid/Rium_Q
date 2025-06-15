import {View, Text, StyleSheet, ScrollView} from 'react-native';
import StudyTimeOverviewSection from './components/StudyTimeOverviewSection';
import RankBarCard from './components/RankBarCard';
import StudyTimeDetails from './components/StudyTimeDetails';
import StudyTimeSummaryBox from './components/StudyTimeSummaryBox';
import PeriodSelector from './components/PeriodSelector';
import {useState} from 'react';
import AverageFocusTimeChartBox from './components/AverageFocusTimeChartBox';

const FILTERS = ['기간', '일간', '주간', '월간'];

const StatisticScreen = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<string>('기간');
  return (
    <View style={styles.container}>
      <PeriodSelector
        filters={FILTERS}
        selectedPeriod={selectedPeriod}
        setSelectedPeriod={setSelectedPeriod}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentCotainerStyle}>
        {/* 공부 시간 요약 */}
        <StudyTimeSummaryBox />

        {/* 학습 통계 요약 */}
        <StudyTimeOverviewSection />

        {/* 평균 집중 시간 차트 */}
        <AverageFocusTimeChartBox />

        {/* 개별 학습 시간 */}
        <StudyTimeDetails />

        {/* 랭킹 바 차트 */}
        <RankBarCard />
      </ScrollView>
    </View>
  );
};

export default StatisticScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentCotainerStyle: {
    gap: 10,
  },
});
