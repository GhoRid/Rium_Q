import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import {
  format,
  addMonths,
  subMonths,
  getYear,
  getMonth,
  eachDayOfInterval,
  startOfMonth,
  endOfMonth,
} from 'date-fns';
import {scaleLinear} from 'd3-scale';
import SvgIcon from '../../../../components/SvgIcon';
import AppText from '../../../../components/AppText';

const SCREEN_WIDTH = Dimensions.get('window').width;
const PADDING = 10;
const CONTENT_WIDTH = SCREEN_WIDTH - PADDING * 2;
const CELL_SIZE = Math.floor(CONTENT_WIDTH / 4); // 4열

const COLOR_LEVELS = ['#ffffff', '#A8C9FF', '#70A3FF', '#3E82FF', '#0667FF'];

const colorScale = scaleLinear<string>()
  .domain([0, 60, 180, 300, 480])
  .range(COLOR_LEVELS)
  .clamp(true);

const focusData: {[date: string]: string} = {
  '2025-06-01': '1:30',
  '2025-06-03': '2:10',
  '2025-06-05': '1:00',
  '2025-06-09': '3:20',
  '2025-06-10': '2:45',
  '2025-06-13': '1:15',
  '2025-06-16': '5:00',
  '2025-06-17': '2:30',
  '2025-06-19': '1:20',
  '2025-06-23': '4:10',
  '2025-06-25': '2:00',
  '2025-06-30': '1:45',
};

const getTotalMinutesOfMonth = (year: number, month: number) => {
  const start = startOfMonth(new Date(year, month));
  const end = endOfMonth(start);
  const days = eachDayOfInterval({start, end});

  let total = 0;
  for (const day of days) {
    const dateStr = format(day, 'yyyy-MM-dd');
    const time = focusData[dateStr];
    if (time) {
      const [h, m] = time.split(':').map(Number);
      total += h * 60 + m;
    }
  }
  return total;
};

const toTimeStr = (minutes: number) => {
  const h = String(Math.floor(minutes / 60)).padStart(2, '0');
  const m = String(minutes % 60).padStart(2, '0');
  return `${h}:${m}:00`;
};

/**
 * 0이면 숫자 지우고
 * 폰트 수정 (전체적으로)
 * 월 올리기
 *
 */

const CalendarByMonth = () => {
  const [baseDate, setBaseDate] = useState(new Date(2025, 5, 1));

  const year = getYear(baseDate);
  const selectedMonth = getMonth(baseDate); // 0~11

  const handlePrev = () => setBaseDate(prev => subMonths(prev, 12));
  const handleNext = () => setBaseDate(prev => addMonths(prev, 12));

  return (
    <View style={styles.container}>
      {/* 헤더 */}
      <View style={styles.calendar}>
        <View style={styles.navRow}>
          <TouchableOpacity onPress={handlePrev}>
            <SvgIcon name="좌측방향" size={24} color="#000" />
          </TouchableOpacity>
          <AppText style={styles.title}>{year}년</AppText>
          <TouchableOpacity onPress={handleNext}>
            <SvgIcon name="우측방향" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        {/* 월 셀 */}
        <View style={styles.grid}>
          {Array.from({length: 12}, (_, idx) => {
            const total = getTotalMinutesOfMonth(year, idx);
            const bgColor = colorScale(total);

            const timeStr = toTimeStr(total);

            const isSelected = selectedMonth === idx;

            return (
              <View
                key={idx}
                style={[
                  styles.cell,
                  {backgroundColor: bgColor},
                  isSelected && styles.selectedCell,
                ]}>
                <AppText style={styles.monthLabel}>{idx + 1}월</AppText>
                {total <= 0 ? (
                  <AppText style={styles.timeText}> </AppText>
                ) : (
                  <AppText style={styles.timeText}>{timeStr}</AppText>
                )}
              </View>
            );
          })}
        </View>
      </View>

      {/* 범례 */}
      <View style={styles.legendContainer}>
        <AppText style={styles.legendLabel}>Less</AppText>
        <View style={styles.legendBar}>
          {COLOR_LEVELS.map((color, i) => (
            <View
              key={i}
              style={[styles.legendBlock, {backgroundColor: color}]}
            />
          ))}
        </View>
        <AppText style={styles.legendLabel}>More</AppText>
      </View>
    </View>
  );
};

export default CalendarByMonth;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: 'white',
  },
  calendar: {
    alignItems: 'center',
  },
  navRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: SCREEN_WIDTH - 40,
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  navText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 16,
    fontWeight: 800,
  },
  grid: {
    width: CONTENT_WIDTH,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cell: {
    width: CELL_SIZE,
    height: CELL_SIZE,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    gap: 7,
  },
  selectedCell: {
    borderWidth: 1,
    borderColor: '#000',
  },
  monthLabel: {
    fontSize: 14,
    color: '#000',
    marginBottom: 4,
  },
  timeText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000',
  },
  legendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  legendLabel: {
    fontSize: 12,
    color: '#999',
    marginHorizontal: 6,
  },
  legendBar: {
    flexDirection: 'row',
  },
  legendBlock: {
    width: 10,
    aspectRatio: 1,
  },
});
