import {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AverageFocusTimeByHour from './AverageFocusTimeByHour';
import AverageFocusTimeByDate from './AverageFocusTimeByDate';

type TabName = '시간대별 평균 집중 시간' | '요일별 평균 집중 시간';

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
      <View style={styles.tabBar}>
        {(
          ['시간대별 평균 집중 시간', '요일별 평균 집중 시간'] as TabName[]
        ).map(tab => (
          <TouchableOpacity
            key={tab}
            style={styles.tabItem}
            onPress={() => setSelectedTab(tab)}>
            <Text
              style={[
                styles.tabText,
                selectedTab === tab && styles.tabTextActive,
              ]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* 2) 탭에 따라 다른 콘텐츠 렌더링 */}
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
    position: 'relative', // 자식 컴포넌트가 절대 위치를 사용할 수 있도록
  },
  contentContainer: {
    flex: 1,
    height: 280,
  },
});
