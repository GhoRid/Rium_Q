import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Animated,
} from 'react-native';
import {formatHHMMSS} from '../../../utils/formatTime';
import AppText from '../../../components/AppText';
import SvgIcon from '../../../components/SvgIcon';

type RecordItem = {
  title: string;
  time: number;
};

type SubjectItem = {
  subject: string;
  totalTime: number;
  records: RecordItem[];
};

type Props = {
  data: SubjectItem[];
};

const SubjectTimeAccordion = ({data}: Props) => {
  const [expandedSubject, setExpandedSubject] = useState<string | null>(null);
  const animatedControllers = useRef<Record<string, Animated.Value>>( // subject별 animation controller
    {},
  ).current;

  useEffect(() => {
    data.forEach(subject => {
      if (!animatedControllers[subject.subject]) {
        animatedControllers[subject.subject] = new Animated.Value(0);
      }
    });
  }, [data]);

  const toggleSubject = (subject: string) => {
    const isExpanding = expandedSubject !== subject;

    if (expandedSubject && expandedSubject !== subject) {
      // 기존 열려 있던 것 닫기
      Animated.timing(animatedControllers[expandedSubject], {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }

    if (isExpanding) {
      Animated.timing(animatedControllers[subject], {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
      setExpandedSubject(subject);
    } else {
      Animated.timing(animatedControllers[subject], {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start(() => {
        setExpandedSubject(null);
      });
    }
  };

  return (
    <View style={styles.container}>
      {data.map(subject => {
        const isExpanded = expandedSubject === subject.subject;
        const animationValue = animatedControllers[subject.subject];

        const maxHeight = subject.records.length * 60; // 각 row 높이 대략 60
        const heightInterpolate = animationValue?.interpolate({
          inputRange: [0, 1],
          outputRange: [0, maxHeight],
        });

        const opacityInterpolate = animationValue?.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
        });

        return (
          <View key={subject.subject} style={styles.subjectWrapper}>
            <TouchableOpacity
              onPress={() => toggleSubject(subject.subject)}
              style={styles.row}>
              <AppText style={styles.subject}>{subject.subject}</AppText>
              <View style={styles.rowRight}>
                <AppText
                  style={[styles.time, isExpanded ? styles.activeTime : {}]}>
                  {formatHHMMSS(subject.totalTime)}
                </AppText>
                <SvgIcon
                  name={isExpanded ? '위방향' : '아래방향'}
                  size={30}
                  color="#bdbdbd"
                />
              </View>
            </TouchableOpacity>

            <Animated.View
              style={[
                styles.recordContainer,
                {
                  height: heightInterpolate,
                  opacity: opacityInterpolate,
                },
              ]}>
              {subject.records.map((record, idx) => (
                <View
                  key={idx}
                  style={[
                    styles.recordRow,
                    idx % 2 === 1 && styles.recordRowAlt,
                  ]}>
                  <AppText style={styles.recordTitle}>{record.title}</AppText>
                  <AppText style={styles.recordTime}>
                    {formatHHMMSS(record.time)}
                  </AppText>
                </View>
              ))}
            </Animated.View>
          </View>
        );
      })}
    </View>
  );
};

export default SubjectTimeAccordion;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  subjectWrapper: {
    position: 'relative',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 24,
    backgroundColor: '#fff',
  },
  rowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  subject: {
    fontSize: 16,
    fontWeight: '600',
  },
  time: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },
  activeTime: {
    color: '#007AFF',
    fontWeight: '700',
  },
  recordContainer: {
    overflow: 'hidden',
    backgroundColor: '#f8f8f8',
  },
  recordRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
    alignItems: 'center',
    paddingHorizontal: 30,
    backgroundColor: '#f8f8f8',
  },
  recordRowAlt: {
    backgroundColor: '#eeeeee',
  },
  recordTitle: {
    fontSize: 14,
    color: '#333',
    flex: 1,
  },
  recordTime: {
    fontSize: 14,
    color: '#333',
  },
});
