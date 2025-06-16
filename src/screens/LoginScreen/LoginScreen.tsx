import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomHeader from '../../components/Header/CustomHeader';
import BackButtonHeaderLeft from '../../components/Header/BackButtonHeaderLeft';
import LoginButton from './components/LoginButton';

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader leftItem={<BackButtonHeaderLeft />} />
      <View>
        <Text>로그인</Text>
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
  loginButtons: {
    gap: 16,
  },
});
