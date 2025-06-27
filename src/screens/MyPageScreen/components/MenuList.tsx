import {StyleSheet, TouchableOpacity, View} from 'react-native';
import SvgIcon from '../../../components/SvgIcon';
import AppText from '../../../components/AppText';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../types/screens';

type MenuListProps = {
  menuList: {
    label: string;
    route: string;
  }[];
};

const MenuList = ({menuList}: MenuListProps) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      {menuList.map((item, idx) => (
        <TouchableOpacity
          style={styles.menuItem}
          key={idx}
          onPress={() => {
            navigation.navigate(item.route);
          }}>
          <AppText style={styles.menuText}>{item.label}</AppText>
          <SvgIcon name="우측방향" size={24} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default MenuList;

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
  },
  menuText: {
    fontSize: 16,
    color: '#222',
  },
  arrow: {
    fontSize: 18,
    color: '#bbb',
  },
});
