/**
 * Root layout for the English site.
 */
import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/site-shell";
import { buildRootMetadata } from "@/lib/seo/config";

import "../globals.css";

export const metadata: Metadata = buildRootMetadata("en");

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <SiteShell locale="en">{children}</SiteShell>;
}
