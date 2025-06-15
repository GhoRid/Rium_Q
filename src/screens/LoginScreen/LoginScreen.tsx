import {StyleSheet, View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomHeader from '../../components/Header/CustomHeader';
import BackButtonHeaderLeft from '../../components/Header/BackButtonHeaderLeft';

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader leftItem={<BackButtonHeaderLeft />} />
      <View>
        <Text>로그인</Text>
      </View>
    </SafeAreaView>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
