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
  const [skipSurvey, setSkipSurvey] = useState(false);

  useEffect(() => {
    const init = async () => {
      const loggedIn = await checkAuth();
      setIsLoggedIn(loggedIn);

      const skipped = await AsyncStorage.getItem('surveySkipped');
      setSkipSurvey(skipped === 'true');
    };
    init();
  }, []);

  const {data, isLoading} = useQuery({
    queryKey: ['getmataDateIsPresent'],
    queryFn: getmataDateIsPresent,
    enabled: isLoggedIn === true && skipSurvey === false,
  });

  if (!isSplashFinished) {
    return <SplashScreen onFinish={() => setIsSplashFinished(true)} />;
  }

  if (isLoggedIn === null || isLoading) return null;

  if (!isLoggedIn) {
    return <LoginScreen setIsLoggedIn={setIsLoggedIn} />;
  }

  //   if (true && !skipSurvey) {
  if (true) {
    return (
      <OnboardingNavigator
        onFinish={async () => {
          await AsyncStorage.setItem('surveySkipped', 'true');
          setSkipSurvey(true);
        }}
      />
    );
  }

  return <StackNavigator setIsLoggedIn={setIsLoggedIn} />;
};

export default RootNavigator;
