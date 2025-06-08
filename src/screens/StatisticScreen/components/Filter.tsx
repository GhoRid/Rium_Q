import {
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
  View,
} from 'react-native';

type FilterProps = {
  filter: any;
  selectedTag: string;
  setSelectedTag: (tag: string) => void;
};

const Filter = ({filter, selectedTag, setSelectedTag}: FilterProps) => {
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filterContainer}
        contentContainerStyle={{paddingHorizontal: 15, gap: 10}}>
        {filter.map((element: string, idx: number) => (
          <TouchableOpacity
            key={idx}
            style={
              selectedTag == element
                ? styles.selectedFilterButton
                : styles.filterButton
            }
            onPress={() => setSelectedTag(element)}>
            <Text
              style={
                selectedTag == element
                  ? styles.selectedFilterText
                  : styles.filterText
              }>
              {element}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Filter;

const styles = StyleSheet.create({
  filterContainer: {
    paddingVertical: 10,
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
