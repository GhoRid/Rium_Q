import React, {useRef, useState, useEffect, useCallback} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Animated,
  ViewStyle,
} from 'react-native';
import {formatHHMMSS} from '../../../utils/formatTime';
import AppText from '../../../components/AppText';
import SvgIcon from '../../../components/SvgIcon';
import {useFocusEffect} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

type RecordItem = {
  planId: number;
  title: string;
  time: number;
};

type SubjectItem = {
  subject: string;
  totalTime: number;
  records: RecordItem[];
};

type SubjectTimeAccordionProps = {
  data: SubjectItem[];
  whiteToBlack?: Animated.AnimatedInterpolation<string>;
};

const SubjectTimeAccordion = ({
  data,
  whiteToBlack,
}: SubjectTimeAccordionProps) => {
  const [expandedSubject, setExpandedSubject] = useState<string | null>(null);
  const [selectedRecord, setSelectedRecord] = useState<number | null>(null);
  const animatedControllers = useRef<Record<string, Animated.Value>>(
    {},
  ).current;

  useEffect(() => {
    data.forEach(subject => {
      if (!animatedControllers[subject.subject]) {
        animatedControllers[subject.subject] = new Animated.Value(0);
      }
    });
  }, [data]);

  useFocusEffect(
    useCallback(() => {
      setExpandedSubject(null);
      Object.keys(animatedControllers).forEach(key => {
        animatedControllers[key].setValue(0);
      });
    }, []),
  );

  const toggleSubject = (subject: string) => {
    const isExpanding = expandedSubject !== subject;

    if (expandedSubject && expandedSubject !== subject) {
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
    <Animated.View style={{backgroundColor: whiteToBlack}}>
      {data.map(subject => {
        const isExpanded = expandedSubject === subject.subject;
        const animationValue = animatedControllers[subject.subject];
        const rowHeight = 60;
        const maxHeight = subject.records.length * rowHeight;

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
            {isExpanded && subject.records.length > 0 && (
              <LinearGradient
                colors={[
                  'rgba(255,255,255,0)',
                  // 'rgba(255,255,255,0.5)',
                  // 'rgba(255,255,255,1)',
                ]}
                style={styles.gradientOverlay}
                pointerEvents="none"
              />
            )}

            <Animated.View
              style={[
                styles.recordContainer,
                {
                  height: isExpanded ? heightInterpolate : 0,
                  opacity: isExpanded ? opacityInterpolate : 0,
                  overflow: 'hidden',
                },
              ]}>
              {subject.records.map((record, idx) => {
                const isSelected = selectedRecord === record.planId;
                return (
                  <TouchableOpacity
                    key={idx}
                    onPress={() =>
                      setSelectedRecord(prev =>
                        prev === record.planId ? null : record.planId,
                      )
                    }
                    style={styles.recordRow}>
                    <AppText
                      style={[
                        styles.recordTitle,
                        isSelected ? styles.selectedText : {},
                      ]}>
                      {record.title}
                    </AppText>
                    <AppText
                      style={[
                        styles.recordTime,
                        isSelected ? styles.selectedText : {},
                      ]}>
                      {formatHHMMSS(record.time)}
                    </AppText>
                  </TouchableOpacity>
                );
              })}
            </Animated.View>
          </View>
        );
      })}
    </Animated.View>
  );
};

export default SubjectTimeAccordion;

const styles = StyleSheet.create({
  subjectWrapper: {
    position: 'relative',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 24,
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
    position: 'relative',
  },
  recordRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  recordRowAlt: {},
  recordTitle: {
    fontSize: 14,
    color: '#333',
    flex: 1,
  },
  recordTime: {
    fontSize: 14,
    color: '#333',
  },
  selectedText: {
    color: '#007AFF',
    fontWeight: '700',
  },
  gradientOverlay: {
    position: 'absolute',
    bottom: 0,
    height: 30,
    width: '100%',
  },
});
