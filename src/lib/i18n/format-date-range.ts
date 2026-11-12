/**
 * Formats a job date range as "Apr 2024 – May 2025 · 1 year 1 month". Dates are
 * read in UTC so the month never shifts with the visitor's time zone.
 */
import type { Locale } from "./config";

const labels = {
  en: { present: "Present", year: ["year", "years"], month: ["month", "months"], tag: "en-US" },
  es: { present: "Actualidad", year: ["año", "años"], month: ["mes", "meses"], tag: "es-UY" },
} as const;

const capitalize = (value: string) => value.charAt(0).toUpperCase() + value.slice(1);

export function formatDateRange(startDate: Date, endDate: Date | null, locale: Locale): string {
  const { present, year, month, tag } = labels[locale];
  const end = endDate ?? new Date();

  const formatter = new Intl.DateTimeFormat(tag, { year: "numeric", month: "short", timeZone: "UTC" });
  const format = (date: Date) => capitalize(formatter.format(date).replace(".", ""));

  let years = end.getUTCFullYear() - startDate.getUTCFullYear();
  let months = end.getUTCMonth() - startDate.getUTCMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  const durationParts: string[] = [];
  if (years > 0) durationParts.push(`${years} ${year[years > 1 ? 1 : 0]}`);
  if (months > 0) durationParts.push(`${months} ${month[months > 1 ? 1 : 0]}`);

  const duration = durationParts.length ? ` · ${durationParts.join(" ")}` : "";

  return `${format(startDate)} – ${endDate ? format(endDate) : present}${duration}`;
}
