import {StyleSheet, TouchableOpacity, ScrollView, View} from 'react-native';
import AppText from '../../../components/AppText';

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
        contentContainerStyle={styles.filterContentContainerStyle}>
        {filter.map((element: string, idx: number) => {
          const isSelected = selectedTag === element;
          return (
            <TouchableOpacity
              key={idx}
              style={[
                styles.filterButtonBase,
                isSelected ? styles.selectedFilterButton : styles.filterButton,
              ]}
              onPress={() => setSelectedTag(element)}>
              <AppText
                style={[
                  styles.filterTextBase,
                  isSelected ? styles.selectedFilterText : styles.filterText,
                ]}>
                {element}
              </AppText>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Filter;

const styles = StyleSheet.create({
  filterContainer: {
    paddingVertical: 10,
  },
  filterContentContainerStyle: {
    gap: 10,
  },
  // 공통 버튼 스타일
  filterButtonBase: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderRadius: 15,
  },
  // 비선택 상태
  filterButton: {
    borderColor: '#BCBCBC',
  },
  filterTextBase: {
    fontSize: 14,
  },
  filterText: {
    color: '#BCBCBC',
  },
  // 선택된 상태
  selectedFilterButton: {
    borderColor: '#0667FF',
    backgroundColor: '#E6F0FF',
  },
  selectedFilterText: {
    color: '#0667FF',
  },
});
