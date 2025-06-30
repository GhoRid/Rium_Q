import {ScrollView, StyleSheet, View} from 'react-native';
import AppText from '../../components/AppText';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomHeader from '../../components/Header/CustomHeader';
import BackButtonHeaderLeft from '../../components/Header/BackButtonHeaderLeft';
import SurveyProgressBar from './components/SurveyProgressBar';

const OnboardingSurveyScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader leftItem={<BackButtonHeaderLeft />} />
      {/* 프로그레스 바 */}
      <SurveyProgressBar currentStep={0} totalSteps={5} />
      <ScrollView pagingEnabled={true}>{/* 스텝별 페이지 내용 */}</ScrollView>
    </SafeAreaView>
  );
};

export default OnboardingSurveyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
