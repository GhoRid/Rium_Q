import {StyleSheet, View} from 'react-native';
import AppText from '../../../components/AppText';

type NoticeItemProps = {
  notice: {
    id: number;
    icon: string;
    time: string;
    text: string;
    dot?: boolean;
  };
};

const NoticeItem = ({notice}: NoticeItemProps) => {
  return (
    <View key={notice.id} style={styles.noticeRow}>
      <View style={styles.leftArea}>
        <AppText style={styles.noticeIcon}>{notice.icon}</AppText>
      </View>
      <View style={styles.noticeContentArea}>
        <AppText style={styles.noticeTime}>{notice.time}</AppText>
        <AppText style={styles.noticeText}>{notice.text}</AppText>
      </View>
      {notice.dot && <View style={styles.redDot} />}
    </View>
  );
};

export default NoticeItem;

const styles = StyleSheet.create({
  noticeRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 18,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#F2F5F9',
    minHeight: 48,
    position: 'relative',
  },
  leftArea: {
    alignItems: 'center',
    marginRight: 12,
    width: 40,
  },
  noticeIcon: {
    fontSize: 18,
    marginBottom: 2,
  },
  noticeTime: {
    fontSize: 13,
    color: '#C3C9CF',
    marginTop: 1,
  },
  noticeContentArea: {
    flex: 1,
    justifyContent: 'center',
    gap: 4,
  },
  noticeText: {
    fontSize: 15,
    color: '#222',
    lineHeight: 21,
  },
  redDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF3636',
    position: 'absolute',
    right: 20,
    top: 22,
  },
});
