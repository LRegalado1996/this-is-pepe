/**
 * Shared SEO configuration: site identity, social profiles, the metadata
 * builders (with hreflang alternates) and the structured data builders.
 */
import type { Metadata } from "next";
import { getArticles } from "@/content/articles";
import type { Project } from "@/content/projects";
import { getDictionary } from "@/content/site";
import {
  locales,
  projectPath,
  routePath,
  type Locale,
  type RouteKey,
} from "@/lib/i18n/config";

// Set NEXT_PUBLIC_SITE_URL (e.g. https://lucasregalado.com) in Vercel once the domain is connected.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://this-is-pepe.vercel.app"
).replace(/\/$/, "");

export const author = {
  name: "Lucas Regalado",
  givenName: "Lucas",
  familyName: "Regalado",
  jobTitle: "Senior Full Stack Developer",
  email: "lucasregalado@hotmail.com",
  location: {
    city: "Montevideo",
    country: "Uruguay",
  },
  employer: {
    name: "Streaver",
    url: "https://streaver.com/",
  },
} as const;

export const socialProfiles = {
  linkedin: "https://www.linkedin.com/in/lucas-regalado",
  whatsapp: "https://wa.me/59891475727",
  instagram: "https://www.instagram.com/lucas.regalado18",
  twitter: "https://x.com/lucasregalado5",
  email: `mailto:${author.email}`,
} as const;

const twitterHandle = "@lucasregalado5";

const ogLocale: Record<Locale, string> = { en: "en_US", es: "es_UY" };

/** Served by `src/app/opengraph-image.tsx`. */
export const shareImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Lucas Regalado — Senior Full Stack Developer from Montevideo, Uruguay",
} as const;

type LocalizedPaths = Record<Locale, string>;

const languageAlternates = (paths: LocalizedPaths) => ({
  ...paths,
  "x-default": paths.en,
});

interface MetadataInput {
  locale: Locale;
  paths: LocalizedPaths;
  title: string;
  description: string;
  keywords?: string[];
  type?: "website" | "profile" | "article";
  /** Use the title as is, without the site suffix. */
  absoluteTitle?: boolean;
}

const buildMetadata = ({
  locale,
  paths,
  title,
  description,
  keywords = [],
  type = "website",
  absoluteTitle = false,
}: MetadataInput): Metadata => {
  const dictionary = getDictionary(locale);
  const fullTitle = absoluteTitle ? title : `${title} | ${author.name}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords: [...dictionary.keywords, ...keywords],
    alternates: {
      canonical: paths[locale],
      languages: languageAlternates(paths),
    },
    openGraph: {
      title: fullTitle,
      description,
      url: paths[locale],
      siteName: dictionary.meta.home.title,
      type,
      locale: ogLocale[locale],
      alternateLocale: locales.filter((other) => other !== locale).map((other) => ogLocale[other]),
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      creator: twitterHandle,
      site: twitterHandle,
      images: [shareImage],
    },
  };
};

const routePaths = (route: RouteKey): LocalizedPaths => ({
  en: routePath(route, "en"),
  es: routePath(route, "es"),
});

/** Metadata for one of the fixed pages. */
export const buildPageMetadata = (route: RouteKey, locale: Locale): Metadata => {
  const meta = getDictionary(locale).meta[route];

  return buildMetadata({
    locale,
    paths: routePaths(route),
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    type: route === "home" || route === "about" || route === "experience" ? "profile" : "website",
    absoluteTitle: route === "home",
  });
};

/** Metadata for a case study page. */
export const buildProjectMetadata = (project: Project, locale: Locale): Metadata =>
  buildMetadata({
    locale,
    paths: { en: projectPath(project.slug, "en"), es: projectPath(project.slug, "es") },
    title: `${project.title} · ${getDictionary(locale).meta.caseStudySuffix}`,
    description: project.summary,
    keywords: project.stack,
    type: "article",
  });

/** Site-wide defaults set by each root layout. */
export const buildRootMetadata = (locale: Locale): Metadata => {
  const dictionary = getDictionary(locale);

  return {
    metadataBase: new URL(siteUrl),
    title: {
      template: `%s | ${author.name}`,
      default: dictionary.meta.home.title,
    },
    description: dictionary.tagline,
    applicationName: dictionary.meta.home.title,
    category: "technology",
    authors: [{ name: author.name, url: siteUrl }],
    creator: author.name,
    publisher: author.name,
    robots: { index: true, follow: true },
    // Set GOOGLE_SITE_VERIFICATION in Vercel with the token from Search Console.
    verification: { google: process.env.GOOGLE_SITE_VERIFICATION },
  };
};

const personId = `${siteUrl}/#person`;
const absoluteUrl = (path: string) => `${siteUrl}${path === "/" ? "" : path}`;

export const structuredData = {
  person(locale: Locale) {
    return {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": personId,
      name: author.name,
      givenName: author.givenName,
      familyName: author.familyName,
      alternateName: "Pepe",
      jobTitle: author.jobTitle,
      description: getDictionary(locale).tagline,
      url: siteUrl,
      image: `${siteUrl}/images/brand/portrait.jpg`,
      email: author.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: author.location.city,
        addressCountry: author.location.country,
      },
      worksFor: {
        "@type": "Organization",
        name: author.employer.name,
        url: author.employer.url,
      },
      knowsAbout: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "MongoDB",
        "AI agents",
        "Claude Code",
        "Web performance",
        "SEO",
      ],
      knowsLanguage: ["en", "es"],
      sameAs: [socialProfiles.linkedin, socialProfiles.twitter, socialProfiles.instagram],
    };
  },
  website(locale: Locale) {
    return {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: getDictionary(locale).meta.home.title,
      url: absoluteUrl(routePath("home", locale)),
      description: getDictionary(locale).tagline,
      inLanguage: locale,
      publisher: { "@id": personId },
    };
  },
  /** Breadcrumb trail from the home page to the given page. */
  breadcrumbs(locale: Locale, trail: { name: string; path: string }[]) {
    const dictionary = getDictionary(locale);
    const items = [{ name: dictionary.nav.labels.home, path: routePath("home", locale) }, ...trail];

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: absoluteUrl(item.path),
      })),
    };
  },
  profilePage(locale: Locale) {
    return {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      url: absoluteUrl(routePath("about", locale)),
      inLanguage: locale,
      mainEntity: { "@id": personId },
    };
  },
  articles(locale: Locale) {
    return {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: getArticles(locale).map((article, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "BlogPosting",
          headline: article.title,
          description: article.summary,
          datePublished: article.publishedAt,
          inLanguage: "en",
          url: article.url,
          author: { "@id": personId },
          publisher: { "@type": "Organization", name: article.publisher },
        },
      })),
    };
  },
  project(project: Project, locale: Locale) {
    return {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: project.title,
      description: project.summary,
      url: absoluteUrl(projectPath(project.slug, locale)),
      inLanguage: locale,
      keywords: project.stack.join(", "),
      creator: { "@id": personId },
    };
  },
};
