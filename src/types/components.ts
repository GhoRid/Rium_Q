/**
 * 공통 모달의 내용을 정의합니다.
 */
export type CustomModalContent = {
  /** 상단 제목 */
  title: string;
  /** 설명 텍스트 (선택) */
  content?: string;
  /** 확인 버튼 텍스트 */
  confirmText: string;
  /** 확인 버튼 색상 */
  confirmColor: string;
  /** 확인 버튼 눌렀을 때 실행될 함수 */
  onConfirm: () => void;
  /** 취소 버튼 텍스트 (기본: '취소') */
  cancelText?: string;
};
