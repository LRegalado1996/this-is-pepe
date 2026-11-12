/**
 * Home page (Spanish).
 */
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/config";
import { HomeView } from "@/views/home-view";

export const metadata: Metadata = buildPageMetadata("home", "es");

export default function Page() {
  return <HomeView locale="es" />;
}
