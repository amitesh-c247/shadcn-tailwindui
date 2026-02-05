import { env } from "./env"

export const siteConfig = {
  name: "Shadcn UI Demo",
  description: "Starter app structure with auth and user areas.",
  url: env.appUrl,
  links: {
    github: "https://example.com",
  },
} as const
