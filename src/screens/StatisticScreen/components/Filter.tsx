// src/components/YourPath/Filter.tsx

import React from 'react';
import {StyleSheet, TouchableOpacity, ScrollView, View} from 'react-native';
import AppText from '../../../components/AppText';
import {palette} from '../../../styles/palette';

type FilterProps = {
  filter: string[];
  selectedTag: string;
  setSelectedTag: (tag: string) => void;
};

const Filter: React.FC<FilterProps> = ({
  filter,
  selectedTag,
  setSelectedTag,
}) => {
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        // bounces={false}
        // alwaysBounceHorizontal={false}
        overScrollMode="never"
        style={styles.filterContainer}
        contentContainerStyle={styles.filterContentContainer}>
        {filter.map((element, idx) => {
          const isSelected = selectedTag === element;
          return (
            <TouchableOpacity
              key={element}
              style={[
                styles.filterButtonBase,
                isSelected ? styles.selectedFilterButton : styles.filterButton,
                // 마지막 버튼엔 marginRight 제거
                idx !== filter.length - 1 && {marginRight: 10},
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
  filterContentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // 초기 위치 띄워두기
    paddingLeft: 16,
    paddingRight: 16,
  },
  filterButtonBase: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderRadius: 15,
  },
  filterButton: {
    borderColor: '#BCBCBC',
  },
  filterTextBase: {
    fontSize: 14,
  },
  filterText: {
    color: '#BCBCBC',
  },
  selectedFilterButton: {
    borderColor: palette.app_blue,
    backgroundColor: '#E6F0FF',
  },
  selectedFilterText: {
    color: palette.app_blue,
  },
});
