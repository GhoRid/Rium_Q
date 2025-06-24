import AsyncStorage from '@react-native-async-storage/async-storage';

export const checkAuth = async (): Promise<boolean> => {
  try {
    const auth = await AsyncStorage.getItem('token');
    if (!auth) return false;

    const {accessToken} = JSON.parse(auth);
    return !!accessToken;
  } catch {
    return false;
  }
};
