export const formatDate = (dateStr: string) =>
  new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(dateStr));

export const capitalize = (str: string = "") =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

export function getFormattedFullName(firstName?: string, lastName?: string): string {
  const cap = (s?: string) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : "");
  const parts = [cap(firstName), cap(lastName)].filter(Boolean);
  return parts.length ? parts.join(" ") : cap(firstName || lastName) || "";
}
