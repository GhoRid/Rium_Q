// DayPickerCalendarModal.tsx

import React, {useState} from 'react';
import {
  Modal,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  StyleSheet,
  Pressable,
} from 'react-native';
import {
  eachDayOfInterval,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  format,
  addMonths,
  subMonths,
  isSameMonth,
  isSameDay,
} from 'date-fns';
import {palette} from '../../../styles/palette';
import AppText from '../../../components/AppText';

const SCREEN_WIDTH = Dimensions.get('window').width;
const MODAL_WIDTH = SCREEN_WIDTH * 0.8;
const PRESETS = ['지난 7일', '지난 28일', '지난 60일', '지난 90일'];
const WEEK_DAYS = ['일', '월', '화', '수', '목', '금', '토'];

// date-fns 로 6주치 날짜 배열 생성
const generateCalendar = (date: Date): Date[][] => {
  const monthStart = startOfMonth(date);
  const monthEnd = endOfMonth(date);
  const rangeStart = startOfWeek(monthStart, {weekStartsOn: 0});
  const rangeEnd = endOfWeek(monthEnd, {weekStartsOn: 0});
  const days = eachDayOfInterval({start: rangeStart, end: rangeEnd});
  const weeks: Date[][] = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }
  return weeks;
};

type Props = {
  isModalVisible: boolean;
  setIsModalVisible: (v: boolean) => void;
  onConfirm: (from: Date | null, to: Date | null) => void;
};

