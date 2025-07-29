import {StyleSheet, View} from 'react-native';
import SurveyTitle from '../components/SurveyTitle';
import {useState} from 'react';
import OptionCard from '../../../components/OptionCard';

const OPTIONS = [
  {id: 1, label: '1학년'},
  {id: 2, label: '2학년'},
  {id: 3, label: '3학년'},
  {id: 4, label: '졸업생'},
];

const StepGrade = () => {
  const [isSelected, setIsSelected] = useState(0);

  return (
    <View style={styles.container}>
      <SurveyTitle>학년을 선택해주세요</SurveyTitle>

      <View style={styles.optionContainer}>
        {OPTIONS.map((option, idx) => (
          <OptionCard
            key={idx}
            option={option}
            isSelected={option.id === isSelected}
            onSelect={setIsSelected}
          />
        ))}
      </View>
    </View>
  );
};

export default StepGrade;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    gap: 30,
  },
  optionContainer: {
    gap: 12,
  },
});
