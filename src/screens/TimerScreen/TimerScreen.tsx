import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';

const DUMMY_DATA = Array.from({length: 5}).map((_, i) => ({
  id: i.toString(),
  subject: '국어',
  title: '2024학년도 수능 모의고사',
}));

const TimerScreen = () => {
  const [seconds, setSeconds] = useState(4482); // 1:14:42
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (totalSeconds: number) => {
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(
      2,
      '0',
    );
    const secs = String(totalSeconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${secs}`;
  };

  const renderItem = ({item}: {item: (typeof DUMMY_DATA)[0]}) => {
    const isSelected = item.id === selectedId;
    return (
      <TouchableOpacity
        style={[styles.optionBox, isSelected && styles.selectedBox]}
        onPress={() => setSelectedId(item.id)}>
        <Text style={[styles.subject, isSelected && styles.selectedText]}>
          {item.subject}
        </Text>
        <Text style={[styles.title, isSelected && styles.selectedText]}>
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timer}>{formatTime(seconds)}</Text>
      <Text style={styles.question}>어떤 공부를 했나요?</Text>
      <FlatList
        data={DUMMY_DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.list}
        contentContainerStyle={{paddingBottom: 20}}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>공부 시작</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TimerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 80,
    backgroundColor: '#fff',
  },
  timer: {
    fontSize: 40,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 40,
  },
  question: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  list: {
    flexGrow: 0,
  },
  optionBox: {
    borderWidth: 1,
    borderColor: '#eee',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedBox: {
    borderColor: '#007aff',
    backgroundColor: '#e6f0ff',
  },
  subject: {
    fontWeight: 'bold',
    marginRight: 6,
    color: '#000',
  },
  title: {
    flexShrink: 1,
    color: '#000',
  },
  selectedText: {
    color: '#007aff',
  },
  button: {
    backgroundColor: '#0c1e3c',
    paddingVertical: 16,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
