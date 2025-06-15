import {StyleSheet, View} from 'react-native';
import Filter from './Filter';
import {useState} from 'react';

const FILTERS = ['기간', '일간', '주간', '월간'];

const PeriodSelector = () => {
  const [selectedTag, setSelectedTag] = useState<string>('기간');

  return (
    <View style={styles.container}>
      <Filter
        filter={FILTERS}
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
      />
    </View>
  );
};

export default PeriodSelector;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
});
