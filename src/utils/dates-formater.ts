/**
 * Formats a job date range as "Apr 2024 – May 2025 · 1 year 1 month". Dates are
 * read in UTC so the month never shifts with the visitor's time zone.
 */
export function formatDateRange(startDate: Date | string, endDate?: Date | string | null): string {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  const formatter = new Intl.DateTimeFormat("en-US", { year: "numeric", month: "short", timeZone: "UTC" });

  const startStr = formatter.format(start);
  const endStr = endDate ? formatter.format(end) : "Present";

  let years = end.getUTCFullYear() - start.getUTCFullYear();
  let months = end.getUTCMonth() - start.getUTCMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  const durationParts = [];
  if (years > 0) durationParts.push(`${years} year${years > 1 ? "s" : ""}`);
  if (months > 0) durationParts.push(`${months} month${months > 1 ? "s" : ""}`);

  const duration = durationParts.length ? ` · ${durationParts.join(" ")}` : "";

  return `${startStr} – ${endStr}${duration}`;
}
