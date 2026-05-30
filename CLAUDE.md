# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server
npm run build        # Production build
npm run preview      # Preview production build
npm run check        # Type-check with svelte-check
npm run check:watch  # Type-check in watch mode
```

## Architecture

This is a SvelteKit static site (etsuko.fm) deployed to GitHub Pages via `.github/workflows/deploy.yml` on every push to `main`.

**Stack**: Svelte 5 · SvelteKit · TypeScript · Tailwind CSS v4 · DaisyUI v5 · Vite · adapter-static

**Key config**:
- `svelte.config.js` — adapter-static with `fallback: '404.html'`
- `vite.config.ts` — Tailwind and SvelteKit plugins
- `src/app.css` — Tailwind base + DaisyUI plugin import

**Route structure** (`src/routes/`):
- `+layout.js` — sets `export const prerender = true`
- `+layout.svelte` — root layout wrapping all pages
- `+page.svelte` — homepage

Use the `$lib` alias for imports from `src/lib/`. Write new Svelte components using Svelte 5 runes syntax (`$props()`, `$state()`, etc.).
