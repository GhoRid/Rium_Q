import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import SurveyTitle from '../components/SurveyTitle';
import SearchInput from '../components/SearchInput';
import AppText from '../../../components/AppText'; // 결과 없을 때 예시 텍스트

const StepRegion = () => {
  const [keyword, setKeyword] = useState('');

  const searchKeyword = (text: string) => {
    console.log('🔍 검색어:', text);
    // 여기에 검색 로직 추가 예정
  };

  return (
    <View style={styles.container}>
      <SurveyTitle>현재 거주하고 있는 지역</SurveyTitle>
      <SearchInput
        value={keyword}
        onChangeText={setKeyword}
        onSearch={() => searchKeyword(keyword)}
        placeholder="동명(읍, 면)으로 검색 (ex. 신안동)"
      />
    </View>
  );
};

export default StepRegion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    gap: 30,
  },
});
