export const formatWithCommas = (number: number): string => {
  return new Intl.NumberFormat('en-US').format(number);
};
