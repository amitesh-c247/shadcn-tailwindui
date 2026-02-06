import { AxiosRequestConfig, AxiosResponse } from "axios";
import http from "@/utils/protocol/http";

/**
 * Orval Axios mutator
 *
 * This function is used by Orval-generated hooks to perform HTTP requests
 * using the shared Axios instance configured in `utils/protocol/http.ts`.
 */
export const customInstance = <TData = unknown, TVariables = unknown>(
  config: AxiosRequestConfig<TVariables>
): Promise<AxiosResponse<TData>> => {
  return http.request<TData>(config);
};

