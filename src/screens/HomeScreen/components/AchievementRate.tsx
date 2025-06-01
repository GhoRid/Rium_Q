import {Pressable, View, Text, StyleSheet} from 'react-native';

const AchievementRate = () => {
  return (
    <View style={styles.goalContainer}>
      <View style={styles.goalHeader}>
        <Text style={styles.goalTitle}>오늘의 목표 달성률</Text>
        <Pressable style={styles.studyButton}>
          <Text style={styles.studyButtonText}>공부하기</Text>
        </Pressable>
      </View>

      <View style={styles.progressContainer}>
        <View style={styles.progressBarBackground}>
          <View style={styles.progressBarFill} />
        </View>
        <View style={styles.progressLabel}>
          <Text style={styles.progressText}>50% 달성!</Text>
          {/* 이모지로 캐릭터 대체 */}
          <Text style={styles.emoji}>👑😊</Text>
        </View>
      </View>
    </View>
  );
};

export default AchievementRate;

const styles = StyleSheet.create({
  goalContainer: {
    marginBottom: 20,
  },
  goalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  goalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  studyButton: {
    borderWidth: 1,
    borderColor: '#001742',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  studyButtonText: {
    color: '#001742',
    fontSize: 16,
  },
  progressContainer: {
    marginTop: 16,
  },
  progressBarBackground: {
    height: 6,
    backgroundColor: '#E5E5E5',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressBarFill: {
    width: '50%',
    height: 6,
    backgroundColor: '#001742',
  },
  progressLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  progressText: {
    marginRight: 8,
    fontSize: 14,
    color: '#555',
  },
  emoji: {
    fontSize: 20,
  },
});
