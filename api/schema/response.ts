import type { IUser } from "@/types/user";

export interface SimpleResponse {
  status: boolean;
  detail: string;
}

export interface ValidationError {
  detail: [
    {
      loc: string[];
      msg: string;
      type: string;
    }
  ];
}

/** auth response 리스트
 * RegisterResponse: 회원가입
 * LoginResponse: 로그인
 */

export interface LoginResponse {
  status: number;
  body: {
    access_token: string;
    refresh_token: string;
  };
}

export interface AuthTokenResponse {
  access_token: string;
  refresh_token: string;
  expiration_time: string;
}

/** users response 리스트
 * UsersMeResponse: 유저 정보 가져옴
 */

export type UsersMeResponse = IUser;

/** management response 리스트
 * DatetimeUTCNowResponse: 서버의 UTC+00 현재 시간
 * NodeReadChildrenResponse: 코드 노드 자식 읽기
 * TermsVersionReadAllResponse: 모든 개인정보이용약관 버전 요청
 * TermsReadResponse: 특정 개인정보이용약관 요청
 * PrivacyVersionReadAllResponse: 모든 개인정보이용약관 버전 요청
 * PrivacyReadResponse: 특정 개인정보이용약관 요청
 * NodeCombinationReadAllResponse: 특정 코드 콤비네이션 값 결과
 * PreloadResponse: userStore, i18nStore, themeStore 한번에 초기화
 * SupportContentsTitleMapRequest
 */

export interface DatetimeUTCNowResponse {
  object: {
    utc_now: string;
  };
}

export interface NodeReadChildrenResponse {
  objects: {
    path: string;
    is_default: boolean;
  }[];
}

export interface NoticeReadPageResponse {
  page_size: number;
  page_number: number;
  total_size: number;
  objects: {
    id: number;
    format_code: {
      path: string;
      code_value: string;
      code_desc: string;
    };
    notice_title: string;
    notice_start_time: string;
    read_marks: [
      {
        read_time: string;
      }
    ];
  }[];
}

export interface NoticeReadResponse {
  object: NoticeDetail;
}
export interface NoticeCountsNotReadResponse {
  object: {
    total: number;
  };
}

export interface TermsVersionReadAllResponse {
  objects: {
    id: number;
    terms_version: string;
  }[];
}

export interface TermsReadResponse {
  object: {
    id: number;
    ui_lang_code_path: string;
    terms_version: string;
    terms_contents: string;
    differences: string;
    regist_time: string;
    update_time: string;
  };
}

export interface PrivacyVersionReadAllResponse {
  objects: {
    id: number;
    privacy_version: string;
  }[];
}

export interface PrivacyReadResponse {
  object: {
    id: number;
    ui_lang_code_path: string;
    privacy_version: string;
    privacy_contents: string;
    differences: string;
    regist_time: string;
    update_time: string;
  };
}

export interface ManagementI18nReadResponse {
  object: {
    contents: {
      [key: string]: {
        [key: string]: string;
      };
    };
    setting_titles: {
      [key: string]: {
        [key: string]: string;
      };
    };
    setting_descs: {
      [key: string]: {
        [key: string]: string;
      };
    };
  };
}

export interface NodeCombinationReadAllResponse {
  objects: {
    combination_type: string;
    combination_data: string;
    combination_data_desc: string;
    is_default: boolean;
  }[];
}

export interface PreloadResponse {
  object: {
    user_info: {
      client_type_code_path: string;
      user_email: string;
      detail: {
        theme_code_path: string;
        ui_lang_code_path: string;
        name: string;
        country_code: string;
        phone_num: string;
        timezone: string;
        join_type: string;
      };
      statuses: {
        service_code_path: string;
        format_code_path: string;
        is_paid_now: boolean;
        have_paid_history: boolean;
        expiration_time: string;
      }[];
      acceptance: {
        sms_news_acceptance: boolean;
        sms_system_acceptance: boolean;
        sms_education_acceptance: boolean;
        email_news_acceptance: boolean;
        email_system_acceptance: boolean;
        email_education_acceptance: boolean;
      };
    };
    user_settings: {
      [key: string]: string;
    };
    palettes: {
      [key: string]: {
        [key: string]: string;
      };
    };
    i18n: {
      contents: {
        [key: string]: {
          [key: string]: string;
        };
      };
      setting_titles: {
        [key: string]: {
          [key: string]: string;
        };
      };
      setting_descs: {
        [key: string]: {
          [key: string]: string;
        };
      };
    };
    utc_now: string;
  };
}

