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
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../types/screens';
import palette from '../../styles/palette';
import StatisticScreen from '../../screens/StatisticScreen/StatisticScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
        {/* 홈 스크린 */}
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
        {/* 계획 스크린 */}
        <Tab.Screen
          name="Plan"
          component={PlanScreen}
          options={{tabBarLabel: '계획', headerShown: false}}
        />
        {/* 테스트 스크린 */}
        <Tab.Screen
          name="Test"
          navigationKey="Test"
          component={TestScreen}
          options={{headerShown: false}}
        />
        {/* 통계 스크린 */}
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
        {/* 마이페이지 스크린 */}
        <Tab.Screen
          name="MyPage"
          component={MyPageScreen}
          options={{
            tabBarLabel: '마이',
            header: () => (
              <CustomHeader
                leftItem={
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{fontSize: 24, fontWeight: '700'}}>익끼</Text>
                    <Text style={{fontSize: 24}}>님</Text>
                  </View>
                }
                rightItem={
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Setting');
                    }}>
                    <SvgIcon name="설정" size={30} />
                  </TouchableOpacity>
                }
              />
            ),
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default TabNavigator;
