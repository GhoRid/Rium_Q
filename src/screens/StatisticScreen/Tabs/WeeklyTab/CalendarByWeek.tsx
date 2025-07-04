import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {
  eachWeekOfInterval,
  addDays,
  format,
  addWeeks,
  subWeeks,
} from 'date-fns';
import {scaleLinear} from 'd3-scale';
import SvgIcon from '../../../../components/SvgIcon';
import AppText from '../../../../components/AppText';

const SCREEN_WIDTH = Dimensions.get('window').width;
const PADDING = 10;
const CONTENT_WIDTH = SCREEN_WIDTH - PADDING * 2;
const CELL_SIZE = Math.floor(CONTENT_WIDTH / 5);

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

const COLOR_LEVELS = ['#ffffff', '#A8C9FF', '#70A3FF', '#3E82FF', '#0667FF'];

const colorScale = scaleLinear<string>()
  .domain([0, 60, 180, 300, 480])
  .range(COLOR_LEVELS)
  .clamp(true);

const getWeeklyTotalMinutes = (weekStart: Date): number => {
  let total = 0;

  for (let i = 0; i < 7; i++) {
    const date = format(addDays(weekStart, i), 'yyyy-MM-dd');
    const time = focusData[date];

    if (time) {
      const [h, m] = time.split(':').map(Number);
      total += h * 60 + m;
    }
  }

  return total;
};

const toTimeStr = (total: number) => {
  const h = String(Math.floor(total / 60)).padStart(2, '0');
  const m = String(total % 60).padStart(2, '0');
  return `${h}:${m}:00`;
};

const CalendarByWeek = () => {
  const [baseDate, setBaseDate] = useState(new Date(2025, 5, 1));

  const weeks = eachWeekOfInterval(
    {
      start: new Date(2025, 2, 2),
      end: new Date(2025, 5, 30),
    },
    {weekStartsOn: 0},
  );

  const handlePrev = () => setBaseDate(prev => subWeeks(prev, 5));
  const handleNext = () => setBaseDate(prev => addWeeks(prev, 5));

  return (
    <View style={styles.container}>
      {/* 상단 네비게이션 */}
      <View style={styles.calendar}>
        <View style={styles.navRow}>
          <TouchableOpacity onPress={handlePrev}>
            <SvgIcon name="좌측방향" size={24} color="#000" />
          </TouchableOpacity>
          <AppText style={styles.title}>2025년 2분기</AppText>
          <TouchableOpacity onPress={handleNext}>
            <SvgIcon name="우측방향" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        {/* 주간 셀 */}
        <View style={styles.grid}>
          {weeks.map((weekStart, idx) => {
            const totalMinutes = getWeeklyTotalMinutes(weekStart);
            const timeStr = toTimeStr(totalMinutes);
            const weekLabel = format(weekStart, 'M/d') + '~';

            return (
              <View
                key={idx}
                style={[
                  styles.cell,
                  {backgroundColor: colorScale(totalMinutes)},
                ]}>
                <AppText style={styles.weekLabel}>{weekLabel}</AppText>

                {totalMinutes <= 0 ? (
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
          {COLOR_LEVELS.map((color, idx) => (
            <View
              key={idx}
              style={[styles.legendBlock, {backgroundColor: color}]}
            />
          ))}
        </View>
        <AppText style={styles.legendLabel}>More</AppText>
      </View>
    </View>
  );
};

export default CalendarByWeek;

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
    fontWeight: 600,
  },
  grid: {
    width: CONTENT_WIDTH, // 정확히 5칸
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cell: {
    width: CELL_SIZE,
    height: CELL_SIZE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  weekLabel: {
    fontSize: 12,
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