export interface SupportContentsTitleMapResponse {
  objects: SupportCardItem[];
}
export interface SupportContents3rdDepthReadResponse {
  object: {
    section_order: string;
    support_title: string;
    support_contents: string;
    update_time: string;
    related_tags: [
      {
        related_source_id: number;
        related_source_title: string;
      }
    ];
  };
}

export interface SupportContentsSearchPageResponse {
  page_number: number;
  page_size: number;
  total_size: number;
  objects: SupportContentsItem[];
}

/** preference api 리스트
 * PreferenceUserInfoReadResponse: 사용자 데이터 요청
 * PreferenceUserSettingsReadResponse: 사용자 설정 데이터 요청
 * PreferenceThemeColorPaletteReadResponse: 테마 색상 데이터
 * PreferenceConfiqureDetailResponse: 사용자 설정 저장 (detail 테이블용)
 * PreferenceConfiqureSettingResponse: 사용자 설정 저장 (setting 테이블용)
 * PreferenceAcceptanceConfigureDetailResponse: 사용자 설정 저장 (수신동의)
 */
export interface PreferenceUserInfoReadResponse {
  object: {
    user_info: {
      client_type_code_path: string;
      user_email: string;
      detail: {
        theme_code_path: string;
        ui_lang_code_path: string;
        name: string;
        country_code: string;
        phone_num: string;
        timezone: string;
        join_type: string;
      };
      statuses: {
        service_code_path: string;
        format_code_path: string;
        is_paid_now: boolean;
        have_paid_history: boolean;
        expiration_time: string;
      }[];
      acceptance: {
        sms_news_acceptance: boolean;
        sms_system_acceptance: boolean;
        sms_education_acceptance: boolean;
        email_news_acceptance: boolean;
        email_system_acceptance: boolean;
        email_education_acceptance: boolean;
      };
    };
    utc_now: string;
  };
}

export interface PreferenceUserSettingsReadResponse {
  object: {
    setting_code_path: string;
    setting_data: string;
  };
}

export interface PreferenceThemeColorPaletteReadResponse {
  object: {
    palette: {
      [key: string]: string;
    };
  };
}

export interface PreferenceAcceptanceConfigureDetailResponse {
  object: {
    sms_news_acceptance: boolean;
    sms_system_acceptance: boolean;
    sms_education_acceptance: boolean;
    email_news_acceptance: boolean;
    email_system_acceptance: boolean;
    email_education_acceptance: boolean;
  };
}

export interface PreferenceAcceptanceConfigureDetailResponse {
  object: {
    sms_news_acceptance: boolean;
    sms_system_acceptance: boolean;
    sms_education_acceptance: boolean;
    email_news_acceptance: boolean;
    email_system_acceptance: boolean;
    email_education_acceptance: boolean;
  };
}

export interface PreferenceConfiqureDetailResponse {
  object: {
    theme_code_path: string;
    ui_lang_code_path: string;
    name: string;
    country_code: string;
    timezone: string;
  };
}

export interface PreferenceConfiqureSettingResponse {
  object: {
    setting_code_path: string;
    setting_data: string;
  };
}

export interface PreferenceDetailPhoneNumberConfigureResponse {
  object: {
    phone_num: string;
  };
}

/** draft api 리스트
 * DraftCaseCreateResponse: 케이스 생성
 * DraftCaseUpdateResponse: 케이스 수정
 * DraftCaseReadResponse: 케이스 한건 정보
 * DraftCaseSlotsResponse: 케이스 슬롯 정보 모두 가져오기
 * DraftCaseSlotResponse: 케이스 슬롯 한개 정보 가져오기
 * DraftCaseReadPageResponse: 케이스 리스트 페이지
 * DraftCaseReadGroupByClientResponse: 케이스 client이름으로 그룹 정렬 페이지네이션
 * DraftIdiomsReadResponse: 관용어 가져오기
 * DraftIdiomsUpdateResponse: 관용어 수정 결과
 * DraftCaseCacheCreateOrUpdateResponse: 워크스페이스 작업용 케이스 등록 결과
 * DraftCaseCacheReadResponse: 워크스페이스 작업용 케이스 등록
 */

