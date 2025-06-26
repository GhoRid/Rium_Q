import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import AppText from '../../../components/AppText';

type Props = {
  question: string;
  answer: string;
};

const FAQItem = ({question, answer}: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.questionRow}
        onPress={() => setOpen(!open)}>
        <AppText
          style={[styles.questionText, open ? {} : styles.questionTextBold]}>
          Q {question}
        </AppText>
        {/* <Feather
          name={open ? 'chevron-up' : 'chevron-down'}
          size={20}
          color="#999"
        /> */}
      </TouchableOpacity>

      {open && (
        <View style={styles.answerContainer}>
          <AppText style={styles.answerText}>A {answer}</AppText>
        </View>
      )}
    </View>
  );
};

export default FAQItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAFAFA',
    borderRadius: 10,
    padding: 14,
  },
  questionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  questionText: {
    fontSize: 15,
    color: '#444',
  },
  questionTextBold: {
    fontWeight: 'bold',
  },
  answerContainer: {
    marginTop: 12,
  },
  answerText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
});
