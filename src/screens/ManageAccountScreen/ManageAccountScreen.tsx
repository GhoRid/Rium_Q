import {SafeAreaView} from 'react-native-safe-area-context';
import CustomHeader from '../../components/Header/CustomHeader';
import BackButtonHeaderLeft from '../../components/Header/BackButtonHeaderLeft';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import SvgIcon from '../../components/SvgIcon';
import {logout} from '../../services/auth/logout';

type ManageAccountScreenProps = {
  setIsLoggedIn: (isLoggedIn: boolean) => void;
};

const ManageAccountScreen = ({setIsLoggedIn}: ManageAccountScreenProps) => {
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

      {/* 계정 영역 */}
      <View style={styles.row}>
        <View style={styles.rowLeft}>
          <SvgIcon name="카카오" />
          <Text style={styles.label}>카카오 계정</Text>
        </View>
        <TouchableOpacity onPress={handleLogout}>
          <Text style={styles.logoutText}>로그아웃</Text>
        </TouchableOpacity>
      </View>

      {/* 구분선 */}
      <View style={styles.separator} />

      {/* 회원 탈퇴 안내 */}
      <View style={styles.withdrawContainer}>
        <Text style={styles.withdrawLabel}>회원 정보를 삭제하시겠어요?</Text>
        <TouchableOpacity>
          <Text style={styles.withdrawButton}>회원 탈퇴</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ManageAccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  rowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 28,
    height: 28,
    marginRight: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111',
  },
  logoutText: {
    fontSize: 15,
    color: '#888',
  },
  separator: {
    height: 1,
    backgroundColor: '#EDEDED',
    marginVertical: 16,
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
