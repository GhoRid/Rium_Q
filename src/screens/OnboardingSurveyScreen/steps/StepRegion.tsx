import {Dimensions, View} from 'react-native';
import AppText from '../../../components/AppText';

const {width} = Dimensions.get('window');

const StepRegion = () => {
  return (
    <View>
      <AppText>현재 거주하고 있는 지역</AppText>
    </View>
  );
};

export default StepRegion;
