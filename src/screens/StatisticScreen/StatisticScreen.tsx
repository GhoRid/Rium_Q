import {View, Text, StyleSheet, ScrollView} from 'react-native';
import StudyTimeOverviewSection from './components/StudyTimeOverviewSection';
import RankBarCard from './components/RankBarCard';
import StudyTimeDetails from './components/StudyTimeDetails';
import StudyTimeSummaryBox from './components/StudyTimeSummaryBox';
import PeriodSelector from './components/PeriodSelector';
import {useState} from 'react';
import AverageFocusTimeChartBox from './components/AverageFocusTimeChartBox';
import PeriodTab from './Tabs/PeriodTab';
import DailyTab from './Tabs/DailyTab';
import WeeklyTab from './Tabs/WeeklyTab';
import MonthlyTab from './Tabs/MonthlyTab';

const FILTERS = ['기간', '일간', '주간', '월간'];
type FilterType = (typeof FILTERS)[number];

const StatisticScreen = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<FilterType>('기간');
  return (
    <View style={styles.container}>
      <PeriodSelector
        filters={FILTERS}
        selectedPeriod={selectedPeriod}
        setSelectedPeriod={setSelectedPeriod}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        // contentContainerStyle={styles.contentCotainerStyle}
      >
        {selectedPeriod === '기간' && <PeriodTab />}
        {selectedPeriod === '일간' && <DailyTab />}
        {selectedPeriod === '주간' && <WeeklyTab />}
        {selectedPeriod === '월간' && <MonthlyTab />}
      </ScrollView>
    </View>
  );
};

export default StatisticScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
