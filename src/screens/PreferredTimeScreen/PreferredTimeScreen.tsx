import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomHeader from '../../components/Header/CustomHeader';
import BackButtonHeaderLeft from '../../components/Header/BackButtonHeaderLeft';
import AppText from '../../components/AppText';
import TimeOptionSelector from './components/TimeOptionSelector';
import {useState} from 'react';
import CustomModal from '../../components/CustomModal';
import {CustomModalContent} from '../../types/components';
import palette from '../../styles/palette';
import BottomButtonGroup from './components/BottomButtonGroup';

const TIME_OPTIONS = [
  {id: 1, label: '아침 06:00 ~ 09:00'},
  {id: 2, label: '오전 09:00 ~ 12:00'},
  {id: 3, label: '오후 12:00 ~ 18:00'},
  {id: 4, label: '밤 18:00 ~ 24:00'},
  {id: 5, label: '새벽 00:00 ~ 06:00'},
];

const PreferredTimeScreen = () => {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const modalContent: CustomModalContent = {
    content: '저장이 완료되었습니다!',
    confirmText: '확인',
    confirmColor: palette.app_main_color,
    onConfirm: () => {
      setIsModalVisible(false);
    },
  };

  const handleSelect = (id: number) => {
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id],
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader
        leftItem={<BackButtonHeaderLeft screenName="선호 학습 시간" />}
      />
      <View style={styles.contentContainer}>
        <AppText style={styles.title}>익끼 님의 학습 스타일에</AppText>
        <AppText style={styles.title}>맞는 시간대를 선택해보세요!</AppText>

        <TimeOptionSelector
          options={TIME_OPTIONS}
          selectedIds={selectedIds} // ✅ 배열 전달
          onSelect={handleSelect}
        />
      </View>

      {/* 저장하기 버튼 */}
      <BottomButtonGroup
        onConfirm={() => setIsModalVisible(true)}
        confirmDisabled={selectedIds.length === 0}
      />

      <View style={{flex: 1}} />

      {/* 저장하기 모달 */}
      <CustomModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        data={modalContent}
      />
    </SafeAreaView>
  );
};

export default PreferredTimeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    padding: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
