# TMD — Content Profile

A TikTok-style short video app prototype focused on algorithmic transparency. Users can see how the algorithm classifies their interests, trace the contribution of each signal type (likes, comments, social graph, negative feedback), and manually adjust their interest weights.

## Quick Start

```bash
cd tmd-app
npm install
npm run dev
```

Open `http://localhost:5173/` in your browser. Press `Cmd+Shift+M` (Chrome DevTools) to switch to mobile view — iPhone 14 Pro recommended.

## Tech Stack

- **Vite + React 19 + TypeScript**
- **Tailwind CSS** — styling
- **React Router v6** — routing for 9 pages
- **Recharts** — donut chart on the Content Profile page
- **Framer Motion** — page transitions
- **Lucide React** — icons

## Pages

| Route | Page |
|---|---|
| `/` | Main video feed |
| `/analyze` | Analyze modal |
| `/profile` | Content Profile (interest distribution) |
| `/breakdown/:id` | Interest Breakdown (signal hub) |
| `/breakdown/:id/likes` | Likes signal detail |
| `/breakdown/:id/comments` | Comments signal detail |
| `/breakdown/:id/social` | Social Signals detail |
| `/breakdown/:id/negative` | Negative Signals detail |
| `/edit-interests` | Edit interests (slider adjustment) |

## Scripts

```bash
npm run dev      # start dev server
npm run build    # production build (output to dist/)
npm run preview  # preview production build locally
```
