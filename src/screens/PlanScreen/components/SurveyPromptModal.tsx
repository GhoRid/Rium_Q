import React from 'react';
import {
  Modal,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import AppText from '../../../components/AppText';

const {width} = Dimensions.get('window');

type Props = {
  isModalVisible: boolean;
  setIsModalVisible: (v: boolean) => void;
  data: {
    title?: string;
    content?: string;
    confirmText: string;
    onConfirm: () => void;
  };
};

const SurveyPromptModal = ({
  isModalVisible,
  setIsModalVisible,
  data,
}: Props) => {
  return (
    <Modal visible={isModalVisible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.CustomModalContentBox}>
          {data.title && (
            <AppText style={styles.messageTitle}>{data.title}</AppText>
          )}
          {data.content && (
            <AppText style={styles.messageContent}>{data.content}</AppText>
          )}
          <TouchableOpacity
            style={styles.singleButton}
            onPress={() => {
              data.onConfirm();
            }}>
            <AppText style={styles.confirmText}>{data.confirmText}</AppText>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default SurveyPromptModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.35)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  CustomModalContentBox: {
    width: width * 0.85,
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 30,
    paddingTop: 45,
    paddingBottom: 30,
    overflow: 'hidden',
    alignItems: 'center',
  },
  contentContainer: {
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 20,
    alignItems: 'center',
  },
  messageTitle: {
    fontSize: 20,
    fontWeight: 700,
    color: '#333',
    textAlign: 'center',
    marginBottom: 15,
  },
  messageContent: {
    fontSize: 14,
    fontWeight: '400',
    color: '#666',
    textAlign: 'center',
  },
  singleButton: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 50,
    marginTop: 25,
    backgroundColor: '#1a2b48', // 버튼 색상 (네이비 계열)
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#fff',
  },
});
