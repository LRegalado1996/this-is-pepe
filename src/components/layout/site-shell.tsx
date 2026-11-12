/**
 * Document shell shared by both root layouts (English and Spanish): fonts,
 * site-wide structured data, skip link, header, main and footer.
 */
import { Analytics } from "@vercel/analytics/next";
import { JsonLd } from "@/components/seo/json-ld";
import { Footer } from "@/components/ui/footer";
import { Header } from "@/components/ui/header/header";
import { SmoothScroll } from "@/components/ui/smooth-scroll";
import { getDictionary } from "@/content/site";
import { displayFont, textFont } from "@/lib/fonts";
import type { Locale } from "@/lib/i18n/config";
import { socialProfiles, structuredData } from "@/lib/seo/config";
import { MotionProvider } from "./motion-provider";

interface Props {
  locale: Locale;
  children: React.ReactNode;
}

export const SiteShell = ({ locale, children }: Props) => {
  const dictionary = getDictionary(locale);

  return (
    <html lang={locale} className={`${displayFont.variable} ${textFont.variable}`}>
      {/* eslint-disable-next-line @next/next/no-head-element -- App Router root layout, shared by both locales */}
      <head>
        <JsonLd data={[structuredData.person(locale), structuredData.website(locale)]} />
        <meta name="geo.region" content="UY-MO" />
        <meta name="geo.position" content="-34.9011;-56.1645" />
        <meta name="ICBM" content="-34.9011, -56.1645" />
        <link rel="me" href={socialProfiles.linkedin} />
        <link rel="me" href={socialProfiles.github} />
        <link rel="me" href={socialProfiles.twitter} />
        <link rel="me" href={socialProfiles.instagram} />
      </head>
      <body className="font-sans antialiased flex flex-col items-center min-h-dvh bg-paper text-ink">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-volt focus:text-ink focus:px-4 focus:py-2 focus:rounded-full focus:text-xs focus:font-bold focus:uppercase focus:tracking-[0.14em]"
        >
          {dictionary.nav.skipToContent}
        </a>
        <MotionProvider>
          <SmoothScroll />
          <Header locale={locale} />
          <main id="content" className="flex-1 w-full flex flex-col items-center">
            {children}
          </main>
          <Footer locale={locale} />
        </MotionProvider>
        <Analytics />
      </body>
    </html>
  );
};
