import React, {useState} from 'react';
import {View, StyleSheet, Pressable, Modal} from 'react-native';
import StudyReport from './components/StudyReport';
import AchievementRate from './components/AchievementRate';
import Grid from './components/Grid';
import Carousel from './components/Carousel';
import StudyObjectModal from './components/StudyObjectModal';
import AsyncStorage from '@react-native-async-storage/async-storage';

const studyData = [
  {subject: '국어', aim: '모의고사 1회차'},
  {subject: '영어', aim: '모의고사 2회차'},
  {subject: '수학', aim: '모의고사 3회차'},
  {subject: '사회', aim: '모의고사 4회차'},
  {subject: '과학', aim: '모의고사 5회차'},
  {subject: '한국사', aim: '모의고사 6회차'},
];

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      {/* <SvgIcon name="알림" /> */}
      {/* 상단: 과목 선택 + 시험명 */}
      <Carousel data={studyData} setModalVisible={setModalVisible} />
      {/* 모달 */}
      <StudyObjectModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        data={studyData}
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
    // padding: 20,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 40,
  },
});
