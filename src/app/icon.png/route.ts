/**
 * Favicon as PNG: the "LR" monogram, 96px (a multiple of 48, as Google asks).
 * A route instead of Next's `icon.tsx` so the URL never changes between deploys.
 */
import { renderMonogram } from "@/lib/brand/monogram";

export const dynamic = "force-static";

export function GET() {
  return renderMonogram(96, true);
}
