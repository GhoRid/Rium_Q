// src/components/SvgIcon.tsx
import React from 'react';
import {SvgProps} from 'react-native-svg';
import * as Icons from '../assets/svg/exportIcon';

type IconProps = SvgProps & {
  // res 에서 re-export 되는 SVG 파일들의 이름을 name 으로 받을 수 있다.
  name: keyof typeof Icons;
  fill?: string;
  color?: string;
  width?: number;
  height?: number;
  size?: number;
  strokeWidth?: number; // 굵기 추가
};

function SvgIcon({
  name,
  fill = 'none',
  color = 'black',
  width: _width,
  height: _height,
  size,
  strokeWidth = 2,
  ...props
}: IconProps) {
  const Comp = Icons[name];
  // `width`, `height` 를 따로 지정할 수 있지만
  // 아이콘은 보통 가로 세로 값이 같은 정사각형 형식이기 때문에
  // 여기서는 `size` 를 사용해 너비와 높이를 같이 지정할 수 있게 해주었다.
  const width = _width ?? size;
  const height = _height ?? size;
  const sizeProps = {
    ...(width !== undefined ? {width} : {}),
    ...(height !== undefined ? {height} : {}),
  };

  return (
    <Comp
      {...props}
      // 1.2.3. `.svgrrc` 의 설정 덕분에 `fill` prop 을 이렇게 사용할 수 있다.
      fill={fill}
      color={color}
      // stroke={fill}
      {...sizeProps}
      strokeWidth={strokeWidth}
    />
  );
}

export default SvgIcon;
