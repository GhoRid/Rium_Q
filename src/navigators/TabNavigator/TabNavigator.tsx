import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, View} from 'react-native';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import PlanScreen from '../../screens/PlanScreen/PlanScreen';
import TimerScreen from '../../screens/TimerScreen/TimerScreen';
import SettingsScreen from '../../screens/SettingsScreen';
import MyPageScreen from '../../screens/MyPageScreen/MyPageScreen';
import CustomTabBar from './CustomTabBar';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import CustomHeader from '../../components/Header/CustomHeader';
import SvgIcon from '../../components/SvgIcon';
import TestScreen from '../../screens/TestScreen';
import StatisticScreen from '../../screens/\bStatisticScreen/\bStatisticScreen';

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
        // screenOptions={{headerShown: false}}
      >
        <Tab.Screen
          name="홈"
          component={HomeScreen}
          options={{
            header: () => (
              <CustomHeader
                leftItem={<SvgIcon name="앱로고2" width={65} color="#1C2E4A" />} // 왼쪽 아이콘
                rightItem={<SvgIcon name="알림" size={35} />} // 오른쪽 아이콘
              />
            ),
          }}
        />
        <Tab.Screen
          name="계획"
          component={PlanScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="공부 시작"
          component={TestScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="통계"
          component={StatisticScreen}
          options={{
            header: () => (
              <CustomHeader
                leftItem={
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                    }}>
                    익끼 님의 학습 리포트
                  </Text>
                } // 왼쪽 아이콘
              />
            ),
          }}
        />
        <Tab.Screen
          name="마이페이지"
          component={MyPageScreen}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default TabNavigator;
