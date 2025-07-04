import {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import AverageFocusTimeByHour from './AverageFocusTimeByHour';
import AverageFocusTimeByDate from './AverageFocusTimeByDate';
import AppText from '../../../components/AppText';

// 1. 고정된 탭 이름 배열과 타입 선언
const TAB_NAMES = ['시간대별 평균 집중 시간', '요일별 평균 집중 시간'] as const;
type TabName = (typeof TAB_NAMES)[number];

// 2. 예시 데이터
const sampleDataExample = [
  {label: '월', value: 6.2},
  {label: '화', value: 4.2},
  {label: '수', value: 6.3},
  {label: '목', value: 5.7},
  {label: '금', value: 2.1},
  {label: '토', value: 10},
  {label: '일', value: 8.2},
];

const AverageFocusTimeChartBox = () => {
  const [selectedTab, setSelectedTab] =
    useState<TabName>('시간대별 평균 집중 시간');

  return (
    <View style={styles.container}>
      {/* 탭 영역 */}
      <View style={styles.tabBar}>
        {TAB_NAMES.map(tab => (
          <TouchableOpacity
            key={tab}
            style={styles.tabItem}
            onPress={() => setSelectedTab(tab)}>
            <AppText
              style={[
                styles.tabText,
                selectedTab === tab ? styles.tabTextActive : {},
              ]}>
              {tab}
            </AppText>
          </TouchableOpacity>
        ))}
      </View>

      {/* 탭에 따른 콘텐츠 */}
      <View style={styles.contentContainer}>
        {selectedTab === '시간대별 평균 집중 시간' && (
          <AverageFocusTimeByHour />
        )}
        {selectedTab === '요일별 평균 집중 시간' && (
          <AverageFocusTimeByDate data={sampleDataExample} />
        )}
      </View>
    </View>
  );
};

export default AverageFocusTimeChartBox;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  tabBar: {
    flexDirection: 'row',
    padding: 20,
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    fontSize: 16,
    color: '#999',
  },
  tabTextActive: {
    color: '#000',
    fontWeight: '600',
    position: 'relative',
  },
  contentContainer: {
    flex: 1,
    height: 280,
  },
});
