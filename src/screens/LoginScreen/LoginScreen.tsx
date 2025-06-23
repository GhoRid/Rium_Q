import {Alert, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import LoginButton from './components/LoginButton';
import SvgIcon from '../../components/SvgIcon';
import SignUpBox from './components/SignUpBox';
import {useEffect, useState} from 'react';
import {signInWithKakaoAndSave} from '../../services/auth/kakao';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
  const [resultText, setResultText] = useState<string>('');

  const handleKakaoLogin = async () => {
    try {
      const data = await signInWithKakaoAndSave();
      setResultText(JSON.stringify(data, null, 2));
    } catch (err) {
      console.error('카카오 로그인 실패:', err);
      Alert.alert(
        '로그인 실패',
        '카카오 로그인에 실패했습니다.\n다시 시도해주세요.',
      );
    }
  };

  useEffect(() => {
    const saveTokens = async () => {
      if (resultText) {
        Alert.alert('로그인 결과', resultText);
        const parsedResult = JSON.parse(resultText);
        await AsyncStorage.setItem('accessToken', parsedResult.jwt);
        await AsyncStorage.setItem('refreshToken', parsedResult.refreshToken);
      }
    };
    saveTokens();
  }, [resultText]);

  return (
    <SafeAreaView style={styles.container}>
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
          onPress={handleKakaoLogin}
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
