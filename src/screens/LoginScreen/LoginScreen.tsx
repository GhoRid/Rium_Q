import {Alert, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import LoginButton from './components/LoginButton';
import SvgIcon from '../../components/SvgIcon';
import SignUpBox from './components/SignUpBox';
import {login as kakaoLogin} from '@react-native-seoul/kakao-login';
import {useState} from 'react';

const LoginScreen = () => {
  const [result, setResult] = useState('');

  const signInWithKakao = async () => {
    // 카카오 계정 로그인 기능
    try {
      const token = await kakaoLogin();
      setResult(JSON.stringify(token));
    } catch (err) {
      console.log('login err', err);
      Alert.alert(
        '로그인 실패',
        '카카오 계정 로그인이 실패했습니다. \n다시 시도해주세요.',
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <CustomHeader leftItem={<BackButtonHeaderLeft />} /> */}

      <View style={{flex: 1}} />

      <View style={styles.logoBox}>
        <SvgIcon name="앱로고2" width={130} height={50} />
      </View>

      <View style={{flex: 1}} />

      <View style={styles.loginButtons}>
        <LoginButton
          text="카카오 로그인"
          backgroundColor="#FEE500"
          textColor="#000"
          iconName="카카오로그인"
          onPress={signInWithKakao}
        />
        <LoginButton
          text="애플 로그인"
          backgroundColor="#000"
          textColor="#fff"
          iconName="애플로고"
        />
        <LoginButton
          text="이메일 로그인"
          backgroundColor="#fff"
          textColor="#333"
          borderColor="#BCBCBC"
        />
      </View>
      <SignUpBox />
    </SafeAreaView>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 25,
  },
  logoBox: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButtons: {
    gap: 16,
  },
});
