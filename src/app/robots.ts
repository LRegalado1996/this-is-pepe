/**
 * Robots configuration: every crawler is welcome, AI search and assistant
 * crawlers are named explicitly, and the sitemap location is declared.
 */
import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo/config";

// Named so the intent is explicit and survives any future rule added for "*".
const aiCrawlers = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: aiCrawlers, allow: "/" },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
