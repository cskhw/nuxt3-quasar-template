import type {
  DraftModalReadResponse,
  DraftNewFeaturesReadPageResponse,
  DraftTipsReadAllResponse,
  SimpleResponse,
} from "@/api/schema/response";
import type { AxiosResponse } from "axios";

import instance from "@/api/instance";
import type {
  NoticeReadRequest,
  NodeReadChildrenRequest,
  NoticeReadPageRequest,
  PrivacyRead,
  PrivacyVersionReadAll,
  TermsRead as TermsReadRequest,
  TermsVersionReadAll as TermsVersionReadAllRequest,
  NoticeCountsNotReadRequest,
  NodeCombinationReadAllRequest,
  ManagementContactCreateRequest,
  SupportContentsTitleMapReadRequest,
  SupportContentsSearchPageRequest,
  SupportContents3rdDepthReadRequest,
  CommentCreateRequestParams,
  DraftModalReadPageRequest,
  DraftNewFeaturesReadPageRequest,
} from "@/api/schema/request";
import type {
  NoticeReadPageResponse,
  NoticeReadResponse,
  DatetimeUTCNowResponse,
  ManagementI18nReadResponse,
  NodeReadChildrenResponse,
  PrivacyReadResponse,
  PrivacyVersionReadAllResponse,
  TermsReadResponse,
  TermsVersionReadAllResponse,
  NoticeCountsNotReadResponse,
  NodeCombinationReadAllResponse,
  PreloadResponse,
  SupportContentsTitleMapResponse,
  SupportContents3rdDepthReadResponse,
  SupportContentsSearchPageResponse,
} from "@/api/schema/response";
import { ACCESS_TOKEN_KEY_NAME } from "@/assets/javascripts/common";
import { GlobalCookies } from "@/assets/javascripts/cookie";

