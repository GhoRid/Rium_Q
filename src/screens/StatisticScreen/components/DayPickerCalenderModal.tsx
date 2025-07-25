// DayPickerCalendarModal.tsx

import React, {useState} from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  StyleSheet,
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
} from 'date-fns';
import palette from '../../../styles/palette';

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
            {PRESETS.map(label => (
              <TouchableOpacity
                key={label}
                style={[
                  styles.presetBtn,
                  range &&
                    label.includes(
                      String(
                        Math.round(
                          (range.to.getTime() - range.from.getTime()) /
                            (1000 * 60 * 60 * 24) +
                            1,
                        ),
                      ),
                    ) &&
                    styles.presetBtnActive,
                ]}
                onPress={() => selectPreset(label)}>
                <Text style={styles.presetText}>{label}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <View style={styles.calenderBox}>
            {/* 헤더 */}
            <View style={styles.header}>
              <TouchableOpacity onPress={prevMonth}>
                <Text style={styles.arrow}>‹</Text>
              </TouchableOpacity>
              <Text style={styles.monthText}>
                {format(current, 'yyyy년 M월')}
              </Text>
              <TouchableOpacity onPress={nextMonth}>
                <Text style={styles.arrow}>›</Text>
              </TouchableOpacity>
            </View>

            {/* 요일 */}
            <View style={styles.weekDays}>
              {WEEK_DAYS.map(wd => (
                <Text key={wd} style={styles.weekDayText}>
                  {wd}
                </Text>
              ))}
            </View>

            {/* 날짜 그리드 */}
            {weeks.map((week, wi) => (
              <View key={wi} style={styles.weekRow}>
                {week.map((day, di) => {
                  const inCurrent = isSameMonth(day, current);
                  const inRange = isInRange(day);
                  return (
                    <TouchableOpacity
                      key={di}
                      style={[styles.dayCell, inRange && styles.dayCellActive]}
                      onPress={() => onDayPress(day)}>
                      <Text
                        style={[
                          styles.dayText,
                          !inCurrent && styles.dayTextDisabled,
                        ]}>
                        {format(day, 'd')}
                      </Text>
                    </TouchableOpacity>
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
              <Text style={styles.cancelText}>취소</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.confirmBtn}
              onPress={() => onConfirm(range?.from || null, range?.to || null)}>
              <Text style={styles.confirmText}>확인</Text>
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
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#333',
  },
  presetText: {
    fontSize: 14,
    color: '#333',
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
    fontWeight: 600,
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
    borderRadius: 16,
  },
  dayCellActive: {
    backgroundColor: '#e0eaff',
  },
  dayText: {
    fontSize: 16,
    color: '#333',
  },
  dayTextDisabled: {
    color: '#ccc',
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
