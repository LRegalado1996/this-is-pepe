/**
 * Favicon: the "LR" monogram.
 */
import { renderMonogram } from "@/lib/brand/monogram";

export const size = { width: 96, height: 96 };
export const contentType = "image/png";

export default function Icon() {
  return renderMonogram(size.width, true);
}
