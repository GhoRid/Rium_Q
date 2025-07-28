import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TouchableOpacity, View} from 'react-native';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import PlanScreen from '../../screens/PlanScreen/PlanScreen';
import CustomTabBar from './CustomTabBar';
import MyPageScreen from '../../screens/MyPageScreen/MyPageScreen';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomHeader from '../../components/Header/CustomHeader';
import SvgIcon from '../../components/SvgIcon';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../types/screens';
import {palette} from '../../styles/palette';
import StatisticScreen from '../../screens/StatisticScreen/StatisticScreen';
import EmptyScreen from '../../screens/EmptyScreen';
import AppText from '../../components/AppText';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
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
          name="Empty"
          component={EmptyScreen}
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
                  <AppText
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                    }}>
                    익끼 님의 학습 리포트
                  </AppText>
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
                    <AppText style={{fontSize: 24, fontWeight: '700'}}>
                      익끼
                    </AppText>
                    <AppText style={{fontSize: 24}}>님</AppText>
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
