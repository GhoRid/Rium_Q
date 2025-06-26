import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Animated, StyleSheet, TouchableOpacity, View} from 'react-native';
import {RootStackParamList} from '../../../types/screens';
import palette from '../../../styles/palette';
import AppText from '../../../components/AppText';

type FinishedViewProps = {
  blackToWhite: Animated.AnimatedInterpolation<string>;
};

const FinishedView = ({blackToWhite}: FinishedViewProps) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Animated.Text style={[styles.finishText, {color: blackToWhite}]}>
          고생했어요!
        </Animated.Text>
      </View>

      <View style={{flex: 1}} />
      <View style={styles.buttonRowBox}>
        <TouchableOpacity
          style={[styles.bottomButton, {backgroundColor: '#F3F4F6'}]}
          onPress={() => navigation.navigate('Tab', {screen: 'Statistic'})}>
          <AppText style={[styles.bottomButtonText, {color: '#111'}]}>
            내 통계
          </AppText>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.bottomButton,
            {backgroundColor: palette.app_main_color},
          ]}
          onPress={() => navigation.navigate('Tab', {screen: 'Home'})}>
          <AppText style={[styles.bottomButtonText, {color: '#fff'}]}>
            홈으로
          </AppText>
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
  buttonRowBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 40,
    paddingHorizontal: 20,
    gap: 10,
  },
  bottomButton: {
    flex: 1,
    borderRadius: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
});
