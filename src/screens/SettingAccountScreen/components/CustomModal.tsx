import React from 'react';
import {
  Modal,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import AppText from '../../../components/AppText';
import palette from '../../../styles/palette';

type Props = {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  onConfirm: () => void;
};

const {width} = Dimensions.get('window');

const CustomModal = ({modalVisible, setModalVisible, onConfirm}: Props) => {
  return (
    <Modal visible={modalVisible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modalContentBox}>
          <View style={styles.contentContainer}>
            <AppText style={styles.message}>로그아웃 하시겠어요?</AppText>
            {/* <AppText style={styles.message}>로그아웃 하시겠어요?</AppText> */}
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.basebutton, styles.cancelButton]}
              onPress={() => setModalVisible(false)}>
              <AppText style={styles.cancelText}>취소</AppText>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.basebutton, styles.confirmButton]}
              onPress={onConfirm}>
              <AppText style={styles.confirmText}>로그아웃</AppText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.35)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContentBox: {
    width: width * 0.8,
    backgroundColor: '#fff',
    borderRadius: 20,
    overflow: 'hidden',
  },
  contentContainer: {
    paddingHorizontal: 30,
    paddingVertical: 40,
    gap: 4,
  },
  message: {
    fontSize: 18,
    fontWeight: 700,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  basebutton: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  confirmButton: {
    flex: 1,
    backgroundColor: palette.app_main_color,
  },
  cancelText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1a2b48',
  },
  confirmText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
  },
});
