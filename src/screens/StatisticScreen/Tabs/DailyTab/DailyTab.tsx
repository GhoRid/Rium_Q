import {StyleSheet, View} from 'react-native';
import RankBarCard from '../../components/RankBarCard';
import StudyTimeDetails from '../../components/StudyTimeDetails';
import CalendarByDate from './CalendarByDate';
import TodayStudyTime from './TodayStudyTime';

type DailyTabProps = {
  period: string;
};

const DailyTab = ({period}: DailyTabProps) => {
  return (
    <View style={styles.container}>
      {/* 일간 달력 */}
      <CalendarByDate />

      {/* 오늘 학습 시간 */}
      <TodayStudyTime period={period} />

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
