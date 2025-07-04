import {View, Text, StyleSheet} from 'react-native';
import shadow from '../../../../styles/shadow';
import DonutChart from '../../components/charts/DonutGraph';
import StudyTimeSummaryBox from '../../components/StudyTimeSummaryBox';

type MonthlyStudyTimeProps = {
  period: string;
};

const MonthlyStudyTime = ({period}: MonthlyStudyTimeProps) => {
  return (
    <View style={styles.container}>
      <StudyTimeSummaryBox period={period} />
    </View>
  );
};

export default MonthlyStudyTime;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingBottom: 10,
  },
});
