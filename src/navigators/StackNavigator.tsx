import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import TestScreen from '../screens/TestScreen/TestScreen';
import TabNavigator from './TabNavigator/TabNavigator';
import NotificationScreen from '../screens/NotificationScreen/NotificationScreen';
import TimerScreen from '../screens/TimerScreen/TimerScreen';
import StudyTimeDetailScreen from '../screens/StudyTimeDetailScreen/StudyTimeDetailScreen';
import SeatReservationScreen from '../screens/SeatReservationScreen/SeatReservationScreen';
import SettingsScreen from '../screens/SettingsScreen/SettingsScreen';
import NotificationSettingsScreen from '../screens/NotificationSettingsScreen/NotificationSettingsScreen';
import AnnouncementsScreen from '../screens/AnnouncementsScreen/AnnouncementsScreen';
import CustomerServiceCenterScreen from '../screens/CustomerServiceCenterScreen/CustomerServiceCenterScreen';
import EditMyInfoScreen from '../screens/EditMyInfoScreen/EditMyInfoScreen';
import ManageAccountScreen from '../screens/ManageAccountScreen/ManageAccountScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const insets = useSafeAreaInsets();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* 탭 스크린(기본) */}
      <Stack.Screen
        name="Tab"
        component={TabNavigator}
        options={{
          gestureEnabled: false,
        }}
      />
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
      {/* 내 정보 수정 스크린 */}
      <Stack.Screen name="EditMyInfo" component={EditMyInfoScreen} />
      {/* 설정 스크린 */}
      <Stack.Screen name="Setting" component={SettingsScreen} />
      {/* 알림 설정 스크린 */}
      <Stack.Screen
        name="NotificationSettings"
        component={NotificationSettingsScreen}
      />
      {/* 공지사항 스크린 */}
      <Stack.Screen name="Announcements" component={AnnouncementsScreen} />
      {/* 고객센터 스크린 */}
      <Stack.Screen
        name="CustomerServiceCenter"
        component={CustomerServiceCenterScreen}
      />
      {/* 계정 관리 스크린 */}
      <Stack.Screen name="ManageAccount" component={ManageAccountScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
