import {Pressable, View, StyleSheet} from 'react-native';
import AppText from '../../../components/AppText';

type StudyObjectProps = {
  subject: string;
  aim: string;
};
const StudyObject = ({subject, aim}: StudyObjectProps) => {
  return (
    <View style={styles.row}>
      <Pressable style={styles.subjectChip}>
        <AppText style={styles.subjectChipText}>{subject}</AppText>
      </Pressable>
      <AppText style={styles.testText}>{aim}</AppText>
    </View>
  );
};

export default StudyObject;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    gap: 12,
  },
  subjectChip: {
    backgroundColor: '#E6EEFF',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 12,
  },
  subjectChipText: {
    color: '#001742',
    fontWeight: 'bold',
  },
  testText: {
    fontSize: 16,
    color: '#222',
  },
});
