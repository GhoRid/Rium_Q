import React from 'react';
import {View, StyleSheet, TouchableOpacity, TextStyle} from 'react-native';
import {palette} from '../../../styles/palette';
import AppText from '../../../components/AppText';

type Props = {
  onConfirm: () => void;
  confirmDisabled?: boolean;
};

const BottomButtonGroup = ({onConfirm, confirmDisabled = false}: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.cancelButton}
        //   onPress={onCancel}
      >
        <AppText style={styles.cancelText}>취소</AppText>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.confirmButton,
          confirmDisabled && {backgroundColor: '#ccc'},
        ]}
        onPress={onConfirm}
        disabled={confirmDisabled}>
        <AppText style={styles.confirmText}>저장</AppText>
      </TouchableOpacity>
    </View>
  );
};

export default BottomButtonGroup;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingBottom: 20,
    gap: 10,
  },
  cancelButton: {
    flex: 1.2,
    backgroundColor: '#F4F4F4',
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmButton: {
    flex: 2,
    backgroundColor: palette.app_main_color,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a2b48',
  } as TextStyle,
  confirmText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  } as TextStyle,
});
