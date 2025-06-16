import {NavigationProp, useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import SvgIcon from '../../../components/SvgIcon';
import {RootStackParamList} from '../../../types/screens';

const SignUpBox = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>처음이신가요?</Text>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          // 여기에 회원가입 화면으로 이동하는 로직 추가
          console.log('이메일로 가입하기 클릭');
        }}>
        <View style={styles.signUpBox}>
          <Text style={styles.text2}>이메일로 가입하기</Text>
          <SvgIcon name="회원가입" size={16} color="black" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 30,
  },
  text: {
    fontSize: 14,
    color: '#BCBCBC',
    textAlign: 'center',
  },
  signUpBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  text2: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
});
