import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Animated, StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {RootStackParamList} from '../../../types/screens';

type FinishedViewProps = {
  animation: Animated.Value;
  blackToWhite: Animated.AnimatedInterpolation<string>;
};

const FinishedView = ({animation, blackToWhite}: FinishedViewProps) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Animated.Text style={[styles.finishText, {color: blackToWhite}]}>
          고생했어요!
        </Animated.Text>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.bottomButton, {backgroundColor: '#F3F4F6'}]}>
          <Text style={[styles.bottomButtonText, {color: '#111'}]}>
            내 통계
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.bottomButton, {backgroundColor: '#13203A'}]}
          onPress={() => navigation.goBack()}>
          <Text style={[styles.bottomButtonText, {color: '#fff'}]}>홈으로</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default FinishedView;

const styles = StyleSheet.create({
  finishText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  bottomButton: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 16,
  },
  bottomButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
});
