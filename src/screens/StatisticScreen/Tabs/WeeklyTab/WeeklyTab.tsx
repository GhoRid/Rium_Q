import {StyleSheet, View} from 'react-native';
import CalendarByWeek from './CalendarByWeek';

type WeeklyTabProps = {
  period: string;
};

const WeeklyTab = ({period}: WeeklyTabProps) => {
  return (
    <View style={styles.container}>
      <CalendarByWeek />
    </View>
  );
};
export default WeeklyTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
