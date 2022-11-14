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

export const BAD_REQUEST = createError({
  statusCode: 400,
  statusMessage: "Request is Invaild. Please check the request",
});

export const UNAUTHORIZED = createError({
  statusCode: 401,
  statusMessage: "Please check authorization",
});

export const CONFLICT = createError({
  statusCode: 409,
  statusMessage: "Already exist data.",
});

export const Invaild = createError({
  statusCode: 422,
  statusMessage: "Plase check the data",
});

export const UNAUTHORIZED_REQUEST = createError({
  statusCode: 456,
  statusMessage: "Plase check the data",
});
