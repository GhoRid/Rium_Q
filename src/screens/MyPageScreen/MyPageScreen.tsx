import {View, StyleSheet} from 'react-native';
import UserProfile from './components/UserProfile';
import MenuList from './components/MenuList';

const MyPageScreen = () => {
  const menuList = [
    {label: '선호 학습 시간', route: 'PreferredTime'},
    {label: '학원 관리', route: 'AcademyScreen'},
    {label: '계획 관리', route: 'PlanScreen'},
    {label: '성적 관리', route: 'ScoreScreen'},
  ];

  return (
    <View style={styles.contianer}>
      <UserProfile />

      <MenuList menuList={menuList} />
    </View>
  );
};
export default MyPageScreen;

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
});
