import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import {palette} from '../styles/palette';
import AppText from './AppText';

export type TimeOption = {
  id: number;
  label: string;
};

type OptionCardProps = {
  option: TimeOption;
  isSelected: boolean;
  onSelect: (value: number) => void;
};

const OptionCard = ({option, isSelected, onSelect}: OptionCardProps) => {
  return (
    <TouchableOpacity
      key={option.id}
      style={[
        styles.optionItem,
        isSelected ? styles.optionItemSelected : styles.optionItemUnselected,
      ]}
      activeOpacity={0.8}
      onPress={() => onSelect(isSelected ? 0 : option.id)}>
      <View
        style={[
          styles.circleWrapper,
          isSelected
            ? {borderColor: palette.app_main_color}
            : {
                borderColor: '#bcbcbc',
              },
        ]}>
        <View
          style={[
            styles.circle,
            isSelected ? {backgroundColor: palette.app_main_color} : {},
          ]}
        />
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
};

export default OptionCard;

const styles = StyleSheet.create({
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 55,
    paddingHorizontal: 15,
    borderRadius: 15,
    borderWidth: 1,
  },
  optionItemSelected: {
    backgroundColor: '#F1F3F5',
    borderColor: palette.app_main_color,
  },
  optionItemUnselected: {
    backgroundColor: '#fff',
    borderColor: '#bcbcbc',
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
    color: '#bcbcbc',
  },
  optionLabelSelected: {
    fontWeight: 700,
    color: '#000',
  },
});
