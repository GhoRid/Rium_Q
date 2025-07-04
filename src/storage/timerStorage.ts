import AsyncStorage from '@react-native-async-storage/async-storage';

const TIMER_KEY = 'study_timer_seconds';

export const saveTimer = async (seconds: number) => {
  try {
    await AsyncStorage.setItem(TIMER_KEY, seconds.toString());
  } catch (e) {
    console.error('Failed to save timer:', e);
  }
};

export const loadTimer = async (): Promise<number> => {
  try {
    const value = await AsyncStorage.getItem(TIMER_KEY);
    return value ? parseInt(value, 10) : 0;
  } catch (e) {
    console.error('Failed to load timer:', e);
    return 0;
  }
};

export const resetTimer = async () => {
  try {
    await AsyncStorage.removeItem(TIMER_KEY);
  } catch (e) {
    console.error('Failed to reset timer:', e);
  }
};
