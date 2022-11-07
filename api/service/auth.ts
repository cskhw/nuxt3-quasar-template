import instance from "@/api/instance";
import type {
  LoginRequest,
  RegisterRequest,
  RequestEmailRequest,
  VerifyEmailRequest,
} from "@/api/schema/request";
import type { LoginResponse, SimpleResponse } from "@/api/schema/response";
import type { AxiosResponse } from "axios";

export default {
  register: (params: RegisterRequest): Promise<AxiosResponse<SimpleResponse>> =>
    instance.post("/auth/register", params),
  requestEmailCode: (
    params: RequestEmailRequest
  ): Promise<AxiosResponse<SimpleResponse>> =>
    instance.post("/auth/request_email_code", params),
  verifyEmailCode: (
    params: VerifyEmailRequest
  ): Promise<AxiosResponse<SimpleResponse>> =>
    instance.post("/auth/verify_email_code", params),
  login: (params: LoginRequest): Promise<AxiosResponse<LoginResponse>> =>
    instance.post("/auth/login", params),
};
