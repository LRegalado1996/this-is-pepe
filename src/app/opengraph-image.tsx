/**
 * Social share image (1200×630) generated at build time in the brand system:
 * moss block, display wordmark with the volt dot and the portrait.
 */
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { author, defaultOgImageAlt } from "@/lib/seo/config";

export const alt = defaultOgImageAlt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const colors = {
  moss: "#262a1d",
  paper: "#f0f1e6",
  volt: "#d4ff00",
};

export default async function OpenGraphImage() {
  const [displayFont, portrait] = await Promise.all([
    readFile(join(process.cwd(), "src/assets/fonts/Anton-Regular.ttf")),
    readFile(join(process.cwd(), "public/images/brand/portrait-og.jpg")),
  ]);
  const portraitSrc = `data:image/jpeg;base64,${portrait.toString("base64")}`;

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
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: colors.volt,
            }}
          >
            {author.jobTitle}
          </div>

          <div style={{ display: "flex", flexDirection: "column", fontSize: 168, lineHeight: 0.95, textTransform: "uppercase" }}>
            <span>{author.givenName}</span>
            <span style={{ display: "flex" }}>
              {author.familyName}
              <span style={{ color: colors.volt }}>.</span>
            </span>
          </div>

          <div style={{ display: "flex", fontSize: 26, letterSpacing: 6, textTransform: "uppercase", opacity: 0.75 }}>
            {`${author.location.city}, ${author.location.country}`}
          </div>
        </div>

        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img
          src={portraitSrc}
          width={380}
          height={380}
          style={{ borderRadius: 32, border: `6px solid ${colors.volt}`, objectFit: "cover" }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Anton", data: displayFont, style: "normal", weight: 400 }],
    }
  );
}
