/**
 * Testimonials from colleagues and leads. The home section only renders once
 * this list has entries, so add real quotes here (with permission) to turn it on.
 */
import type { Locale } from "@/lib/i18n/config";

export interface Testimonial {
  quote: Record<Locale, string>;
  name: string;
  /** Role and company at the time, e.g. "Engineering Manager · Acme". */
  role: Record<Locale, string>;
}

export const testimonials: Testimonial[] = [];
