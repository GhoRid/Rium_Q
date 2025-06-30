import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import AppText from '../../components/AppText';
import {SafeAreaView} from 'react-native-safe-area-context';

type Props = {
  onFinish: () => void; // "다음에 하기" 누를 때 호출
};

const OnboardingSurveyScreen = ({onFinish}: Props) => {
  const handleStartSurvey = () => {
    // 설문 시작하는 로직 (ex. navigation to next step)
    console.log('설문 시작');
    // 설문 완료 후에 onFinish() 호출할 수도 있음
  };

  const handleSkip = () => {
    onFinish(); // RootNavigator에서 skipSurvey → true로 전환
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textBlock}>
        <AppText style={styles.line}>
          <AppText style={styles.normal}>익끼님에게</AppText>
        </AppText>
        <AppText style={styles.line}>
          <AppText style={styles.bold}>딱 맞는 학습</AppText>
          <AppText style={styles.normal}>을 위해,</AppText>
        </AppText>
        <AppText style={styles.line}>
          <AppText style={styles.normal}>설문에 참여해 주세요!</AppText>
        </AppText>
      </View>

      <View style={{flex: 1}} />

      <TouchableOpacity
        style={styles.primaryButton}
        onPress={handleStartSurvey}>
        <AppText style={styles.primaryText}>네 알려줄게요</AppText>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleSkip}>
        <AppText style={styles.skipText}>다음에 알려줄게요</AppText>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OnboardingSurveyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#fff',
  },
  textBlock: {
    marginTop: 100,
  },
  line: {
    flexDirection: 'row',
    lineHeight: 32,
  },
  normal: {
    fontSize: 28,
    fontWeight: 400,
    lineHeight: 40,
  },
  bold: {
    fontSize: 28,
    fontWeight: 700,
    lineHeight: 40,
  },
  primaryButton: {
    backgroundColor: '#0B1F44',
    height: 55,
    borderRadius: 55,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  skipText: {
    marginTop: 16,
    textAlign: 'center',
    color: '#888',
    fontSize: 14,
  },
});
