import {StyleSheet, TouchableOpacity} from 'react-native';
import AppText from '../../../components/AppText';
import {palette} from '../../../styles/palette';

type BottomButtonProps = {
  onPress?: () => void;
};

const BottomButton = ({onPress}: BottomButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <AppText style={styles.buttonText}>홈으로</AppText>
    </TouchableOpacity>
  );
};

export default BottomButton;

const styles = StyleSheet.create({
  button: {
    height: 50,
    backgroundColor: palette.app_main_color,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
