import React from 'react';
import {
  Modal,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import SvgIcon from '../../../components/SvgIcon';
import palette from '../../../styles/palette';
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
          {data.map((item, index) => (
            <View key={index} style={styles.itemRow}>
              <AppText style={[styles.subject, getSubjectStyle(item.subject)]}>
                {item.subject}
              </AppText>
              <AppText style={styles.aim}>{item.aim}</AppText>
            </View>
          ))}
        </View>
      </View>
    </Modal>
  );
};

const getSubjectStyle = (subject: string) => {
  const subjectColors: Record<
    string,
    {backgroundColor: string; color: string}
  > = {
    국어: {backgroundColor: '#D6E4FF', color: '#1D39C4'},
    수학: {backgroundColor: '#FFE1E1', color: '#D93025'},
    영어: {backgroundColor: '#D6F4D6', color: '#137333'},
    탐구: {backgroundColor: '#EAD9FF', color: '#7B1FA2'},
  };
  return subjectColors[subject] ?? {backgroundColor: '#EEE', color: '#333'};
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
    fontWeight: '700',
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  subject: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 8,
    fontWeight: 'bold',
    marginRight: 8,
  },
  aim: {
    fontSize: 14,
    color: '#333',
  },
});
