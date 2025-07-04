import {FlatList, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomHeader from '../../components/Header/CustomHeader';
import BackButtonHeaderLeft from '../../components/Header/BackButtonHeaderLeft';
import AppText from '../../components/AppText';

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

const StudyTimeDetailScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader
        leftItem={<BackButtonHeaderLeft screenName="개별 학습 시간" />}
      />
      <View style={styles.contentContainer}>
        <AppText style={styles.sectionTitle}></AppText>

        <AppText style={styles.dateText}>{studyData[0].date}</AppText>
        <FlatList
          data={studyData[0].records}
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
          style={styles.list}
        />
      </View>
    </SafeAreaView>
  );
};

export default StudyTimeDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainer: {
    padding: 20,
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
  list: {},
  card: {
    marginBottom: 18,
    marginLeft: 10,
  },
  timeText: {
    fontSize: 18,
    fontWeight: 600,
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
});
