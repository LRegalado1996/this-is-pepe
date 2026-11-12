/**
 * Writing page (Spanish).
 */
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/config";
import { WritingView } from "@/views/writing-view";

export const metadata: Metadata = buildPageMetadata("writing", "es");

export default function Page() {
  return <WritingView locale="es" />;
}
