import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import StudyReport from './components/StudyReport';
import AchievementRate from './components/AchievementRate';
import Grid from './components/Grid';
import SvgIcon from '../../components/SvgIcon';
import StudyObject from './components/StudyObject';
import Carousel from './components/Carousel';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* <SvgIcon name="알림" /> */}
      {/* 상단: 과목 선택 + 시험명 */}
      <Carousel
        data={[
          {subject: '국어', aim: '모의고사 1회차'},
          {subject: '영어', aim: '모의고사 2회차'},
          {subject: '수학', aim: '모의고사 3회차'},
          {subject: '사회', aim: '모의고사 4회차'},
          {subject: '과학', aim: '모의고사 5회차'},
          {subject: '한국사', aim: '모의고사 6회차'},
        ]}
      />

      {/* 목표 달성률 */}
      <AchievementRate progress={50} />
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
});
