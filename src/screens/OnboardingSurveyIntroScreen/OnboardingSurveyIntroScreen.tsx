import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import AppText from '../../components/AppText';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {OnboardingStackParamList} from '../../navigators/OnboardingNavigator';
import SkipSurveyModal from './components/SkipSurveyModal';

type OnboardingSurveyIntroScreenProps = {
  onFinish: () => void; // "다음에 하기" 누를 때 호출
};

const OnboardingSurveyIntroScreen = ({
  onFinish,
}: OnboardingSurveyIntroScreenProps) => {
  const navigation = useNavigation<NavigationProp<OnboardingStackParamList>>();

  const [showModal, setShowModal] = useState(false);

  const handleSkip = () => {
    setShowModal(true);
  };

  const confirmSkip = () => {
    onFinish();
    setShowModal(false);
  };

  const handleStartSurvey = () => {
    navigation.navigate('survey');
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

      {/* 모달창 부분 */}
      <SkipSurveyModal
        visible={showModal}
        onConfirm={confirmSkip}
        onRequestClose={() => setShowModal(false)}
      />
    </SafeAreaView>
  );
};

export default OnboardingSurveyIntroScreen;

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
