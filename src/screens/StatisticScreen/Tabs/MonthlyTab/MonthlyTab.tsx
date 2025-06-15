import {StyleSheet, View} from 'react-native';
import CalendarByMonth from './CalendarByMonth';

type MonthlyTabProps = {
  period: string;
};

const MonthlyTab = ({period}: MonthlyTabProps) => {
  return (
    <View style={styles.container}>
      {/* 월간 달력 */}
      <CalendarByMonth />
    </View>
  );
};
export default MonthlyTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
