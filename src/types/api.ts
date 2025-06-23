// api.ts
export interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

export interface KakaoLoginRequest {
  code: string;
}

export interface KakaoLoginResponse {
  jwt: string;
  token: string;
}
