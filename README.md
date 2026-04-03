# Slowlane Astro Site

This site is Astro-only and preserves the existing public URL structure used by GitHub Pages.

## Commands

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run preview`

## Architecture

- `src/layouts/BaseLayout.astro`: global layout with header, footer, SEO metadata, and canonical URL handling.
- `src/components/`: shared UI for navigation, footer, feature cards, CTA blocks, and feature detail shells.
- `src/content/site/`: the source of truth for Markdown-backed page content.
- `src/pages/`: Astro routes that preserve the existing public URLs.

## How routing stays stable

- Existing URLs such as `/pacelab/pace-calculator/` are generated from Astro routes that mirror the same directory structure.
- Generic Markdown pages are rendered by `src/pages/[...slug].astro`.
- High-duplication landing pages and example feature pages are migrated to dedicated `.astro` routes without changing the URL.

## Adding a new page

1. If the page can stay Markdown-only, add it under `src/content/site/...` following the existing URL path. Example: `src/content/site/pacelab/new-tool/index.md` becomes `/pacelab/new-tool/`.
2. If the page needs reusable UI blocks, create a matching Astro route under `src/pages/...` and wrap it in `BaseLayout.astro`.
3. Reuse `FeatureCard.astro`, `CTA.astro`, and `FeatureDetailPage.astro` instead of duplicating sections.
4. Run `npm run build` and verify the generated path in `dist/`.

## Incremental migration

- Markdown content lives only in `src/content/site/`.
- Dedicated Astro routes can gradually replace Markdown-rendered pages one by one with no URL changes.
