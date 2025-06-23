import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Pressable} from 'react-native';
import {
  login,
  logout,
  getProfile as getKakaoProfile,
} from '@react-native-seoul/kakao-login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {signInWithKakaoAndSave} from '../../services/auth/kakao';

const PlanScreen = () => {
  const [resultText, setResultText] = useState('');
  const [storedToken, setStoredToken] = useState('');

  const handleKakaoLogin = async () => {
    try {
      const data = await signInWithKakaoAndSave();
      setResultText(JSON.stringify(data, null, 2));
    } catch (err) {
      console.error('카카오 로그인 실패:', err);
    }
  };

  const handleLogout = async () => {
    try {
      const message = await logout();
      setResultText(message);
    } catch (err) {
      console.error('로그아웃 실패:', err);
    }
  };

  const handleProfile = async () => {
    try {
      const profile = await getKakaoProfile();
      setResultText(JSON.stringify(profile, null, 2));
    } catch (err) {
      console.error('프로필 조회 실패:', err);
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

      <Pressable style={styles.button} onPress={handleProfile}>
        <Text style={styles.text}>프로필 조회</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={handleLogout}>
        <Text style={styles.text}>카카오 로그아웃</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={handleStorageRead}>
        <Text style={styles.text}>AsyncStorage 조회</Text>
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
