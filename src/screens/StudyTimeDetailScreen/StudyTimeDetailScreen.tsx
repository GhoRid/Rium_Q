import {FlatList, StyleSheet, Text, View} from 'react-native';

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
    <View style={styles.container}>
      <Text style={styles.sectionTitle}></Text>

      <Text style={styles.dateText}>{studyData[0].date}</Text>
      <FlatList
        data={studyData[0].records}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Text style={styles.timeText}>{item.time}</Text>
            <View style={styles.row}>
              <Text style={styles.bold}>{item.subject}</Text>
              <Text style={styles.divider}> | </Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </View>
        )}
        style={styles.list}
      />
    </View>
  );
};

export default StudyTimeDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: 'white',
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
});
