import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {RootStackParamList} from '../../../types/screens';
import AppText from '../../../components/AppText';

const studyData = [
  {
    date: '5월 17일 토요일',
    records: [
      {
        id: '1',
        time: '2시간 17분',
        subject: '국어',
        description: '2024학년도 수능 모의고사',
      },
      {
        id: '2',
        time: '2시간 17분',
        subject: '국어',
        description: '2024학년도 수능 모의고사',
      },
      {
        id: '3',
        time: '2시간 17분',
        subject: '국어',
        description: '2024학년도 수능 모의고사',
      },
      {
        id: '4',
        time: '2시간 17분',
        subject: '국어',
        description: '2024학년도 수능 모의고사',
      },
    ],
  },
];

const StudyTimeDetails = () => {
  const firstDateGroup = studyData[0];
  const previewRecords = firstDateGroup.records.slice(0, 3);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <View style={styles.titleBox}>
        <AppText style={styles.sectionTitle}>개별 학습 시간</AppText>
      </View>
      <AppText style={styles.dateText}>{firstDateGroup.date}</AppText>
      <FlatList
        data={previewRecords}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.card}>
            <AppText style={styles.timeText}>{item.time}</AppText>
            <View style={styles.row}>
              <AppText style={styles.bold}>{item.subject}</AppText>
              <AppText style={styles.divider}> | </AppText>
              <AppText style={styles.description}>{item.description}</AppText>
            </View>
          </View>
        )}
        scrollEnabled={false}
        style={styles.list}
      />
      {/* 자연스러운 fade-out */}
      {/* <LinearGradient
        colors={[
          'rgba(255,255,255,0)',
          'rgba(255,255,255,0.7)',
          'rgba(255,255,255,0.94)',
          'rgba(255,255,255,1)',
          'rgba(255,255,255,1)',
        ]}
        locations={[0, 0.35, 0.7, 0.92, 1]}
        style={styles.fadedOverlay}
        pointerEvents="none"
      /> */}
      {/* 더보기 버튼 */}
      <TouchableOpacity
        style={styles.moreButton}
        onPress={() => {
          navigation.navigate('StudyTimeDetail');
        }}
        activeOpacity={0.8}>
        <AppText style={styles.moreText}>더보기</AppText>
      </TouchableOpacity>
    </View>
  );
};

export default StudyTimeDetails;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  titleBox: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dateText: {
    fontSize: 14,
    color: '#B7BCC4',
    marginBottom: 15,
  },
  list: {
    // flexGrow: 0,
  },
  card: {
    marginBottom: 18,
    marginLeft: 10,
  },
  timeText: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bold: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#222',
  },
  divider: {
    marginHorizontal: 4,
    color: '#777',
  },
  description: {
    fontSize: 13,
    color: '#333',
  },
  fadedOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 60,
    height: 90,
    zIndex: 10,
  },
  moreButton: {
    zIndex: 20,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  moreText: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
});
