/**
 * "LR" monogram used for the favicon and the Apple touch icon: tight display
 * letters in volt on a moss tile.
 */
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export async function renderMonogram(size: number, rounded: boolean) {
  const displayFont = await readFile(join(process.cwd(), "src/assets/fonts/Anton-Regular.ttf"));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#262a1d",
          color: "#d4ff00",
          borderRadius: rounded ? size * 0.22 : 0,
          fontFamily: "Anton",
          fontSize: size * 0.7,
          lineHeight: 1,
          letterSpacing: -size * 0.02,
        }}
      >
        LR
      </div>
    ),
    {
      width: size,
      height: size,
      fonts: [{ name: "Anton", data: displayFont, style: "normal", weight: 400 }],
    }
  );
}
