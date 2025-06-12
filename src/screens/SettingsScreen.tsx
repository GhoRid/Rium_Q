import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomHeader from '../components/Header/CustomHeader';
import BackButtonHeaderLeft from '../components/Header/BackButtonHeaderLeft';

const SettingsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader leftItem={<BackButtonHeaderLeft pageName="설정" />} />
      <Text>Settings Screen</Text>
    </SafeAreaView>
  );
};
export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
