import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import Filter from './components/Filter';
import NoticeItem from './components/NoticeItem';

// 예시 알림 데이터
const todayNotices = [
  {
    id: 1,
    icon: '🔔',
    iconColor: '#A8C9FF',
    time: '5분전',
    text: '수학 과목은 이번 주 평균보다 진도율이 낮아요.\n오늘은 수학에 집중해볼까요?',
    dot: true,
  },
  {
    id: 2,
    icon: '✏️',
    iconColor: '#A8C9FF',
    time: '5분전',
    text: '석왕님이 방금 공부를 시작했습니다!',
    dot: true,
  },
  {
    id: 3,
    icon: '📅',
    iconColor: '#A8C9FF',
    time: '5분전',
    text: '내일은 6월 모의고사 예정일입니다.\n준비는 잘 되어가고 있나요?',
    dot: false,
  },
  {
    id: 4,
    icon: '📅',
    iconColor: '#A8C9FF',
    time: '5분전',
    text: '이번 주 3일 연속 공부중!\n연속 학습 기록을 이어가볼까요?',
    dot: false,
  },
];

const oldNotices = [
  {
    id: 5,
    icon: '👤',
    iconColor: '#A8C9FF',
    time: '어제',
    text: '🎉 아기 석왕이 등극!🎉\n레벨 업을 축하해요 👏',
    dot: false,
  },
  {
    id: 6,
    icon: '🔔',
    iconColor: '#A8C9FF',
    time: '어제',
    text: '수학 과목은 이번 주 평균보다 진도율이 낮아요.',
    dot: false,
  },
];

const FILTERS = ['전체', '친구', '일정', '내 공부'];

const NotificationScreen = () => {
  const [selectedFilter, setSelectedFilter] = useState('전체');

  return (
    <View style={styles.container}>
      <Filter
        filter={FILTERS}
        selectedTag={selectedFilter}
        setSelectedTag={setSelectedFilter}
      />
      <ScrollView contentContainerStyle={styles.scrollBox}>
        <Text style={styles.dateText}>오늘</Text>
        {todayNotices.map(notice => (
          <NoticeItem key={notice.id} notice={notice} />
        ))}
      </ScrollView>
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  scrollBox: {
    // flex: 1,
  },
  dateText: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
});
