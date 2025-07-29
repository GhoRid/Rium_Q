import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import SurveyTitle from '../../../components/Survey/SurveyTitle';

const StepConfidentSubject = () => {
  return (
    <View style={styles.container}>
      <SurveyTitle>자신있는 과목</SurveyTitle>
    </View>
  );
};

export default StepConfidentSubject;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    gap: 30,
  },
});
