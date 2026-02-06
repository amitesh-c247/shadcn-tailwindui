const UtilLocalService = {
  setLocalStorage: (key: string, value: unknown): void => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(value));
    }
  },
  getLocalStorage: (key: string): string | null | Record<string, unknown> => {
    if (typeof window !== "undefined") {
      const data = localStorage.getItem(key);
      if (data) {
        try {
          const parsed = JSON.parse(data);
          return typeof parsed === "string" ? parsed : (parsed as Record<string, unknown>);
        } catch {
          return data;
        }
      }
    }
    return null;
  },
  removeLocalStorage: (key: string): void => {
    if (typeof window !== "undefined") {
      localStorage.removeItem(key);
    }
  },
  clearAllLocalStorage: (): void => {
    if (typeof window !== "undefined") {
      localStorage.clear();
    }
  },
};

export default UtilLocalService;
