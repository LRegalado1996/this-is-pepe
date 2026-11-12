/**
 * Contact page (Spanish).
 */
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/config";
import { ContactView } from "@/views/contact-view";

export const metadata: Metadata = buildPageMetadata("contact", "es");

export default function Page() {
  return <ContactView locale="es" />;
}
