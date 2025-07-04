// components/EditProfileImage.tsx

import React from 'react';
import {StyleSheet, TouchableOpacity, View, Image} from 'react-native';
import SvgIcon from '../../../components/SvgIcon';
import palette from '../../../styles/palette';
import AppText from '../../../components/AppText';

const AVATAR_SIZE = 85;

type Props = {
  imageUri: string | null;
  onPress: () => void;
};

const EditProfileImage = ({imageUri, onPress}: Props) => {
  return (
    <View style={styles.profileSection}>
      <View style={styles.avatarContainer}>
        <View style={styles.avatarCircle}>
          {imageUri ? (
            <Image source={{uri: imageUri}} style={styles.image} />
          ) : (
            <SvgIcon name="기본프로필" size={AVATAR_SIZE} />
          )}
        </View>
        <TouchableOpacity style={styles.refreshButton} onPress={onPress}>
          <SvgIcon name="새로고침" size={15} color="white" />
        </TouchableOpacity>
      </View>
      <AppText style={styles.nameText}>
        <AppText style={styles.nameBold}>익끼</AppText> 님
      </AppText>
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
    overflow: 'hidden',
  },
  image: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
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
  nameText: {
    fontSize: 20,
    color: '#000',
  },
  nameBold: {
    fontWeight: 'bold',
  },
});
