import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import TestScreen from '../screens/TestScreen';
import TabNavigator from './TabNavigator/TabNavigator';
import NotificationScreen from '../screens/NotificationScreen/NotificationScreen';
import TimerScreen from '../screens/TimerScreen/TimerScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const insets = useSafeAreaInsets();

  return (
    <Stack.Navigator
    // screenOptions={{headerShown: false}}
    >
      <Stack.Screen
        name="Tab"
        navigationKey="Tab"
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Test" component={TestScreen} navigationKey="test" />
      <Stack.Screen name="Notification" component={NotificationScreen} />
      <Stack.Screen
        name="Timer"
        component={TimerScreen}
        options={{
          title: '', // ← 제목 제거
          headerStyle: {
            backgroundColor: '#313131',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
