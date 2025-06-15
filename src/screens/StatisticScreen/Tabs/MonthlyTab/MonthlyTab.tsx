import {StyleSheet, View} from 'react-native';

type MonthlyTabProps = {
  period: string;
};

const MonthlyTab = ({period}: MonthlyTabProps) => {
  return <View style={styles.container}></View>;
};
export default MonthlyTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
