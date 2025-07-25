import {StyleSheet, View} from 'react-native';
import StudyTimeSummaryBox from '../../components/StudyTimeSummaryBox';
import StudyTimeOverviewCharts from '../../components/StudyTimeOverviewCharts';
import AverageFocusTimeChartBox from '../../components/AverageFocusTimeChartBox';
import StudyTimeDetails from '../../components/StudyTimeDetails';
import RankBarCard from '../../components/RankBarCard';
import DayPickerCalendarModal from '../../components/DayPickerCalenderModal';
import {useState} from 'react';

type PeriodTabProps = {
  period: string;
};

const PeriodTab = ({period}: PeriodTabProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* 공부 시간 요약 */}
      <StudyTimeSummaryBox
        period={period}
        setIsModalVisible={setIsModalVisible}
      />

      {/* 학습 통계 요약 */}
      <StudyTimeOverviewCharts />

      {/* 평균 집중 시간 차트 */}
      <AverageFocusTimeChartBox />

      {/* 개별 학습 시간 */}
      <StudyTimeDetails />

      {/* 랭킹 바 차트 */}
      <RankBarCard />

      <DayPickerCalendarModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        onConfirm={(from, to) => {
          // 선택된 날짜 범위를 처리하는 로직
          console.log('Selected range:', from, to);
          setIsModalVisible(false);
        }}
      />
    </View>
  );
};
export default PeriodTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
  },
});
