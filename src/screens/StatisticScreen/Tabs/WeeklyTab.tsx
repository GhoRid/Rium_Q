import {StyleSheet, View} from 'react-native';
import Calendar from '../components/CalendarByDate';
import WeeklyCalendar from '../components/CalendarByWeek';

const WeeklyTab = () => {
  return (
    <View style={styles.container}>
      <WeeklyCalendar />
    </View>
  );
};
export default WeeklyTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
