import {NavigationProp, useNavigation} from '@react-navigation/native';
import {View, StyleSheet, Text} from 'react-native';
import {RootStackParamList} from '../../types/screens';
import UserProfile from './components/UserProfile';
import MenuList from './components/MenuList';
import AppText from '../../components/AppText';

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
      <AppText style={styles.test}>
        아아아여억라ㅣㄷㅈ링나라디ㅐ벵,차2025 asdc
      </AppText>
      <AppText style={styles.test2}>
        아아아여억라ㅣㄷㅈ링나라디ㅐ벵,차2025 asdc
      </AppText>

      <AppText style={styles.test3}>
        아아아여억라ㅣㄷㅈ링나라디ㅐ벵,차2025 asdc
      </AppText>
      <AppText style={styles.test4}>
        아아아여억라ㅣㄷㅈ링나라디ㅐ벵,차2025 asdc
      </AppText>
      <AppText style={styles.test5}>
        아아아여억라ㅣㄷㅈ링나라디ㅐ벵,차2025 asdc
      </AppText>
      <AppText style={styles.test6}>
        아아아여억라ㅣㄷㅈ링나라디ㅐ벵,차2025 asdc
      </AppText>
      <AppText style={styles.test7}>
        아아아여억라ㅣㄷㅈ링나라디ㅐ벵,차2025 asdc
      </AppText>
      <AppText style={styles.test00}>
        아아아여억라ㅣㄷㅈ링나라디ㅐ벵,차2025 asdc
      </AppText>
      <AppText style={styles.test}>
        아아아여억라ㅣㄷㅈ링나라디ㅐ벵,차2025 asdc
      </AppText>
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
  test: {
    fontSize: 20,
    // fontFamily: 'NotoSansKR-Thin', // 꼭 등록된 이름 그대로 써야 함
    fontWeight: 'black', // Thin은 100으로 설정
  },
  test2: {
    fontSize: 20,
    // fontFamily: 'NotoSansKR-ExtraLight', // 꼭 등록된 이름 그대로 써야 함
  },
  test3: {
    fontSize: 20,
    // fontFamily: 'NotoSansKR-Light', // 꼭 등록된 이름 그대로 써야
  },
  test4: {
    fontSize: 20,
    // fontFamily: 'NotoSansKR-Regular', // 꼭 등록된 이름 그ㅁ대로 써야 함
  },
  test5: {
    fontSize: 20,
    fontWeight: 100,
    // fontFamily: 'NotoSansKR-Medium', // 꼭 등록된 이름 그대로 써야 함
  },
  test6: {
    fontSize: 20,
    // fontFamily: 'NotoSansKR-SemiBold', // 꼭 등록된 이름 그대로 써야 함
  },
  test7: {
    fontSize: 20,
    // fontFamily: 'NotoSansKR-ExtraBold', // 꼭 등록된 이름 그대로 써야 함
  },
  test00: {
    fontSize: 20,
    fontFamily: 'NotoSansKR-Black', // 꼭 등록된 이름 그대로 써야 함
  },
});
