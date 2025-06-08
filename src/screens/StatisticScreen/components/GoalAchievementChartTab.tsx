import {View, Text, StyleSheet} from 'react-native';

const GoalAchievementChartTab = () => (
  <View style={styles.placeholder}>
    <Text>반원형 프로그레스 바 + 점수/퍼센트</Text>
  </View>
);

export default GoalAchievementChartTab;

const styles = StyleSheet.create({
  placeholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
