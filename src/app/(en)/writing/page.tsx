/**
 * Writing page (English).
 */
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/config";
import { WritingView } from "@/views/writing-view";

export const metadata: Metadata = buildPageMetadata("writing", "en");

export default function Page() {
  return <WritingView locale="en" />;
}
