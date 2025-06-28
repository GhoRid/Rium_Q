import {Alert, StyleSheet, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomHeader from '../../components/Header/CustomHeader';
import BackButtonHeaderLeft from '../../components/Header/BackButtonHeaderLeft';
import SvgIcon from '../../components/SvgIcon';
import {logout} from '../../services/auth/logout';
import AppText from '../../components/AppText';
import {useState} from 'react';

import palette from '../../styles/palette';
import CustomModal from '../../components/CustomModal';
import {CustomModalContent} from '../../types/components';
import {useMutation} from '@tanstack/react-query';
import {deleteUserAccount} from '../../apis/api/user';
import AsyncStorage from '@react-native-async-storage/async-storage';

type SettingAccountScreenProps = {
  setIsLoggedIn: (isLoggedIn: boolean) => void;
};

const SettingAccountScreen = ({setIsLoggedIn}: SettingAccountScreenProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState<CustomModalContent>({
    title: '',
    confirmText: '',
    confirmColor: '',
    onConfirm: () => {},
  });

  const handleLogoutConfirm = async () => {
    try {
      await logout();
      setIsLoggedIn(false);
      Alert.alert('로그아웃되었습니다.');
    } catch {
      Alert.alert('로그아웃 실패', '다시 시도해주세요.');
    }
  };

  const {mutate: deleteUserAccountMutation} = useMutation({
    mutationFn: deleteUserAccount,
  });

  const handleWithdrawal = async () => {
    try {
      await deleteUserAccountMutation();
      AsyncStorage.removeItem('token');
      setIsLoggedIn(false);
      Alert.alert('회원 탈퇴가 완료되었습니다.');
    } catch {
      Alert.alert('회원 탈퇴 실패', '다시 시도해주세요.');
    }
  };

  const logoutData: CustomModalContent = {
    title: '로그아웃 하시겠어요?',
    confirmText: '로그아웃',
    confirmColor: palette.app_main_color,
    onConfirm: handleLogoutConfirm,
  };

  const withdrawalData: CustomModalContent = {
    title: '서비스를 탈퇴하시겠어요?',
    content: '회원탈퇴 시 모든 데이터가 삭제되며,\n복구가 불가능합니다.',
    confirmText: '회원 탈퇴',
    confirmColor: '#E3383B',
    onConfirm: handleWithdrawal,
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader
        leftItem={<BackButtonHeaderLeft screenName="계정 관리" />}
      />

      <View style={styles.contentContainer}>
        {/* 계정 영역 */}
        <View style={styles.row}>
          <View style={styles.rowLeft}>
            <View style={styles.ikonContainer}>
              <SvgIcon name="카카오" size={12} />
            </View>
            <AppText style={styles.label}>카카오 계정</AppText>
          </View>
          <TouchableOpacity
            onPress={() => {
              setModalContent(logoutData);
              setIsModalVisible(true);
            }}>
            <AppText style={styles.logoutText}>로그아웃</AppText>
          </TouchableOpacity>
        </View>

        {/* 구분선 */}
        <View style={styles.separator} />

        {/* 회원 탈퇴 안내 */}
        <View style={styles.withdrawContainer}>
          <AppText style={styles.withdrawLabel}>
            회원 정보를 삭제하시겠어요?
          </AppText>
          <TouchableOpacity
            onPress={() => {
              setModalContent(withdrawalData);
              setIsModalVisible(true);
            }}>
            <AppText style={styles.withdrawButton}>회원 탈퇴</AppText>
          </TouchableOpacity>
        </View>
      </View>

      {/* 공통 모달 */}
      <CustomModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        data={modalContent}
      />
    </SafeAreaView>
  );
};

export default SettingAccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    padding: 20,
    flex: 1,
    gap: 25,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  ikonContainer: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#FEE500',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 500,
    color: '#111',
  },
  logoutText: {
    fontSize: 15,
    fontWeight: 700,
    color: '#888',
  },
  separator: {
    height: 1,
    backgroundColor: '#EDEDED',
  },
  withdrawContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  withdrawLabel: {
    fontSize: 14,
    color: '#C4C4C4',
  },
  withdrawButton: {
    fontSize: 14,
    color: '#C4C4C4',
    fontWeight: 500,
  },
});
