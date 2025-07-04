import {View, StyleSheet} from 'react-native';
import RoundProgressbar from './charts/RoundProgressBar';

const FILTERS = [
  '전체 목표 달성률',
  '기한 내 목표 달성률',
  '주간 출석률',
  '월간 출석률',
  '연간 목표 달성률',
];

const GoalAchievementChartTab = () => {
  return (
    <View style={styles.placeholder}>
      <RoundProgressbar
        score={84}
        percentage={12}
        name="이끼"
        //초기화 키.
        key={JSON.stringify('dsd')}
      />
    </View>
  );
};

export default GoalAchievementChartTab;

const styles = StyleSheet.create({
  placeholder: {
    flex: 1,
  },
});
