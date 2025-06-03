import {View, Text, StyleSheet} from 'react-native';
import StudyTimeOverviewSection from './components/StudyTimeOverviewSection';

const StatisticScreen = () => {
  return (
    <View style={styles.container}>
      <StudyTimeOverviewSection />
      <StudyTimeOverviewSection />
    </View>
  );
};

export default StatisticScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    gap: 20,
  },
});
