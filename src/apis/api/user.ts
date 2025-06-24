import {instance} from '..';
import {
  backendKakaoLoginRequest,
  backendKakaoLoginResponse,
} from '../../types/api';

export const backendKakaoLogin = async ({
  code,
}: backendKakaoLoginRequest): Promise<backendKakaoLoginResponse> => {
  // 👉 요청 URL 직접 조합
  const fullUrl = `${
    instance.defaults.baseURL
  }/auth/kakao/callback?code=${encodeURIComponent(code)}`;
  console.log('🔗 실제 요청 URL:', fullUrl);

  // 요청 실행
  const response = await instance.get<backendKakaoLoginResponse>(
    '/auth/kakao/callback',
    {
      params: {code},
    },
  );

  return response.data;
};
