// src/screens/SplashScreen.tsx
import React, {useEffect, useRef} from 'react';
import {View, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';

type Props = {
  onFinish: () => void;
};

export default function SplashScreen({onFinish}: Props) {
  const animationRef = useRef<LottieView>(null);

  useEffect(() => {
    animationRef.current?.play();
  }, []);

  return (
    <View style={styles.container}>
      <LottieView
        style={{
          width: '100%',
          height: '100%',
        }}
        source={require('../assets/splash.json')}
        autoPlay
        loop={false}
        onAnimationFinish={onFinish}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // 필요 시 변경
  },
});
