import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import SvgIcon from '../../../components/SvgIcon';
import palette from '../../../styles/palette';

const Connections = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>어떤 도움이 필요하신가요?</Text>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button}>
          <SvgIcon name="전화" size={24} color="#000" />
          <Text style={styles.buttonText}>전화 문의</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, {backgroundColor: palette.kakao_yellow}]}>
          <SvgIcon name="카카오" size={24} color="#000" />
          <Text style={styles.buttonText}>카카오 상담톡</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Connections;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 30,
    gap: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: '4%',
  },
  button: {
    width: '48%',
    height: 50,
    backgroundColor: '#f0f0f0',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
  },
});
