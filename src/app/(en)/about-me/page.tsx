/**
 * About page (English).
 */
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/config";
import { AboutView } from "@/views/about-view";

export const metadata: Metadata = buildPageMetadata("about", "en");

export default function Page() {
  return <AboutView locale="en" />;
}
