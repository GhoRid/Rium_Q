import axios, {AxiosInstance, AxiosResponse, AxiosError} from 'axios';

import AsyncStorage from '@react-native-async-storage/async-storage';

export const instance: AxiosInstance = axios.create({
  //   baseURL: http://192.168.0.16:8080/swagger-ui/index.html#/,
  baseURL: 'http://192.168.0.16:8080/api',
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(async config => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});
