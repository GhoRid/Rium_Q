import {StyleSheet, View, TouchableOpacity} from 'react-native';
import SvgIcon from '../../../components/SvgIcon';
import {palette} from '../../../styles/palette';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../types/screens';
import shadow from '../../../styles/shadow';
import AppText from '../../../components/AppText';

const Grid = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.grid}>
      {/* 왼쪽 세로 긴 카드 */}
      <View style={styles.leftColumn}>
        <View style={styles.longCard}>
          <AppText style={styles.smallText}>내 랭킹</AppText>
        </View>
      </View>

      {/* 오른쪽 세로 두 줄 카드 */}
      <View style={styles.rightColumn}>
        <TouchableOpacity
          style={styles.seatCard}
          onPress={() => {
            navigation.navigate('SeatReservation');
          }}>
          <View style={styles.seatTextContainer}>
            <AppText style={styles.seatText}>좌석{'\n'}예약하기</AppText>
          </View>
          <SvgIcon name="책상" color="white" width={38} height={38} />
        </TouchableOpacity>

        <View style={styles.smallCard}>
          <AppText style={styles.smallText}>석왕이 깨기</AppText>
        </View>
      </View>
    </View>
  );
};

export default Grid;

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: '4%',
    height: '35%',
  },
  leftColumn: {
    width: '48%',
  },
  rightColumn: {
    width: '48%',
    justifyContent: 'space-between',
  },
  longCard: {
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    ...shadow,
  },
  smallCard: {
    height: '48%',
    backgroundColor: '#fff',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    ...shadow,
  },
  smallText: {
    color: '#333',
    fontSize: 16,
    fontWeight: 500,
  },
  seatCard: {
    height: '48%',
    borderRadius: 16,
    backgroundColor: palette.app_main_color,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    ...shadow,
  },
  seatTextContainer: {},
  seatText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 22,
  },
});
