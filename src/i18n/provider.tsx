"use client"

import * as React from "react"

type Dictionary = Record<string, string>

type I18nProviderProps = {
  dictionary: Dictionary
  children: React.ReactNode
}

const DictionaryContext = React.createContext<Dictionary | null>(null)

export function I18nProvider({ dictionary, children }: I18nProviderProps) {
  return (
    <DictionaryContext.Provider value={dictionary}>
      {children}
    </DictionaryContext.Provider>
  )
}

export function useDictionary() {
  const context = React.useContext(DictionaryContext)

  if (!context) {
    throw new Error("useDictionary must be used within I18nProvider")
  }

  return context
}
