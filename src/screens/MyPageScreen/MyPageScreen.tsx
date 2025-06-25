import {NavigationProp, useNavigation} from '@react-navigation/native';
import {View, StyleSheet} from 'react-native';
import {RootStackParamList} from '../../types/screens';
import UserProfile from './components/UserProfile';
import MenuList from './components/MenuList';

const MyPageScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style={styles.contianer}>
      <UserProfile />

      <MenuList
        menuList={['선호 학습 시간', '학원 관리', '계획 관리', '성적 관리']}
      />

      {/* <Pressable
        onPress={() => navigation.navigate('Login')}
        style={{
          backgroundColor: 'orange',
          padding: 30,
          borderRadius: 5,
          marginTop: 20,
        }}>
        <Text>Go to Login</Text>
      </Pressable> */}
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
