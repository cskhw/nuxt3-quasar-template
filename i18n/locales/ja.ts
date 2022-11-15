import { featurekeyCard } from "@/types/i18n";

export default {
  // 공통
  common_login: "ログイン",
  common_signUp: "新規取得",
  common_email: "メールアドレス",
  common_password: "パスワード",
  common_phone: "携帯電話番号",
  common_authCode: "認証コード",
  common_start: "スタート",
  common_or: "又は",
  common_and: "そして",
  common_requestCode: "認証コードの受信",
  common_requestCodeAgain: "再リクエスト",
  common_inputAuthCode: "認証コードを入力",
  common_requestAuth: "認証する",
  common_authComplete: "認証完了",
  common_codeSentToEmail:
    "ご入力いただいたメールに認証コードが発送されました。",
  common_completeEmailAuth: "メール認証が完了いたしました。",
  common_codeSentToPhone:
    "ご入力いただいた携帯電話番号に認証コードが発送されました。",
  common_completePhoneAuth: "携帯電話認証が完了いたしました。",
  common_emailFormatError: "有効なメールアドレスをご入力ください。",
  common_authCodeFormatError: "認証コードは6桁の数字です。",
  common_passwordFormatError:
    "英文字 （ 大文字、小文字 ）、数字、記号の内、３種類以上を組み合わせて８～２０字で作成してください。",
  common_phoneFormatError: "携帯番号は数字のみご入力ください。",
  common_phoneLengthError: "携帯電話番号は8～15桁の数字で入力してください。",
  common_wrongAuthCode: "認証コードが違います。",
  common_remainCount: "残り回数",
  common_count: "回",
  common_user: "ユーザ",
  common_case: "ケース",
  common_remainTime: "残余時間",
  common_phonePlaceholder: "携帯電話番号(数字のみ入力)",
  common_selectCountry: "国家選択",
  common_signupTitle: "会員登録",
  common_freeSignUpBtn: "無料会員登録",
  common_no: "いいえ",
  common_confirm: "確認",
  common_change: "変更",
  common_name: "名称",
  common_number: "番号",
  common_close: "閉じる",

  common_title: "タイトル",
  common_description: "お問合せ内容",
  common_send: "送信する",
  common_terms: "利用規約",
  common_privacy: "プライバシーポリシー",

  // 헤더 로그아웃 버튼
  header_logoutBtn: "ログアウト",

  // 로그인 모달
  login_emailCookie: "メールアドレスを保存",
  login_findEmailBtn: "メールアドレスを探す",
  login_findPasswordBtn: "パスワード再設定",
  login_requestSignUp: "IPEDITのご利用は初めてですか。",
  login_noEmailError: "存在していないメールアドレスです。",
  login_passwordError: "パスワードをご確認ください。",
  login_wrongDataError:
    "正常でない入力データです。入力データを確認してください。",
  login_sessionExistWarning:
    "同一のメールアドレスでログインされたユーザがいます。<br/> 接続を強制終了させてログインしますか。",

  // 이메일 찾기 모달
  findemail_title: "メールアドレスの検索",
  findemail_desc:
    "IPEDITに登録された時の方法をご選択の上、ご登録の際にご入力いただいた携帯電話でご認証ください。",
  findemail_path: "会員登録方法",
  findemail_pathEmail: "メールアドレスを直接入力",
  findemail_pathGoogle: "Googleアカウントを利用",
  findemail_pathApple: "Appleアカウントを利用",
  findemail_noPhoneError: "IPEDITにてご登録されている携帯番号ではありません。",
  findemail_typeMissMatchError: "正確な会員登録の経路をご入力ください。",
  findemail_searchResultTitle: "メール検索の結果",
  findemail_searchResultMsg:
    "ご利用中のメールアドレスは次のとおりです。<br/> $email$	",
  findemail_return: "以前のページに戻る",

  // 비밀번호 찾기 모달
  findpassword_title: "パスワードの再設定",
  findpassword_desc:
    "ご登録の際にご入力いただいたメールアドレス及び携帯で認証を進めてください。",
  findpassword_noSNSError:
    "SNSアカウントにて登録されたお客様は、パスワード再設定サービスをご利用いただけません。",
  findpassword_noEmailError:
    "IPEDITにてご登録されているメールアドレスではありません。",
  findpassword_noPhoneError:
    "ご登録いただいたメールに対応する携帯電話番号ではありません。",
  findpassword_noCorrectError:
    "入力されたメールアドレスと携帯番号が一致しません。再入力してください。",

  // 비밀번호 변경 모달
  resetpassword_title: "パスワードの再設定",
  resetpassword_desc: "新しいパスワードをご入力ください。",
  resetpassword_result_title: "パスワードの再設定が完了しました。",
  resetpassword_result_desc:
    "新しいパスワードをご利用の上、ログインしてください。",

  // 회원가입 폼 모달
  signupform_terms: "利用規約",
  signupform_no_terms: "利用規約がありません。",
  signupform_privacy: "プライバシーポリシー",
  signupform_no_privacy: "プライバシーポリシーがありません。",

  signupenterance_signUpWithEmail: "メールにて会員登録",
  signupenterance_isMember: "すでにご登録済みですか。",
  signupform_format: "ご利用タイプ",
  signupform_formatDesc:
    "特許庁をお選びください。お選びいただいた特許庁から要求される特許文書の様式がご用意されております。",
  signupform_formatSelect: "明細書のタイプ",
  signupform_basicInfo: "基本情報",
  signupform_name: "氏名",
  signupform_passwordPlaceholder:
    "パスワード（英語、数字、特殊記号を組み合わせて8-20桁で入力してください。）",
  signupform_passwordConfirmPlaceholder: "パスワードを再入力する",
  signupform_phoneValidation: "携帯にて認証",
  signupform_timezone: "時間帯",
  signupform_timezoneDesc: "ご使用の時間帯を選択してください。",
  signupform_consent: "利用規約に同意",
  signupform_allAgree: "次の規約にすべて同意します",
  signupform_allAgreeDesc:
    "サービス利用規約、プライバシーポリシー、IPEDITの情報受信にすべて同意します。",
  signupform_agreeServiceTerms: "サービス利用規約への同意(必須)",
  signupform_showContent: "詳細な内容の一覧",
  signupform_sms: "SMSメッセージ",
  signupform_agreePrivacyPolicy: "プライバシーポリシーへの同意(必須)",
  signupform_agreeSystem: "サービス運営告知の受信への同意(選択)",
  signupform_agreeSystemDesc: "IPEDITサービスの運営に関する情報及び告知を",
  signupform_agreeDescReceive: "で受信します",
  signupform_agreeNews: "お知らせの受信同意(選択)",
  signupform_agreeNewsDesc: "IPEDIT	IPEDITのお知らせを",
  signupform_agreeEducation: "教育受信同意(選択)",
  signupform_agreeEducationDesc: "IPEDITの利用方法に関する情報を",
  signupform_congratulationsSignUp:
    "おめでとうございます！会員登録が完了いたしました。",
  signupform_nameLengthError: "お名前は40文字以内でご入力ください。",
  signupform_passwordConfirmError: "正しいパスワードをご入力ください。",
  signupform_alreadyJoinedEmail: "すでに登録済みのメールです。",
  signupform_alreadyJoinedPhone: "すでに登録済みの携帯番号です。",

  contactus_company_name: "会社名",
  contactus_email_adress: "Eメール",
  contactus_essential: " （必須）",

  contactus_confirm_description:
    "貴重なご意見ありがとうございます！<br/>早期にご回答いたします。",
  contactus_failed_description:
    "予期せぬエラーが発生しました。<br/>一時的な現象であるかネットワークの問題である可能性がありますので、<br/>しばらくしてから再度お試しください。",
  // 점검 페이지	examine pages	点検ページ
  maintenance_title: "システム点検中です。",
  maintenance_description:
    "サービスのご利用にご不便をおかけして誠に申し訳ございません。<br/>より安定したサービス環境を提供するために、現在サーバ点検中です。<br/>早急に点検を終えられるよう最善を尽くします。",
  page404_title: "ページを探すことができません。",
  page404_description:
    "存在しないアドレスを入力したか、<br/>リクエストしたページのアドレスが変更、削除されたため見つかりません。",
  page404_previous_btn: "以前に戻る",
  page404_main_btn: "メインに戻る",
  // 타임아웃	Time-out	タイムアウト
  timeout_loginAgain: "再ログイン",

  footer: {
    buttons: {
      explainCompany: "会社紹介",
      explainService: "サービス紹介",
      terms: "利用規約",
      privacy: "プライバシーポリシー",
    },
    companyInfo: "(株)company {'|'} Eメール: support{'@'}company.com",
    copyRights: "© 2019 - 2022 company. All Rights Reserved",
  },

  cookie_desc:
    "このサイトを利用するには、クッキーとブラウザリソースの使用を許可する必要があります。一部はセキュアログインに使用され得、他の一部はサービスの提供に必要なデータを保存するために使用され得ます。詳しくはプライバシーポリシーにてご確認ください。",
  cookie_acceptBtn: "許可",
  cookie_declineBtn: "拒否",

  chrome_error:
    "本システムは、Chromeブラウザでのみ利用可能です。<br> Chromeブラウザで接続してください。",
  cookie_error: "クッキーの利用を許可いただいた上でご利用下さい。",

  pricing_contactus: "問合せ",
};
