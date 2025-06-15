import {StyleSheet, View} from 'react-native';
import CalendarByWeek from './CalendarByWeek';
import WeeklyStudyTime from './WeeklyStudyTime';
import StudyTimeDetails from '../../components/StudyTimeDetails';
import RankBarCard from '../../components/RankBarCard';

type WeeklyTabProps = {
  period: string;
};

const WeeklyTab = ({period}: WeeklyTabProps) => {
  return (
    <View style={styles.container}>
      {/* 주간 달력 */}
      <CalendarByWeek />

      {/* 주간 학습 시간 */}
      <WeeklyStudyTime period={period} />

      {/* 개별 학습 시간 */}
      <StudyTimeDetails />

      {/* 랭킹 바 차트 */}
      <RankBarCard />
    </View>
  );
};
export default WeeklyTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
  },
});
