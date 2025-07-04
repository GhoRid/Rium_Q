import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TextInputProps,
} from 'react-native';
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
  placeholder,
}: SearchInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

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
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <TouchableOpacity onPress={onSearch}>
        <SvgIcon
          name="검색"
          size={20}
          color={isFocused || value.length > 0 ? 'black' : '#bcbcbc'}
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
    paddingHorizontal: 15,
    height: 55,
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
