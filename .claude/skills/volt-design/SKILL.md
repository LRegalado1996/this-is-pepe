---
name: volt-design
description: Keep every screen of this site inside the Volt visual system (giant condensed display type, green-tinted neutrals, one lime accent, motion in the spirit of landonorris.com). Use whenever building or changing UI, components, pages, styles, layout, animation, images or share cards.
---

# Volt design system

The site's look takes its direction from landonorris.com: editorial, athletic,
confident. Giant condensed uppercase headlines, calm neutrals, one loud accent,
and motion that feels engineered. Volt is our own system built in that spirit.

Take the language, never the material: do not copy that site's logos, photos,
copy, font files, illustrations or code. Everything here uses our own tokens,
type and photography.

## Source of truth

- `.cursor/rules/design-guidelines.mdc`: colors, typography, layout, components
- `.cursor/rules/motion-guidelines.mdc`: animation principles and timings
- `src/app/globals.css`: the tokens and the few custom classes

Read the first two before any visual work. If a decision changes the system,
update those files in the same change so the rules stay true.

## The system in one screen

- **Color**: `paper` background, `ink` text, `moss` for dark contrast blocks,
  `volt` as the single accent (about 5% of a screen at most), `volt-dim` for the
  accent on light backgrounds, `stone` for muted display type. No new colors, no
  gradients, no glass other than the sticky header.
- **Type**: Anton (`font-display`) for headlines, numbers and names, always
  uppercase and tight. Mona Sans for everything else. Fluid sizes with `clamp()`.
- **Layout**: `max-w-[1280px]` with `px-4`; full-bleed color blocks wrap an inner
  container; sections breathe with `py-20 md:py-28`; hairlines
  (`border-t border-ink/15`) instead of boxes; cards only for grids of peers.
- **Signature moves**: headlines revealed line by line, the skills marquee, the
  pinned On Stack / Off Stack horizontal track, numbered rows, duotone photos
  (`.duotone`), count-up numbers, arrows that nudge on hover.
- **Tone**: no emojis in the interface; low-key calls to action.

## How to build

1. Reuse before creating: `PageHero`, `SectionHeading`, `Eyebrow`, `Chip`,
   `Reveal`, `CountUp`, `ClosingCta`, `Marquee` in `src/components/ui`.
2. Pages stay Server Components. Put motion in small client components
   (`Reveal` is the pattern) so the text is always in the server HTML.
3. Animate `transform` and `opacity` only, and respect `prefers-reduced-motion`.
4. Copy goes in `src/content`, in English and Spanish. Nothing hardcoded.
5. Mobile first. Check 375px and 1280px; no horizontal scroll.
6. Keep contrast readable: secondary text at `/70` opacity or above, pure volt
   never as text on paper.

## Design and search work together

A beautiful section that crawlers cannot read does not help Lucas get found.
Any new section must keep one `h1` per page, ordered headings, real text in the
HTML and described images. See the `seo-ai-visibility` skill.

## Before finishing

Run `pnpm lint && pnpm build`, then open the page with `pnpm dev` and look at
it in both languages and at both widths. Compare it with a neighbouring page: it
should look like the same hand made both.
