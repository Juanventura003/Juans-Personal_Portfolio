# Juan Ventura — Portfolio

Personal portfolio built with React, TypeScript, and Vite.

## Run it locally (VS Code)

1. Install [Node.js](https://nodejs.org) 20.19 or newer.
2. Open this folder in VS Code (**File → Open Folder…**).
3. Open the terminal (**Terminal → New Terminal**) and run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the URL it prints (usually http://localhost:5173). Edits reload instantly.

## Edit the content

Everything you'd want to change (bio, projects, experience, skills, links) is in **`src/data.ts`**.
Styles are in `src/index.css`; each section is a component in `src/components/`.

To make the **resume.pdf** link work, drop your resume into `public/` and name it `resume.pdf`.

## Deploy to Vercel

**Option A: GitHub + Vercel dashboard (recommended, auto-deploys on every push)**

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/Juanventura003/portfolio.git   # create this empty repo on GitHub first
git push -u origin main
```

Then go to [vercel.com/new](https://vercel.com/new), import the repo, and click **Deploy**.
Vercel detects Vite automatically (build command `npm run build`, output folder `dist`).

**Option B: Vercel CLI**

```bash
npm i -g vercel
vercel          # first deploy, follow the prompts
vercel --prod   # promote to production
```

## Scripts

| Command           | What it does                         |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the dev server                 |
| `npm run build`   | Type-check and build to `dist/`      |
| `npm run preview` | Serve the production build locally   |
