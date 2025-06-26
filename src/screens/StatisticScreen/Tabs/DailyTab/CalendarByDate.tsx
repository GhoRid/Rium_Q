import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import {
  getMonth,
  getYear,
  eachDayOfInterval,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  format,
  addMonths,
  subMonths,
  isSameMonth,
} from 'date-fns';
import {scaleLinear} from 'd3-scale';
import SvgIcon from '../../../../components/SvgIcon';
import AppText from '../../../../components/AppText';

const DAYS = ['일', '월', '화', '수', '목', '금', '토'];
const SCREEN_WIDTH = Dimensions.get('window').width;
const PADDING = 10;
const CONTENT_WIDTH = SCREEN_WIDTH - PADDING * 2;
const CELL_SIZE = Math.floor(CONTENT_WIDTH / 7);

// 예시 데이터
const focusData: {[date: string]: string} = {
  '2025-06-01': '12:32',
  '2025-06-03': '10:21',
  '2025-06-10': '5:49',
  '2025-06-26': '12:32',
  '2025-06-27': '2:32',
};

const COLOR_LEVELS = ['#ffffff', '#A8C9FF', '#70A3FF', '#3E82FF', '#0667FF'];

const getIntensityColor = (time: string | undefined): string => {
  if (!time) return '#ffffff';
  const [h, m] = time.split(':').map(Number);
  const total = h * 60 + m;

  const colorScale = scaleLinear<string>()
    .domain([0, 60, 180, 300, 480])
    .range(COLOR_LEVELS)
    .clamp(true);

  return colorScale(total);
};

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 5)); // 6월

  const year = getYear(currentDate);
  const month = getMonth(currentDate) + 1;

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const calendarStart = startOfWeek(monthStart, {weekStartsOn: 0});
  const calendarEnd = endOfWeek(monthEnd, {weekStartsOn: 0});

  const paddedDays = eachDayOfInterval({
    start: calendarStart,
    end: calendarEnd,
  });

  const handlePrevMonth = () => setCurrentDate(prev => subMonths(prev, 1));
  const handleNextMonth = () => setCurrentDate(prev => addMonths(prev, 1));

  return (
    <View style={styles.container}>
      <View style={styles.calendar}>
        {/* 상단 네비게이션 */}
        <View style={styles.navRow}>
          <TouchableOpacity onPress={handlePrevMonth}>
            <SvgIcon name="좌측방향" size={24} color="#000" />
          </TouchableOpacity>
          <AppText style={styles.title}>{`${year}년 ${month}월`}</AppText>
          <TouchableOpacity onPress={handleNextMonth}>
            <SvgIcon name="우측방향" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        {/* 요일 헤더 */}
        <View style={styles.headerRow}>
          {DAYS.map(day => (
            <AppText key={day} style={styles.dayHeader}>
              {day}
            </AppText>
          ))}
        </View>

        {/* 날짜 그리드 */}
        <View style={styles.grid}>
          {paddedDays.map((day, idx) => {
            const dateStr = format(day, 'yyyy-MM-dd');
            const time = focusData[dateStr];
            const isCurrentMonth = isSameMonth(day, currentDate);

            return (
              <View
                key={idx}
                style={[
                  styles.cell,
                  {backgroundColor: getIntensityColor(time)},
                ]}>
                <AppText
                  style={[styles.dateText, !isCurrentMonth && {color: '#ccc'}]}>
                  {day.getDate()}
                </AppText>
                {time ? (
                  <AppText
                    style={[
                      styles.timeText,
                      !isCurrentMonth && {color: '#ccc'},
                    ]}>
                    {time}
                  </AppText>
                ) : (
                  <AppText> </AppText>
                )}
              </View>
            );
          })}
        </View>
      </View>

      {/* 하단 범례 */}
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

export default Calendar;

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
    fontWeight: '600',
  },
  headerRow: {
    flexDirection: 'row',
    width: CONTENT_WIDTH,
    marginBottom: 10,
  },
  dayHeader: {
    width: CELL_SIZE,
    textAlign: 'center',
    fontWeight: '600',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: CONTENT_WIDTH,
  },
  cell: {
    width: CELL_SIZE,
    height: CELL_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateText: {
    fontSize: 12,
    fontWeight: '500',
  },
  timeText: {
    fontSize: 10,
    color: '#333',
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
