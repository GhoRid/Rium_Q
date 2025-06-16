import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import LoginButton from './components/LoginButton';
import SvgIcon from '../../components/SvgIcon';
import SignUpBox from './components/SignUpBox';

const LoginScreen = () => {
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
