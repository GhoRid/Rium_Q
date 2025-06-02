import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View} from 'react-native';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import PlanScreen from '../../screens/PlanScreen/PlanScreen';
import TimerScreen from '../../screens/TimerScreen/TimerScreen';
import SettingsScreen from '../../screens/SettingsScreen';
import MyPageScreen from '../../screens/MyPageScreen/MyPageScreen';
import CustomTabBar from './CustomTabBar';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{flex: 1, backgroundColor: 'white', paddingBottom: insets.bottom}}>
      <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
        <Tab.Screen name="홈" component={HomeScreen} />
        <Tab.Screen name="계획" component={PlanScreen} />
        <Tab.Screen name="공부 시작" component={TimerScreen} />
        <Tab.Screen name="통계" component={SettingsScreen} />
        <Tab.Screen name="마이페이지" component={MyPageScreen} />
      </Tab.Navigator>
    </View>
  );
};

export default TabNavigator;
