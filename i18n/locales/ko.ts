import { featurekeyCard } from "@/types/i18n";

export default {
  // 공통
  common_login: "로그인",
  common_signUp: "가입하기",
  common_email: "이메일",
  common_password: "비밀번호",
  common_phone: "휴대폰",
  common_authCode: "인증코드",
  common_start: "시작하기",
  common_or: "또는",
  common_and: "과",
  common_requestCode: "인증코드 요청",
  common_requestCodeAgain: "다시 요청하기",
  common_inputAuthCode: "인증코드 입력",
  common_requestAuth: "인증하기",
  common_authComplete: "인증완료",
  common_codeSentToEmail: "입력하신 이메일로 인증코드가 발송되었습니다.",
  common_completeEmailAuth: "이메일 인증이 완료되었습니다.",
  common_codeSentToPhone: "입력하신 휴대폰 번호로 인증코드가 발송되었습니다.",
  common_completePhoneAuth: "휴대폰 인증이 완료되었습니다.",
  common_emailFormatError: "유효한 이메일 형식을 입력해 주세요.",
  common_authCodeFormatError: "인증코드는 6자리 숫자입니다.",
  common_passwordFormatError:
    "영문, 숫자, 특수기호를 조합하여 8-20자리로 입력해 주세요.",
  common_phoneFormatError: "휴대폰 번호로는 숫자만 입력해 주세요.",
  common_phoneLengthError: "휴대폰 번호는 8~15자리의 숫자로 입력해 주세요.",
  common_wrongAuthCode: "잘못된 인증코드를 입력하셨습니다.",
  common_remainCount: "잔여 횟수",
  common_count: "회",
  common_user: "사용자",
  common_case: "건",
  common_remainTime: "남은 시간",
  common_phonePlaceholder: "휴대폰 번호(숫자만 입력)",
  common_selectCountry: "국가 선택",
  common_signupTitle: "회원가입",
  common_freeSignUpBtn: "무료회원가입",
  common_no: "아니오",
  common_confirm: "확인",
  common_change: "변경",
  common_name: "명칭",
  common_number: "번호",
  common_close: "닫기",
  common_tips: [
    {
      tip_title: "자동완성 리스트",
      tip_contents:
        "텍스트가 입력될 때, 입력된 구성요소 또는 미리 등록되어 있는 관용구와 일치하는 문자가 있으면 자동완성 리스트가 보여집니다.",
    },
    {
      tip_title: "분할된 편집화면",
      tip_contents:
        "명세서를 작성용 케이스를 생성할 때 분할 레이아웃을 이용하면, IPEDIT가 제안하는 최적화된 UI를 이용할 수 있습니다.",
    },
    {
      tip_title: "WORD 다운로드",
      tip_contents:
        "IPEDIT를 이용하여 작성한 문서는, 하이라이트된 상태를 유지한 상태로 WORD 파일로 다운로드할 수 있습니다.",
    },
    {
      tip_title: "하나의 편집화면",
      tip_contents:
        "케이스를 생성할 때 '하나의 편집화면'을 이용하면 WORD나 통합명세서작성기처럼 하나의 에디터를 이용한 문서 작성이 가능합니다.",
    },
    {
      tip_title: "선행사 오류체크",
      tip_contents:
        "구성요소가 자동완성 될 때, 미리 등록해 둔 선행사(예: 상기) 오류를 실시간으로 점검해 드립니다(환경설정에서 선행사, 실시간 점검 여부 변경 가능)",
    },
    {
      tip_title: "테마변경",
      tip_contents: "환경설정에서 테마 색상을 바꿔보세요.",
    },
    {
      tip_title: "My PC(Local) 저장",
      tip_contents:
        "My PC(Local)에 저장한 케이스는 오직 해당 케이스를 생성한 PC에서만 작업할 수 있고, 문서 데이터는 IPEDIT 서버로도 전송되지 않습니다.",
    },
  ],
  common_title: "제목",
  common_description: "내용",
  common_send: "보내기",
  common_terms: "이용약관",
  common_privacy: "개인정보처리방침",

  // 헤더 로그아웃 버튼
  header_logoutBtn: "로그아웃",

  // 로그인 모달
  login_emailCookie: "이메일 저장하기",
  login_findEmailBtn: "이메일 찾기",
  login_findPasswordBtn: "비밀번호 재설정",
  login_requestSignUp: "IPEDIT이 처음이신가요?",
  login_noEmailError: "존재하지 않는 이메일입니다.",
  login_passwordError: "비밀번호를 확인해 주세요.",
  login_wrongDataError:
    "비정상적인 입력 데이터입니다. 입력 데이터를 확인해 주세요.",
  login_sessionExistWarning:
    "동일한 이메일 주소로 로그인된 사용자가 있습니다.<br/> 강제로 접속을 종료시키고 로그인하시겠습니까?",

  // 이메일 찾기 모달
  findemail_title: "이메일 찾기",
  findemail_desc:
    "IPEDIT에 가입하신 방법을 선택하신 후, 가입할 때 입력하신 휴대폰을 인증해 주세요.",
  findemail_path: "가입방법",
  findemail_pathEmail: "이메일 직접입력",
  findemail_pathGoogle: "Google 계정 이용",
  findemail_pathApple: "Apple 계정 이용",
  findemail_noPhoneError: "IPEDIT을 이용하고 있는 휴대폰 번호가 아닙니다.",
  findemail_typeMissMatchError: "정확한 가입경로를 입력해 주세요.",
  findemail_searchResultTitle: "이메일 찾기 결과",
  findemail_searchResultMsg:
    "<p>사용하고 계신 이메일은<br/> <span style='color:magenta'>$email$</span><br/> 입니다.</p>",
  findemail_return: "돌아가기",

  // 비밀번호 찾기 모달
  findpassword_title: "비밀번호 재설정",
  findpassword_desc: "가입할 때 입력하신 이메일과 휴대폰을 인증해 주세요.",
  findpassword_noSNSError:
    "SNS계정으로 가입한 고객님은 비밀번호 재설정 서비스를 이용할 수 없습니다.",
  findpassword_noEmailError: "IPEDIT을 이용하고 있는 이메일이 아닙니다.",
  findpassword_noPhoneError:
    "입력하신 이메일에 대응되는 휴대폰 번호가 아닙니다.",
  findpassword_noCorrectError:
    "입력하신 이메일과 휴대폰 번호가 사용자 정보와 일치하지 않습니다. <br>확인 후 재시도해 주시기 바랍니다.",

  // 비밀번호 변경 모달
  resetpassword_title: "비밀번호 재설정",
  resetpassword_desc: "새로운 비밀번호를 입력해 주세요.",
  resetpassword_result_title: "비밀번호 재설정 완료",
  resetpassword_result_desc: "새로운 비밀번호를 이용하여 로그인해 주세요.",

  // 회원가입 폼 모달
  signupform_terms: "이용약관",
  signupform_no_terms: "이용약관이 없습니다.",
  signupform_privacy: "개인정보처리방침",
  signupform_no_privacy: "개인정보처리방침이 없습니다.",

  signupenterance_signUpWithEmail: "이메일로 회원가입",
  signupenterance_isMember: "이미 회원이신가요?",
  signupform_format: "이용유형",
  signupform_formatDesc:
    "IPEDIT을 이용하여 작성하고자 하는 문서 양식에 대응되는 특허청을 선택해주세요.",
  signupform_formatSelect: "명세서 유형",
  signupform_basicInfo: "기본 정보",
  signupform_name: "이름",
  signupform_passwordPlaceholder:
    "비밀번호(영문, 숫자, 특수기호를 조합하여 8-20자리로 입력해 주세요.)",
  signupform_passwordConfirmPlaceholder: "비밀번호 재입력",
  signupform_phoneValidation: "휴대폰 인증",
  signupform_timezone: "시간대",
  signupform_timezoneDesc: "사용하고 있는 시간대를 선택해 주세요.",
  signupform_consent: "이용 동의",
  signupform_allAgree: "다음에 모두 동의합니다.",
  signupform_allAgreeDesc:
    "서비스 이용약관, 개인정보취급방침, IPEDIT의 정보수신에 모두 동의합니다.",
  signupform_agreeServiceTerms: "서비스이용약관 동의 (필수)",
  signupform_showContent: "내용보기",
  signupform_sms: "문자",
  signupform_agreePrivacyPolicy: "개인정보취급방침 동의 (필수)",
  signupform_agreeSystem: "서비스 운영 공지 수신 동의 (선택)",
  signupform_agreeSystemDesc: "IPEDIT 서비스의 운영에 관한 정보 및 공지를",
  signupform_agreeDescReceive: "로 받아보겠습니다.",
  signupform_agreeNews: "새로운 소식 수신 동의 (선택)",
  signupform_agreeNewsDesc: "IPEDIT의 새로운 소식을 ",
  signupform_agreeEducation: "교육 수신 동의 (선택)",
  signupform_agreeEducationDesc: "IPEDIT의 이용 방법에 관한 정보를 ",
  signupform_congratulationsSignUp: "축하합니다! 회원가입이 완료되었습니다.",
  signupform_nameLengthError: "이름은 40자 이내로 입력해주세요.",
  signupform_passwordConfirmError: "비밀번호가 일치하지 않습니다.",
  signupform_alreadyJoinedEmail: "이미 가입된 이메일입니다.",
  signupform_alreadyJoinedPhone: "이미 가입된 휴대폰 번호입니다.",

  contactus_company_name: "회사명",
  contactus_email_adress: "이메일 주소",
  contactus_essential: " (필수)",

  contactus_confirm_description:
    "소중한 의견 감사합니다!<br/>빠른 시일 내로 답변드리겠습니다.",
  contactus_failed_description:
    "예상하지 못한 오류가 발생했습니다.<br/>일시적인 현상이거나 네트워크 문제일 수 있으니,<br/>잠시 후 다시 시도해주세요.",
  // 점검 페이지
  maintenance_title: "시스템 점검중입니다",
  maintenance_description: `서비스 이용에 불편을 드려 대단히 죄송합니다.<br />
  보다 안정적인 서비스 환경을 제공하기 위해 현재 서버 점검 중에 있습니다.<br />
  조속히 점검을 마칠 수 있도록 최선을 다하겠습니다.`,
  // 에러 페이지
  page404_title: "페이지를 찾을 수 없습니다.",
  page404_description: `존재하지 않는 주소를 입력하셨거나, <br />요청하신 페이지의 주소가 변경,
  삭제되어 찾을 수 없습니다.`,
  page404_previous_btn: "이전으로 ",
  page404_main_btn: "메인으로",

  page400_title: "Bad Request.",
  page400_description: `잘못된 요청입니다.`,

  page500_title: "내부 서버 오류.",
  page500_description: `찾고 있는 리소스에 문제가 있어 표시할 수 없습니다.`,
  // 타임아웃
  timeout_loginAgain: "다시 로그인하기",

  footer: {
    buttons: {
      explainCompany: "회사소개",
      explainService: "서비스소개",
      terms: "이용약관",
      privacy: "개인정보이용방침",
    },
    companyInfo: "(주)회사 {'|'} 이메일: support{'@'}company.com",
    copyRights: "© 2019 - 2022 company. All Rights Reserved",
  },

  cookie_desc:
    "본 사이트를 이용하기 위해서는 쿠키 및 브라우저 자원을 사용하는 것을 허락하셔야 합니다. 일부는 보안 로그인을 위해 사용될 수 있고, 다른 일부는 서비스의 제공에 필요한 데이터를 저장하는 데 사용될 수 있습니다. 더 자세한 내용은 개인정보취급방침에서 확인하시기 바랍니다.",
  cookie_acceptBtn: "허용",
  cookie_declineBtn: "거부",

  chrome_error:
    "본 시스템은 크롬 브라우저에서만 이용 가능합니다. <br>크롬으로 접속해 주세요.",
  cookie_error: "쿠키 이용을 수락하신 후 이용해주세요.",

  pricing_contactus: "문의하기",
};
