/**
 * Home page (English).
 */
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/config";
import { HomeView } from "@/views/home-view";

export const metadata: Metadata = buildPageMetadata("home", "en");

export default function Page() {
  return <HomeView locale="en" />;
}
