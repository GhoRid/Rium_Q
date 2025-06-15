import {StyleSheet, View} from 'react-native';
import BarChart from './charts/BarChart';

interface PureStudyTimeTabProps {
  data: {
    label: string;
    value: number;
  }[];
}

const PureStudyTimeTab = ({data}: PureStudyTimeTabProps) => {
  return (
    <View style={styles.container}>
      <BarChart data={data} key={JSON.stringify(data)} />
    </View>
  );
};

export default PureStudyTimeTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
