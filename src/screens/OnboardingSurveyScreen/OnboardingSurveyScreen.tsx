import {Dimensions, ScrollView, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomHeader from '../../components/Header/CustomHeader';
import BackButtonHeaderLeft from '../../components/Header/BackButtonHeaderLeft';
import SurveyProgressBar from './components/SurveyProgressBar';
import StepRegion from './steps/StepRegion';
import {useRef, useState} from 'react';
import BottomButton from './components/BottomButton';

const {width} = Dimensions.get('window');

const OnboardingSurveyScreen = () => {
  const scrollRef = useRef<ScrollView>(null);
  const [currentStep, setCurrentStep] = useState(0);

  const goToStep = (step: number) => {
    setCurrentStep(step);
    scrollRef.current?.scrollTo({x: width * step, animated: true});
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader leftItem={<BackButtonHeaderLeft />} />
      <SurveyProgressBar currentStep={currentStep} totalSteps={2} />

      <ScrollView
        ref={scrollRef}
        scrollEnabled={false} // 터치 스크롤 비활성화
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}>
        <View style={styles.stepContainer}>
          <StepRegion />
        </View>
        <View style={styles.stepContainer}>
          <StepRegion />
        </View>
      </ScrollView>

      {/* 하단 버튼 */}
      <BottomButton currentStep={currentStep} goToStep={goToStep} />
    </SafeAreaView>
  );
};

export default OnboardingSurveyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 24,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: '#eee',
  },
  stepContainer: {
    width: width,
    paddingHorizontal: 30,
    paddingTop: 16,
  },
});
