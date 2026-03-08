# Dr. Urbi Chatterjee - Professional Portfolio

Portfolio website for Dr. Urbi Chatterjee, Assistant Professor, Department of Computer Science and Engineering, IIT Kanpur.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run start` | Run production build locally |
| `npm run lint` | Run ESLint |

## Project Structure

```
portfolio-web/
├── public/images/     # Images (profile, lab, news)
├── src/
│   ├── app/           # Next.js App Router
│   ├── components/    # React components
│   ├── content/       # Content data (editable)
│   ├── lib/           # Data fetching helpers
│   └── types/         # TypeScript types
└── docs/              # Documentation
```

## Documentation

- [Data Storage](docs/DATA_STORAGE.md) - Where content lives, how to edit, CMS migration
- [Images](docs/IMAGES.md) - Adding and managing images
- [Hosting](docs/HOSTING.md) - Deploy to Vercel, IITK, GitHub Pages, Netlify

## Adding Your Profile Photo

1. Place `urbi-chatterjee.jpg` in `public/images/profile/`
2. Update `profileImage` in `src/content/profile.ts` to `/images/profile/urbi-chatterjee.jpg`

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
