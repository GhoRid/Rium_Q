import {StyleSheet, Text, View} from 'react-native';

const StudyTimeDetailScreen = () => {
  return (
    <View>
      <Text style={styles.sectionTitle}>학습 시간 상세</Text>
    </View>
  );
};

export default StudyTimeDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});
