import {StyleSheet, Text, View} from 'react-native';
import BarChart from './BarChart';

const sampleData = [
  {label: '24.12', value: 125},
  {label: '1월', value: 235},
  {label: '2월', value: 146},
  {label: '3월', value: 181},
  {label: '4월', value: 143},
  {label: '이번 달', value: 192},
];

const sampleDataExample = [
  {label: '5월', value: 210},
  {label: '6월', value: 165},
  {label: '7월', value: 278},
  {label: '8월', value: 193},
  {label: '9월', value: 227},
  {label: '10월', value: 154},
];

const StudyTimeOverviewSection = () => {
  return (
    <View style={styles.container}>
      <BarChart
        data={sampleDataExample}
        key={JSON.stringify(sampleDataExample)}
      />
    </View>
  );
};

export default StudyTimeOverviewSection;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 10,
    marginBottom: 10,
  },
});
