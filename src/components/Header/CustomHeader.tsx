import {View} from 'react-native';

type CustomHeaderProps = {
  leftItem?: React.ReactNode;
  centerItem?: React.ReactNode;
  rightItem?: React.ReactNode;
};

const CustomHeader = ({leftItem, centerItem, rightItem}: CustomHeaderProps) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
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
