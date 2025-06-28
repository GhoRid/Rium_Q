// 콤마 찍는 유틸리티 함수
export const formatWithCommas = (number: number): string => {
  return new Intl.NumberFormat('en-US').format(number);
};
