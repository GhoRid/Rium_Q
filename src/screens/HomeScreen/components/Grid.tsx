import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import SvgIcon from '../../../components/SvgIcon';

const Grid = () => {
  return (
    <View style={styles.grid}>
      {/* 왼쪽 세로 긴 카드 */}
      <View style={styles.leftColumn}>
        <View style={styles.rankingCard}>
          <Text style={styles.smallText}>내 랭킹</Text>
        </View>
      </View>

      {/* 오른쪽 세로 두 줄 카드 */}
      <View style={styles.rightColumn}>
        <TouchableOpacity style={styles.seatCard}>
          <View style={styles.seatTextContainer}>
            <Text style={styles.seatText}>좌석{'\n'}예약하기</Text>
          </View>
          <SvgIcon name="책상" color="white" width={38} height={38} />
        </TouchableOpacity>

        <View style={styles.smallCard}>
          <Text style={styles.smallText}>석왕이 깨기</Text>
        </View>
      </View>
    </View>
  );
};

export default Grid;

const shadow = {
  shadowColor: '#000',
  shadowOpacity: 0.1,
  shadowOffset: {width: 0, height: 2},
  shadowRadius: 4,
  elevation: 2,
};

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: '4%',
  },
  leftColumn: {
    width: '48%',
  },
  rightColumn: {
    width: '48%',
    justifyContent: 'space-between',
  },
  rankingCard: {
    height: 216,
    backgroundColor: '#fff',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    ...shadow,
  },
  smallCard: {
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    ...shadow,
  },
  smallText: {
    color: '#333',
    fontSize: 16,
    fontWeight: '500',
  },
  seatCard: {
    height: 100,
    backgroundColor: '#001742',
    borderRadius: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    ...shadow,
  },
  seatTextContainer: {
    flex: 1,
  },
  seatText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 22,
  },
});
