import {Dimensions, ScrollView, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomHeader from '../../components/Header/CustomHeader';
import BackButtonHeaderLeft from '../../components/Header/BackButtonHeaderLeft';
import SurveyProgressBar from './components/SurveyProgressBar';
import StepRegion from './steps/StepRegion';
import StepSchool from './steps/StepSchool';
import BottomButton from './components/BottomButton';
import {useRef, useState} from 'react';
import StepGrade from './steps/StepGrade';
import StepAcademy from './steps/StepAcademy';

const {width} = Dimensions.get('window');

const OnboardingSurveyScreen = () => {
  const scrollRef = useRef<ScrollView>(null);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    <StepRegion />,
    <StepSchool />,
    <StepGrade />,
    <StepAcademy />,
  ];

  const goToStep = (step: number) => {
    setCurrentStep(step);
    scrollRef.current?.scrollTo({x: width * step, animated: true});
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader leftItem={<BackButtonHeaderLeft />} />
      <SurveyProgressBar currentStep={currentStep} totalSteps={steps.length} />

      <ScrollView
        ref={scrollRef}
        scrollEnabled={false}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}>
        {steps.map((StepComponent, index) => (
          <View style={styles.stepContainer} key={index}>
            {StepComponent}
          </View>
        ))}
      </ScrollView>

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
  stepContainer: {
    width: width,
    paddingHorizontal: 30,
    paddingTop: 16,
  },
});