const DayPickerCalendarModal: React.FC<Props> = ({
  isModalVisible,
  setIsModalVisible,
  onConfirm,
}) => {
  const [current, setCurrent] = useState(new Date());
  const [range, setRange] = useState<{from: Date; to: Date} | null>(null);
  const [selectedPreset, setSelectedPreset] = useState<string | null>(null);

  const weeks = generateCalendar(current);

  const prevMonth = () => setCurrent(subMonths(current, 1));
  const nextMonth = () => setCurrent(addMonths(current, 1));

  const selectPreset = (label: string) => {
    const to = new Date();
    const from = new Date();
    switch (label) {
      case '지난 7일':
        from.setDate(to.getDate() - 6);
        break;
      case '지난 28일':
        from.setDate(to.getDate() - 27);
        break;
      case '지난 60일':
        from.setDate(to.getDate() - 59);
        break;
      case '지난 90일':
        from.setDate(to.getDate() - 89);
        break;
    }
    setRange({from, to});
  };

  const onDayPress = (day: Date) => {
    if (!range) {
      setRange({from: day, to: day});
    } else {
      if (day < range.from) setRange({from: day, to: range.to});
      else setRange({from: range.from, to: day});
    }
  };

  const isInRange = (day: Date) =>
    !!range && day >= range.from && day <= range.to;

  return (
    <Modal visible={isModalVisible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.customModalBox}>
          {/* 프리셋 */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.presetsRow}>
            {PRESETS.map(label => {
              const isActive = selectedPreset === label;

              return (
                <TouchableOpacity
                  key={label}
                  style={[styles.presetBtn, isActive && styles.presetBtnActive]}
                  onPress={() => {
                    if (isActive) {
                      setSelectedPreset(null);
                      setRange(null);
                    } else {
                      setSelectedPreset(label);
                      selectPreset(label);
                    }
                  }}>
                  <AppText
                    style={
                      isActive ? styles.presetTextActive : styles.presetText
                    }>
                    {label}
                  </AppText>
                </TouchableOpacity>
              );
            })}
          </ScrollView>

          {/* 캘린더 */}
          <View style={styles.calenderBox}>
            {/* 헤더 */}
            <View style={styles.header}>
              <TouchableOpacity onPress={prevMonth}>
                <AppText style={styles.arrow}>‹</AppText>
              </TouchableOpacity>
              <AppText style={styles.monthText}>
                {format(current, 'yyyy년 M월')}
              </AppText>
              <TouchableOpacity onPress={nextMonth}>
                <AppText style={styles.arrow}>›</AppText>
              </TouchableOpacity>
            </View>

            {/* 요일 */}
            <View style={styles.weekDays}>
              {WEEK_DAYS.map(wd => (
                <AppText key={wd} style={styles.weekDayText}>
                  {wd}
                </AppText>
              ))}
            </View>

            {/* 날짜 그리드 */}
            {weeks.map((week, wi) => (
              <View key={wi} style={styles.weekRow}>
                {week.map((day, di) => {
                  const inCurrent = isSameMonth(day, current);
                  const inRange = isInRange(day);
                  const isStart = range !== null && isSameDay(day, range.from);
                  const isEnd = range !== null && isSameDay(day, range.to);
                  const isBetween = inRange && !isStart && !isEnd;

                  return (
                    <Pressable
                      key={di}
                      style={[
                        styles.dayCell,
                        // 중간 구간: 연한 파란 배경
                        isBetween && styles.rangeMiddle,
                        isStart && styles.rangeMiddleStart,
                        isEnd && styles.rangeMiddleEnd,
                      ]}
                      onPress={() => {
                        onDayPress(day);
                        !!selectedPreset && setSelectedPreset(null);
                      }}>
                      <View
                        style={[
                          // 시작/끝: 진한 파란 원
                          isStart || isEnd ? styles.rangeEndPoint : {},
                        ]}>
                        <AppText
                          style={[
                            styles.dayText,
                            !inCurrent ? styles.dayTextDisabled : {},
                            isStart || isEnd ? styles.dayTextSelected : {},
                          ]}>
                          {format(day, 'd')}
                        </AppText>
                      </View>
                    </Pressable>
                  );
                })}
              </View>
            ))}
          </View>

          {/* 하단 버튼 */}
          <View style={styles.footer}>
            <TouchableOpacity
              style={styles.cancelBtn}
              onPress={() => setIsModalVisible(false)}>
              <AppText style={styles.cancelText}>취소</AppText>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.confirmBtn}
              onPress={() => onConfirm(range?.from || null, range?.to || null)}>
              <AppText style={styles.confirmText}>확인</AppText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DayPickerCalendarModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.35)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  customModalBox: {
    width: MODAL_WIDTH,
    backgroundColor: '#fff',
    borderRadius: 15,
    overflow: 'hidden',
  },
  presetsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 25,
    paddingHorizontal: 20,
    gap: 10,
  },
  presetBtn: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
  },
  presetBtnActive: {
    backgroundColor: '#E6F0FF',
  },
  presetText: {
    fontSize: 14,
    color: '#333',
  },
  presetTextActive: {
    fontSize: 14,
    color: palette.app_blue,
  },
  calenderBox: {
    paddingHorizontal: 25,
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
    marginBottom: 15,
  },
  arrow: {
    fontSize: 24,
    color: '#333',
    width: 32,
    textAlign: 'center',
  },
  monthText: {
    fontSize: 18,
    fontWeight: '600',
    color: palette.app_main_color,
  },
  weekDays: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  weekDayText: {
    width: (MODAL_WIDTH - 50) / 7,
    textAlign: 'center',
    color: '#7B8199',
    fontSize: 16,
  },
  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  dayCell: {
    width: (MODAL_WIDTH - 50) / 7,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // 선택 범위 중간 구간 (연한 파란색)
  rangeMiddle: {
    backgroundColor: '#E6F0FF',
  },
  rangeMiddleStart: {
    backgroundColor: '#E6F0FF',
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
  },
  rangeMiddleEnd: {
    backgroundColor: '#E6F0FF',
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
  },
  // 선택 시작·끝 원 (진한 파란색)
  rangeEndPoint: {
    backgroundColor: palette.app_blue,
    borderRadius: 16,
    padding: 3,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dayText: {
    fontSize: 16,
    color: '#333',
  },
  dayTextDisabled: {
    color: '#ccc',
  },
  // 시작·끝 텍스트 흰색
  dayTextSelected: {
    color: '#fff',
  },
  footer: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    height: 48,
  },
  cancelBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1F1F1',
  },
  cancelText: {
    fontSize: 16,
    color: '#333',
  },
  confirmBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: palette.app_main_color,
  },
  confirmText: {
    fontSize: 16,
    color: '#fff',
  },
});
