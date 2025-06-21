export function formatDateRange(startDate: Date | string, endDate?: Date | string | null): string {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  const formatter = new Intl.DateTimeFormat("en-US", { year: "numeric", month: "short" });

  const startStr = formatter.format(start);
  const endStr = endDate ? formatter.format(end) : "Present";

  // Cálculo de duración
  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

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
