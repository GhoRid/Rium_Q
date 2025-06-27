import React from 'react';
import {
  Modal,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import AppText from './AppText';
import {CustomModalContent} from '../types/components';

const {width} = Dimensions.get('window');

type Props = {
  visible: boolean;
  setVisible: (v: boolean) => void;
  data: CustomModalContent;
};

const CustomModal = ({visible, setVisible, data}: Props) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.CustomModalContentBox}>
          <View style={styles.contentContainer}>
            <AppText style={styles.messageTitle}>{data.title}</AppText>
            {data.content && (
              <AppText style={styles.messageContent}>{data.content}</AppText>
            )}
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.basebutton, {backgroundColor: '#F7F7F7'}]}
              onPress={() => setVisible(false)}>
              <AppText style={styles.cancelText}>취소</AppText>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.basebutton, {backgroundColor: data.confirmColor}]}
              onPress={() => {
                data.onConfirm();
                setVisible(false);
              }}>
              <AppText style={styles.confirmText}>{data.confirmText}</AppText>
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
  CustomModalContentBox: {
    width: width * 0.8,
    backgroundColor: '#fff',
    borderRadius: 20,
    overflow: 'hidden',
  },
  contentContainer: {
    paddingHorizontal: 30,
    paddingVertical: 50,
    gap: 4,
  },
  messageTitle: {
    fontSize: 18,
    fontWeight: 700,
    color: '#333',
  },
  messageContent: {
    fontSize: 16,
    fontWeight: 400,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  basebutton: {
    padding: 15,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelText: {
    fontSize: 16,
    fontWeight: 500,
    color: '#1a2b48',
  },
  confirmText: {
    fontSize: 16,
    fontWeight: 500,
    color: '#fff',
  },
});
