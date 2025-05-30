import {StyleSheet, Text, View} from 'react-native';

const TimeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerTimeBox}>
        <Text style={{fontSize: 40, fontWeight: '700', color: '#fff'}}>
          00:00:51
        </Text>
      </View>
      <Text>Time</Text>
    </View>
  );
};

export default TimeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flexGrow: 1,
  },
  headerTimeBox: {
    backgroundColor: '#313131',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
