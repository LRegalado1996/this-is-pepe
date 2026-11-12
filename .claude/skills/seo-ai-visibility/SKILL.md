---
name: seo-ai-visibility
description: Keep this site findable on Google and by AI assistants (ChatGPT, Claude, Perplexity, AI Overviews). Use whenever content, pages, routes, metadata, structured data, robots, sitemap or llms.txt change, when adding a page, project, job or article, and when asked to audit or improve SEO, GEO or AI visibility.
---

# SEO and AI visibility

Goal: when someone searches for Lucas Regalado, or asks an assistant about him or
his topics (full stack development in Uruguay, Next.js, AI agents, Claude Code),
this site is the source that gets found, quoted and linked.

## How the site is wired

Everything derives from `src/content`. Change the content and the rest follows:

| Surface | Where | Notes |
| --- | --- | --- |
| Titles, descriptions, keywords | `src/content/site.ts` (`meta`) | Per page and locale |
| Canonical, hreflang, Open Graph, Twitter | `src/lib/seo/config.ts` (`buildMetadata`) | `x-default` is English |
| JSON-LD | `src/lib/seo/config.ts` (`structuredData`), rendered with `JsonLd` | Person and WebSite site-wide; ProfilePage, BreadcrumbList, ItemList of BlogPosting, CreativeWork per page |
| Sitemap | `src/app/sitemap.ts` | Reads `routes` and `projectSlugs` |
| Robots | `src/app/robots.ts` | Everyone allowed; AI crawlers named explicitly |
| llms.txt | `src/lib/seo/llms.ts`, served at `/llms.txt`, `/llms-full.txt`, `/es/llms.txt`, `/es/llms-full.txt` | Generated; never hand-write these files |
| Share cards | `src/app/share/[locale]/[image]/route.tsx` | One per page and locale |
| Site URL | `NEXT_PUBLIC_SITE_URL` | Drives every absolute URL |

## Checklist for every change

1. **New page**: add it to `routes` in `src/lib/i18n/config.ts` in both locales, add
   its `meta` entry in both dictionaries, export `metadata` through
   `buildPageMetadata`, render breadcrumbs JSON-LD, and give it a share card.
   Sitemap and llms.txt pick it up from `routes`.
2. **New project, job or article**: add it in `src/content` in English and Spanish.
   Check that it appears in `/llms-full.txt`. If it introduces a new kind of
   content, extend `src/lib/seo/llms.ts` so the Markdown version covers it.
3. **New fact about Lucas** (role, employer, location, profile link): update
   `author` and `socialProfiles` in `src/lib/seo/config.ts`, the Person JSON-LD
   (`knowsAbout`, `sameAs`, `worksFor`) and the `tagline` in both locales.
4. **Copy**: one `h1` per page, headings in order, and the important content as
   real text in the server-rendered HTML. AI crawlers do not run JavaScript, so
   nothing that matters may depend on a client-side fetch or on user interaction
   to exist in the DOM. Collapsed panels are fine while their text is rendered.
5. **Images**: `next/image` with a descriptive, localized `alt`.
6. **Structured data must match the visible page.** Never mark up something the
   visitor cannot read.

## Writing so assistants quote it

- State facts plainly and in the third person where it is natural: who, what
  role, where, since when, with which stack. The `tagline` is the model.
- Prefer concrete numbers and dates over adjectives; the case studies do this.
- Keep names consistent everywhere: "Lucas Regalado", "Senior Full Stack
  Developer", "Montevideo, Uruguay", "Streaver".
- Spanish and English pages say the same thing; hreflang links them.

## Rules that do not bend

- Case studies never name the client: industry and region only.
- The site presents Lucas as a personal brand. It does not pitch services or say
  he is looking for work; calls to action stay low-key.
- No keyword stuffing, hidden text, doorway pages, fake reviews or invented
  numbers. Every claim must be true and visible on the page.
- Do not block any crawler without Lucas asking for it.

## Verify before finishing

```bash
pnpm lint && pnpm build
pnpm start -p 3457   # then, in another shell:
curl -s localhost:3457/llms.txt
curl -s localhost:3457/llms-full.txt
curl -s localhost:3457/robots.txt
curl -s localhost:3457/sitemap.xml
curl -s localhost:3457/ | grep -o '<script type="application/ld+json">.*</script>' | head -c 2000
```

Check that the new content shows up in each of them, in both languages, and that
canonical and hreflang URLs are absolute and correct. After a deploy, test a URL
in Google's Rich Results Test and inspect it in Search Console.

## What is known to matter (checked November 2026)

- Google: AI Overviews and AI Mode need nothing beyond normal SEO. A page must be
  indexed and eligible for a snippet. Google states that no special schema, AI
  text file or markup is required, and that llms.txt neither helps nor harms in
  Search. Source: https://developers.google.com/search/docs/appearance/ai-features
- llms.txt is a proposal (https://llmstxt.org), not a standard. It is cheap here
  because it is generated, and agent tooling does read it. Format: one H1, a
  blockquote summary, free text, then H2 sections of links; the H2 named
  `Optional` marks links that can be skipped.
- ChatGPT search and Copilot lean on Bing's index, so Bing Webmaster Tools
  matters as much as Search Console.
- AI crawler tokens are listed in `src/app/robots.ts`. Vendors rename them;
  confirm against the vendors' own documentation before editing the list.

This area changes fast. Before a larger SEO pass, search the current official
documentation again and update this section with what you find and the date.

## Outside the code

These move the needle more than any tag, and only Lucas can do them. Remind him
when they are still pending:

- Connect the real domain and set `NEXT_PUBLIC_SITE_URL`.
- Verify the site in Google Search Console and Bing Webmaster Tools
  (`GOOGLE_SITE_VERIFICATION`, `BING_SITE_VERIFICATION`) and submit the sitemap.
- Link to the site from LinkedIn, X, GitHub and the author bio of each article.
  Assistants trust what several independent sources agree on.
- Keep publishing: each article is a new reason to be cited.
