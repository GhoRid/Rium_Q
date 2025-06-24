import {SafeAreaView} from 'react-native-safe-area-context';
import CustomHeader from '../../components/Header/CustomHeader';
import BackButtonHeaderLeft from '../../components/Header/BackButtonHeaderLeft';
import {StyleSheet} from 'react-native';

const ManageAccountScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader
        leftItem={<BackButtonHeaderLeft screenName="계정 관리" />}
      />
    </SafeAreaView>
  );
};

export default ManageAccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
});
