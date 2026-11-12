/**
 * Sitemap covering every page and case study in both languages, with
 * hreflang alternates.
 */
import type { MetadataRoute } from "next";
import { projectSlugs } from "@/content/projects";
import { locales, projectPath, routePath, type Locale, type RouteKey } from "@/lib/i18n/config";
import { siteUrl } from "@/lib/seo/config";

const pagePriority: Record<RouteKey, number> = {
  home: 1,
  about: 0.9,
  work: 0.9,
  experience: 0.8,
  writing: 0.8,
  contact: 0.6,
};

const absolute = (path: string) => `${siteUrl}${path === "/" ? "" : path}`;

const entries = (
  paths: Record<Locale, string>,
  priority: number,
  lastModified: Date
): MetadataRoute.Sitemap =>
  locales.map((locale) => ({
    url: absolute(paths[locale]),
    lastModified,
    changeFrequency: "monthly",
    priority,
    alternates: {
      languages: { en: absolute(paths.en), es: absolute(paths.es) },
    },
  }));

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pages = (Object.keys(pagePriority) as RouteKey[]).flatMap((route) =>
    entries({ en: routePath(route, "en"), es: routePath(route, "es") }, pagePriority[route], lastModified)
  );

  const caseStudies = projectSlugs.flatMap((slug) =>
    entries({ en: projectPath(slug, "en"), es: projectPath(slug, "es") }, 0.7, lastModified)
  );

  return [...pages, ...caseStudies];
}
