// HTTP 타임아웃
export const HTTP_REQUEST_TIMEOUT = import.meta.env.VITE_HTTP_REQUEST_TIMEOUT;

// 세션 토큰 이름
export const ACCESS_TOKEN_KEY_NAME = "VRAME_AT";
export const REFRESH_TOKEN_KEY_NAME = "VRAME_RT";
export const TOKEN_EXPIRED_DATE_KEY_NAME = "VRAME_ET";

// 1단위당 바이트
export const ONE_KB = 1024;
export const ONE_MB = ONE_KB * 1024;
export const ONE_GB = ONE_MB * 1024;

// 파일 사이즈 설정
export const SINGLE_DRAWING_SIZE_LIMIT = ONE_MB * 5; // 5MB
export const ALL_DRAWINGS_SIZE_LIMIT = ONE_MB * 20; // 20MB

// 날짜 포멧
export const dateFormat = "yyyy-MM-dd HH:mm:ss.SSS";
