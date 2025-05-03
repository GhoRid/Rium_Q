import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
// import {RootStackParamList} from '../types';
import HomeScreen from '../screens/HomeScreen';
import {ParamListBase} from '@react-navigation/native';

const Stack = createNativeStackNavigator<ParamListBase>();

const StackNavigator = () => {
  const insets = useSafeAreaInsets();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        // options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
