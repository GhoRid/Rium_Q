import {StyleSheet, Text, View} from 'react-native';
import SaveCode from './SaveCode';

const RankBarCard = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.left]}>
        <Text style={styles.targetRangeText}>19세 학생 중</Text>
        <View style={styles.highlightWrap}>
          <Text style={styles.rankingRateText}>상위 10%</Text>
          <View style={styles.underline} />
        </View>
      </View>
      <View style={[styles.box, styles.right]}></View>
    </View>
  );
};

export default RankBarCard;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
    backgroundColor: 'white',
    marginBottom: 30,
  },
  box: {
    flex: 1,
    height: 150,
  },
  left: {
    marginTop: 30,
    alignItems: 'center',
  },
  targetRangeText: {
    fontSize: 18,
  },
  highlightWrap: {
    position: 'relative',
  },
  rankingRateText: {
    fontSize: 24,
    color: '#0667FF',
    fontWeight: 'bold',
    zIndex: 1, // 텍스트가 하이라이트 위에 오도록
  },
  underline: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 2, // 텍스트와 간격
    height: 13, // 밑줄 두께
    backgroundColor: '#CDE1FF',
    borderRadius: 5,
    zIndex: 0,
  },
  right: {},
});
