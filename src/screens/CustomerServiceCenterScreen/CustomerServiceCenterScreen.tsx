import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomHeader from '../../components/Header/CustomHeader';
import BackButtonHeaderLeft from '../../components/Header/BackButtonHeaderLeft';
import Connections from './components/Connections';
import FAQSection from './components/FAQSection';

const CustomerServiceCenterScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader leftItem={<BackButtonHeaderLeft screenName="고객센터" />} />

      <Connections />
      <View style={styles.seperator} />
      <FAQSection />
    </SafeAreaView>
  );
};

export default CustomerServiceCenterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  seperator: {
    height: 10,
    backgroundColor: '#F0F0F0',
  },
});
