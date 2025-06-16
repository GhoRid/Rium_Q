import {NavigatorScreenParams, ParamListBase} from '@react-navigation/native';

interface TabNavigatorParamList extends ParamListBase {
  Home: undefined;
  Plan: undefined;
  Statistic: undefined;
  MyPage: undefined;
  Test: undefined;
}
export interface RootStackParamList extends ParamListBase {
  Tab: NavigatorScreenParams<TabNavigatorParamList>;
  Home: undefined;
  Plan: undefined;
  Timer: undefined;
  Statistic: undefined;
  MyPage: undefined;
  Notification: undefined;
  Test: undefined;
  StudyTimeDetail: undefined;
  SeatReservation: undefined;
  Setting: undefined;
  LoginScreen: undefined;
}
