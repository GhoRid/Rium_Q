import React from 'react';
import {StyleSheet} from 'react-native';
import AppText from './AppText';

type Props = {
  children: React.ReactNode;
};

const SurveyTitle = ({children}: Props) => {
  return <AppText style={styles.title}>{children}</AppText>;
};

export default SurveyTitle;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
