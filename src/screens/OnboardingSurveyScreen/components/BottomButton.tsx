import {StyleSheet, TouchableOpacity, View} from 'react-native';
import AppText from '../../../components/AppText';
import palette from '../../../styles/palette';

type BottomButtonProps = {
  currentStep: number;
  goToStep: (step: number) => void;
};

const BottomButton = ({currentStep, goToStep}: BottomButtonProps) => {
  console.log(currentStep);

  return (
    <View style={styles.buttonContainer}>
      <View style={styles.twoButtonContainer}>
        {currentStep > 0 && (
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => goToStep(currentStep - 1)}>
            <AppText style={styles.backButtonText}>이전</AppText>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={styles.button}
          onPress={() => goToStep(currentStep + 1)}>
          <AppText style={styles.buttonText}>다음</AppText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomButton;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    height: 50,
    marginHorizontal: 24,
    // width: '100%',
  },
  twoButtonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
  },
  button: {
    flex: 2,
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
  backButton: {
    flex: 1,
    borderRadius: 25,
    backgroundColor: '#f1f1f1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonText: {
    color: palette.app_main_color,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
