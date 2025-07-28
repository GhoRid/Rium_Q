import {StyleSheet, View, Text} from 'react-native';
import {palette} from '../../../styles/palette';

const DDayHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.dDayContainer}>
        <Text style={styles.dDayText}>D-117</Text>
      </View>
      <Text style={styles.title}>2026학년도 대학수학능력시험</Text>
    </View>
  );
};

export default DDayHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 25,
    paddingVertical: 15,
  },
  dDayContainer: {
    backgroundColor: '#E6F0FF',
    borderRadius: 15,
    borderColor: palette.app_blue,
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  dDayText: {
    color: palette.app_blue,
    fontSize: 14,
    fontWeight: 700,
  },
  title: {
    fontSize: 16,
    fontWeight: 600,
    color: '#333',
  },
});
