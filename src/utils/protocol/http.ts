import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { config } from "@/config/env";
import UtilCookieService from "../tools/cookie-service";
import UtilLocalService from "../tools/localstorage";
import { getInitialState, removeInitialState } from "../tools/token-service";

const createHttpInstance = (): AxiosInstance =>
  axios.create({
    baseURL: config.apiUrl,
    timeout: 60000,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

const setupInterceptors = (httpInstance: AxiosInstance): AxiosInstance => {
  httpInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
      if (typeof window !== "undefined") {
        const token = getInitialState("token");
        const tokenStr = typeof token === "string" ? token : null;
        config.headers.set(
          "Authorization",
          tokenStr ? `Bearer ${tokenStr}` : undefined
        );
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  httpInstance.interceptors.response.use(
    <T>(response: AxiosResponse<T>): T => response.data as T,
    (error) => {
      const { status } = error.response || {};

      if (typeof window !== "undefined" && status === 401) {
        const pathname = window.location.pathname;
        const isAuthRoute = ["/login", "/signup", "/forgot-password", "/reset-password"].some(
          (route) => pathname.startsWith(route)
        );

        // Only force redirect on 401 for non-auth routes.
        // On auth routes (e.g. wrong credentials on /login), let the page handle the error.
        if (!isAuthRoute) {
          removeInitialState();
          UtilLocalService.removeLocalStorage("token");
          UtilCookieService.removeCookie("token");
          UtilCookieService.removeCookie("role");
          window.location.href = "/login";
        }
      }

      const data = error.response?.data;
      const errMessage = data?.message || error.message || "Request failed";

      // Preserve HTTP status and backend `details` payload so callers
      // (e.g. forms) can show field-level validation errors.
      const apiError = new Error(
        typeof errMessage === "string" ? errMessage : "Request failed"
      ) as Error & {
        status?: number;
        details?: unknown;
      };

      apiError.status = status;
      apiError.details = data?.details;

      return Promise.reject(apiError);
    }
  );

  return httpInstance;
};

const http = setupInterceptors(createHttpInstance());
export default http;
