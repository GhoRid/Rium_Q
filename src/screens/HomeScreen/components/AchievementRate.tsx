import {Pressable, View, Text, StyleSheet, Image} from 'react-native';

interface AchievementRateProps {
  progress: number;
}

const AchievementRate = ({progress}: AchievementRateProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.goalHeader}>
        <Text style={styles.goalTitle}>오늘의 목표 달성률</Text>
        <Pressable style={styles.studyButton}>
          <Text style={styles.studyButtonText}>공부하기</Text>
        </Pressable>
      </View>

      {/* 진행바 */}
      <View style={styles.progressContainer}>
        <View style={styles.progressBarBackground}>
          <View style={[styles.progressBarFill, {width: `${progress}%`}]} />
        </View>
        {/* 석왕이 */}
        <View style={styles.characterContainer}>
          <View style={[styles.character, {left: `${progress}%`}]}>
            <Text style={styles.progressTextBubble}>{progress}% 달성!</Text>
            <Image
              source={require('../../../assets/images/seokwang.webp')}
              style={styles.characterImage}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default AchievementRate;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    // paddingBottom: 20,
    // backgroundColor: '#5444',
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
  // 진행바
  progressContainer: {
    marginTop: 70,
    position: 'relative',
    paddingBottom: 20, // ✅ 이미지가 아래로 삐져나가도 잘리지 않게 공간 확보
    marginHorizontal: 20,
    // backgroundColor: 'orange',
  },
  progressBarBackground: {
    height: 6,
    backgroundColor: '#E5E5E5',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: 6,
    backgroundColor: '#001742',
  },
  // 캐릭터
  characterContainer: {
    position: 'absolute',
    top: -55, // 말풍선과 캐릭터를 위로 띄우기
    left: 0,
    right: 0,
  },
  character: {
    position: 'absolute',
    alignItems: 'center',
    transform: [{translateX: -30}],
  },
  progressTextBubble: {
    backgroundColor: '#F4F4F4',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginBottom: 4,
    fontSize: 12,
  },
  characterImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain', // ✅ 이미지 비율 유지
  },
});
