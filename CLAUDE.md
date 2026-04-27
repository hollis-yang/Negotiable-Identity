# Project Context — Negotiable Identity

This document is for future maintainers (human or AI). It explains *why* the code looks the way it does, not *what* it does — the code itself is the source of truth for that.

## What this project is

A clickable, mobile-first prototype of a TikTok-style short video app whose distinguishing feature is **algorithmic transparency**: users can inspect the interest profile the recommender has built about them, drill down into the signals (likes, comments, social graph, negative signals) that produced that profile, and manually adjust the weights.

Built as a **final school project for demo purposes**. It is *not* a production app:
- No backend. All data is mock data hardcoded in `src/data/mock*.ts`.
- No authentication, no real users, no persistence beyond in-memory state.
- "Videos" in the feed are gradient placeholders, not real video. Thumbnails on detail pages are hot-linked Unsplash photos.
- Not on App Store / Play Store. Demo target is a desktop or mobile browser.

## Stack and why

- **Vite + React 19 + TypeScript** — fast HMR, modern tooling.
- **Tailwind CSS v3** — fastest path to render the dark-themed Figma design with its gradients and rounded cards. Custom theme tokens live in `tailwind.config.js`.
- **React Router v6** — 9 pages, with `AnimatePresence` from Framer Motion wrapping `<Routes>` for slide/fade transitions.
- **Recharts** — only used in `ContentProfilePage` for the donut chart. The bundle cost (~100KB) is acceptable here; if it ever needs trimming, that chart can be rewritten as a pure SVG with `stroke-dasharray`.
- **Framer Motion** — route transitions only. Page-internal animations use Tailwind transitions.
- **Lucide React** — icon set. Pick from there before adding any custom SVGs.

A React Native or Flutter version was considered and rejected because the demo target is a browser; native-app-feel polish wasn't worth the setup cost.

## Project structure

```
src/
├── App.tsx                     # Router + AnimatePresence + InterestsProvider
├── main.tsx                    # Vite entry
├── InterestsContext.tsx        # Global state for the 4 interest categories
├── index.css                   # Tailwind directives + Inter font import
├── routes/                     # 9 pages, one file each
├── components/
│   ├── layout/                 # MobileFrame, PageHeader, BottomNav, PageTransition
│   ├── feed/                   # ActionRail (the right-side action column on FeedPage)
│   ├── charts/                 # DonutChart, ProgressBar
│   └── ui/                     # Card, GradientButton, IconBadge, Pill
├── data/                       # Mock data — see "Where to edit content" below
└── types/index.ts              # InterestId, SignalKey, Interest, Signal, FeedItem
```

## Routing

| Path | Component | Notes |
|---|---|---|
| `/` | `FeedPage` | Main video feed. Tap the orange `Analyze` button on the right rail to enter the analysis flow. |
| `/analyze` | `AnalyzeModal` | Rendered as a dimmed full-screen modal on top of a faded feed background. |
| `/profile` | `ContentProfilePage` | Donut chart + per-interest breakdown cards. Cards link to `/breakdown/:id`. |
| `/breakdown/:interestId` | `BreakdownPage` | Hub page. Cards link out to the four signal detail pages. |
| `/breakdown/:interestId/likes` | `SignalLikesPage` | |
| `/breakdown/:interestId/comments` | `SignalCommentsPage` | |
| `/breakdown/:interestId/social` | `SignalSocialPage` | |
| `/breakdown/:interestId/negative` | `SignalNegativePage` | |
| `/edit-interests` | `EditInterestsPage` | Sliders modify the `InterestsContext` on `Apply Changes`. |

The 25 interactions in the original Figma prototype map cleanly onto these routes. The "hub-and-spoke" topology is intentional: every signal detail page returns to the breakdown page, which in turn returns to the profile page.

## State management

There is exactly one piece of cross-page state: the user's interest distribution. It lives in `InterestsContext` (`src/InterestsContext.tsx`), seeded from `DEFAULT_INTERESTS` in `src/data/mockProfile.ts`.

