import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import SplashScreen from './src/screens/SplashScreen';
import StackNavigator from './src/navigators/StackNavigator';
import {checkAuth} from './src/services/auth/checkAuth';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import RootNavigator from './src/navigators/RootNavigator';

const queryClient = new QueryClient();

export default function App() {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}
