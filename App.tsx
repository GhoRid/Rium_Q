import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import SplashScreen from './src/screens/SplashScreen';
import StackNavigator from './src/navigators/StackNavigator';
import {checkAuth} from './src/services/auth/checkAuth'; // ✅ 서비스 로직 임포트
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import {AppState} from 'react-native';

const queryClient = new QueryClient();

export default function App() {
  const [isSplashFinished, setIsSplashFinished] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    const checkOnFocus = async () => {
      const isAuthed = await checkAuth();
      setIsLoggedIn(isAuthed);
    };

    const subscription = AppState.addEventListener('change', state => {
      if (state === 'active') {
        checkOnFocus(); // ✅ 앱이 다시 포커스 될 때 토큰 검사
      }
    });

    return () => subscription.remove();
  }, []);

  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        {isSplashFinished ? (
          <NavigationContainer>
            {isLoggedIn === null ? null : isLoggedIn ? (
              <StackNavigator />
            ) : (
              <LoginScreen setIsLoggedIn={setIsLoggedIn} />
            )}
          </NavigationContainer>
        ) : (
          <SplashScreen onFinish={() => setIsSplashFinished(true)} />
        )}
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}
