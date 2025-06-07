import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import TestScreen from '../screens/TestScreen/TestScreen';
import TabNavigator from './TabNavigator/TabNavigator';
import NotificationScreen from '../screens/NotificationScreen/NotificationScreen';
import TimerScreen from '../screens/TimerScreen/TimerScreen';
import CustomHeader from '../components/Header/CustomHeader';
import SvgIcon from '../components/SvgIcon';
import {Text} from 'react-native';
import BackButtonHeaderLeft from '../components/Header/BackButtonHeaderLeft';
import StudyTimeDetailScreen from '../screens/StudyTimeDetailScreen/StudyTimeDetailScreen';
import SeatReservationScreen from '../screens/SeatReservationScreen/SeatReservationScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
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
        <Stack.Screen
          name="Notification"
          component={NotificationScreen}
          options={{
            header: () => (
              <CustomHeader
                leftItem={<BackButtonHeaderLeft pageName="알림" />}
              />
            ),
          }}
        />
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
        <Stack.Screen
          name="StudyTimeDetail"
          component={StudyTimeDetailScreen}
          options={{
            header: () => (
              <CustomHeader
                leftItem={<BackButtonHeaderLeft pageName="개별 학습 시간" />}
              />
            ),
          }}
        />
        <Stack.Screen
          name="SeatReservation"
          component={SeatReservationScreen}
          options={{
            // title: '', // ← 제목 제거
            headerStyle: {
              // backgroundColor: '#313131',
            },
          }}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default StackNavigator;
