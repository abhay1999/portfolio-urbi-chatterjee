# Data Storage

This document describes where content data is stored, how to edit it, and how to migrate to a CMS.

## Where Data is Stored

| Data Type | File Location | Format |
|-----------|---------------|--------|
| Profile, contact, intro, teaching, research areas | `src/content/profile.ts` | TypeScript |
| Publications (journals, conferences) | `src/content/publications.ts` | TypeScript |
| News | `src/content/news.ts` | TypeScript |
| People (PhD scholars, lab info) | `src/content/people.ts` | TypeScript |
| Honors | `src/content/honors.ts` | TypeScript |
| Lab info | `src/content/lab.ts` | TypeScript |
| Images | `public/images/` | JPG, PNG, WebP, SVG |

## How to Edit Content

1. Open the relevant file under `src/content/`.
2. Edit the exported object/array.
3. Save the file. The dev server will hot-reload.

Example: To update the profile tagline, edit `src/content/profile.ts`:

```ts
tagline: "Your new tagline here",
```

## How Data is Fetched

Data is imported synchronously in `src/lib/data.ts`, which exports getter functions:

- `getProfile()` - returns profile data
- `getNews()` - returns news items
- `getPeople()` - returns PhD scholars and lab info
- `getPublications()` - returns journal and conference publications
- `getHonors()` - returns honors list
- `getLab()` - returns lab info

Pages and components call these functions (e.g. in `src/app/page.tsx`) and pass the data as props.

## Migrating to a Headless CMS

To move content to a CMS (Sanity, Contentful, Strapi, etc.):

1. Create content models in your CMS that match the TypeScript interfaces in `src/types/index.ts`.

2. Replace the synchronous imports in `src/lib/data.ts` with `fetch()` calls to your CMS API:
   ```ts
   export async function getProfile() {
     const res = await fetch(`${process.env.CMS_API}/profile`);
     return res.json();
   }
   ```

3. Use `async` in page components and await the data:
   ```tsx
   const profile = await getProfile();
   ```

4. Store images in the CMS and use the provided CDN URLs instead of `public/images/`.

5. Add CMS API URL and (if needed) API key to environment variables (e.g. `.env.local`).
