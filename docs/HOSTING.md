# Hosting

This document describes how to deploy the portfolio website to different hosting platforms.

## Prerequisites

- Git repository with the project
- Node.js 18+ and npm installed locally for builds

## Option 1: Vercel (Recommended for Next.js)

1. Push your code to GitHub, GitLab, or Bitbucket.
2. Go to [vercel.com](https://vercel.com) and sign in.
3. Click "Add New Project" and import your repository.
4. Vercel auto-detects Next.js. Use default settings.
5. Click "Deploy". The site will be live at `your-project.vercel.app`.
6. To use a custom domain (e.g. `urbic.iitk.ac.in`): Project Settings → Domains → Add.

**Build command:** `npm run build`  
**Output directory:** (auto)  
**Install command:** `npm install`

## Option 2: IIT Kanpur (Static Export)

For hosting on IIT Kanpur servers (e.g. `home.iitk.ac.in/~urbic`):

1. Configure static export in `next.config.ts`:
   ```ts
   const nextConfig: NextConfig = {
     output: "export",
   };
   ```
2. Build:
   ```bash
   npm run build
   ```
3. The static files are in `out/`. Upload the contents of `out/` to your web directory on the IITK server.

**Note:** `output: "export"` disables Server Components features and API routes. The current site is fully static, so this works.

## Option 3: GitHub Pages

1. Add `output: "export"` to `next.config.ts` (same as Option 2).
2. Add `basePath` and `assetPrefix` if using `username.github.io/repo-name`:
   ```ts
   basePath: "/repo-name",
   assetPrefix: "/repo-name/",
   ```
3. Build and push the `out/` folder to the `gh-pages` branch, or use GitHub Actions to automate.

## Option 4: Netlify

1. Push to Git and connect the repo at [netlify.com](https://netlify.com).
2. Build command: `npm run build`  
3. Publish directory: `.next` (for Node) or `out` (for static export)
4. Deploy.

## Environment Variables

The current site does not require environment variables. If you add a CMS or analytics later, set them in your hosting platform's dashboard (Vercel: Project Settings → Environment Variables).

## Build Commands Reference

```bash
npm install          # Install dependencies
npm run dev          # Development server (localhost:3000)
npm run build        # Production build
npm run start        # Run production build locally
```
