import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import AppText from '../../../components/AppText';
import SvgIcon from '../../../components/SvgIcon';
import palette from '../../../styles/palette';

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
          <TouchableOpacity
            key={option.id}
            style={[
              styles.optionItem,
              isSelected
                ? styles.optionItemSelected
                : styles.optionItemUnselected,
            ]}
            activeOpacity={0.8}
            onPress={() => onSelect(option.id)}>
            <View style={styles.radioWrapper}>
              {/* <SvgIcon
                name={isSelected ? '라디오선택' : '라디오기본'}
                size={20}
              /> */}
            </View>
            <AppText
              style={[
                styles.optionLabel,
                isSelected ? styles.optionLabelSelected : {},
              ]}>
              {option.label}
            </AppText>
          </TouchableOpacity>
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
    borderColor: '#E0E0E0',
  },
  radioWrapper: {
    marginRight: 12,
  },
  optionLabel: {
    fontSize: 16,
    fontWeight: '400',
    color: '#888',
  },
  optionLabelSelected: {
    fontWeight: '700',
    color: '#000',
  },
});
