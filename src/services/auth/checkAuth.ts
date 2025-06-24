import AsyncStorage from '@react-native-async-storage/async-storage';

export const checkAuth = async (): Promise<boolean> => {
  try {
    const token = await AsyncStorage.getItem('token');
    console.log('🔐 token:', token);
    return !!token?.replace(/"/g, ''); // 따옴표 제거 후 존재 여부 확인
  } catch (e) {
    console.error('❌ checkAuth error:', e);
    return false;
  }
};
