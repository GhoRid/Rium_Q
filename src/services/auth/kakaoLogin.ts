// services/auth/kakao.ts
import {login as kakaoLoginSDK} from '@react-native-seoul/kakao-login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {backendKakaoLogin} from '../../apis/api/user';

export const signInWithKakaoAndSave = async () => {
  try {
    // 1. 카카오 SDK 로그인
    const {accessToken} = await kakaoLoginSDK();

    // 2. 백엔드에 accessToken 전달
    const backendResponse = await backendKakaoLogin({code: accessToken});

    // 3. AsyncStorage에 저장
    await AsyncStorage.setItem('token', backendResponse.jwt);

    await AsyncStorage.setItem(
      'refreshToken',
      JSON.stringify(backendResponse.refreshToken),
    );

    return backendResponse;
  } catch (error) {
    throw error;
  }
};
