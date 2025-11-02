/**
 * Sitemap configuration exposing primary routes for search engines.
 */
import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo/config";

const routes: Array<{ path: string; changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"]; priority: number }> = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/about-me", changeFrequency: "monthly", priority: 0.9 },
  { path: "/work-experience", changeFrequency: "monthly", priority: 0.8 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}

