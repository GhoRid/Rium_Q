import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Pressable} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, {AxiosError} from 'axios';
import {signInWithKakaoAndSave} from '../../services/auth/kakaoLogin';

const PlanScreen = () => {
  const [resultText, setResultText] = useState('');
  const [storedToken, setStoredToken] = useState('');

  const testHttpRequest = async () => {
    try {
      const res = await axios.get('http://httpbin.org/get');
      console.log('✅ 응답 성공:', res.data);
    } catch (err) {
      console.log('❌ 네트워크 오류:', err);
    }
  };

  const handleKakaoLogin = async () => {
    try {
      const data = await signInWithKakaoAndSave();
      setResultText(JSON.stringify(data, null, 2));
    } catch (err) {
      const error = err as AxiosError;

      console.log('❌ 메시지:', error);
      console.log('❌ 응답:', error.response?.data);
    }
  };

  const handleStorageRead = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) setStoredToken(token);
  };

  return (
    <ScrollView>
      <View style={styles.resultContainer}>
        <ScrollView>
          <Text selectable>{resultText}</Text>
        </ScrollView>
      </View>

      <Pressable style={styles.button} onPress={handleKakaoLogin}>
        <Text style={styles.text}>카카오 로그인</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={handleStorageRead}>
        <Text style={styles.text}>AsyncStorage 조회</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={testHttpRequest}>
        <Text style={styles.text}>http 테스트</Text>
      </Pressable>

      {storedToken !== '' && (
        <View style={styles.resultContainer}>
          <Text selectable>{storedToken}</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 40,
  },
  resultContainer: {
    width: '100%',
    padding: 24,
  },
  button: {
    backgroundColor: '#FEE500',
    borderRadius: 40,
    borderWidth: 1,
    width: 250,
    height: 40,
    justifyContent: 'center',
    marginTop: 10,
  },
  text: {
    textAlign: 'center',
    fontWeight: '600',
  },
});

export default PlanScreen;