export interface DraftCaseCreateResponse {
  object: {
    id: number;
    format_code_path: string;
    work_type_code_path: string;
    workspace_type_code_path: string;
    case_status_code_path: string;
    case_save_location_code_path: string;
    ref_no: string;
    title: string;
    client: string;
    due_date: string;
  };
}
export interface DraftIdiomsCreateResponse {
  object: {
    id: number;
    format_code_path: string;
    dr_idiom_code_path: string;
    idiom_title: string;
    idiom_contents: string;
  };
}
export interface DraftIdiomsReadResponse {
  object: {
    idioms: {
      id: number;
      dr_idiom_code_path: string;
      idiom_title: string;
      idiom_contents: string;
    }[];
  };
}

export interface DraftIdiomsUpdateResponse {
  object: {
    id: number;
    idiom_title: string;
    idiom_contents: string;
  };
}

export interface DraftCaseDeleteResponse {
  object: {
    format_code_path: string;
    dr_idiom_code_path: string;
    idiom_title: string;
    idiom_contents: string;
  };
}

export interface DraftCaseUpdateResponse {
  object: {
    id: number;
    case_status_code_path: string;
    case_save_location_code_path: string;
    ref_no: string;
    title: string;
    client: string;
    due_date: string;
    active_save_slot: number;
  };
}

export interface DraftCaseReadResponse {
  object: {
    id: number;
    format_code_path:
      | "FORMAT/ALL"
      | "FORMAT/KIPO"
      | "FORMAT/USPTO"
      | "FORMAT/JPO"
      | "FORMAT/EPO"
      | "FORMAT/CNIPA"
      | "FORMAT/AUSPAT"
      | "FORMAT/CIPO"
      | "FORMAT/DPMA"
      | "FORMAT/UKIPO"
      | "FORMAT/INPI"
      | "FORMAT/KOEN"
      | "FORMAT/KOJA"
      | "FORMAT/KOZH"
      | "FORMAT/KODE"
      | "FORMAT/KOFR"
      | "FORMAT/JAEN"
      | "FORMAT/JAZH"
      | "FORMAT/JADE"
      | "FORMAT/JAFR"
      | "FORMAT/ZHEN"
      | "FORMAT/ZHDE"
      | "FORMAT/ZHFR"
      | "FORMAT/DEEN"
      | "FORMAT/DEFR"
      | "FORMAT/FREN"
      | "FORMAT/ETC";
    work_type_code_path: string;
    workspace_type_code_path: string;
    case_status_code_path: string;
    case_save_location_code_path: string;
    ref_no: string;
    title: string;
    client: string;
    due_date: string;
    active_save_slot: number;
    regist_time: string;
    update_time: string;
  };
}

export interface DraftCaseSlotsResponse {
  objects: {
    save_slot: number;
    save_time?: string;
  }[];
}

export interface DraftCaseSlotResponse {
  object: {
    save_slot: number;
    save_time: string;
  };
}

export interface DraftCaseSecretKeyPayload {
  object: {
    text_secret_key: {
      secret_key: string;
    };
    iv: {
      secret_key: string;
    };
    db_secret_key: {
      secret_key: string;
    };
  };
}

export interface DraftCaseReadPageResponse {
  page_size: number;
  page_number: number;
  total_size: number;
  objects: CaseMasterDataType[];
}

export interface DraftCaseReadAllResponse {
  objects: {
    id: number;
    format_code_path: string;
    work_type_code_path: string;
    workspace_type_code_path: string;
    case_status_code_path: string;
    case_save_location_code_path: string;
    ref_no: string;
    title: string;
    client: string;
    due_date: string;
    active_save_slot: number;
    regist_time: string;
    update_time: string;
  }[];
}

