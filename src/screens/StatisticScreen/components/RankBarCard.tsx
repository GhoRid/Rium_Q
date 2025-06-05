import {StyleSheet, Text, View} from 'react-native';

const RankBarCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftBox}></View>
      <View style={styles.rightBox}></View>
    </View>
  );
};

export default RankBarCard;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  leftBox: {
    flex: 1,
    backgroundColor: 'orange',
    height: 200,
  },
  rightBox: {
    flex: 1,
    backgroundColor: 'yellow',
    height: 200,
  },
});
