import instance from "@/api/instance";
import type { UsersMeResponse } from "@/api/schema/response";
import type { AxiosResponse } from "axios";

export default {
  me: (): Promise<AxiosResponse<UsersMeResponse>> => instance.get("/users/me"),
};
