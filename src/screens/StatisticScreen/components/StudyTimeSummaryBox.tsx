import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SvgIcon from '../../../components/SvgIcon';
import shadow from '../../../styles/shadow';

const StudyTimeSummaryBox = () => {
  return (
    <View style={styles.container}>
      {/* 날짜 정보 */}
      <View style={styles.header}>
        <Text style={styles.periodLabel}>지난 28일</Text>
        <View style={styles.dateRangeContainer}>
          <Text style={styles.dateRangeText}>5/15 ~ 6/11</Text>
          <SvgIcon name="아래방향" size={16} />
        </View>
      </View>

      {/* 통계 카드 */}
      <View style={styles.card}>
        {/* 총 시간 */}
        <View style={styles.timeItem}>
          <Text style={styles.titleText}>총 시간</Text>
          <Text style={styles.valueText}>44:44:44</Text>
        </View>

        {/* 하루 평균 */}
        <View style={styles.timeItem}>
          <Text style={styles.titleText}>하루 평균</Text>
          <Text style={styles.valueText}>00:44:44</Text>
        </View>
      </View>
    </View>
  );
};

export default StudyTimeSummaryBox;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  periodLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  dateRangeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  dateRangeText: {
    color: '#999',
    fontSize: 14,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    ...shadow,
  },
  timeItem: {
    alignItems: 'center',
  },
  titleText: {
    color: '#0667FF',
    fontSize: 14,
    marginBottom: 4,
  },
  valueText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#222',
  },
});
