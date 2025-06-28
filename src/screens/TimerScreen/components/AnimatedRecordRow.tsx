import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import AppText from '../../../components/AppText';
import {formatHHMMSS} from '../../../utils/formatTime';

type Props = {
  title: string;
  time: number;
  alt?: boolean;
};

const AnimatedRecordRow = ({title, time, alt}: Props) => {
  const translateY = useRef(new Animated.Value(20)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <Animated.View
      style={[
        styles.recordRow,
        alt && styles.recordRowAlt,
        {
          transform: [{translateY}],
          opacity,
        },
      ]}>
      <AppText style={styles.recordTitle}>{title}</AppText>
      <AppText style={styles.recordTime}>{formatHHMMSS(time)}</AppText>
    </Animated.View>
  );
};

export default AnimatedRecordRow;

const styles = StyleSheet.create({
  recordRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f8f8f8',
    paddingVertical: 20,
    paddingHorizontal: 30,
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
