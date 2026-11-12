# Working on this site

Personal site of Lucas Regalado: Next.js App Router, TypeScript, Tailwind,
English at the root and Spanish under `/es`. Package manager: pnpm.

Two things hold on every change, whatever the task:

1. **It stays findable.** Any change to content, pages, routes or metadata keeps
   Google and AI assistants in sync: metadata, hreflang, JSON-LD, sitemap and the
   generated `llms.txt` files. Follow `.claude/skills/seo-ai-visibility/SKILL.md`.
2. **It stays Volt.** Any visual change follows the Volt system, in the spirit of
   landonorris.com. Follow `.claude/skills/volt-design/SKILL.md` and
   `.cursor/rules/design-guidelines.mdc`.

Also:

- All copy lives in `src/content`, in both languages. Code and comments in English.
- Case studies never name the client: industry and region only.
- The site presents Lucas as a personal brand; it does not pitch services.
- Every file starts with a short header comment describing its purpose.
- Explain and ask before significant changes that were not requested.
- Finish with `pnpm lint && pnpm build`.

More rules live in `.cursor/rules`.
