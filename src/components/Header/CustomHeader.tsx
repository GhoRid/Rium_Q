import {StyleSheet, View} from 'react-native';

type CustomHeaderProps = {
  leftItem?: React.ReactNode;
  centerItem?: React.ReactNode;
  rightItem?: React.ReactNode;
};

const CustomHeader = ({leftItem, centerItem, rightItem}: CustomHeaderProps) => {
  return (
    <View style={styles.headerContainer}>
      <View style={{flex: 1, alignItems: 'flex-start'}}>
        {leftItem ?? leftItem}
      </View>
      <View style={{flex: 2, alignItems: 'center'}}>
        {centerItem ?? centerItem}
      </View>
      <View style={{flex: 1, alignItems: 'flex-end'}}>
        {rightItem ?? rightItem}
      </View>
    </View>
  );
};
export default CustomHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  leftItem: {
    flex: 1,
    alignItems: 'flex-start',
  },
  centerItem: {
    flex: 2,
    alignItems: 'center',
  },
  rightItem: {
    flex: 1,
    alignItems: 'flex-end',
  },
});
