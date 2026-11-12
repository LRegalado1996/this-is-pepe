/**
 * Experience page (Spanish).
 */
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/config";
import { ExperienceView } from "@/views/experience-view";

export const metadata: Metadata = buildPageMetadata("experience", "es");

export default function Page() {
  return <ExperienceView locale="es" />;
}
