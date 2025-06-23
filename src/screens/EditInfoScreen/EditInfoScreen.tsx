import {NavigationProp, useNavigation} from '@react-navigation/native';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {RootStackParamList} from '../../types/screens';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomHeader from '../../components/Header/CustomHeader';
import BackButtonHeaderLeft from '../../components/Header/BackButtonHeaderLeft';

const EditInfoScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <SafeAreaView style={styles.contianer}>
      <CustomHeader leftItem={<BackButtonHeaderLeft screenName="내 정보" />} />
      {/* <Pressable
        onPress={() => navigation.navigate('Login')}
        style={{
          backgroundColor: 'orange',
          padding: 30,
          borderRadius: 5,
          marginTop: 20,
        }}>
        <Text>Go to Login</Text>
      </Pressable> */}
    </SafeAreaView>
  );
};
export default EditInfoScreen;

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
});
