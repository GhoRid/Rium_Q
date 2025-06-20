import React, {useEffect, useRef, useState} from 'react';
import {View, StyleSheet, Text, Image, Pressable, Animated} from 'react-native';
import palette from '../../../styles/palette';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../types/screens';

type AchievementRateProps = {
  progress: number;
};

const AchievementRate = ({progress}: AchievementRateProps) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const animation = useRef(new Animated.Value(0)).current;
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    animation.setValue(0);

    const id = animation.addListener(({value}) => {
      setAnimatedProgress(Math.round(value));
    });

    Animated.timing(animation, {
      toValue: progress,
      duration: 1200,
      useNativeDriver: false,
    }).start();

    return () => {
      animation.removeListener(id);
    };
  }, [progress]);

  return (
    <View style={styles.container}>
      <View style={styles.goalHeader}>
        <Text style={styles.goalTitle}>오늘의 목표 달성률</Text>
        <Pressable
          style={styles.studyButton}
          onPress={() => navigation.navigate('Timer')}>
          <Text style={styles.studyButtonText}>공부하기</Text>
        </Pressable>
      </View>

      <View style={styles.progressContainer}>
        <View style={styles.progressBarBackground}>
          <Animated.View
            style={[
              styles.progressBarFill,
              {
                width: animation.interpolate({
                  inputRange: [0, 100],
                  outputRange: ['0%', '100%'],
                }),
              },
            ]}
          />
        </View>

        <View style={styles.characterContainer}>
          <Animated.View
            style={[
              styles.character,
              {
                left: animation.interpolate({
                  inputRange: [0, 100],
                  outputRange: ['0%', '100%'],
                }),
                transform: [{translateX: -30}],
              },
            ]}>
            <Text style={styles.progressTextBubble}>
              {animatedProgress}% 달성!
            </Text>
            <Animated.Image
              source={require('../../../assets/images/seokwang.webp')}
              style={[
                styles.characterImage,
                {
                  transform: [
                    {
                      rotate: animation.interpolate({
                        inputRange: [0, 100],
                        outputRange: ['0deg', '1440deg'],
                      }),
                    },
                  ],
                },
              ]}
            />
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default AchievementRate;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  goalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  goalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  studyButton: {
    borderWidth: 1,
    borderColor: palette.app_main_color,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  studyButtonText: {
    color: '#001742',
    fontSize: 16,
  },
  progressContainer: {
    marginTop: 70,
    position: 'relative',
    paddingBottom: 20,
    marginHorizontal: 20,
  },
  progressBarBackground: {
    height: 6,
    backgroundColor: '#E5E5E5',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: 6,
    backgroundColor: palette.app_main_color,
  },
  characterContainer: {
    position: 'absolute',
    top: -55,
    left: 0,
    right: 0,
  },
  character: {
    position: 'absolute',
    alignItems: 'center',
    transform: [{translateX: -30}],
  },
  progressTextBubble: {
    backgroundColor: '#F4F4F4',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginBottom: 4,
    fontSize: 12,
  },
  characterImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});
