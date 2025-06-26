import React from 'react';
import {Text, TextProps, TextStyle} from 'react-native';

interface AppTextProps extends TextProps {
  style?: TextStyle | TextStyle[];
}

const getFontFamily = (weight?: TextStyle['fontWeight']): string => {
  const weightStr = (typeof weight === 'string' ? weight : '')?.toLowerCase();

  switch (weightStr) {
    case '100':
    case 'thin':
      return 'NotoSansKR-Thin';
    case '200':
    case 'extralight':
      return 'NotoSansKR-ExtraLight';
    case '300':
    case 'light':
      return 'NotoSansKR-Light';
    case '400':
    case 'normal':
    case undefined:
      return 'NotoSansKR-Regular';
    case '500':
    case 'medium':
      return 'NotoSansKR-Medium';
    case '600':
    case 'semibold':
      return 'NotoSansKR-SemiBold';
    case '700':
    case 'bold':
      return 'NotoSansKR-Bold';
    case '800':
    case 'extrabold':
      return 'NotoSansKR-ExtraBold';
    case '900':
    case 'black':
      return 'NotoSansKR-Black';
    default:
      return 'NotoSansKR-Regular';
  }
};

const AppText = ({style, ...props}: AppTextProps) => {
  const styleArray = Array.isArray(style) ? style : [style];

  const flatStyle = Object.assign({}, ...styleArray);

  const fontSize = flatStyle.fontSize ?? 16;
  const fontWeight = flatStyle.fontWeight;
  const fontFamily = getFontFamily(fontWeight);

  const computedStyle: TextStyle = {
    fontFamily,
    fontSize,
    lineHeight: Math.round(fontSize * 1.3),
  };

  return <Text {...props} style={[computedStyle, ...styleArray]} />;
};

export default AppText;
