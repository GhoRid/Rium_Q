import {instance} from '..';
import {KakaoLoginRequest, KakaoLoginResponse} from '../../types/api';

export const kakaoLogin = async ({
  code,
}: KakaoLoginRequest): Promise<KakaoLoginResponse> => {
  const response = await instance.get<KakaoLoginResponse>(
    '/auth/kakao/callback',
    {
      params: {code},
    },
  );
  return response.data;
};
