export function formatDate(
  input: Date | string,
  locale: string = "en-US",
  options: Intl.DateTimeFormatOptions = { dateStyle: "medium" }
) {
  const date = typeof input === "string" ? new Date(input) : input
  return new Intl.DateTimeFormat(locale, options).format(date)
}

export function formatCurrency(
  amount: number,
  currency: string = "USD",
  locale: string = "en-US"
) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(amount)
}
