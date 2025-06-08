import {View, Text, TouchableOpacity, StyleSheet, Platform} from 'react-native';
import SvgIcon from '../../components/SvgIcon';
import palette from '../../utils/palette';

const CustomTabBar = ({state, descriptors, navigation}: any) => {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route: any, index: number) => {
        const {options} = descriptors[route.key];
        const label = options.tabBarLabel ?? route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          if (!isFocused) {
            navigation.navigate(route.name);
          }
        };

        // 가운데 버튼은 특별하게 처리
        if (index === 2) {
          return (
            <TouchableOpacity
              key={route.key}
              onPress={onPress}
              //   style={styles.centerButtonContainer}
              activeOpacity={0.8}>
              <View style={styles.centerButton}>
                <SvgIcon name="앱로고1" size={32} color="white" />
              </View>
            </TouchableOpacity>
          );
        }

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={styles.tabItem}>
            <SvgIcon name={route.name} />
            <Text style={{fontSize: 12, color: isFocused ? '#1a2b48' : '#888'}}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomTabBar;

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    // elevation: 10,
    // shadowColor: '#000',
    // shadowOpacity: 0.05,
    // shadowOffset: {width: 0, height: -1},
    // shadowRadius: 5,
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    gap: 5,
    // backgroundColor: 'orange',
  },
  centerButton: {
    width: 70,
    height: 70,
    borderRadius: '50%',
    backgroundColor: palette.app_main_color,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
