import type { Locale } from "./config"

type Dictionary = Record<string, string>

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  switch (locale) {
    case "es":
      return (await import("../../locales/es/common.json")).default
    case "en":
    default:
      return (await import("../../locales/en/common.json")).default
  }
}
