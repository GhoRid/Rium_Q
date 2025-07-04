import {StyleSheet, View} from 'react-native';
import BarChart from './charts/BarChart';

type AverageFocusTimeByDateProps = {
  data: {
    label: string;
    value: number;
  }[];
};

const AverageFocusTimeByDate = ({data}: AverageFocusTimeByDateProps) => {
  return (
    <View>
      <BarChart data={data} key={JSON.stringify(data)} />
    </View>
  );
};

export default AverageFocusTimeByDate;

const styles = StyleSheet.create({
  placeholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
