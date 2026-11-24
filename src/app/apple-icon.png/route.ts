/**
 * Apple touch icon: the "LR" monogram on a full-bleed tile (iOS rounds it).
 * A route so the URL never changes between deploys.
 */
import { renderMonogram } from "@/lib/brand/monogram";

export const dynamic = "force-static";

export function GET() {
  return renderMonogram(180, false);
}
