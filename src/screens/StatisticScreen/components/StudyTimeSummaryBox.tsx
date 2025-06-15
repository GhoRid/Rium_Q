import {StyleSheet, View} from 'react-native';

const StudyTimeSummaryBox = () => {
  return <View style={styles.container}></View>;
};

export default StudyTimeSummaryBox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  reportItem: {
    marginBottom: 15,
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  itemTime: {
    fontSize: 16,
    color: '#555',
  },
});
