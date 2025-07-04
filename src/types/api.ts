// api.ts
export interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

//로그인 관련
export interface backendKakaoLoginRequest {
  code: string;
}

export interface backendKakaoLoginResponse {
  jwt: string;
  refreshToken: string;
}

//타이머 관련
export interface saveStudyTimerRequest {
  planId: number;
  startTime: string; // ISO 형식의 문자열
  endTime: string; // ISO 형식의 문자열
}
