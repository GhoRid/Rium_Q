import {Pressable, View, Text, StyleSheet} from 'react-native';

type StudyObjectProps = {
  subject: string;
  aim: string;
};
const StudyObject = ({subject, aim}: StudyObjectProps) => {
  return (
    <View style={styles.row}>
      <Pressable style={styles.subjectChip}>
        <Text style={styles.subjectChipText}>{subject}</Text>
      </Pressable>
      <Text style={styles.testText}>{aim}</Text>
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
