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
import SettingsScreen from '../screens/SettingsScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const insets = useSafeAreaInsets();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* 탭 스크린(기본) */}
      <Stack.Screen
        name="Tab"
        navigationKey="Tab"
        component={TabNavigator}
        options={{headerShown: false}}
      />
      {/* 테스트 스크린 */}
      <Stack.Screen name="Test" component={TestScreen} navigationKey="test" />
      <Stack.Screen name="Notification" component={NotificationScreen} />

      {/* 개별 학습 시간 스크린 */}
      <Stack.Screen name="StudyTimeDetail" component={StudyTimeDetailScreen} />
      {/* 좌석 예약 스크린 */}
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
      {/* 설정 스크린 */}
      <Stack.Screen
        name="Setting"
        component={SettingsScreen}
        options={{
          header: () => (
            <CustomHeader leftItem={<BackButtonHeaderLeft pageName="설정" />} />
          ),
        }}
      />
      {/* 타이머 스크린 */}
      <Stack.Screen
        name="Timer"
        component={TimerScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
