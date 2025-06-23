import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import SvgIcon from '../../../components/SvgIcon';
import palette from '../../../styles/palette';

const AVATAR_SIZE = 85;

const EditProfileImage = () => {
  return (
    <View style={styles.profileSection}>
      <View style={styles.avatarContainer}>
        <View style={styles.avatarCircle}>
          <SvgIcon name="기본프로필" size={85} />
        </View>
        <TouchableOpacity style={styles.refreshButton}>
          <SvgIcon name="새로고침" size={15} color="white" />
        </TouchableOpacity>
      </View>
      <Text style={styles.nameText}>
        <Text style={styles.nameBold}>익끼</Text> 님
      </Text>
    </View>
  );
};

export default EditProfileImage;

const styles = StyleSheet.create({
  profileSection: {
    alignItems: 'center',
    marginBottom: 36,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  avatarCircle: {
    width: AVATAR_SIZE + 12,
    aspectRatio: 1,
    borderRadius: (AVATAR_SIZE + 12) / 2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: palette.app_main_color,
  },
  emoji: {
    fontSize: 40,
  },
  refreshButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: palette.app_main_color,
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  refreshIcon: {
    color: '#fff',
    fontSize: 16,
  },
  nameText: {
    fontSize: 20,
    color: '#000',
  },
  nameBold: {
    fontWeight: 'bold',
  },
});
