import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardingSurveyIntroScreen from '../screens/OnboardingSurveyIntroScreen/OnboardingSurveyIntroScreen';
import OnboardingSurveyScreen from '../screens/OnboardingSurveyScreen/OnboardingSurveyScreen';
import OnboardingSurveyFinishedScreen from '../screens/OnboardingSurveyFinishedScreen/OnboardingSurveyFinishedScreen';

export type OnboardingStackParamList = {
  Intro: undefined;
  Survey: undefined;
  SurveyFinished: undefined;
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
        name="Survey"
        children={() => <OnboardingSurveyScreen onFinish={onFinish} />}
      />
      <Stack.Screen
        name="SurveyFinished"
        children={() => <OnboardingSurveyFinishedScreen onFinish={onFinish} />}
      />
    </Stack.Navigator>
  );
};

export default OnboardingNavigator;
