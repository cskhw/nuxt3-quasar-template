import type { AxiosError } from "axios";
import axios from "axios";
interface IHttpError {
  /**
   * 클라이언트 에러
   *
   * 400: Bad Request
   * 401: Unauthorized
   * 402: Payment Required
   * 403: Forbidden
   * 404: Not Found
   * 409: Conflict
   * 422: 클라이언트 전송 데이터와 백앤드 스키마 불일치
   * 452: exceed_request, 클라이언트 요청 횟수 초과
   * 453: invalid_verification_request,
   * 454: invalid_verification_already_done,
   * 455: invalid_verification_not_found,
   * 456: invalid_authentication_request,
   * 457: invalid_authorization_request,
   * 458: invalid_user_session_request,
   * 459: invalid_user_session_expired,
   * 460: invalid_paid_user_expired,
   * 461: invalid_paid_user_not_enough_pricing_tier,
   * 480: data_integrity
   * 499: Max Client Error Code
   *
   * 서버 에러
   *
   * 500: Server Error
   * 512: 메일 전송 오류
   * 599: Max Server Error Code
   *
   *
   * 사용자 정의 에러 메시지
   *
   * 801: 사용자 세션이 없음
   * 802: useStore에서 사용자 정보를 가져올 수 없음.
   *
   *
   * 프론트 엔드 에러
   * 0: Init Code
   * 999: Max Error Code
   */
  error: Error | AxiosError;
  message: string;
  status: number;
}

type errorMessageType = {
  [key: number]: { [key: string]: string };
};

export const responseStatus = {
  defaultCode: 0,
  badRequestError: 400,
  notFoundError: 404,
  conflictError: 409,
  unprocessableEntityError: 422,
  exceedRequestError: 452,
  invalidVerificationRequestError: 453,
  invalidVerificationAlreadyDoneError: 454,
  invalidVerificationNotFoundError: 455,
  invalidAuthenticationRequestError: 456,
  invalidAuthorizationRequestError: 457,
  invalidUserSessionRequestError: 458,
  invalidUserSessionExpiredError: 459,
  invalidPaidUserExpired: 460,
  invalidPaidUserNotEnoughPricingTier: 461,
  dataIntegrityError: 480,
  maxClientCode: 499,
  serverError: 500,
  sendingEmailError: 512,
  maxServerCode: 599,
  invalidUserInformation: 801,
  maxCode: 999,
};

