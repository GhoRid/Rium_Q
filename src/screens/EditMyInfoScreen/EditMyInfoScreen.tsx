import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomHeader from '../../components/Header/CustomHeader';
import BackButtonHeaderLeft from '../../components/Header/BackButtonHeaderLeft';
import EditProfileImage from './components/EditProfileImage';
import EditList from './components/EditList';
import {usePhotoPermission} from '../../hooks/usePhotoPermission';

const EditMyInfoScreen = () => {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const {requestImageWithPermission} = usePhotoPermission();

  const handlePickImage = async () => {
    const uri = await requestImageWithPermission();
    if (uri) setImageUri(uri);
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader leftItem={<BackButtonHeaderLeft screenName="내 정보" />} />
      <View style={styles.contentContainer}>
        <EditProfileImage imageUri={imageUri} onPress={handlePickImage} />
        <EditList />
      </View>
    </SafeAreaView>
  );
};

export default EditMyInfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    padding: 20,
  },
});
