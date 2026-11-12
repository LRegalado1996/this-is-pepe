/**
 * Shared SEO configuration containing site metadata, keyword strategy, social profile links,
 * structured data builders and the per-page metadata helper.
 */
import type { Metadata } from "next";
import { articles } from "@/lib/writing/articles";

// Set NEXT_PUBLIC_SITE_URL (e.g. https://lucasregalado.com) in Vercel once the domain is connected.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://this-is-pepe.vercel.app"
).replace(/\/$/, "");

export const siteName = "Lucas Regalado · Senior Full Stack Developer" as const;

export const siteTaglineEn =
  "Lucas Regalado is a senior full stack developer from Montevideo, Uruguay. He builds web products with React, Next.js and TypeScript, and writes about working with AI agents.";

export const siteTaglineEs =
  "Lucas Regalado es un desarrollador full stack senior de Montevideo, Uruguay. Construye productos web con React, Next.js y TypeScript, y escribe sobre cómo trabajar con agentes de IA.";

export const primaryKeywords = [
  "Lucas Regalado",
  "Lucas 'Pepe' Regalado",
  "full stack developer Uruguay",
  "React developer Uruguay",
  "Next.js developer",
  "AI agents developer",
  "Claude Code",
  "remote software engineer",
  "Montevideo software developer",
  "bilingual developer",
  "desarrollador full stack Uruguay",
  "desarrollador React Montevideo",
  "ingeniero de software remoto",
] as const;

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

export const defaultOgImageAlt =
  "Lucas Regalado — Senior Full Stack Developer from Montevideo, Uruguay" as const;

/** Served by `src/app/opengraph-image.tsx`. */
export const shareImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: defaultOgImageAlt,
} as const;

interface PageMetadataInput {
  /** Page title without the site suffix; the root layout template appends it. */
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: "website" | "profile";
}

/**
 * Builds consistent per-page metadata: title, description, canonical and
 * social cards that all point at the shared share image.
 */
export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
  type = "website",
}: PageMetadataInput): Metadata {
  const fullTitle = `${title} | ${author.name}`;

  return {
    title,
    description,
    keywords: [...primaryKeywords, ...keywords],
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName,
      type,
      locale: "en_US",
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      creator: "@lucasregalado5",
      images: [shareImage],
    },
  };
}

const personId = `${siteUrl}/#person`;

export const structuredData = {
  person() {
    return {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": personId,
      name: author.name,
      givenName: author.givenName,
      familyName: author.familyName,
      alternateName: "Pepe",
      jobTitle: author.jobTitle,
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
  website() {
    return {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: siteName,
      url: siteUrl,
      description: siteTaglineEn,
      inLanguage: "en",
      publisher: { "@id": personId },
    };
  },
  articles() {
    return {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Articles by Lucas Regalado",
      itemListElement: articles.map((article, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "BlogPosting",
          headline: article.title,
          description: article.summary,
          datePublished: article.publishedAt,
          url: article.url,
          author: { "@id": personId },
          publisher: {
            "@type": "Organization",
            name: article.publisher,
          },
        },
      })),
    };
  },
};
