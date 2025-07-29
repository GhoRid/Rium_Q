import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import SurveyTitle from '../../../components/Survey/SurveyTitle';

const StepSubject = () => {
  return (
    <View style={styles.container}>
      <SurveyTitle>가장 주력으로 준비하는 과목</SurveyTitle>
    </View>
  );
};

export default StepSubject;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    gap: 30,
  },
});
