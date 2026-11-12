/**
 * Locale configuration and the localized route map. English lives at the
 * root; Spanish lives under /es with translated slugs.
 */
export const locales = ["en", "es"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const routes = {
  home: { en: "/", es: "/es" },
  about: { en: "/about-me", es: "/es/sobre-mi" },
  work: { en: "/work", es: "/es/proyectos" },
  experience: { en: "/work-experience", es: "/es/experiencia" },
  writing: { en: "/writing", es: "/es/escritos" },
  contact: { en: "/contact", es: "/es/contacto" },
} as const satisfies Record<string, Record<Locale, string>>;

export type RouteKey = keyof typeof routes;

export const routePath = (key: RouteKey, locale: Locale): string => routes[key][locale];

export const projectPath = (slug: string, locale: Locale): string =>
  `${routes.work[locale]}/${slug}`;

/** Maps a pathname to the equivalent page in another locale. */
export const alternatePath = (pathname: string, target: Locale): string => {
  const path = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;

  for (const key of Object.keys(routes) as RouteKey[]) {
    for (const locale of locales) {
      if (routes[key][locale] === path) return routes[key][target];
    }
  }

  for (const locale of locales) {
    const prefix = `${routes.work[locale]}/`;
    if (path.startsWith(prefix)) return projectPath(path.slice(prefix.length), target);
  }

  return routes.home[target];
};

/** The locale a pathname belongs to. */
export const localeFromPath = (pathname: string): Locale =>
  pathname === "/es" || pathname.startsWith("/es/") ? "es" : "en";
