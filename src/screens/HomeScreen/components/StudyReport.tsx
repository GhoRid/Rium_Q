import {View, Text, StyleSheet} from 'react-native';
import LineGraph from './LineGraph';
import shadow from '../../../styles/shadow';

const StudyReport = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>내 학습 리포트</Text>
      <Text style={styles.cardSubtitle}>요약 리포트 메인에 뭐 넣을지?</Text>

      <LineGraph />
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
    height: '30%',
    ...shadow,
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
