import {View, Text, StyleSheet} from 'react-native';
import LineGraph from './LineGraph';
import shadow from '../../../styles/shadow';
import {useState} from 'react';

const StudyReport = () => {
  const [parentWidth, setParentWidth] = useState(0);

  return (
    <View
      style={styles.card}
      onLayout={e => {
        const width = e.nativeEvent.layout.width;
        setParentWidth(width);
      }}>
      <Text style={styles.cardTitle}>내 학습 리포트</Text>

      <LineGraph parentWidth={parentWidth} />
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
  },
});
