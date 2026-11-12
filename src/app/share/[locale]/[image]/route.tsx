/**
 * Serves the social share cards as static PNG files, e.g.
 * /share/en/home.png or /share/es/pepitos.png.
 */
import { locales, type Locale } from "@/lib/i18n/config";
import { getShareCardCopy, renderShareCard, shareCardNames } from "@/lib/seo/share-card";

interface Context {
  params: Promise<{ locale: string; image: string }>;
}

export const dynamic = "force-static";
export const dynamicParams = false;

export const generateStaticParams = () =>
  locales.flatMap((locale) => shareCardNames.map((name) => ({ locale, image: `${name}.png` })));

export async function GET(_request: Request, { params }: Context) {
  const { locale, image } = await params;
  const copy = locales.includes(locale as Locale)
    ? getShareCardCopy(image.replace(/\.png$/, ""), locale as Locale)
    : undefined;

  if (!copy) return new Response("Not found", { status: 404 });

  return renderShareCard(copy);
}
