import React, {PropsWithChildren} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import BackButtonHeaderLeft from './BackButtonHeaderLeft';

type CustomHeaderProps = {
  children?: React.ReactNode;
  options?: NativeStackNavigationOptions;
  headerText?: string | number;
  isBackButton?: boolean;
  headerRightEl?: React.ReactNode;
  onlyChildren?: boolean;
};

function CustomHeader({
  children,
  isBackButton,
  headerRightEl,
}: CustomHeaderProps) {
  return (
    <View style={styles.container}>
      {children ? (
        children
      ) : (
        <>
          {isBackButton ? <BackButtonHeaderLeft /> : 'null'}
          {children}
          {/* {headerRightEl ? headerRightEl : <EmptyBox />} */}
        </>
      )}
    </View>
  );
}

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 16,
    height: 60,
    marginTop: Platform.OS === 'android' ? 0 : 0,
    marginBottom: 10,
  },
  headerBox: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
