import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View} from 'react-native';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import TimerScreen from '../screens/TimerScreen/TimerScreen';
import SettingsScreen from '../screens/SettingsScreen';
import PlanScreen from '../screens/PlanScreen/PlanScreen';
import MyPageScreen from '../screens/MyPageScreen/MyPageScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Tab.Navigator>
        <Tab.Screen name="홈" component={HomeScreen} />
        <Tab.Screen name="계획" component={PlanScreen} />
        <Tab.Screen name="공부 시작" component={TimerScreen} />
        <Tab.Screen name="내 통계" component={SettingsScreen} />
        <Tab.Screen name="마이페이지" component={MyPageScreen} />
      </Tab.Navigator>
    </View>
  );
};

export default TabNavigator;
