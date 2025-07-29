import {Dimensions, ScrollView, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomHeader from '../../components/Header/CustomHeader';
import BackButtonHeaderLeft from '../../components/Header/BackButtonHeaderLeft';
import StepRegion from './steps/StepRegion';
import StepSchool from './steps/StepSchool';
import {useRef, useState} from 'react';
import StepGrade from './steps/StepGrade';
import StepAcademy from './steps/StepAcademy';
import StepPreferredStudyTime from './steps/StepPreferredStudyTime';
import SkipSurveyModal from '../../components/Survey/SkipSurveyModal';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {OnboardingStackParamList} from '../../navigators/OnboardingNavigator';
import SurveyBottomButton from '../../components/Survey/SurveyBottomButton';
import SurveyProgressBar from '../../components/Survey/SurveyProgressBar';

const {width} = Dimensions.get('window');

type OnboardingSurveyScreenProps = {
  onFinish: () => void; // "다음에 하기" 누를 때 호출
};

const OnboardingSurveyScreen = ({onFinish}: OnboardingSurveyScreenProps) => {
  const scrollRef = useRef<ScrollView>(null);
  const navigation = useNavigation<NavigationProp<OnboardingStackParamList>>();
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(false);

  const steps = [
    <StepRegion />,
    <StepSchool />,
    <StepGrade />,
    <StepAcademy />,
    <StepPreferredStudyTime />,
  ];

  const goToStep = (step: number) => {
    if (steps.length <= step) {
      navigation.navigate('SurveyFinished');
    } else {
      setCurrentStep(step);
      scrollRef.current?.scrollTo({x: width * step, animated: true});
    }
  };

  const confirmSkip = () => {
    onFinish();
    setShowModal(false);
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader
        leftItem={
          <BackButtonHeaderLeft
            onPressBackBtn={() => {
              setShowModal(true);
            }}
          />
        }
      />
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

      <SurveyBottomButton
        currentStep={currentStep}
        totalSteps={steps.length}
        goToStep={goToStep}
      />

      <SkipSurveyModal
        content={{
          title: '다음에 하시겠어요?',
          description:
            '맞춤 계획을 짜드리기 위해서 설문은 필수입니다!\n계획 페이지에서 설문을 다시 진행할 수 있습니다.',
        }}
        visible={showModal}
        onConfirm={confirmSkip}
        onRequestClose={() => setShowModal(false)}
      />
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
