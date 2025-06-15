import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useState} from 'react';
import PureStudyTimeTab from './PureStudyTimeTab';
import BySubjectChartTab from './BySubjectChartTab';
import GoalAchievementChartTab from './GoalAchievementChartTab';

// 탭 이름 배열과 타입 선언
const TAB_NAMES = ['순공시간', '과목별', '목표달성률'] as const;
type TabName = (typeof TAB_NAMES)[number];

const sampleData = [
  {label: '24.12', value: 125},
  {label: '1월', value: 235},
  {label: '2월', value: 146},
  {label: '3월', value: 181},
  {label: '4월', value: 143},
  {label: '이번 달', value: 192},
];

const sampleDataExample = [
  {label: '5월', value: 210},
  {label: '6월', value: 165},
  {label: '7월', value: 278},
  {label: '8월', value: 193},
  {label: '9월', value: 227},
  {label: '10월', value: 154},
];

const StudyTimeOverviewSection = () => {
  const [selectedTab, setSelectedTab] = useState<TabName>('순공시간');

  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        {TAB_NAMES.map(tab => (
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

      <View style={styles.contentContainer}>
        {selectedTab === '순공시간' && <PureStudyTimeTab data={sampleData} />}
        {selectedTab === '과목별' && <BySubjectChartTab />}
        {selectedTab === '목표달성률' && <GoalAchievementChartTab />}
      </View>
    </View>
  );
};

export default StudyTimeOverviewSection;

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