export interface DraftCaseReadGroupByClientResponse {
  page_size: number;
  page_number: number;
  total_size: number;
  objects: {
    client: string;
    total: number;
  }[];
}

export interface DraftCaseCacheCreateOrUpdateResponse {
  object: {
    case_master_id?: number;
    review_case_id?: number;
    context: string;
    activated: boolean;
    save_slot: number;
    case_save_location_code_path?: string;
  };
}

export interface DraftCaseCacheReadResponse {
  object: {
    case_master_id?: number;
    review_case_id?: number;
    context: string;
    activated: boolean;
    save_slot: number;
    case_save_location_code_path?: string;
  };
}
// 리뷰 부분
export interface DraftCaseReviewCountsResponse {
  object: {
    requests: number;
    reviews: number;
  };
}

export interface DraftCaseReviewListAllAvailableCasesResponse {
  objects: [
    {
      id: number;
      case_save_location_code_path: string;
      ref_no: string;
      title: string;
    }
  ];
}

export interface DraftCaseReviewSendReadPageResponse {
  page_size: number;
  page_number: number;
  total_size: number;
  objects: [
    {
      id: number;
      case_master_id: number;
      case_master: {
        id: number;
        format_code_path: string;
        case_status_code_path: string;
        work_type_code_path: string;
        workspace_type_code_path: string;
        ref_no: string;
        title: string;
        client: string;
      };
      case_save_slot_id: number;
      requestor_id: number;
      requestor: {
        user_email: string;
        detail: {
          name: string;
        };
      };
      reviewer_id: number;
      reviewer: {
        user_email: string;
        detail: {
          name: string;
        };
      };
      request_time: string;
      due_date: string;
      start_time: string;
      update_time: string;
      complete_time: string;
    }
  ];
}

export interface DraftCaseReviewReceivedReadPageResponse {
  page_size: number;
  page_number: number;
  total_size: number;
  objects: [
    {
      id: number;
      case_master_id: number;
      case_master: {
        id: number;
        format_code_path: string;
        work_type_code_path: string;
        workspace_type_code_path: string;
        ref_no: string;
        title: string;
        client: string;
      };
      case_save_slot_id: number;
      requestor_id: number;
      requestor: {
        user_email: string;
        detail: {
          name: string;
        };
      };
      reviewer_id: number;
      reviewer: {
        user_email: string;
        detail: {
          name: string;
        };
      };
      request_time: string;
      due_date: string;
      start_time: string;
      update_time: string;
      complete_time: string;
    }
  ];
}

/** payment api 리스트
 * DraftPaymentStatusReadAllResponse: 이용 서비스 상태 모두 읽기
 * DraftPaymentPricingTableReadAllResponse: 가격 테이블 모두 읽기
 */

export interface DraftPaymentStatusReadAllResponse {
  objects: PaymentStatus[];
}

export interface DraftPaymentPricingTableReadAllResponse {
  object: {
    [key: string]: {
      [key: string]: {
        id: number;
        pricing_tier_code_path: string;
        currency: string;
        tier_price: number;
      }[];
    };
  };
}

/** nlp api 리스트
 * DraftNlpSearchBm25Response: 이용 서비스 상태 모두 읽기
 */

export interface NlpSearchBm25Response {
  es_took: number;
  section_type: string;
  results: [
    {
      score: number;
      source_id: string;
      source_sentence: string;
      target_id: string;
      target_sentence: string;
    }
  ];
}

export interface DraftModalReadResponse {
  page_size: number;
  page_number: number;
  total_size: number;
  objects: {
    id: number;
    modal_type: number;
    modal_duration_type: number;
    modal_start_time: string;
    modal_end_time: string;
    modal_title: string;
    modal_contents: string;
  }[];
}

export interface DraftNewFeaturesReadPageResponse {
  page_size: number;
  page_number: number;
  total_size: number;
  objects: [
    {
      feature_title: string;
      feature_contents: string;
    }
  ];
}

export interface DraftTipsReadAllResponse {
  object: {
    "FORMAT/KIPO": TipItem[];
    "FORMAT/JPO": TipItem[];
    "FORMAT/USTPO": TipItem[];
    [key: string]: TipItem[];
  };
}
