import React from 'react';
import {Text, TextProps, StyleSheet} from 'react-native';

const AppText = ({style, ...props}: TextProps) => {
  return <Text {...props} style={[styles.text, style]} />;
};

const styles = StyleSheet.create({
  text: {
    // fontFamily: 'NotoSansKR-Black', // 꼭 등록된 이름 그대로 써야 함
    // fontFamily: 'NotoSansKR-ExtraBold', // 꼭 등록된 이름 그대로 써야 함
    // fontFamily: 'NotoSansKR-SemiBold', // 꼭 등록된 이름 그대로 써야 함
    // fontFamily: 'NotoSansKR-Medium', // 꼭 등록된 이름 그대로 써야 함
    // fontFamily: 'NotoSansKR-Regular', // 꼭 등록된 이름 그대로 써야 함
    // fontFamily: 'NotoSansKR-Light', // 꼭 등록된 이름 그대로 써야 함
    // fontFamily: 'NotoSansKR-ExtraLight', // 꼭 등록된 이름 그대로 써야 함
    // fontFamily: 'NotoSansKR-Thin', // 꼭 등록된 이름 그대로 써야 함
  },
});

export default AppText;
