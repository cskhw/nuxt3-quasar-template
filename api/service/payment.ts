import type { AxiosResponse } from "axios";

import instance from "@/api/instance";
import type {
  DraftPaymentPricingTableReadAllRequest,
  DraftPaymentFreeTrialOneMonthFreeRequest,
} from "@/api/schema/request";
import type {
  DraftPaymentPricingTableReadAllResponse,
  DraftPaymentStatusReadAllResponse,
  SimpleResponse,
} from "@/api/schema/response";
import { ACCESS_TOKEN_KEY_NAME } from "@/assets/javascripts/common";
import { GlobalCookies } from "@/assets/javascripts/cookie";

export default {
  paymentStatusReadAll: (): Promise<
    AxiosResponse<DraftPaymentStatusReadAllResponse, object>
  > =>
    instance.get("service/payment/status/read/all", {
      headers: {
        Authorization: GlobalCookies.get(ACCESS_TOKEN_KEY_NAME),
      },
    }),

  paymentPricingTableReadAll: (
    params: DraftPaymentPricingTableReadAllRequest
  ): Promise<AxiosResponse<DraftPaymentPricingTableReadAllResponse, object>> =>
    instance.get("service/payment/pricing-table/read/all", {
      params: params,
      headers: {
        Authorization: GlobalCookies.get(ACCESS_TOKEN_KEY_NAME),
      },
    }),

  paymentFreeTrialOneMonthFree: (
    params: DraftPaymentFreeTrialOneMonthFreeRequest
  ): Promise<AxiosResponse<SimpleResponse, object>> =>
    instance.post("service/payment/free-trial/one-month-free", {
      params: params,
      headers: {
        Authorization: GlobalCookies.get(ACCESS_TOKEN_KEY_NAME),
      },
    }),
};
