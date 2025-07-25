import {StyleSheet, View} from 'react-native';
import Filter from './Filter';

type FilterProps = {
  filters: string[];
  selectedPeriod: string;
  setSelectedPeriod: (tag: string) => void;
};

const PeriodSelector = ({
  filters,
  selectedPeriod,
  setSelectedPeriod,
}: FilterProps) => {
  return (
    <View style={styles.container}>
      <Filter
        filter={filters}
        selectedTag={selectedPeriod}
        setSelectedTag={setSelectedPeriod}
      />
    </View>
  );
};

export default PeriodSelector;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
