import {
  StyleSheet,
  TextInput,
  View,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import {useEffect, useState} from 'react';
import AppText from '../../../components/AppText';
import SvgIcon from '../../../components/SvgIcon';

type Props = {
  id: number;
  initialName: string;
  initialSubject: string;
  onSubmit: (id: number, name: string, subject: string) => void;
  onDelete: (id: number) => void;
};

const SUBJECTS = [
  '국어',
  '영어',
  '수학',
  '탐구',
  '체대입시',
  '미대입시',
  '논술',
  '기타',
];

const InputWithAddBox = ({
  id,
  initialName,
  initialSubject,
  onSubmit,
  onDelete,
}: Props) => {
  const [name, setName] = useState(initialName);
  const [subject, setSubject] = useState(initialSubject);
  const [isDone, setIsDone] = useState<boolean>(
    !!(initialName && initialSubject),
  );

  useEffect(() => {
    if (name && subject && !isDone) {
      onSubmit(id, name, subject);
      setIsDone(true);
      Keyboard.dismiss();
    }
  }, [name, subject]);

  if (isDone) {
    return (
      <View style={styles.doneBox}>
        <AppText style={styles.academyText}>{name}</AppText>
        <View style={styles.rightBox}>
          <View style={styles.subjectBadge}>
            <AppText style={styles.subjectText}>{subject}</AppText>
          </View>
          <TouchableOpacity onPress={() => onDelete(id)}>
            <SvgIcon name="취소" color="#1a2a44" size={20} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.wrapper}>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="학원명 입력"
        style={styles.inputBox}
        autoFocus
        returnKeyType="done"
      />

      {name.length > 0 && (
        <View style={styles.subjectContainer}>
          {SUBJECTS.map(sub => (
            <TouchableOpacity
              key={sub}
              onPress={() => setSubject(sub)}
              style={[
                styles.subjectBtn,
                subject === sub && styles.subjectSelected,
              ]}>
              <AppText style={{color: subject === sub ? '#222' : '#bbb'}}>
                {sub}
              </AppText>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default InputWithAddBox;

const styles = StyleSheet.create({
  wrapper: {
    gap: 12,
  },
  inputBox: {
    height: 55,
    paddingHorizontal: 20,
    borderRadius: 15,
    borderWidth: 1,
    fontSize: 16,
    color: '#222',
    borderColor: '#1a2a44',
    backgroundColor: '#fff',
  },
  subjectContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  subjectBtn: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  subjectSelected: {
    borderColor: '#1a2a44',
  },

  // 완료 상태일 때 스타일
  doneBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1a2a44',
    borderRadius: 15,
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  academyText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#1a2a44',
  },
  rightBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  subjectBadge: {
    backgroundColor: '#f0f2f5',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  subjectText: {
    color: '#1a2a44',
    fontSize: 14,
  },
});
