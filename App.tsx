import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import SplashScreen from './src/screens/SplashScreen';
import StackNavigator from './src/navigators/StackNavigator';
import {checkAuth} from './src/services/auth/checkAuth';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';

const queryClient = new QueryClient();

export default function App() {
  const [isSplashFinished, setIsSplashFinished] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    checkAuth().then(setIsLoggedIn);
  }, []);

  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        {isSplashFinished ? (
          <NavigationContainer>
            {isLoggedIn === null ? null : isLoggedIn ? (
              <StackNavigator setIsLoggedIn={setIsLoggedIn} />
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
