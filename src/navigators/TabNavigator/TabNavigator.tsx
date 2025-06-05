import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, TouchableOpacity, View} from 'react-native';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import PlanScreen from '../../screens/PlanScreen/PlanScreen';
import CustomTabBar from './CustomTabBar';
import MyPageScreen from '../../screens/MyPageScreen/MyPageScreen';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import CustomHeader from '../../components/Header/CustomHeader';
import SvgIcon from '../../components/SvgIcon';
import TestScreen from '../../screens/TestScreen/TestScreen';
import StatisticScreen from '../../screens/\bStatisticScreen/\bStatisticScreen';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../types/screens';
import palette from '../../utils/palette';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <Tab.Navigator
        tabBar={props => <CustomTabBar {...props} />}
        // screenOptions={{headerShown: false}}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: '홈',
            header: () => (
              <CustomHeader
                leftItem={
                  <SvgIcon
                    name="앱로고2"
                    width={65}
                    color={palette.app_main_color}
                  />
                } // 왼쪽 아이콘
                rightItem={
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Notification');
                      console.log('알림 아이콘 클릭됨');
                    }}>
                    <SvgIcon name="알림" size={35} />
                  </TouchableOpacity>
                } // 오른쪽 아이콘
              />
            ),
          }}
        />
        <Tab.Screen
          name="Plan"
          // tabBarLabel="Plan"
          component={PlanScreen}
          options={{tabBarLabel: '계획', headerShown: false}}
        />
        <Tab.Screen
          name="Test"
          navigationKey="Test"
          component={TestScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Statistic"
          component={StatisticScreen}
          options={{
            tabBarLabel: '통계',
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
          name="MyPage"
          component={MyPageScreen}
          options={{tabBarLabel: '마이', headerShown: false}}
        />
      </Tab.Navigator>
    </View>
  );
};

export default TabNavigator;
