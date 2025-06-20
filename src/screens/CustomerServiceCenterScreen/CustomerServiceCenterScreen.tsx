import {StyleSheet, Text, View, Switch} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomHeader from '../../components/Header/CustomHeader';
import BackButtonHeaderLeft from '../../components/Header/BackButtonHeaderLeft';

const CustomerServiceCenterScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader leftItem={<BackButtonHeaderLeft pageName="고객센터" />} />
    </SafeAreaView>
  );
};

export default CustomerServiceCenterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 10,
  },
});
