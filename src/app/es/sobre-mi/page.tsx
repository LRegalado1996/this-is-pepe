/**
 * About page (Spanish).
 */
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/config";
import { AboutView } from "@/views/about-view";

export const metadata: Metadata = buildPageMetadata("about", "es");

export default function Page() {
  return <AboutView locale="es" />;
}
