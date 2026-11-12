/**
 * Experience page (English).
 */
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/config";
import { ExperienceView } from "@/views/experience-view";

export const metadata: Metadata = buildPageMetadata("experience", "en");

export default function Page() {
  return <ExperienceView locale="en" />;
}
