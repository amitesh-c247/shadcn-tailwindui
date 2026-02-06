import Cookies from "js-cookie";

const UtilCookieService = {
  setCookie: (key: string, value: string): void => {
    Cookies.set(key, value);
  },
  getCookie: (key: string): string | undefined => {
    return Cookies.get(key) ?? undefined;
  },
  removeCookie: (key: string): void => {
    Cookies.remove(key);
  },
  clearAllCookies: (): void => {
    Object.keys(Cookies.get()).forEach((cookieName) => {
      Cookies.remove(cookieName);
    });
  },
};

export default UtilCookieService;
