import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import TabNavigator from './TabNavigator';
import TestScreen from '../screens/TestScreen';
import TimeScreen from '../screens/TimeScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const insets = useSafeAreaInsets();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tab"
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen name="테스트" component={TestScreen} />
      <Stack.Screen
        name="타이머"
        component={TimeScreen}
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
