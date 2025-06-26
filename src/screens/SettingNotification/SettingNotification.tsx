import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomHeader from '../../components/Header/CustomHeader';
import BackButtonHeaderLeft from '../../components/Header/BackButtonHeaderLeft';
import {useState} from 'react';
import SettingRow from './components/SettingRow';

const SettingNotificationScreen = () => {
  const [settings, setSettings] = useState({
    alarm1: true,
    alarm2: false,
    alarm3: false,
    event: false,
  });

  const toggle = (key: keyof typeof settings) => {
    setSettings(prev => ({...prev, [key]: !prev[key]}));
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader
        leftItem={<BackButtonHeaderLeft screenName="알림 설정" />}
      />

      <View style={styles.content}>
        <SettingRow
          label="학습 알림"
          value={settings.alarm1}
          onToggle={() => toggle('alarm1')}
        />
        <SettingRow
          label="동기 부여 알림 "
          value={settings.alarm2}
          onToggle={() => toggle('alarm2')}
        />
        <SettingRow
          label="시스템 알림"
          value={settings.alarm3}
          onToggle={() => toggle('alarm3')}
        />

        <View style={styles.separator} />

        <SettingRow
          label="이벤트·혜택 알림"
          value={settings.event}
          onToggle={() => toggle('event')}
        />
      </View>
    </SafeAreaView>
  );
};

export default SettingNotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 10,
  },
});
