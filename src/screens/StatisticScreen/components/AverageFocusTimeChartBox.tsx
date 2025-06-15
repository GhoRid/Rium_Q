import {StyleSheet, View} from 'react-native';

const AverageFocusTimeChartBox = () => {
  return <View style={styles.container}></View>;
};

export default AverageFocusTimeChartBox;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
