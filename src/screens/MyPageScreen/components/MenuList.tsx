import {StyleSheet, TouchableOpacity, View} from 'react-native';
import SvgIcon from '../../../components/SvgIcon';
import AppText from '../../../components/AppText';

type MenuListProps = {
  menuList: string[];
};

const MenuList = ({menuList}: MenuListProps) => {
  return (
    <View style={styles.container}>
      {menuList.map((label, idx) => (
        <TouchableOpacity style={styles.menuItem} key={idx}>
          <AppText style={styles.menuText}>{label}</AppText>
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
