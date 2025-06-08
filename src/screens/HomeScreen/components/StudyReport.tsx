import {View, Text, StyleSheet} from 'react-native';

const StudyReport = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>내 학습 리포트</Text>
      <Text style={styles.cardSubtitle}>요약 리포트 메인에 뭐 넣을지?</Text>
    </View>
  );
};
export default StudyReport;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    height: '25%',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  cardSubtitle: {
    color: '#555',
  },
});
