# Images

This document describes how to add and manage images for the portfolio website.

## Directory Structure

```
public/images/
├── profile/
│   ├── placeholder.svg     # Fallback when no profile photo
│   └── urbi-chatterjee.jpg # Add your profile photo here
├── lab/
│   ├── settlor-1.jpg       # Lab photos
│   └── lab-facility.jpg
└── news/
    └── 2025-royal-society.jpg  # Optional thumbnails for news items
```

## Adding Images

1. Copy your image file into the appropriate folder under `public/images/`.
2. For profile photo: name it `urbi-chatterjee.jpg` (or update the path in `src/content/profile.ts`).
3. For lab/news images: name files descriptively (e.g. `settlor-1.jpg`).

## Referencing Images in Code

- Images in `public/` are served from the root. Use the path `/images/profile/urbi-chatterjee.jpg`.
- In content files (e.g. `profile.ts`): set `profileImage: "/images/profile/urbi-chatterjee.jpg"`.
- In news items: add optional `image: "/images/news/2025-royal-society.jpg"` to the news entry.

## Profile Photo

To add your profile photo:

1. Save the image as `public/images/profile/urbi-chatterjee.jpg`.
2. Update `src/content/profile.ts`:
   ```ts
   profileImage: "/images/profile/urbi-chatterjee.jpg",
   ```
3. The placeholder (`placeholder.svg`) is used until you add the real photo. You can keep using it during development.

## Image Formats and Sizing

- Preferred: JPG for photos, PNG for graphics, WebP for optimized web delivery.
- Profile photo: recommended 400×400px or larger (square crop).
- Lab/news images: 800px width is sufficient for most layouts.

## Future CMS

If you migrate to a headless CMS, images will be uploaded through the CMS admin and stored on its CDN. Update the `profileImage` and `image` fields in your content to use the CMS-provided URLs.
