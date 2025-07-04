import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import BottomButton from './components/BottomButton';
import AppText from '../../components/AppText';

type OnboardingSurveyFinishScreenProps = {
  onFinish: () => void; // "다음에 하기" 누를 때 호출
};

const OnboardingSurveyFinishedScreen = ({
  onFinish,
}: OnboardingSurveyFinishScreenProps) => {
  // 쿼리문을 날려서 API가 날라가고 다 날라가면 홈 버튼이 나와서 그때서야 onFinish를 호출 가능하게

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textBox}>
        <AppText style={styles.line}>익끼 님을 위한</AppText>
        <AppText style={styles.line}>
          <AppText style={styles.bold}>딱 맞는 학습 플랜</AppText>을
        </AppText>
        <AppText style={styles.line}>세우고 있어요</AppText>
      </View>

      <View style={{flex: 1}} />
      <BottomButton
        onPress={onFinish} // 홈으로 버튼 클릭 시 onFinish 호출
      />
    </SafeAreaView>
  );
};
export default OnboardingSurveyFinishedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  textBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  line: {
    fontSize: 24,
    lineHeight: 40,
  },
  bold: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
