import UtilCookieService from "./cookie-service";
import UtilLocalService from "./localstorage";

interface User {
  email?: string;
  name?: string;
  role?: string;
}

export const getToken = (): string | null => {
  const tokenFromCookies = UtilCookieService.getCookie("token");
  const tokenFromLocal = UtilLocalService.getLocalStorage("token");
  if (tokenFromCookies) return tokenFromCookies;
  if (typeof tokenFromLocal === "string") return tokenFromLocal;
  if (tokenFromLocal && typeof tokenFromLocal === "object" && "token" in tokenFromLocal) {
    return String((tokenFromLocal as { token: string }).token);
  }
  return null;
};

export const getInitialState = (key: string): string | null | Record<string, unknown> => {
  if (key === "token") {
    return getToken();
  }
  const val = UtilLocalService.getLocalStorage(key);
  return typeof val === "string" ? val : val;
};

export const setInitialState = (user: User): void => {
  UtilLocalService.setLocalStorage("email", user?.email ?? "");
  UtilLocalService.setLocalStorage("name", user?.name ?? "");
  UtilLocalService.setLocalStorage("role", user?.role ?? "USER");
};

export const removeInitialState = (): void => {
  // Clear all cookies
  UtilCookieService.clearAllCookies();
  // Clear all localStorage
  UtilLocalService.clearAllLocalStorage();
  // Clear sessionStorage if any
  if (typeof window !== "undefined") {
    sessionStorage.clear();
  }
};
