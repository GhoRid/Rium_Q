import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import StackNavigator from './src/navigators/StackNavigator';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import SplashScreen from './src/screens/SplashScreen';

const queryClient = new QueryClient();

export default function App() {
  const [isSplashFinished, setIsSplashFinished] = useState(false);

  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        {/* {isSplashFinished ? ( */}
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
        {/* ) : (
          <SplashScreen onFinish={() => setIsSplashFinished(true)} />
        )} */}
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}
