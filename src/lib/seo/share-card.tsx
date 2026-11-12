/**
 * Social share cards (1200×630): one per page and per language, drawn in the
 * brand system. Each card shows what the shared link is about, so a preview
 * on WhatsApp, LinkedIn or X reads as that page and not as a generic banner.
 */
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { getProject, projectSlugs } from "@/content/projects";
import { getDictionary } from "@/content/site";
import { routes, type Locale, type RouteKey } from "@/lib/i18n/config";

export const shareCardSize = { width: 1200, height: 630 };

/** Every card that exists: the fixed pages plus one per case study. */
export const shareCardNames: string[] = [...Object.keys(routes), ...projectSlugs];

const author = { givenName: "Lucas", familyName: "Regalado" };

const colors = {
  moss: "#262a1d",
  paper: "#f0f1e6",
  volt: "#d4ff00",
};

interface CardCopy {
  eyebrow: string;
  title: string;
  footer: string;
}

type PageKey = Exclude<RouteKey, "home" | "writing">;

const isPageKey = (name: string): name is PageKey => name in routes;

/** The text of a card, or undefined when no page goes by that name. */
export const getShareCardCopy = (name: string, locale: Locale): CardCopy | undefined => {
  const dictionary = getDictionary(locale);
  const fullName = `${author.givenName} ${author.familyName}`;

  if (name === "home") {
    return { eyebrow: dictionary.role, title: fullName, footer: dictionary.location };
  }

  if (name === "writing") {
    return { eyebrow: dictionary.role, title: dictionary.writing.title, footer: fullName };
  }

  if (isPageKey(name)) {
    return { eyebrow: dictionary.role, title: dictionary[name].title.join(" "), footer: fullName };
  }

  const project = getProject(name, locale);
  return project && { eyebrow: dictionary.work.caseStudy, title: project.title, footer: fullName };
};

const titleBox = { width: 650, height: 350 };
const lineHeight = 0.95;
// Width of a regular uppercase display glyph, relative to the font size.
const glyphWidth = 0.47;
// Glyphs that are clearly wider or narrower than the regular one.
const glyphRatios: Record<string, number> = { W: 1.45, M: 1.45, I: 0.55, " ": 0.5, "'": 0.4 };
// Room kept on the last line for the volt dot, in regular glyphs.
const dotWidth = 0.6;

/** Estimated width of a line of display text, in regular glyphs. */
const measure = (text: string) =>
  [...text].reduce((total, glyph) => total + (glyphRatios[glyph] ?? 1), 0);

/** Largest font size, with its line breaks, at which the title fits its box. */
const fitTitle = (title: string): { fontSize: number; lines: string[] } => {
  const words = title.toUpperCase().split(/\s+/);

  for (let fontSize = 168; fontSize > 60; fontSize -= 2) {
    const capacity = titleBox.width / (glyphWidth * fontSize);
    const lines: string[] = [];

    for (const word of words) {
      const current = lines[lines.length - 1];
      if (current !== undefined && measure(`${current} ${word}`) <= capacity) {
        lines[lines.length - 1] = `${current} ${word}`;
      } else {
        lines.push(word);
      }
    }

    const fitsWidth = lines.every(
      (line, index) => measure(line) + (index === lines.length - 1 ? dotWidth : 0) <= capacity
    );
    const fitsHeight = lines.length * fontSize * lineHeight <= titleBox.height;

    if (fitsWidth && fitsHeight) return { fontSize, lines };
  }

  return { fontSize: 60, lines: [words.join(" ")] };
};

const smallCaps = { display: "flex", fontSize: 26, letterSpacing: 6, textTransform: "uppercase" } as const;

export async function renderShareCard({ eyebrow, title, footer }: CardCopy) {
  const [displayFont, portrait] = await Promise.all([
    readFile(join(process.cwd(), "src/assets/fonts/Anton-Regular.ttf")),
    readFile(join(process.cwd(), "public/images/brand/portrait-og.jpg")),
  ]);
  const portraitSrc = `data:image/jpeg;base64,${portrait.toString("base64")}`;
  const { fontSize, lines } = fitTitle(title);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: colors.moss,
          color: colors.paper,
          fontFamily: "Anton",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            width: titleBox.width + 30,
          }}
        >
          <div style={{ ...smallCaps, color: colors.volt }}>{eyebrow}</div>

          <div style={{ display: "flex", flexDirection: "column", fontSize, lineHeight }}>
            {lines.map((line, index) => (
              <span key={line} style={{ display: "flex" }}>
                {line}
                {index === lines.length - 1 && <span style={{ color: colors.volt }}>.</span>}
              </span>
            ))}
          </div>

          <div style={{ ...smallCaps, opacity: 0.75 }}>{footer}</div>
        </div>

        {/* eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element */}
        <img
          src={portraitSrc}
          width={360}
          height={360}
          style={{ borderRadius: 32, border: `6px solid ${colors.volt}`, objectFit: "cover" }}
        />
      </div>
    ),
    {
      ...shareCardSize,
      fonts: [{ name: "Anton", data: displayFont, style: "normal", weight: 400 }],
    }
  );
}
