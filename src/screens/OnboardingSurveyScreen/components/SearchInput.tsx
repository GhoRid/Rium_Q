import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TextInputProps,
} from 'react-native';
import palette from '../../../styles/palette';
import SvgIcon from '../../../components/SvgIcon';

type SearchInputProps = {
  value: string;
  onChangeText: (text: string) => void;
  onSearch: () => void;
  placeholder?: string;
};

const SearchInput = ({
  value,
  onChangeText,
  onSearch,
  placeholder = '동명(읍, 면)으로 검색 (ex. 신안동)',
}: SearchInputProps) => {
  const isFocused = value.length > 0;

  return (
    <View
      style={[
        styles.container,
        isFocused ? styles.focusedBorder : styles.defaultBorder,
      ]}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#bcbcbc"
        value={value}
        onChangeText={onChangeText}
        returnKeyType="search"
        onSubmitEditing={onSearch}
      />
      <TouchableOpacity onPress={onSearch}>
        <SvgIcon
          name="검색"
          size={20}
          color={isFocused ? 'black' : '#bcbcbc'}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 16,
    borderRadius: 15,
  },
  defaultBorder: {
    borderWidth: 1,
    borderColor: '#bcbcbc',
  },
  focusedBorder: {
    borderWidth: 1,
    borderColor: 'black',
  },
  input: {
    flex: 1,
    fontSize: 16,
    marginRight: 8,
    paddingVertical: 0,
  },
});
