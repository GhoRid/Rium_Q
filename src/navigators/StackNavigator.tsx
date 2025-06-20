import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import TestScreen from '../screens/TestScreen/TestScreen';
import TabNavigator from './TabNavigator/TabNavigator';
import NotificationScreen from '../screens/NotificationScreen/NotificationScreen';
import TimerScreen from '../screens/TimerScreen/TimerScreen';
import StudyTimeDetailScreen from '../screens/StudyTimeDetailScreen/StudyTimeDetailScreen';
import SeatReservationScreen from '../screens/SeatReservationScreen/SeatReservationScreen';
import SettingsScreen from '../screens/SettingsScreen/SettingsScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import NotificationSettingsScreen from '../screens/NotificationSettingsScreen/NotificationSettingsScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const insets = useSafeAreaInsets();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* 탭 스크린(기본) */}
      <Stack.Screen name="Tab" component={TabNavigator} />
      {/* 테스트 스크린 */}
      <Stack.Screen name="Test" component={TestScreen} />
      {/* 알림 스크린 */}
      <Stack.Screen name="Notification" component={NotificationScreen} />
      {/* 개별 학습 시간 스크린 */}
      <Stack.Screen name="StudyTimeDetail" component={StudyTimeDetailScreen} />
      {/* 좌석 예약 스크린 */}
      <Stack.Screen name="SeatReservation" component={SeatReservationScreen} />
      {/* 타이머 스크린 */}
      <Stack.Screen name="Timer" component={TimerScreen} />
      {/* 로그인 진입 페이지 */}
      <Stack.Screen name="Login" component={LoginScreen} />
      {/* 설정 스크린 */}
      <Stack.Screen name="Setting" component={SettingsScreen} />
      {/* 알림 설정 스크린 */}
      <Stack.Screen
        name="NotificationSettings"
        component={NotificationSettingsScreen}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
