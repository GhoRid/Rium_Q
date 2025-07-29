import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import SurveyTitle from '../../../components/Survey/SurveyTitle';

const StepWeekendStudyTime = () => {
  return (
    <View style={styles.container}>
      <SurveyTitle>주말 학습 가능 시간</SurveyTitle>
    </View>
  );
};

export default StepWeekendStudyTime;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    gap: 30,
  },
});
