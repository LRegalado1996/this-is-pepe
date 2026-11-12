/**
 * Apple touch icon: the "LR" monogram on a full-bleed tile (iOS rounds it).
 */
import { renderMonogram } from "@/lib/brand/monogram";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return renderMonogram(size.width, false);
}
