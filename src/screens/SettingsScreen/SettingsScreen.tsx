import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomHeader from '../../components/Header/CustomHeader';
import BackButtonHeaderLeft from '../../components/Header/BackButtonHeaderLeft';
import SvgIcon from '../../components/SvgIcon';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../types/screens';

const SettingsScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const layer1 = [
    {
      title: '알림 설정',
      navigateRoute: 'NotificationSettings',
    },
  ];

  const layer2 = [
    {title: '공지사항', navigateRoute: 'Announcements'},
    {
      title: '고객센터',
      navigateRoute: 'CustomerServiceCenter',
    },
    {title: '계정 관리', navigateRoute: ''},
  ];

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader leftItem={<BackButtonHeaderLeft screenName="설정" />} />

      <ScrollView contentContainerStyle={styles.content}>
        {layer1.map((item, index) => (
          <TouchableOpacity
            style={styles.item}
            key={index}
            onPress={() => navigation.navigate(item.navigateRoute)}>
            <Text style={styles.itemText}>{item.title}</Text>
            <SvgIcon name="우측방향" size={24} color="#999" />
          </TouchableOpacity>
        ))}

        <View style={styles.separator} />

        {layer2.map((item, index) => (
          <TouchableOpacity
            style={styles.item}
            key={index}
            onPress={() => navigation.navigate(item.navigateRoute)}>
            <Text style={styles.itemText}>{item.title}</Text>
            <SvgIcon name="우측방향" size={24} color="#999" />
          </TouchableOpacity>
        ))}

        <View style={styles.separator} />

        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>서비스 이용 약관</Text>
          <SvgIcon name="우측방향" size={24} color="#999" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemTextBold}>개인정보 처리 방침</Text>
          <SvgIcon name="우측방향" size={24} color="#999" />
        </TouchableOpacity>

        <View style={styles.versionContainer}>
          <Text style={styles.versionLabel}>앱 버전 정보</Text>
          <Text style={styles.versionText}>v1.0.0-beta</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    padding: 10,
  },
  item: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
  itemTextBold: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 8,
  },
  versionContainer: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  versionLabel: {
    fontSize: 16,
    color: '#444',
  },
  versionText: {
    fontSize: 14,
    color: '#bbb',
  },
});
