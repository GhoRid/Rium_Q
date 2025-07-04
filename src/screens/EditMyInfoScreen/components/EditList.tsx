import {StyleSheet, View} from 'react-native';
import SvgIcon from '../../../components/SvgIcon';
import AppText from '../../../components/AppText';

const DATA = [
  {
    label: '거주 지역',
    value: '광주광역시 북구 지산동',
  },
  {
    label: '(출신) 학교',
    value: '조선대학교여자고등학교',
  },
  {
    label: '학년',
    value: '2학년',
  },
];

const EditList = () => {
  return (
    <>
      {/* 정보 항목 */}
      {DATA.map((item, index) => (
        <View style={styles.infoItem} key={index}>
          <View style={styles.vertacal}>
            <AppText style={styles.label}>{item.label}</AppText>
            <AppText style={styles.value}>{item.value}</AppText>
          </View>
          <SvgIcon name="우측방향" size={24} color="#BDBDBD" />
        </View>
      ))}
    </>
  );
};

export default EditList;

const styles = StyleSheet.create({
  infoItem: {
    marginBottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  vertacal: {
    gap: 10,
  },
  value: {
    fontSize: 18,
    color: '#333',
  },
});
