// import {instance} from '..';
// import {KakaoLoginRequest, KakaoLoginResponse} from '../../types/api';

// export const kakaoLogin = async ({
//   code,
// }: KakaoLoginRequest): Promise<KakaoLoginResponse> => {
//   console.log('code', code);
//   const response = await instance.get<KakaoLoginResponse>(
//     '/auth/kakao/callback',
//     {
//       params: {code},
//     },
//   );
//   return response.data;
// };

import {instance} from '..';
import {KakaoLoginRequest, KakaoLoginResponse} from '../../types/api';

export const kakaoLogin = async ({
  code,
}: KakaoLoginRequest): Promise<KakaoLoginResponse> => {
  // 👉 요청 URL 직접 조합
  const fullUrl = `${
    instance.defaults.baseURL
  }/auth/kakao/callback?code=${encodeURIComponent(code)}`;
  console.log('🔗 실제 요청 URL:', fullUrl);

  // 요청 실행
  const response = await instance.get<KakaoLoginResponse>(
    '/auth/kakao/callback',
    {
      params: {code},
    },
  );

  return response.data;
};
