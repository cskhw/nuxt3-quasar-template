import axios, {
  AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
} from "axios";

import { getBaseUrl } from "@/api/utils";
import { extractError } from "./error";

const baseURL = "http://localhost:3000" + getBaseUrl();

const axiosInstance: AxiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 20000,
});

// 요청 인터셉터
axiosInstance.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    return config;
  },
  function (error) {
    console.log(error);
    return Promise.reject(error);
  }
);

// 응답 인터셉터
axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

async function authWrapper<
  F extends (...args: any[]) => Promise<AxiosResponse<any>>
>(fn: F): Promise<AxiosResponse<any>> {
  let result: any;
  try {
    result = await fn();
  } catch (e) {
    console.log(e);
    const error = extractError(e);
    console.log(error);
  } finally {
    return result;
  }
}

const instance = {
  ...axiosInstance,

  get: async function (
    url: string,
    config?: AxiosRequestConfig | undefined
  ): Promise<AxiosResponse<any>> {
    return authWrapper(() => axiosInstance.get(url, config));
  },

  getNaiveUrl: async function (
    url: string,
    config?: AxiosRequestConfig | undefined
  ): Promise<AxiosResponse<any>> {
    config = config ? config : {};
    config.baseURL = "";
    return axiosInstance.get(url, config);
  },

  post: async function (
    url: string,
    data?: any,
    config?: AxiosRequestConfig | undefined
  ): Promise<AxiosResponse<any>> {
    return authWrapper(() => axiosInstance.post(url, data, config));
  },

  put: async function (
    url: string,
    data?: any,
    config?: AxiosRequestConfig | undefined
  ): Promise<AxiosResponse<any>> {
    return axiosInstance.put(url, data, config);
  },

  delete: async function (
    url: string,
    config?: AxiosRequestConfig | undefined
  ): Promise<AxiosResponse<any>> {
    return axiosInstance.delete(url, config);
  },
};

// 파라미터 직렬화
// instance.defaults.paramsSerializer = function (paramObj) {
//   const params = new URLSearchParams();
//   for (const key in paramObj) {
//     if (Array.isArray(paramObj[key])) {
//       for (const value of paramObj[key]) {
//         params.append(key, value);
//       }
//     } else {
//       params.append(key, paramObj[key]);
//     }
//   }
//   return params.toString();
// };

export default instance;
