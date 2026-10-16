# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Use **Bun only**. Never pnpm, npm, or yarn — not for installs, scripts, or one-off binaries. Run everything through bash.

- `bun install` — install dependencies (`bun.lock`).
- `bun run dev` — Next.js dev server (Turbopack). content-collections watches `content/` and regenerates on change.
- `bun run build` / `bun run start` — production build and serve.
- `bun run lint` / `bun run lint:fix` — ESLint (flat config, `eslint-config-next`).
- `bunx tsc --noEmit` — typecheck. There is no test runner and no test script.

## Architecture

Single-page portfolio (fork of dillionverma/portfolio) owned by Dogukan. Next.js 16 App Router, React 19, Tailwind CSS v4, TypeScript. `@/*` maps to `src/*`.

**All site content lives in `src/data/resume.tsx`** as one exported `DATA` object: name, summary, skills, work, projects, navbar links, and socials. The homepage and every section read from it. Social entries with `navbar: true` render in the dock; icons come from `react-icons/fa6`.

**Blog is MDX via content-collections.** Posts are `content/*.mdx` with frontmatter validated in `content-collections.ts` (`title`, `publishedAt`, `summary`, optional `image`/`author`/`updatedAt`). The `transform` compiles MDX with `remark-gfm` and `src/lib/remark-code-meta`. `next.config.mjs` wraps the config in `withContentCollections`, which must stay the outermost plugin. Generated types resolve through the `content-collections` path alias to `.content-collections/generated`. Routes: `src/app/blog/page.tsx` lists posts, `src/app/blog/[slug]/page.tsx` renders one with `MDXContent` and the component map in `src/mdx-components.tsx` (`CodeBlock`, `MediaContainer`). Do not remove the blog routes, the MDX pipeline, or the navbar Blog link — only add or replace files in `content/`.

**Global chrome is in `src/app/layout.tsx`, and ordering matters:**

- `Backdrop` renders the purple glow. It is `position: fixed` and must stay *outside* `PageTransition`. That wrapper animates a CSS `filter`, and a filter on an ancestor makes `fixed` descendants behave as `absolute`, which clips the glow to the content column.
- `PageTransition` (`src/components/page-transition.tsx`) wraps `{children}` only. It keys on `usePathname()` and fades/blurs between routes (~280ms). The navbar, backdrop, and bottom fade sit outside it so they don't animate.
- The navbar dock (`src/components/navbar.tsx`) is a client component. Internal links (`/`, `/blog`) go through `useRouter().push` so the transition runs; external links stay plain `<a target="_blank">`.
- `SmoothScroll` mounts `<ReactLenis root>` with a short lerp (`src/components/smooth-scroll.tsx`).
- A `z-20` black gradient is pinned to the bottom of the viewport, above the `z-10` content, so the fade paints over the page.

Page `<main>` elements are `bg-transparent`. The page background comes from `body` (`bg-background` in the layout, hardcoded `#09090b` in `globals.css`). An opaque background on a page container covers the glow.

Theme is locked dark: `<html className="dark">` and `forcedTheme="dark"` on `ThemeProvider`. `globals.css` duplicates the same tokens under `:root` and `.dark`.
