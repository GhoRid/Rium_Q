import {StyleSheet, View} from 'react-native';
import RankBarCard from '../components/RankBarCard';
import StudyTimeDetails from '../components/StudyTimeDetails';
import Calendar from '../components/CalendarByDate';
import TodayStudyTime from '../components/TodayStudyTime';

const DailyTab = () => {
  return (
    <View style={styles.container}>
      <Calendar />

      <TodayStudyTime />

      {/* 개별 학습 시간 */}
      <StudyTimeDetails />

      {/* 랭킹 바 차트 */}
      <RankBarCard />
    </View>
  );
};
export default DailyTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
  },
});
