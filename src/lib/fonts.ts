/**
 * Brand typefaces: Anton for display type, Mona Sans for text.
 */
import { Anton, Mona_Sans } from "next/font/google";

export const displayFont = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

export const textFont = Mona_Sans({
  subsets: ["latin"],
  variable: "--font-mona",
});
