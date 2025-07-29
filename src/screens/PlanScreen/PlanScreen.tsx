import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import CustomHeader from '../../components/Header/CustomHeader';
import AppText from '../../components/AppText';
import DDayHeader from './components/DDayHeader';
import {palette, subjectThemeColors} from '../../styles/palette';
import ScheduleCard from './components/ScheduleCard';
import data from './data.json';
import SurveyPromptModal from './components/SurveyPromptModal';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../types/screens';

const PlanScreen = () => {
  const {date, items} = data[0];
  const [isModalVisible, setIsModalVisible] = useState<boolean>(true);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <CustomHeader
        leftItem={<AppText style={styles.headerTitle}>계획</AppText>}
        rightItem={
          <TouchableOpacity style={styles.headerRightButton}>
            <AppText style={styles.headerRightButtonText}>목표 재설정</AppText>
          </TouchableOpacity>
        }
      />
      <DDayHeader />

      <ScheduleCard date={date} items={items} />

      <SurveyPromptModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        data={{
          title: '아직 목표가 설정되지 않았어요!',
          content: '리움Q가 계획을 수립할 수 있도록 설문에 참여해주세요!',
          confirmText: '설문하러 가기',
          onConfirm: () => {
            setIsModalVisible(false);
            navigation.navigate('PlanSurvey');
          },
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: palette.app_main_color,
  },
  headerRightButton: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: '#E8EAED',
    borderRadius: 15,
  },
  headerRightButtonText: {
    fontSize: 14,
    fontWeight: 400,
    color: '#333',
  },
});

export default PlanScreen;
