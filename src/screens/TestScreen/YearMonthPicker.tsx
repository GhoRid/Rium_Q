import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AppText from '../../components/AppText';

const ITEM_HEIGHT = 40;
const YEARS = Array.from({length: 10}, (_, i) => 2021 + i);
const MONTHS = Array.from({length: 12}, (_, i) => i + 1);

export default function YearMonthPicker() {
  const [selectedYear, setSelectedYear] = useState(2023);
  const [selectedMonth, setSelectedMonth] = useState(6);

  const renderItem = (
    item: number,
    selected: boolean,
    onPress: () => void,
    suffix: string,
  ) => (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.item, selected && styles.selectedItem]}>
      <AppText
        style={[styles.itemText, ...(selected ? [styles.selectedText] : [])]}>
        {item}
        {suffix}
      </AppText>
    </TouchableOpacity>
  );

  const renderYearItem = ({item}: {item: number}) =>
    renderItem(item, selectedYear === item, () => setSelectedYear(item), '년');
  const renderMonthItem = ({item}: {item: number}) =>
    renderItem(
      item,
      selectedMonth === item,
      () => setSelectedMonth(item),
      '월',
    );

  return (
    <View style={styles.container}>
      <AppText style={styles.title}>기간 선택</AppText>
      <View style={styles.pickerContainer}>
        {/* 연도 리스트 */}
        <View style={styles.listWrapper}>
          <FlatList
            data={YEARS}
            keyExtractor={item => item.toString()}
            renderItem={renderYearItem}
            showsVerticalScrollIndicator={false}
            snapToInterval={ITEM_HEIGHT}
            decelerationRate="fast"
            initialScrollIndex={YEARS.indexOf(selectedYear)}
            getItemLayout={(data, index) => ({
              length: ITEM_HEIGHT,
              offset: ITEM_HEIGHT * index,
              index,
            })}
            style={styles.list}
          />
        </View>

        {/* 월 리스트 */}
        <View style={styles.listWrapper}>
          <FlatList
            data={MONTHS}
            keyExtractor={item => item.toString()}
            renderItem={renderMonthItem}
            showsVerticalScrollIndicator={false}
            snapToInterval={ITEM_HEIGHT}
            decelerationRate="fast"
            initialScrollIndex={selectedMonth - 1}
            getItemLayout={(data, index) => ({
              length: ITEM_HEIGHT,
              offset: ITEM_HEIGHT * index,
              index,
            })}
            style={styles.list}
          />
        </View>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.cancelBtn}>
          <AppText style={styles.cancelText}>취소</AppText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.confirmBtn}>
          <AppText style={styles.confirmText}>확인</AppText>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 16,
    width: '80%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 12,
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  listWrapper: {
    width: 100,
    height: ITEM_HEIGHT * 5,
    position: 'relative',
    marginHorizontal: 12,
  },
  list: {
    height: ITEM_HEIGHT * 5,
  },
  item: {
    height: ITEM_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedItem: {
    backgroundColor: '#D3D3D3',
    borderRadius: 24,
    paddingHorizontal: 20,
    marginVertical: 4,
  },
  itemText: {
    fontSize: 16,
    color: '#AAA',
  },
  selectedText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000',
  },

  buttons: {
    flexDirection: 'row',
    marginTop: 20,
    width: '100%',
  },
  cancelBtn: {
    flex: 1,
    backgroundColor: '#EEE',
    paddingVertical: 12,
    borderRadius: 12,
    marginRight: 8,
    alignItems: 'center',
  },
  confirmBtn: {
    flex: 1,
    backgroundColor: '#223366',
    paddingVertical: 12,
    borderRadius: 12,
    marginLeft: 8,
    alignItems: 'center',
  },
  cancelText: {
    color: '#000',
    fontWeight: 'bold',
  },
  confirmText: {
    color: '#FFF',
    fontWeight: 'bold',
  },

  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 40,
    zIndex: 10,
  },
  gradientTop: {
    top: 0,
  },
  gradientBottom: {
    bottom: 0,
  },
});
