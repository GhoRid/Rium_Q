import {StyleSheet, View} from 'react-native';
import AppText from '../../components/AppText';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomHeader from '../../components/Header/CustomHeader';
import BackButtonHeaderLeft from '../../components/Header/BackButtonHeaderLeft';

const OnboardingSurveyScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader leftItem={<BackButtonHeaderLeft />} />
      <AppText>
        이 화면은 설문조사 화면입니다. 여기에 설문조사 컴포넌트를 추가하세요.
      </AppText>
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