Anything else (page-local UI state, draft slider values before Apply, etc.) uses `useState` inside the page component. **Do not introduce Redux/Zustand/Jotai for this project's size.**

## Design system

Colors, gradients, and shadows are centralized in `tailwind.config.js` under `theme.extend`. The conventions:

- `bg.DEFAULT` (`#0A0A0F`) for the app background, `bg.card` (`#1A1A24`) for cards.
- `brand-gradient` (orange→pink) for the primary CTA and the "Analyze" affordance.
- Each interest and each signal type has a fixed accent color (see `signal.*` in the config). Reuse those tokens — don't introduce ad-hoc hex codes in components.
- Cards: 16px radius, dark fill, subtle shadow on hover via `active:scale-[0.98]`.
- Buttons: pill-shaped (`rounded-full`), 56px tall, with the brand gradient for primary and `bg.card` + border for secondary. Use the `GradientButton` component — don't recreate.

## Mobile preview frame

`components/layout/MobileFrame.tsx` is the outermost wrapper. On screens ≥ md (768px) it shows a centered 390×844px phone-shaped container; on smaller screens it goes full-bleed. **The user does not need to switch to mobile view in DevTools.** If you add a new top-level layout, keep this wrapper in `App.tsx`.

## Where to edit content

- **Interest categories, default percentages, total video count, signal definitions, suggested interests, quick insights** → `src/data/mockProfile.ts`
- **Feed videos (gradients, captions, songs, like counts)** → `src/data/mockFeed.ts`
- **Liked content thumbnails, related content, comments, social signals, negative feedback breakdown** → `src/data/mockSignals.ts`

Image thumbnails are Unsplash hot-link URLs built via the `UNSPLASH(id)` helper in `mockSignals.ts`. If a photo ID 404s, swap it for any other ID from `images.unsplash.com/photo-XXX`. Do not commit downloaded copies — keep them as URLs.

## Conventions and gotchas

- **Always read a file before editing it.** Tailwind's content scanner respects exact class strings, so don't dynamically construct class names from variables (`text-${color}-500` will silently break in production builds).
- **Page-level animations**: wrap each page in `<PageTransition>` (or `motion.div` with the same shape) so `AnimatePresence` can detect mount/unmount. The `key={location.pathname}` on `<Routes>` in `App.tsx` is what makes the slide animation work — don't remove it.
- **Recharts in strict mode** sometimes warns about ResponsiveContainer measuring zero size on first render inside a flex column. The current donut chart uses fixed `width`/`height` on the wrapper to avoid this.
- **Background gradient + image**: liked-content cards keep the gradient class as a fallback color while the `<img>` loads. Don't remove the gradient.

## What is *not* implemented

These are deliberate omissions, not bugs:

- Real video playback. Replace `bg-feed-1`/`bg-feed-2`/`bg-feed-3` with `<video>` elements if needed.
- Backend API, persistence, accounts. State resets on page refresh.
- Add/remove interests in `EditInterestsPage` — the trash and "Add New Interest" buttons are visual only.
- Total-must-equal-100% enforcement on the sliders. The total is shown but not enforced.
- Comment thumbnails on `SignalCommentsPage` link nowhere.
- Search, Discover, Inbox, Profile tabs in the bottom nav are non-functional.
- Tests. There is no test suite. For a demo project, type-checking + manual navigation is the verification.

## How to run

```
npm install
npm run dev          # http://localhost:5173/
npm run build        # production build to dist/
npm run preview      # serve dist/ locally
```

The repo lives at https://github.com/hollis-yang/TMD-Final. The `figma/` folder is intentionally gitignored — it contains the original Figma screenshots used as design reference.

## Source of truth for visual design

The original Figma file is `gUBes6LEAL40haFcxefNh4` ("TMD - draft"). Local reference screenshots are in `figma/1.png` through `figma/6.png` (and `5-1.png`–`5-4.png` for the four signal detail pages). When making visual changes, compare against those PNGs.
