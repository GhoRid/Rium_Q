import {View, StyleSheet, ScrollView} from 'react-native';
import PeriodSelector from './components/PeriodSelector';
import {useEffect, useRef, useState} from 'react';
import PeriodTab from './Tabs/PeriodTab/PeriodTab';
import DailyTab from './Tabs/DailyTab/DailyTab';
import WeeklyTab from './Tabs/WeeklyTab/WeeklyTab';
import MonthlyTab from './Tabs/MonthlyTab/MonthlyTab';

const FILTERS = ['기간', '일간', '주간', '월간'];
type FilterType = (typeof FILTERS)[number];

const StatisticScreen = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<FilterType>('기간');
  const scrollRef = useRef<ScrollView>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: false, // 기본적으로 true
    });
  }, [selectedPeriod]);

  return (
    <View style={styles.container}>
      <PeriodSelector
        filters={FILTERS}
        selectedPeriod={selectedPeriod}
        setSelectedPeriod={setSelectedPeriod}
      />
      <ScrollView showsVerticalScrollIndicator={false} ref={scrollRef}>
        {selectedPeriod === '기간' && <PeriodTab period={selectedPeriod} />}
        {selectedPeriod === '일간' && <DailyTab period={selectedPeriod} />}
        {selectedPeriod === '주간' && <WeeklyTab period={selectedPeriod} />}
        {selectedPeriod === '월간' && <MonthlyTab period={selectedPeriod} />}
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
