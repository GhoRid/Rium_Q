import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import StudyReport from './components/StudyReport';
import AchievementRate from './components/AchievementRate';
import Grid from './components/Grid';
import SvgIcon from '../../components/SvgIcon';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* <SvgIcon name="알림" /> */}
      {/* 상단: 과목 선택 + 시험명 */}
      <View style={styles.row}>
        <Pressable style={styles.subjectChip}>
          <Text style={styles.subjectChipText}>국어</Text>
        </Pressable>
        <Text style={styles.testText}>2024학년도 수능 모의고사</Text>
      </View>

      {/* 목표 달성률 */}
      <AchievementRate />
      {/* 카드: 내 학습 리포트 */}
      <StudyReport />

      {/* 랭킹 + 좌석 예약 + 석왕이 깨기 */}
      <Grid />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingBottom: 40,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  subjectChip: {
    backgroundColor: '#E6EEFF',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 12,
    marginRight: 8,
  },
  subjectChipText: {
    color: '#001742',
    fontWeight: 'bold',
  },
  testText: {
    fontSize: 16,
    color: '#222',
  },
});
