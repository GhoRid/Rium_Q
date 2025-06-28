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
  // console.log('🔗 실제 요청 URL:', fullUrl);

  const response = await instance.get<backendKakaoLoginResponse>(
    '/auth/kakao/callback',
    {
      params: {code},
    },
  );

  return response.data;
};

export const getmataDateIsPresent = async () => {
  return await instance.get('/metadata/ispresent');
};

export const deleteUserAccount = async () => {
  return await instance.delete('/mypage/delete/myaccount');
};
