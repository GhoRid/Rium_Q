// services/auth/kakao.ts
import {login as kakaoLoginSDK} from '@react-native-seoul/kakao-login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {kakaoLogin as backendKakaoLogin} from '../../apis/api/user';

export const signInWithKakaoAndSave = async () => {
  try {
    // 1. 카카오 SDK 로그인
    const {accessToken} = await kakaoLoginSDK();

    console.log('카카오 로그인 성공:', accessToken);

    // 2. 백엔드에 accessToken 전달
    const backendResponse = await backendKakaoLogin({code: accessToken});

    // 3. AsyncStorage에 저장
    await AsyncStorage.setItem('token', JSON.stringify(backendResponse));

    // 4. 반환 (예: 사용자 정보 또는 토큰)
    return backendResponse;
  } catch (error) {
    throw error;
  }
};
