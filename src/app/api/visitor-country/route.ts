/**
 * Tells the browser which country the visitor is in, from the header Vercel
 * adds at the edge. Kept as its own endpoint so the pages stay static.
 */
export const dynamic = "force-dynamic";

export function GET(request: Request) {
  const header = request.headers.get("x-vercel-ip-country");
  // Outside Vercel there is no header: `?country=UY` stands in for it locally.
  const override =
    process.env.NODE_ENV === "production" ? null : new URL(request.url).searchParams.get("country");

  return Response.json(
    { country: (override ?? header)?.toUpperCase() ?? null },
    { headers: { "Cache-Control": "private, no-store", "X-Robots-Tag": "noindex" } }
  );
}
