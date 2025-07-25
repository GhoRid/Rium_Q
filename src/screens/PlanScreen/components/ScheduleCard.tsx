import React from 'react';
import {StyleSheet, View, TouchableOpacity, Dimensions} from 'react-native';
import SvgIcon from '../../../components/SvgIcon';
import AppText from '../../../components/AppText';

type ScheduleCardProps = {
  date: string;
  items: {
    subject: string;
    title: string;
    time: string;
    color: string;
  }[];
};

const SCREEN_WIDTH = Dimensions.get('window').width;

const ScheduleCard = ({date, items}: ScheduleCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.navRow}>
          <TouchableOpacity>
            <SvgIcon name="좌측방향" size={24} color="#000" />
          </TouchableOpacity>
          <AppText style={styles.title}>{date}</AppText>
          <TouchableOpacity>
            <SvgIcon name="우측방향" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.plans}>
        {items.map((item, index) => (
          <View key={index} style={styles.itemBox}>
            <View style={[styles.itemTag, {backgroundColor: item.color}]}>
              <AppText style={styles.itemTagText}>{item.subject}</AppText>
            </View>
            <AppText
              style={styles.itemText}
              numberOfLines={1}
              ellipsizeMode="tail">
              {item.title}
            </AppText>
            <AppText style={styles.time}>{item.time}</AppText>
          </View>
        ))}
      </View>
    </View>
  );
};

export default ScheduleCard;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  navRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: SCREEN_WIDTH - 40,
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  title: {
    fontSize: 16,
    fontWeight: 600,
  },
  plans: {},
  itemBox: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    gap: 10,
  },
  itemTag: {
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  itemTagText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    overflow: 'hidden',
    flexShrink: 1,
  },
  itemText: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
  time: {
    fontSize: 16,
    color: '#333',
  },
});
