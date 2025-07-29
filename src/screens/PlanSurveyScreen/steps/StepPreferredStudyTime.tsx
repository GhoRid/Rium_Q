import {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import TimeOptionSelector from '../../PreferredTimeScreen/components/TimeOptionSelector';
import SurveyTitle from '../components/SurveyTitle';

const TIME_OPTIONS = [
  {id: 1, label: '아침 06:00 ~ 09:00'},
  {id: 2, label: '오전 09:00 ~ 12:00'},
  {id: 3, label: '오후 12:00 ~ 18:00'},
  {id: 4, label: '밤 18:00 ~ 24:00'},
  {id: 5, label: '새벽 00:00 ~ 06:00'},
];

const StepPreferredStudyTime = () => {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const handleSelect = (id: number) => {
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id],
    );
  };

  return (
    <View style={styles.container}>
      <SurveyTitle>공부 선호 시간대</SurveyTitle>
      <TimeOptionSelector
        options={TIME_OPTIONS}
        selectedIds={selectedIds} // ✅ 배열 전달
        onSelect={handleSelect}
      />
    </View>
  );
};

export default StepPreferredStudyTime;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
