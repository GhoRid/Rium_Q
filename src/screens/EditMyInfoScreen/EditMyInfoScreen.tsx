import {NavigationProp, useNavigation} from '@react-navigation/native';
import {View, StyleSheet} from 'react-native';
import {RootStackParamList} from '../../types/screens';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomHeader from '../../components/Header/CustomHeader';
import BackButtonHeaderLeft from '../../components/Header/BackButtonHeaderLeft';
import EditProfileImage from './components/EditProfileImage';
import EditList from './components/EditList';

const EditMyInfoScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <SafeAreaView style={styles.contianer}>
      <CustomHeader leftItem={<BackButtonHeaderLeft screenName="내 정보" />} />
      <View style={styles.contentContainer}>
        <EditProfileImage />

        <EditList />
      </View>
    </SafeAreaView>
  );
};
export default EditMyInfoScreen;

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    padding: 20,
  },
});