export default {
  datetimeUTCNow: (): Promise<AxiosResponse<DatetimeUTCNowResponse, object>> =>
    instance.get("service/management/datetime/utc-now", {
      headers: {
        Authorization: GlobalCookies.get(ACCESS_TOKEN_KEY_NAME),
      },
    }),
  // node
  nodeReadChildren: (
    params: NodeReadChildrenRequest
  ): Promise<AxiosResponse<NodeReadChildrenResponse, object>> =>
    instance.get("service/management/node/read/children", {
      params: params,
      headers: {
        Authorization: GlobalCookies.get(ACCESS_TOKEN_KEY_NAME),
      },
    }),

  noticeReadPage: (
    params: NoticeReadPageRequest
  ): Promise<AxiosResponse<NoticeReadPageResponse, object>> =>
    instance.get("service/management/notice/read/page", {
      params: params,
      headers: {
        Authorization: GlobalCookies.get(ACCESS_TOKEN_KEY_NAME),
      },
    }),

  noticeRead: (
    params: NoticeReadRequest
  ): Promise<AxiosResponse<NoticeReadResponse, object>> =>
    instance.get("service/management/notice/read", {
      params: params,
      headers: {
        Authorization: GlobalCookies.get(ACCESS_TOKEN_KEY_NAME),
      },
    }),

  noticeCountsNotRead: (
    params: NoticeCountsNotReadRequest
  ): Promise<AxiosResponse<NoticeCountsNotReadResponse, object>> =>
    instance.get("service/management/notice/counts-not-read", {
      params: params,
      headers: {
        Authorization: GlobalCookies.get(ACCESS_TOKEN_KEY_NAME),
      },
    }),
  // terms
  termsVersionReadAll: (
    params: TermsVersionReadAllRequest
  ): Promise<AxiosResponse<TermsVersionReadAllResponse, object>> =>
    instance.get("service/management/terms/version/read/all", {
      params: params,
    }),

  termsRead: (
    params: TermsReadRequest
  ): Promise<AxiosResponse<TermsReadResponse, object>> =>
    instance.get("service/management/terms/read", { params }),
  // privacy
  privacyVersionReadAll: (
    params: PrivacyVersionReadAll
  ): Promise<AxiosResponse<PrivacyVersionReadAllResponse, object>> =>
    instance.get("service/management/privacy/version/read/all", {
      params: params,
    }),

  privacyRead: (
    params: PrivacyRead
  ): Promise<AxiosResponse<PrivacyReadResponse, object>> =>
    instance.get("service/management/privacy/read", { params }),

  i18nRead: (): Promise<AxiosResponse<ManagementI18nReadResponse, object>> =>
    instance.get("service/management/i18n/read", {
      headers: {
        Authorization: GlobalCookies.get(ACCESS_TOKEN_KEY_NAME),
      },
    }),

  nodeCombinationReadAll: (
    params: NodeCombinationReadAllRequest
  ): Promise<AxiosResponse<NodeCombinationReadAllResponse, object>> =>
    instance.get("service/management/node/combination/read/all", {
      params: params,
      headers: {
        Authorization: GlobalCookies.get(ACCESS_TOKEN_KEY_NAME),
      },
    }),

  preload: (): Promise<AxiosResponse<PreloadResponse, object>> =>
    instance.get("service/management/preload", {
      headers: {
        Authorization: GlobalCookies.get(ACCESS_TOKEN_KEY_NAME),
      },
    }),
  // contact
  contactCreate: (
    body: ManagementContactCreateRequest
  ): Promise<AxiosResponse<SimpleResponse, object>> =>
    instance.post("service/management/contact/create", body, {
      headers: {
        Authorization: GlobalCookies.get(ACCESS_TOKEN_KEY_NAME),
      },
    }),

  // 지원센터
  supportContentsTitleMapRead: (
    params: SupportContentsTitleMapReadRequest
  ): Promise<AxiosResponse<SupportContentsTitleMapResponse, object>> =>
    instance.get("service/management/support-contents/title-map/read", {
      params: params,
      headers: {
        Authorization: GlobalCookies.get(ACCESS_TOKEN_KEY_NAME),
      },
    }),
  supportContents3rdDepthRead: (
    params: SupportContents3rdDepthReadRequest
  ): Promise<AxiosResponse<SupportContents3rdDepthReadResponse, object>> =>
    instance.get("service/management/support-contents/3rd-depth/read", {
      params: params,
      headers: {
        Authorization: GlobalCookies.get(ACCESS_TOKEN_KEY_NAME),
      },
    }),
  supportContentsSearchPage: (
    params: SupportContentsSearchPageRequest
  ): Promise<AxiosResponse<SupportContentsSearchPageResponse, object>> =>
    instance.get("service/management/support-contents/search/page", {
      params: params,
      headers: {
        Authorization: GlobalCookies.get(ACCESS_TOKEN_KEY_NAME),
      },
    }),
  commentCreate: (
    params: CommentCreateRequestParams,
    body: FormData
  ): Promise<AxiosResponse<SimpleResponse, object>> =>
    instance.post("service/management/comment/create", body, {
      params: params,
      headers: {
        Authorization: GlobalCookies.get(ACCESS_TOKEN_KEY_NAME),
      },
    }),
  // 이벤트 모달 부분
  modalReadPage: (
    params: DraftModalReadPageRequest
  ): Promise<AxiosResponse<DraftModalReadResponse, object>> =>
    instance.get("service/management/modal/read/all", {
      params: params,
      headers: {
        Authorization: GlobalCookies.get(ACCESS_TOKEN_KEY_NAME),
      },
    }),
  // 새로운 기능, tips
  newFeaturesReadPage: (
    params: DraftNewFeaturesReadPageRequest
  ): Promise<AxiosResponse<DraftNewFeaturesReadPageResponse, object>> =>
    instance.get("service/management/new-features/read/page", {
      params: params,
      headers: {
        Authorization: GlobalCookies.get(ACCESS_TOKEN_KEY_NAME),
      },
    }),
  tipsReadAll: (): Promise<AxiosResponse<DraftTipsReadAllResponse, object>> =>
    instance.get("service/management/tips/read/all", {
      headers: {
        Authorization: GlobalCookies.get(ACCESS_TOKEN_KEY_NAME),
      },
    }),
};
