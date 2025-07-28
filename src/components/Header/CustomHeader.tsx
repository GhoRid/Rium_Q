import {StyleSheet, View} from 'react-native';

type CustomHeaderProps = {
  leftItem?: React.ReactNode;
  centerItem?: React.ReactNode;
  rightItem?: React.ReactNode;
};

const CustomHeader = ({leftItem, centerItem, rightItem}: CustomHeaderProps) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.leftItem}>{leftItem ?? leftItem}</View>
      <View style={styles.centerItem}>{centerItem ?? centerItem}</View>
      <View style={styles.rightItem}>{rightItem ?? rightItem}</View>
    </View>
  );
};
export default CustomHeader;

const styles = StyleSheet.create({
  headerContainer: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 25,
    backgroundColor: 'white',
    zIndex: 1000, // 헤더가 다른 요소 위에 오도록 설정
  },
  leftItem: {
    flexGrow: 1, // 왼쪽은 가능한 만큼 늘어남
    flexShrink: 0, // 왼쪽은 줄어들지 않음
    minWidth: 0, // 줄어들 수 있게 허용
    alignItems: 'flex-start',
  },
  centerItem: {
    flexShrink: 1, // 중앙은 공간 부족할 땐 줄어듦
    alignItems: 'center',
  },
  rightItem: {
    flexShrink: 1, // 오른쪽도 공간 부족할 땐 줄어듦
    alignItems: 'flex-end',
  },
});
