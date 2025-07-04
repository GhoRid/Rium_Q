import {useEffect, useState} from 'react';
import {checkAuth} from '../services/auth/checkAuth';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import StackNavigator from './StackNavigator';
import SplashScreen from '../screens/SplashScreen';
import {useQuery} from '@tanstack/react-query';
import {getmataDateIsPresent} from '../apis/api/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OnboardingNavigator from './OnboardingNavigator';

const RootNavigator = () => {
  const [isSplashFinished, setIsSplashFinished] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const [isOnboardingSurveyFinish, setsOnboardingSurveyFinish] =
    useState(false);

  useEffect(() => {
    const init = async () => {
      const loggedIn = await checkAuth();
      setIsLoggedIn(loggedIn);

      const skipped = await AsyncStorage.getItem('surveyFinished');
      setsOnboardingSurveyFinish(skipped === 'true');
    };
    init();
  }, []);

  const {data, isLoading} = useQuery({
    queryKey: ['getmataDateIsPresent'],
    queryFn: getmataDateIsPresent,
    enabled: isLoggedIn === true && isOnboardingSurveyFinish === false,
  });

  if (!isSplashFinished || isLoggedIn === null) {
    return <SplashScreen onFinish={() => setIsSplashFinished(true)} />;
  }

  if (!isLoggedIn) {
    return <LoginScreen setIsLoggedIn={setIsLoggedIn} />;
  }

  if (true && !isOnboardingSurveyFinish) {
    // if (true) {
    return (
      <OnboardingNavigator
        onFinish={async () => {
          await AsyncStorage.setItem('surveyFinished', 'true');
          setsOnboardingSurveyFinish(true);
        }}
      />
    );
  }

  return <StackNavigator setIsLoggedIn={setIsLoggedIn} />;
};

export default RootNavigator;
