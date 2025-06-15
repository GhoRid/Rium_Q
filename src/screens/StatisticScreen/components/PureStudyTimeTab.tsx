import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import BarChart from './BarChart';
import {useState} from 'react';

interface PureStudyTimeTabProps {
  data: {
    label: string;
    value: number;
  }[];
}

type Period = '월별' | '주별' | '일별';

const PureStudyTimeTab = ({data}: PureStudyTimeTabProps) => {
  const [selected, setSelected] = useState<Period>('월별');
  const options: Period[] = ['월별', '주별', '일별'];

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
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
  },
});
