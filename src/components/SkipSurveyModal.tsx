import React from 'react';
import {
  Modal,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import AppText from './AppText';
import SvgIcon from './SvgIcon';
import {palette} from '../styles/palette';

type Props = {
  content: {
    title: string;
    description: string;
  };
  visible: boolean;
  onConfirm: () => void;
  onRequestClose?: () => void;
};

const SkipSurveyModal = ({
  content,
  visible,
  onConfirm,
  onRequestClose,
}: Props) => {
  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={onRequestClose}>
      <TouchableWithoutFeedback onPress={onRequestClose}>
        <View style={styles.backdrop}>
          <TouchableWithoutFeedback>
            <View style={styles.modal}>
              {/* ✅ 상단 X 버튼 */}
              <TouchableOpacity
                style={styles.closeButton}
                onPress={onRequestClose}>
                <SvgIcon name="취소" size={30} color="#bdbdbd" />
              </TouchableOpacity>

              <View style={styles.contentContainer}>
                <AppText style={styles.title}>{content.title}</AppText>

                <AppText style={styles.desc}>{content.description}</AppText>
              </View>

              <TouchableOpacity style={styles.button} onPress={onConfirm}>
                <AppText style={styles.buttonText}>네, 다음에 할게요.</AppText>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default SkipSurveyModal;

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 60,
  },
  modal: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 20,
  },
  closeButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    zIndex: 10,
  },
  closeText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#888',
  },
  contentContainer: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginBottom: 20,
    gap: 40,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '700',
  },
  desc: {
    fontSize: 18,
    color: '#aaa',
  },
  button: {
    backgroundColor: palette.app_main_color,
    paddingHorizontal: 24,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },
});
