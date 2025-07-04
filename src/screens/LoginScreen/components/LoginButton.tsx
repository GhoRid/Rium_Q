import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import SvgIcon from '../../../components/SvgIcon';
import AppText from '../../../components/AppText';

type LoginButtonProps = {
  text: string;
  backgroundColor: string;
  textColor?: string;
  borderColor?: string;
  iconName?: string; // 없으면 아이콘 없이
  onPress?: () => void; // 클릭 이벤트 핸들러
};

const LoginButton = ({
  text,
  backgroundColor,
  textColor = '#000',
  borderColor,
  iconName,
  onPress,
}: LoginButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        styles.button,
        {
          backgroundColor,
          borderColor: borderColor ?? backgroundColor,
          borderWidth: borderColor ? 1 : 0,
        },
      ]}
      onPress={onPress}>
      {/* 아이콘 위치 고정 (있든 없든 공간 확보) */}
      <View style={styles.iconWrapper}>
        {iconName && (
          <SvgIcon name={iconName as any} size={18} color={textColor} />
        )}
      </View>

      {/* 텍스트 중앙 정렬 */}
      <AppText style={[styles.text, {color: textColor}]}>{text}</AppText>
    </TouchableOpacity>
  );
};

export default LoginButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    height: 56,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapper: {
    position: 'absolute',
    justifyContent: 'center',
    left: 24,
    top: 0,
    bottom: 0,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
