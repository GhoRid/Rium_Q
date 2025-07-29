import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import SurveyTitle from '../../../components/Survey/SurveyTitle';

const StepWeekdayStudyTime = () => {
  return (
    <View style={styles.container}>
      <SurveyTitle>평일 학습 가능 시간</SurveyTitle>
    </View>
  );
};

export default StepWeekdayStudyTime;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    gap: 30,
  },
});
