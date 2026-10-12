# Gabriel's Portfolio

A personal portfolio website for Gabriel, a web designer focused on clean interfaces, thoughtful typography, and motion design.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Motion (Framer Motion)
- **Content:** Content Collections (MDX blog)
- **UI Primitives:** Radix UI
- **Syntax Highlighting:** Shiki + rehype-pretty-code
- **Icons:** Lucide React, React Icons

## Features

- Hero section with avatar, name, and short description
- Projects showcase with image cards and live links
- Blog powered by MDX with syntax-highlighted code blocks
- Social links (GitHub, Instagram, Email)
- Contact section
- Dark-themed design with animated blur-fade transitions
- Light/dark mode toggle

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Home page
│   ├── blog/             # Blog routes
│   └── layout.tsx        # Root layout
├── components/
│   ├── section/          # Page sections (projects, contact, social)
│   ├── magicui/          # Blur fade animation components
│   ├── ui/               # Radix-based UI primitives
│   └── ...
└── data/
    └── resume.tsx        # All site content (name, projects, socials, work)
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Content

All site content (name, description, projects, work experience, skills, social links) lives in `src/data/resume.tsx`. Edit that file to update what's displayed on the site.

## Projects Showcased

| Project | URL |
|---|---|
| Kiwimi Studios | [kiwimi.co](https://kiwimi.co/) |
| Turkish Airlines Demo | [turkish-airlines-mocha.vercel.app](https://turkish-airlines-mocha.vercel.app/) |
| McLaren P1 Showcase | [mclaren-p1-showcase-beta.vercel.app](https://mclaren-p1-showcase-beta.vercel.app/) |
| Virello | [virello-smoky.vercel.app](https://virello-smoky.vercel.app/) |

## License

MIT
