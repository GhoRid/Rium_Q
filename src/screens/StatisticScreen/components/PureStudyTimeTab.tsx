import {StyleSheet, View} from 'react-native';
import BarChart from './BarChart';

interface PureStudyTimeTabProps {
  data: {
    label: string;
    value: number;
  }[];
}

type Period = '월별' | '주별' | '일별';

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
    gap: 20,
    alignItems: 'center',
  },
});
