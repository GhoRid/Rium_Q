import React from 'react';
import {
  Modal,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Pressable,
  TouchableWithoutFeedback,
} from 'react-native';
import AppText from '../../../components/AppText';
import palette from '../../../styles/palette';

type Props = {
  visible: boolean;
  onConfirm: () => void;
  onRequestClose?: () => void;
};

const SkipSurveyModal = ({visible, onConfirm, onRequestClose}: Props) => {
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
              {/* <View style={styles.indicator} /> */}
              <View style={styles.contentContainer}>
                <AppText style={styles.title}>다음에 하시겠어요?</AppText>

                <AppText style={styles.desc}>
                  맞춤 계획을 짜드리기 위해서 설문은 필수입니다!
                  {'\n'}계획 페이지에서 설문을 다시 진행할 수 있습니다.
                </AppText>
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
  contentContainer: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginBottom: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
    gap: 40,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 700,
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
    fontWeight: 600,
    fontSize: 15,
  },
});
