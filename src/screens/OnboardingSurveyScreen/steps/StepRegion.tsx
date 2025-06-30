import {Dimensions, StyleSheet, View} from 'react-native';
import AppText from '../../../components/AppText';
import SurveyTitle from '../components/SurveyTitle';

const {width} = Dimensions.get('window');

const StepRegion = () => {
  return (
    <View>
      <SurveyTitle>현재 거주하고 있는 지역</SurveyTitle>
    </View>
  );
};

export default StepRegion;
