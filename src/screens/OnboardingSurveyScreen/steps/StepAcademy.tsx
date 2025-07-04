import {StyleSheet, View, TouchableOpacity} from 'react-native';
import SurveyTitle from '../components/SurveyTitle';
import {useState} from 'react';
import InputWithAddBox from '../components/InputWithAddBox';
import SvgIcon from '../../../components/SvgIcon';

export type AcademyItem = {
  id: number;
  name: string;
  subject: string;
};

const StepAcademy = () => {
  const [academyList, setAcademyList] = useState<AcademyItem[]>([]);

  const handleAddEmptyInput = () => {
    setAcademyList(prev => [...prev, {id: Date.now(), name: '', subject: ''}]);
  };

  const handleSubmit = (id: number, name: string, subject: string) => {
    setAcademyList(prev =>
      prev.map(item => (item.id === id ? {...item, name, subject} : item)),
    );
  };

  const handleDelete = (id: number) => {
    setAcademyList(prev => prev.filter(item => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <SurveyTitle>현재 다니고 있는 학원</SurveyTitle>

      {academyList.map(item => (
        <InputWithAddBox
          key={item.id}
          id={item.id}
          initialName={item.name}
          initialSubject={item.subject}
          onSubmit={handleSubmit}
          onDelete={handleDelete}
        />
      ))}

      <TouchableOpacity style={styles.addBtn} onPress={handleAddEmptyInput}>
        <SvgIcon name="더하기" color="#bcbcbc" />
      </TouchableOpacity>
    </View>
  );
};

export default StepAcademy;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    gap: 12,
  },
  addBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 55,
    borderRadius: 15,
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: '#bcbcbc',
  },
});
