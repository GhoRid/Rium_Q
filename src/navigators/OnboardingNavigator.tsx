import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardingSurveyIntroScreen from '../screens/OnboardingSurveyIntroScreen/OnboardingSurveyIntroScreen';
import OnboardingSurveyScreen from '../screens/OnboardingSurveyScreen/OnboardingSurveyScreen';
// 추가 설문 단계들 필요 시 여기에 계속 추가

export type OnboardingStackParamList = {
  Intro: undefined;
  survey: undefined;
};

const Stack = createNativeStackNavigator<OnboardingStackParamList>();

type OnboardingNavigatorProps = {
  onFinish: () => void; // "다음에 하기" 누를 때 호출
};

const OnboardingNavigator = ({onFinish}: OnboardingNavigatorProps) => {
  return (
    <Stack.Navigator
      initialRouteName="Intro"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Intro"
        children={() => <OnboardingSurveyIntroScreen onFinish={onFinish} />}
      />
      <Stack.Screen
        name="survey"
        children={() => <OnboardingSurveyScreen onFinish={onFinish} />}
      />
    </Stack.Navigator>
  );
};

export default OnboardingNavigator;
