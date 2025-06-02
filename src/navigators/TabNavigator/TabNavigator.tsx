import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View} from 'react-native';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import PlanScreen from '../../screens/PlanScreen/PlanScreen';
import TimerScreen from '../../screens/TimerScreen/TimerScreen';
import SettingsScreen from '../../screens/SettingsScreen';
import MyPageScreen from '../../screens/MyPageScreen/MyPageScreen';
import CustomTabBar from './CustomTabBar';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import CustomHeader from '../../components/Header/CustomHeader';
import SvgIcon from '../../components/SvgIcon';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
        // paddingBottom: insets.bottom,
        // paddingTop: insets.top,
      }}>
      <Tab.Navigator
        tabBar={props => <CustomTabBar {...props} />}
        screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="홈"
          component={HomeScreen}
          options={{
            header: () => (
              <CustomHeader
                leftItem={<SvgIcon name="앱로고1" size={24} />} // 왼쪽 아이콘
                rightItem={<SvgIcon name="알림" size={24} />} // 오른쪽 아이콘
              />
            ),
          }}
        />
        <Tab.Screen name="계획" component={PlanScreen} />
        <Tab.Screen name="공부 시작" component={TimerScreen} />
        <Tab.Screen name="통계" component={SettingsScreen} />
        <Tab.Screen name="마이페이지" component={MyPageScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default TabNavigator;
