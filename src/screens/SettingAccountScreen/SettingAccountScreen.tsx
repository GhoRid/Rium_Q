import {SafeAreaView} from 'react-native-safe-area-context';
import CustomHeader from '../../components/Header/CustomHeader';
import BackButtonHeaderLeft from '../../components/Header/BackButtonHeaderLeft';
import {Alert, StyleSheet, TouchableOpacity, View} from 'react-native';
import SvgIcon from '../../components/SvgIcon';
import {logout} from '../../services/auth/logout';
import AppText from '../../components/AppText';

type SettingAccountScreenProps = {
  setIsLoggedIn: (isLoggedIn: boolean) => void;
};

const SettingAccountScreen = ({setIsLoggedIn}: SettingAccountScreenProps) => {
  const handleLogout = async () => {
    try {
      await logout(); // ✅ 토큰 삭제
      setIsLoggedIn(false); // ✅ 상태 갱신 → 로그인 화면 전환 유도
      Alert.alert('로그아웃되었습니다.');
    } catch (error) {
      console.log(error);
      Alert.alert('로그아웃 실패', '다시 시도해주세요.');
    }
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
          <TouchableOpacity onPress={handleLogout}>
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
          <TouchableOpacity>
            <AppText style={styles.withdrawButton}>회원 탈퇴</AppText>
          </TouchableOpacity>
        </View>
      </View>
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
    fontWeight: '500',
    color: '#111',
  },
  logoutText: {
    fontSize: 15,
    fontWeight: '700',
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
    fontWeight: '500',
  },
});
