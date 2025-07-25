import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import CustomHeader from '../../components/Header/CustomHeader';
import AppText from '../../components/AppText';
import App from '../../../App';
import DDayHeader from './components/DDayHeader';
import palette from '../../styles/palette';
const PlanScreen = () => {
  return (
    <View style={styles.container}>
      <CustomHeader
        leftItem={<AppText style={styles.headerTitle}>계획</AppText>}
        rightItem={
          <TouchableOpacity style={styles.headerRightButton}>
            <AppText style={styles.headerRightButtonText}>목표 재설정</AppText>
          </TouchableOpacity>
        }
      />
      <DDayHeader />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: palette.app_main_color,
  },
  headerRightButton: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: '#E8EAED',
    borderRadius: 15,
  },
  headerRightButtonText: {
    fontSize: 14,
    fontWeight: 400,
    color: '#333',
  },
});

export default PlanScreen;
