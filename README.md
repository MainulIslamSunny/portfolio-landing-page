# Mainul Islam — Next.js Portfolio

A professional bento-grid portfolio built with **Next.js 14 (App Router)**, **TypeScript**, **TailwindCSS**, and **Framer Motion**. Features live GitHub API data, a working contact form (via Resend), and ISR caching.

---

## ⚡ Step-by-Step Setup in VS Code

### Prerequisites (install once)

| Tool | Download |
|------|----------|
| **Node.js 18+** | https://nodejs.org (choose LTS) |
| **VS Code** | https://code.visualstudio.com |
| **Git** | https://git-scm.com |

---

### Step 1 — Open the project in VS Code

1. Unzip the downloaded `mainul-portfolio.zip`
2. Open VS Code
3. Go to **File → Open Folder…**
4. Select the `mainul-portfolio` folder → click **Open**

---

### Step 2 — Open the terminal in VS Code

Press `` Ctrl + ` `` (backtick) or go to **Terminal → New Terminal**

You should see a terminal at the bottom of VS Code pointing to your project folder.

---

### Step 3 — Install dependencies

Run this command in the terminal:

```bash
npm install
```

Wait for it to finish (takes ~30–60 seconds the first time).

---

### Step 4 — Set up environment variables

In the terminal, copy the example env file:

```bash
# Windows
copy .env.local.example .env.local

# Mac / Linux
cp .env.local.example .env.local
```

Then open `.env.local` in VS Code and fill in your values:

```env
# Optional: get a free API key at https://resend.com to enable contact form emails
RESEND_API_KEY=re_your_key_here

# Your email address where contact form messages will arrive
CONTACT_TO_EMAIL=s.m.sunny97@gmail.com

# Optional: add a GitHub Personal Access Token to avoid rate limits (60 req/hr → 5000 req/hr)
# Get one at https://github.com/settings/tokens (no special permissions needed)
GITHUB_TOKEN=ghp_your_token_here
```

> **Note:** The site works without these — the contact form logs to console in dev mode, and GitHub API works without a token (60 req/hr limit).

---

### Step 5 — Run the development server

```bash
npm run dev
```

You'll see:

```
▲ Next.js 14.x.x
- Local:        http://localhost:3000
- Ready in Xs
```

Open your browser and go to **http://localhost:3000** 🎉

---

### Step 6 — Customise your content

Open `lib/data.ts` — **this is the only file you need to edit** to update your portfolio content.

Change your name, links, projects, experience, skills, etc. The page hot-reloads automatically.

```ts
export const PROFILE = {
  name: "Mainul Islam",         // ← your name
  email: "s.m.sunny97@gmail.com", // ← your email
  cvUrl: "https://...",         // ← link to your CV PDF
  // ...
};
```

---

## 🚀 Deploy to Vercel (Free — takes 5 minutes)

### Step 1 — Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### Step 2 — Deploy on Vercel

1. Go to https://vercel.com and sign in with GitHub
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Under **Environment Variables**, add:
   - `RESEND_API_KEY` → your Resend key
   - `CONTACT_TO_EMAIL` → your email
   - `GITHUB_TOKEN` → your GitHub PAT (optional but recommended)
5. Click **Deploy** ✅

Your portfolio is live at `https://your-project.vercel.app` 🎉

---

## 📁 Project Structure

```
mainul-portfolio/
├── app/
│   ├── api/
│   │   ├── github/route.ts      # GitHub data API endpoint
│   │   └── contact/route.ts     # Contact form email endpoint
│   ├── globals.css              # Global styles & animations
│   ├── layout.tsx               # Root layout with fonts & metadata
│   └── page.tsx                 # Main page (server component)
│
├── components/
│   ├── sections/                # Each bento tile
│   │   ├── ProfileTile.tsx
│   │   ├── GitHubTile.tsx
│   │   ├── SkillsTile.tsx
│   │   ├── ExperienceTile.tsx
│   │   ├── ProjectsTile.tsx
│   │   ├── ContribTile.tsx
│   │   ├── ReposTile.tsx
│   │   ├── EducationTile.tsx
│   │   ├── AwardsTile.tsx
│   │   └── ContactTile.tsx
│   └── ui/                      # Reusable UI primitives
│       ├── Tile.tsx             # Animated bento tile wrapper
│       ├── Label.tsx            # Section label
│       ├── ScrollProgress.tsx   # Top progress bar
│       └── Toast.tsx            # Toast notifications
│
├── lib/
│   ├── data.ts                  # ★ ALL your content lives here
│   ├── github.ts                # GitHub API fetcher (server-side)
│   └── utils.ts                 # Helpers (cn, relTime, getLangColor)
│
├── public/                      # Static files (add cv.pdf here)
├── .env.local.example           # Copy to .env.local and fill in
├── next.config.js
├── tailwind.config.ts
└── package.json
```

---

## 🔧 Common Commands

| Command | What it does |
|---------|-------------|
| `npm run dev` | Start local dev server at http://localhost:3000 |
| `npm run build` | Build for production (checks for errors) |
| `npm run start` | Run the production build locally |
| `npm run lint` | Check for code issues |

---

## 💡 Next Steps (Level Up)

1. **Add your photo** — Replace the `MI` initials in `ProfileTile.tsx` with a real `<Image>` tag
2. **Host your CV** — Put `cv.pdf` in the `/public` folder, then set `cvUrl: "/cv.pdf"` in `lib/data.ts`
3. **Add a blog** — Create `app/blog/page.tsx` and write MDX posts with `next-mdx-remote`
4. **Custom domain** — In Vercel dashboard → Settings → Domains → add your domain
5. **Analytics** — Add `@vercel/analytics` for free visitor stats

---

## 🛠 VS Code Recommended Extensions

Install these for the best experience:

- **ESLint** (`dbaeumer.vscode-eslint`)
- **Tailwind CSS IntelliSense** (`bradlc.vscode-tailwindcss`)
- **Prettier** (`esbenp.prettier-vscode`)
- **TypeScript** (built-in)
- **Auto Rename Tag** (`formulahendry.auto-rename-tag`)

Install them from the Extensions panel (Ctrl+Shift+X) or run:

```bash
code --install-extension bradlc.vscode-tailwindcss
code --install-extension dbaeumer.vscode-eslint
code --install-extension esbenp.prettier-vscode
```

---

Built with ♥ by Mainul Islam
