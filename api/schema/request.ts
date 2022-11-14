/** auth api 리스트
 * register: 회원가입
 * login: 이메일 로그인
 * refresh: 리

 */

export interface RegisterRequest {
  name: string;
  email: string;
  photo?: string;
  password: string;
  user_id: string;
  confirm_password: string;
  verification_code: string;
  role?: string;
  is_active: boolean;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LogoutRequest {}

export interface RequestEmailRequest {
  email: string;
}

export interface VerifyEmailRequest {
  email: string;
  code: string;
}
