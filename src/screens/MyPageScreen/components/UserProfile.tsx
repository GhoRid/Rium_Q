import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import SvgIcon from '../../../components/SvgIcon';
import shadow from '../../../styles/shadow';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../types/screens';

const UserProfile = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <TouchableOpacity
      style={styles.profileCard}
      onPress={() => {
        navigation.navigate('EditMyInfo');
      }}>
      <View style={styles.profileRow}>
        <View style={styles.profileRowLeft}>
          <SvgIcon name="기본프로필" size={45} />
          <View style={styles.nameRow}>
            <Text style={styles.nameBold}>익끼</Text>
            <Text style={styles.nameNormal}>님</Text>
          </View>
        </View>
        <SvgIcon name="우측방향" size={24} />
      </View>

      <TouchableOpacity style={styles.inputButton}>
        <Text style={styles.inputButtonText}>내 정보를 입력해주세요!</Text>
      </TouchableOpacity>
    </TouchableOpacity>
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
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileRowLeft: {
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
