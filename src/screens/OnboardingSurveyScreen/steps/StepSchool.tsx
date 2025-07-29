import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import AppText from '../../../components/AppText'; // 결과 없을 때 예시 텍스트
import SurveyTitle from '../../../components/Survey/SurveyTitle';
import SearchInput from '../../../components/SearchInput';

const StepSchool = () => {
  const [keyword, setKeyword] = useState('');

  const searchKeyword = (text: string) => {
    console.log('🔍 검색어:', text);
    // 여기에 검색 로직 추가 예정
  };

  return (
    <View style={styles.container}>
      <SurveyTitle>어느 학교를 다니시나요?</SurveyTitle>
      <SearchInput
        value={keyword}
        onChangeText={setKeyword}
        onSearch={() => searchKeyword(keyword)}
        placeholder="학교명"
      />
    </View>
  );
};

export default StepSchool;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    gap: 30,
  },
});
