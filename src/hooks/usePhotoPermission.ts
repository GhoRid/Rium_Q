// hooks/usePhotoPermission.ts
import {Platform, Alert, Linking} from 'react-native';
import {PERMISSIONS, request, RESULTS} from 'react-native-permissions';
import {launchImageLibrary} from 'react-native-image-picker';

export const usePhotoPermission = () => {
  const requestImageWithPermission = async (): Promise<string | null> => {
    const permission =
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.PHOTO_LIBRARY
        : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE;

    const result = await request(permission);

    if (
      result === RESULTS.GRANTED ||
      (result === RESULTS.LIMITED && Platform.OS === 'ios')
    ) {
      const res = await launchImageLibrary({
        mediaType: 'photo',
        // selectionLimit: 1,
      });

      if (res.didCancel) return null;
      if (res.assets && res.assets.length > 0) return res.assets[0].uri ?? null; // 이미지 선택시 이미지 return
      return null;
    }

    if (result === RESULTS.DENIED || result === RESULTS.BLOCKED) {
      Alert.alert(
        '사진 권한 필요',
        '설정 > RiumQ > 사진에서\n"모든 사진" 권한을 허용해주세요.',
        [
          {text: '취소', style: 'cancel'},
          {text: '설정 열기', onPress: () => Linking.openURL('app-settings:')},
        ],
      );
    }

    return null;
  };

  return {requestImageWithPermission};
};
