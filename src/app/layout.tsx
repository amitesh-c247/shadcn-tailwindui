import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { siteConfig } from "@/config"
import { defaultLocale, getDictionary } from "@/i18n"
import { I18nProvider } from "@/i18n/provider"

import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const dictionary = await getDictionary(defaultLocale)

  return (
    <html lang={defaultLocale} className={inter.variable}>
      <body className="font-sans antialiased">
        <I18nProvider dictionary={dictionary}>{children}</I18nProvider>
      </body>
    </html>
  )
}
