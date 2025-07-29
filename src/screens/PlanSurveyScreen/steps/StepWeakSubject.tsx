import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import SurveyTitle from '../../../components/Survey/SurveyTitle';

const StepWeakSubject = () => {
  return (
    <View style={styles.container}>
      <SurveyTitle>취약한 과목</SurveyTitle>
    </View>
  );
};

export default StepWeakSubject;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    gap: 30,
  },
});
