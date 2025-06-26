import {NavigatorScreenParams, ParamListBase} from '@react-navigation/native';

interface TabNavigatorParamList extends ParamListBase {
  Home: undefined;
  Plan: undefined;
  Statistic: undefined;
  MyPage: undefined;
  Empty: undefined;
}
export interface RootStackParamList extends ParamListBase {
  Tab: NavigatorScreenParams<TabNavigatorParamList>;
  Login: undefined;
  Notification: undefined;
  Test: undefined;
  StudyTimeDetail: undefined;
  SeatReservation: undefined;
  Setting: undefined;
  SettingNotification: undefined;
  EditMyInfo: undefined;
  SettingAccount: undefined;
}
