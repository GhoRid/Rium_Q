import axios, {AxiosInstance} from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const instance = axios.create({
  baseURL: 'http://192.168.0.16:8080/api',
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const reissueToken = async (base: AxiosInstance) => {
  try {
    const response = await base.post('/reissue'); // 백엔드에 맞게 수정
    const newToken = response.headers.authorization;
    if (!newToken) throw new Error('토큰 없음');

    await AsyncStorage.setItem('token', newToken);
    return newToken;
  } catch (error) {
    throw new Error('토큰 재발급에 실패했습니다.');
  }
};

// ✅ 요청 전: 토큰을 AsyncStorage에서 꺼내기
instance.interceptors.request.use(async config => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

// ✅ 응답 후: 4111 에러 → 토큰 재발급 후 재시도
instance.interceptors.response.use(
  res => res,
  async err => {
    const originalRequest = err.config as any;

    // ✅ 백엔드에서 "토큰 만료"를 4111로 내려줌
    if (err.response?.data?.error?.code === '4111') {
      await AsyncStorage.removeItem('token');
      try {
        const token = await reissueToken(instance);
        if (token) {
          originalRequest.headers.Authorization = token;
          return instance(originalRequest); // 재요청
        }
      } catch (reissueError) {
        console.error('토큰 재발급 실패:', reissueError);
      }
    }

    return Promise.reject(err);
  },
);
