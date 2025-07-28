import React from 'react';
import {
  Modal,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import SvgIcon from '../../../components/SvgIcon';
import {palette, subjectThemeColors} from '../../../styles/palette';
import AppText from '../../../components/AppText';

type StudyObjectModalProps = {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  data: {subject: string; aim: string}[];
};

const {width} = Dimensions.get('window');

const StudyObjectModal = ({
  modalVisible,
  setModalVisible,
  data,
}: StudyObjectModalProps) => {
  return (
    <Modal
      visible={modalVisible}
      animationType="fade"
      transparent
      onRequestClose={() => setModalVisible(false)}>
      <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
        <View style={styles.backdrop}>
          {/* 모달 외부 눌렀을 때 닫히게 처리 */}
        </View>
      </TouchableWithoutFeedback>

      <View style={styles.centeredContainer}>
        <View style={styles.modalContent}>
          <AppText style={styles.dateText}>5/28</AppText>
          <View style={styles.modalHeaderBox}>
            <AppText style={styles.title}>오늘의 계획이에요!</AppText>
            <SvgIcon
              name="취소"
              size={20}
              onPress={() => setModalVisible(false)}
            />
          </View>
          {data.map((item, index) => {
            const theme = subjectThemeColors[item.subject] || {
              backgroundColor: '#ccc',
              textColor: '#000',
            };

            return (
              <View key={index} style={styles.itemRow}>
                <View
                  style={[
                    styles.itemTag,
                    {backgroundColor: theme.backgroundColor},
                  ]}>
                  <AppText
                    style={[styles.itemTagText, {color: theme.textColor}]}>
                    {item.subject}
                  </AppText>
                </View>
                <AppText style={styles.aim}>{item.aim}</AppText>
              </View>
            );
          })}
        </View>
      </View>
    </Modal>
  );
};

export default StudyObjectModal;

const styles = StyleSheet.create({
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  dateText: {
    fontSize: 16,
    color: palette.app_blue,
  },
  centeredContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: width * 0.9,
    borderRadius: 16,
    backgroundColor: 'white',
    paddingVertical: 24,
    paddingHorizontal: 20,
    elevation: 5,
  },
  modalHeaderBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  title: {
    fontSize: 18,
    fontWeight: 700,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 10,
  },
  itemTag: {
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  itemTagText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    overflow: 'hidden',
    flexShrink: 1,
  },
  aim: {
    fontSize: 14,
    color: '#333',
  },
});
