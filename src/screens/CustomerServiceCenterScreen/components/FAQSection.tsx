import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import FAQCategoryTabs from './FAQCategoryTabs';
import FAQItem from './FAQItem';

const FAQSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('전체');

  const categories = ['전체', '계획', '내 통계', '좌석', '리움'];

  const faqs = [
    {
      id: '1',
      category: '계획',
      question: '계획은 어떻게 세우나요?',
      answer:
        '[홈] - [계획] 에서 AI 추천 또는 직접 입력을 통해 계획을 설정하실 수 있습니다. ※ 계획을 처음 세우시는 경우, 초기 설문을 완료해야 맞춤형 추천이 제공됩니다. ※ 계획은 언제든지 [계획 수정] 버튼을 통해 자유롭게 조정 가능합니다.',
    },
    // ... 추가 항목
  ];

  const filtered =
    selectedCategory === '전체'
      ? faqs
      : faqs.filter(f => f.category === selectedCategory);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>자주 묻는 질문</Text>
      <FAQCategoryTabs
        categories={categories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />
      <FlatList
        data={filtered}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <FAQItem question={item.question} answer={item.answer} />
        )}
        scrollEnabled={false}
        contentContainerStyle={{gap: 10}}
      />
    </View>
  );
};

export default FAQSection;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 12,
  },
});
