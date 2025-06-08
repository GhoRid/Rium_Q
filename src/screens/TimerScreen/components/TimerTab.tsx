import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RootStackParamList} from '../../../types/screens';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const TimerTab = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('타이머');
        }}>
        <View style={styles.subjectBox}>
          <View style={styles.startButton} />
          <Text>타이머</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default TimerTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subjectBox: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  startButton: {
    borderRadius: '50%',
    backgroundColor: '#FF7D03',
    width: 40,
    aspectRatio: 1,
  },
});
