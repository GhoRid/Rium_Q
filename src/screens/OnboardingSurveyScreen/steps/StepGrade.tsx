import {View} from 'react-native';
import SurveyTitle from '../components/SurveyTitle';
import OptionCard from '../components/OptionCard';

const StepGrade = () => {
  return (
    <View>
      <SurveyTitle>학년을 선택해주세요</SurveyTitle>
      <OptionCard
        label="초등학교"
        value="elementary"
        selected={false}
        onSelect={() => {}}
      />
    </View>
  );
};

export default StepGrade;
