import {StyleSheet, TouchableOpacity, View} from 'react-native';
import AppText from '../../../components/AppText';

type FilterProps = {
  filter: any;
  selectedTag: string;
  setSelectedTag: (tag: string) => void;
};

const Filter = ({
  filter, //초기 필터 데이터
  selectedTag,
  setSelectedTag,
}: FilterProps) => {
  return (
    <View style={styles.gapBox}>
      {filter.map((element: string, idx: number) => (
        <TouchableOpacity
          key={idx}
          style={
            selectedTag == element
              ? styles.selectedFilterButton
              : styles.filterButton
          }
          onPress={() => setSelectedTag(element)}>
          <AppText
            style={
              selectedTag == element
                ? styles.selectedFilterText
                : styles.filterText
            }>
            {element}
          </AppText>
        </TouchableOpacity>
      ))}
    </View>
    // </ScrollView>
  );
};

export default Filter;

const styles = StyleSheet.create({
  filterContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    // backgroundColor: 'orange',
  },
  gapBox: {
    flexDirection: 'row',
    gap: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  filterButton: {
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#BCBCBC',
    borderRadius: 15,
  },
  filterText: {
    fontSize: 14,
    color: '#BCBCBC',
  },
  selectedFilterButton: {
    borderColor: '#0667FF',
    borderWidth: 1,
    borderRadius: 15,
    paddingVertical: 4,
    paddingHorizontal: 10,
    backgroundColor: '#E6F0FF',
  },
  selectedFilterText: {
    color: '#0667FF',
  },
});
