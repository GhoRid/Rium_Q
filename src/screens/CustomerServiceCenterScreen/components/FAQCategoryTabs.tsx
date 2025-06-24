import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import palette from '../../../styles/palette';

type Props = {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
};

const FAQCategoryTabs = ({categories, selected, onSelect}: Props) => {
  return (
    <View style={styles.row}>
      {categories.map(category => (
        <TouchableOpacity
          key={category}
          style={[styles.tab, selected === category && styles.selectedTab]}
          onPress={() => onSelect(category)}>
          <Text
            style={[
              styles.tabText,
              selected === category && styles.selectedTabText,
            ]}>
            {category}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default FAQCategoryTabs;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 20,
  },
  tab: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    backgroundColor: '#fff',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#bcbcbc',
  },
  selectedTab: {
    backgroundColor: '#E6F0FF',
    borderColor: palette.app_blue,
  },
  tabText: {
    fontSize: 14,
    color: '#bcbcbc',
  },
  selectedTabText: {
    color: palette.app_blue,
    fontWeight: 'bold',
  },
});