export const errorMessages: errorMessageType = {
  0: {
    KO: "Default Error Code",
    EN: "Default Error Code",
    JA: "Default Error Code",
    ZH: "Default Error Code",
  },
  304: {
    KO: "잘못된 값 전송",
    EN: "잘못된 값 전송",
    JA: "잘못된 값 전송",
    ZH: "잘못된 값 전송",
  },
  400: {
    KO: "Bad Request",
    EN: "Bad Request",
    JA: "Bad Request",
    ZH: "Bad Request",
  },
  401: {
    KO: "Unauthorized",
    EN: "Unauthorized",
    JA: "Unauthorized",
    ZH: "Unauthorized",
  },
  404: {
    KO: "요청을 찾을 수 없습니다.",
    EN: "Not Found",
    JA: "Not Found",
    ZH: "Not Found",
  },
  409: {
    KO: "이미 존재합니다. 다시 한 번 확인해주세요.",
    EN: "Already exist. Please check the value again.",
    JA: "Already exist. Please check the value again.",
    ZH: "Conflict",
  },
  422: {
    KO: "클라이언트 전송 데이터와 백앤드 스키마 (엔티티) 불일치 오류",
    EN: "클라이언트 전송 데이터와 백앤드 스키마 (엔티티) 불일치 오류",
    JA: "클라이언트 전송 데이터와 백앤드 스키마 (엔티티) 불일치 오류",
    ZH: "클라이언트 전송 데이터와 백앤드 스키마 (엔티티) 불일치 오류",
  },
  452: {
    KO: "클라이언트 요청 횟수 초과 오류",
    EN: "클라이언트 요청 횟수 초과 오류",
    JA: "클라이언트 요청 횟수 초과 오류",
    ZH: "클라이언트 요청 횟수 초과 오류",
  },
  453: {
    KO: "사용자 인증 요청 오류",
    EN: "사용자 인증 요청 오류",
    JA: "사용자 인증 요청 오류",
    ZH: "사용자 인증 요청 오류",
  },
  454: {
    KO: "이미 완료한 사용자 인증 요청 오류",
    EN: "이미 완료한 사용자 인증 요청 오류",
    JA: "이미 완료한 사용자 인증 요청 오류",
    ZH: "이미 완료한 사용자 인증 요청 오류",
  },
  455: {
    KO: "인증 요청을 하지 않고, 인증 확인을 요청할 시 오류",
    EN: "인증 요청을 하지 않고, 인증 확인을 요청할 시 오류",
    JA: "인증 요청을 하지 않고, 인증 확인을 요청할 시 오류",
    ZH: "인증 요청을 하지 않고, 인증 확인을 요청할 시 오류",
  },
  456: {
    KO: "사용자 로그인 오류",
    EN: "사용자 로그인 오류",
    JA: "사용자 로그인 오류",
    ZH: "사용자 로그인 오류",
  },
  457: {
    KO: "사용자 권한 오류",
    EN: "사용자 권한 오류",
    JA: "사용자 권한 오류",
    ZH: "사용자 권한 오류",
  },
  458: {
    KO: "사용자 세션 오류",
    EN: "사용자 세션 오류",
    JA: "사용자 세션 오류",
    ZH: "사용자 세션 오류",
  },
  459: {
    KO: "세션이 만료되었습니다.",
    EN: "Your session is expired.",
    JA: "세션이 만료되었습니다.",
    ZH: "Your session is expired.",
  },
  480: {
    KO: "이미 가입된 번호입니다.",
    EN: "Already joined phone number.",
    JA: "이미 가입된 번호입니다.",
    ZH: "Already joined phone number.",
  },
  499: {
    KO: "Max Client Error Code",
    EN: "Max Client Error Code",
    JA: "Max Client Error Code",
    ZH: "Max Client Error Code",
  },
  500: {
    KO: "서버 오류가 발생했습니다.",
    EN: "Server error occurs.",
    JA: "서버 오류",
    ZH: "서버 오류",
  },
  502: {
    KO: "서버 오류가 발생했습니다.",
    EN: "Server error occurs.",
    JA: "서버 오류",
    ZH: "서버 오류",
  },
  512: {
    KO: "메일 전송 오류",
    EN: "메일 전송 오류",
    JA: "메일 전송 오류",
    ZH: "메일 전송 오류",
  },
  599: {
    KO: "Max Server Error Code",
    EN: "Max Server Error Code",
    JA: "Max Server Error Code",
    ZH: "Max Server Error Code",
  },
  // 800번대는 사용자 정의(우리가 만든 것) 메시지로 사용
  801: {
    KO: "사용자 세션이 존재하지 않습니다.",
    EN: "No session found.",
    JA: "ユーザーセッションが見つかりません。",
    ZH: "No session found.",
  },
  802: {
    KO: "사용자 정보를 찾을 수 없습니다.",
    EN: "User information is not available.",
    JA: "ユーザー情報が見つかりません。",
    ZH: "User information is not available.",
  },
  803: {
    KO: "쿠키 및 브라우저 자원 사용을 동의하신 후 사용해 주세요.",
    EN: "쿠키 및 브라우저 자원을 사용하는데 동의해 주세요.",
    JA: "쿠키 및 브라우저 자원을 사용하는데 동의해 주세요.",
    ZH: "쿠키 및 브라우저 자원을 사용하는데 동의해 주세요.",
  },
  999: {
    KO: "Max Error Code",
    EN: "Max Error Code",
    JA: "Max Error Code",
    ZH: "Max Error Code",
  },
};

export function extractError(e: AxiosError | Error | any): IHttpError {
  const status = e.response?.status ? e.response?.status : 0;
  let msg = "";

  if (axios.isAxiosError(e)) {
    // 에러 메시지 정의
    if (import.meta.env.VITE_MODE === "prod") {
      msg = "Not defined error in 'prod' environment";
    } else {
      // 일단 영어로 에러 메시지 리턴
      if (errorMessages[status]["KO"]) msg = errorMessages[status]["KO"];
      else msg = "Undefined error";
    }
  }

  // TODO: 로거 라이브러리 사용해야함
  // console.log(e);
  // console.log(status, msg);

  return {
    error: e,
    message: msg ? msg : "Frontend error",
    status: status,
  };
}
