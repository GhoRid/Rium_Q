import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import SvgIcon from '../../../components/SvgIcon';
import shadow from '../../../styles/shadow';

const UserProfile = () => {
  return (
    <View style={styles.profileCard}>
      <View style={styles.profileRow}>
        <SvgIcon name="기본프로필" size={45} />
        <View style={styles.nameRow}>
          <Text style={styles.nameBold}>익끼</Text>
          <Text style={styles.nameNormal}>님</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.inputButton}>
        <Text style={styles.inputButtonText}>내 정보를 입력해주세요!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileCard: {
    padding: 25,
    backgroundColor: '#fff',
    borderRadius: 15,
    ...shadow,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  emoji: {
    fontSize: 28,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  nameBold: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  nameNormal: {
    fontSize: 20,
    marginLeft: 4,
  },
  inputButton: {
    marginTop: 16,
    alignSelf: 'flex-start',
    backgroundColor: '#122645',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  inputButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
