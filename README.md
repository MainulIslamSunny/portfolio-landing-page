# Mainul Islam — Developer Portfolio

> A professional, bento-grid personal portfolio built with **Next.js 14**, **TypeScript**, and **TailwindCSS**. Features live GitHub API data, a working contact form, animated tiles, and one-click deployment to Vercel.

**Live demo →** https://portfolio-landing-page-peach.vercel.app/

---

## ✨ Features

- **Bento grid layout** — responsive 12-column card layout that adapts to any screen size
- **Live GitHub stats** — repos, followers, stars, forks, and language breakdown fetched server-side via GitHub API
- **Live contribution graph** — 12-month activity graph pulled in real time
- **Working contact form** — sends emails via [Resend](https://resend.com) with a branded HTML template
- **Typewriter animation** — rotating role titles with smooth type/delete loop
- **Scroll progress bar** — thin gradient bar tracks reading position
- **Animated tiles** — scroll-triggered fade-up on every card with mouse-tracking glow effect
- **Spinning border profile card** — conic-gradient CSS animation on the main profile tile
- **Copy email / direct mailto** — one-click email copy with toast notification
- **ISR caching** — GitHub data revalidated every hour; no stale data, no slow loads
- **SEO ready** — Open Graph, Twitter Card, meta description, and `robots` tags in layout
- **TypeScript throughout** — fully typed, no `any`
- **Zero layout shift** — fonts loaded via `next/font`, GitHub data fetched server-side

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript 5 |
| Styling | TailwindCSS 3 |
| Animation | Framer Motion 11 |
| Icons | Lucide React |
| Email | Resend |
| Fonts | Plus Jakarta Sans · JetBrains Mono (Google Fonts via `next/font`) |
| Deployment | Vercel |

---

## 📁 Project Structure

```
mainul-portfolio/
│
├── app/
│   ├── api/
│   │   ├── github/route.ts       # GET — returns live GitHub stats (ISR cached)
│   │   └── contact/route.ts      # POST — sends contact form email via Resend
│   ├── globals.css               # Global styles, CSS animations, custom properties
│   ├── layout.tsx                # Root layout — fonts, metadata, SEO tags
│   └── page.tsx                  # Home page (server component, fetches GitHub at build)
│
├── components/
│   ├── sections/                 # One component per bento tile
│   │   ├── ProfileTile.tsx       # Avatar, name, typewriter, metrics, social links
│   │   ├── GitHubTile.tsx        # Live stat counters + language bars (client)
│   │   ├── SkillsTile.tsx        # Categorised skill pills
│   │   ├── ExperienceTile.tsx    # Timeline with impact bullets
│   │   ├── ProjectsTile.tsx      # Featured + grid project cards
│   │   ├── ContribTile.tsx       # GitHub contribution heatmap image
│   │   ├── ReposTile.tsx         # Live recent repos from GitHub API
│   │   ├── EducationTile.tsx     # University, CGPA, key modules
│   │   ├── AwardsTile.tsx        # Awards and recognitions
│   │   └── ContactTile.tsx       # Contact form + email actions (client)
│   │
│   └── ui/                       # Reusable primitives
│       ├── Tile.tsx              # Animated bento tile wrapper (scroll + mouse glow)
│       ├── Label.tsx             # Section label with leading line
│       ├── ScrollProgress.tsx    # Top-of-page reading progress bar
│       └── Toast.tsx             # Toast notification context + provider
│
├── lib/
│   ├── data.ts                   # ⭐ ALL content lives here — edit to customise
│   ├── github.ts                 # Server-side GitHub API fetcher with ISR
│   └── utils.ts                  # cn(), relTime(), getLangColor()
│
├── public/                       # Static assets — drop your cv.pdf here
├── .env.local.example            # Environment variable template
├── next.config.js                # Image domains config
├── tailwind.config.ts            # Theme tokens (colors, fonts, animations)
├── tsconfig.json
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js 18+](https://nodejs.org) — download the LTS version
- [Git](https://git-scm.com)

### 1. Clone the repository

```bash
git clone https://github.com/MainulIslamSunny/mainul-portfolio.git
cd mainul-portfolio
```

### 2. Install dependencies

```bash
npm install
```


### 4. Start the development server

```bash
npm run dev
```


---

## ✏️ Customisation

**Everything you need to update lives in one file: `lib/data.ts`**

Open it and edit your name, email, GitHub username, LinkedIn, projects, experience, skills, education, and awards. The page hot-reloads instantly on every save — no restart needed.

```ts
// lib/data.ts

export const PROFILE = {
  name: "Your Name",
  email: "you@email.com",
  githubUsername: "yourusername",
  linkedin: "https://linkedin.com/in/yourprofile",
  cvUrl: "/cv.pdf",           // put cv.pdf inside /public
  // ...
};
```

To add your CV: drop a `cv.pdf` file into the `/public` folder, then set `cvUrl: "/cv.pdf"` in `lib/data.ts`.

---

## 🌐 Deploying to Vercel

### 1. Push to GitHub

```bash
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### 2. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **Add New Project** → import your repository
3. Under **Environment Variables**, add:
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL`
   - `GITHUB_TOKEN` (optional)
4. Click **Deploy**

Your portfolio goes live at `https://your-project.vercel.app` ✅

To connect a custom domain: Vercel Dashboard → Settings → Domains → Add your domain.

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server at http://localhost:3000 |
| `npm run build` | Build for production and check for errors |
| `npm run start` | Serve the production build locally |
| `npm run lint` | Run ESLint across the project |

---

## 🗺️ Roadmap

- [ ] Add profile photo (replace `MI` initials with `<Image>`)
- [ ] Blog section with MDX posts (`next-mdx-remote`)
- [ ] Dark/light mode toggle
- [ ] Vercel Analytics integration
- [ ] Add project screenshots / demo GIFs to project cards
- [ ] Playwright end-to-end tests

---

## 📄 License

This project is open source under the [MIT License](LICENSE). You are free to use it as a template for your own portfolio — just replace the content with your own.

---

## 🤝 Connect

**Mainul Islam** — Full Stack Developer, Dhaka, Bangladesh

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/mainulislam188478)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/MainulIslamSunny)
[![Portfolio](https://img.shields.io/badge/Portfolio-6382FF?style=for-the-badge&logo=vercel&logoColor=white)](https://portfolio-mainul.vercel.app)
[![Email](https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:s.m.sunny97@gmail.com)

---

<p align="center">Built with Next.js · Deployed on Vercel</p>
