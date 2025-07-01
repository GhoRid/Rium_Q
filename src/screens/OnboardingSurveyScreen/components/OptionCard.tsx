import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import AppText from '../../../components/AppText';

type OptionCardProps = {
  label: string;
  value: string;
  selected: boolean;
  onSelect: (value: string) => void;
};

const OptionCard = ({label, value, selected, onSelect}: OptionCardProps) => {
  return (
    <TouchableOpacity
      style={[styles.card, selected && styles.cardSelected]}
      activeOpacity={0.8}
      onPress={() => onSelect(value)}>
      <View style={[styles.radioOuter, selected && styles.radioOuterSelected]}>
        {selected && <View style={styles.radioInner} />}
      </View>
      <AppText style={styles.label}>{label}</AppText>
    </TouchableOpacity>
  );
};

export default OptionCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 16,
    borderRadius: 15,
  },
  cardSelected: {
    borderColor: '#1B2C49',
    backgroundColor: '#F0F2F5',
  },
  radioOuter: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#C4C4C4',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  radioOuterSelected: {
    borderColor: '#1B2C49',
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#1B2C49',
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
  },
});
