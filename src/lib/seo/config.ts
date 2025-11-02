/**
 * Shared SEO configuration containing site metadata, keyword strategy, and social profile links.
 */
export const siteUrl = "https://lucasregalado.dev" as const;

export const siteName = "Lucas Regalado · Full Stack Developer" as const;

export const siteTaglineEn =
  "Lucas Regalado is a bilingual full stack developer from Montevideo, Uruguay, focused on React, Next.js, and scalable web products.";

export const siteTaglineEs =
  "Lucas Regalado es un desarrollador full stack bilingüe de Montevideo, Uruguay, especializado en React, Next.js y productos web escalables.";

export const primaryKeywords = [
  "Lucas Regalado",
  "Lucas 'Pepe' Regalado",
  "full stack developer Uruguay",
  "React developer Uruguay",
  "Next.js consultant",
  "remote software engineer",
  "Montevideo software developer",
  "bilingual developer",
  "frontend engineer",
  "backend developer",
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
} as const;

export const socialProfiles = {
  linkedin: "https://www.linkedin.com/in/lucas-regalado",
  whatsapp: "https://wa.me/59891475727",
  instagram: "https://www.instagram.com/lucas.regalado18",
  twitter: "https://x.com/lucasregalado5",
  email: `mailto:${author.email}`,
} as const;

export const openGraphImagePath = "/images/me.png" as const;

export const defaultOgImageAlt = "Lucas Regalado smiling while wearing headphones" as const;

export const structuredData = {
  person() {
    return {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: author.name,
      givenName: author.givenName,
      familyName: author.familyName,
      jobTitle: author.jobTitle,
      url: siteUrl,
      image: `${siteUrl}${openGraphImagePath}`,
      email: author.email,
      address: {
        '@type': 'PostalAddress',
        addressLocality: author.location.city,
        addressCountry: author.location.country,
      },
      sameAs: [
        socialProfiles.linkedin,
        socialProfiles.whatsapp,
        socialProfiles.instagram,
        socialProfiles.twitter,
      ],
    } as const;
  },
  website() {
    return {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: siteName,
      url: siteUrl,
      description: siteTaglineEn,
      inLanguage: ['en', 'es'],
      publisher: {
        '@type': 'Person',
        name: author.name,
      },
    } as const;
  },
} as const;

