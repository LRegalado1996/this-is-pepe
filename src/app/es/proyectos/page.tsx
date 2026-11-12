/**
 * Work page (Spanish).
 */
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/config";
import { WorkView } from "@/views/work-view";

export const metadata: Metadata = buildPageMetadata("work", "es");

export default function Page() {
  return <WorkView locale="es" />;
}
