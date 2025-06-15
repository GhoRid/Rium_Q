import {View, Text, StyleSheet} from 'react-native';
import shadow from '../../../../styles/shadow';
import DonutChart from '../../components/charts/DonutGraph';
import StudyTimeSummaryBox from '../../components/StudyTimeSummaryBox';
import StudyTimeOverviewSection from '../../components/StudyTimeOverviewSection';

type WeeklyStudyTimeProps = {
  period: string;
};

const WeeklyStudyTime = ({period}: WeeklyStudyTimeProps) => {
  return (
    <View style={styles.container}>
      <StudyTimeSummaryBox period={period} />

      <StudyTimeOverviewSection />
    </View>
  );
};

export default WeeklyStudyTime;

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
