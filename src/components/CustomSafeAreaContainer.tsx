import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet, ViewStyle} from 'react-native';

export const CustomSafeAreaView = (Component: React.ComponentType<any>) => {
  return (props: any) => (
    <SafeAreaView style={styles.container}>
      <Component {...props} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  } as ViewStyle,
});
