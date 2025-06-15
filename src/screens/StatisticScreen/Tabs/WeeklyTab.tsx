import {StyleSheet, View} from 'react-native';
import Calendar from '../components/CalendarByDate';
import CalendarByWeek from '../components/CalendarByWeek';

const WeeklyTab = () => {
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
