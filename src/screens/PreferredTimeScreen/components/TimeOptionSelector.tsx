import React from 'react';
import {View, StyleSheet} from 'react-native';
import palette from '../../../styles/palette';
import OptionCard from '../../../components/OptionCard';

export type TimeOption = {
  id: number;
  label: string;
};

type Props = {
  options: TimeOption[];
  selectedIds: number[]; // ✅ 배열로 변경
  onSelect: (id: number) => void;
};

const TimeOptionSelector = ({options, selectedIds, onSelect}: Props) => {
  return (
    <View style={styles.optionList}>
      {options.map(option => {
        const isSelected = selectedIds.includes(option.id); // ✅ 배열 포함 여부로 판별

        return (
          <OptionCard
            key={option.id}
            option={option}
            isSelected={isSelected}
            onSelect={() => onSelect(option.id)}
          />
        );
      })}
    </View>
  );
};

export default TimeOptionSelector;

const styles = StyleSheet.create({
  optionList: {
    marginTop: 20,
    gap: 14,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderRadius: 15,
    borderWidth: 1,
  },
  optionItemSelected: {
    backgroundColor: '#F1F3F5',
    borderColor: palette.app_main_color,
  },
  optionItemUnselected: {
    backgroundColor: '#fff',
    borderColor: '#888',
  },
  circleWrapper: {
    width: 15,
    aspectRatio: 1,
    borderRadius: 15,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  circle: {
    width: 9,
    aspectRatio: 1,
    borderRadius: 9,
  },
  optionLabel: {
    fontSize: 16,
    fontWeight: 400,
    color: '#888',
  },
  optionLabelSelected: {
    fontWeight: 700,
    color: '#000',
  },
});
