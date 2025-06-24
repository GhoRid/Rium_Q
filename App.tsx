import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import SplashScreen from './src/screens/SplashScreen';
import StackNavigator from './src/navigators/StackNavigator';
import {checkAuth} from './src/services/auth/checkAuth'; // ✅ 서비스 로직 임포트
import LoginScreen from './src/screens/LoginScreen/LoginScreen';

const queryClient = new QueryClient();

export default function App() {
  const [isSplashFinished, setIsSplashFinished] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  // Splash 끝나면 로그인 여부 체크
  useEffect(() => {
    if (isSplashFinished) {
      checkAuth().then(setIsLoggedIn);
    }
  }, [isSplashFinished]);

  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        {isSplashFinished ? (
          <NavigationContainer>
            {/* {isLoggedIn === null ? null : isLoggedIn ? ( */}
            <StackNavigator />
            {/* ) : (
              <LoginScreen />
            )} */}
          </NavigationContainer>
        ) : (
          <SplashScreen onFinish={() => setIsSplashFinished(true)} />
        )}
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}
