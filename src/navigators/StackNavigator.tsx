import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import TestScreen from '../screens/TestScreen/TestScreen';
import TabNavigator from './TabNavigator/TabNavigator';
import NotificationScreen from '../screens/NotificationScreen/NotificationScreen';
import TimerScreen from '../screens/TimerScreen/TimerScreen';
import StudyTimeDetailScreen from '../screens/StudyTimeDetailScreen/StudyTimeDetailScreen';
import SeatReservationScreen from '../screens/SeatReservationScreen/SeatReservationScreen';
import SettingsScreen from '../screens/SettingsScreen/SettingsScreen';

import AnnouncementsScreen from '../screens/AnnouncementsScreen/AnnouncementsScreen';
import CustomerServiceCenterScreen from '../screens/CustomerServiceCenterScreen/CustomerServiceCenterScreen';
import EditMyInfoScreen from '../screens/EditMyInfoScreen/EditMyInfoScreen';
import SettingAccountScreen from '../screens/SettingAccountScreen/SettingAccountScreen';
import SettingNotificationScreen from '../screens/SettingNotification/SettingNotification';
import PreferredTimeScreen from '../screens/PreferredTimeScreen/PreferredTimeScreen';

const Stack = createNativeStackNavigator();

type StackNavigatorProps = {
  setIsLoggedIn: (isLoggedIn: boolean) => void;
};

const StackNavigator = ({setIsLoggedIn}: StackNavigatorProps) => {
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
      {/* 선호 학습 시간 스크린 */}
      <Stack.Screen name="PreferredTime" component={PreferredTimeScreen} />
      {/* 설정 스크린 */}
      <Stack.Screen name="Setting" component={SettingsScreen} />
      {/* 알림 설정 스크린 */}
      <Stack.Screen
        name="SettingNotification"
        component={SettingNotificationScreen}
      />
      {/* 공지사항 스크린 */}
      <Stack.Screen name="Announcements" component={AnnouncementsScreen} />
      {/* 고객센터 스크린 */}
      <Stack.Screen
        name="CustomerServiceCenter"
        component={CustomerServiceCenterScreen}
      />
      {/* 계정 관리 스크린 */}
      <Stack.Screen
        name="SettingAccount"
        children={props => (
          <SettingAccountScreen {...props} setIsLoggedIn={setIsLoggedIn} />
        )}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
