import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

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
    <View style={styles.container}>
      <Text style={styles.title}>
        <Text style={styles.nickname}>익끼님에게{'\n'}</Text>
        <Text>딱 맞는 학습을 위해,{'\n'}설문에 참여해 주세요!</Text>
      </Text>

      <TouchableOpacity
        style={styles.primaryButton}
        onPress={handleStartSurvey}>
        <Text style={styles.primaryText}>네 알려줄게요</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleSkip}>
        <Text style={styles.skipText}>다음에 알려줄게요</Text>
      </TouchableOpacity>
    </View>
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
  title: {
    fontSize: 22,
    fontWeight: '400',
    textAlign: 'left',
    marginBottom: 48,
    lineHeight: 32,
  },
  nickname: {
    fontWeight: '600',
    fontSize: 24,
  },
  primaryButton: {
    backgroundColor: '#0B1F44',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
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
