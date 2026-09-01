# Move site images from CDN into the project

All 62 images currently live as CDN pointer files (`.asset.json`) in `src/assets/site/`. They will be replaced with the real image files stored in the repo, so the site no longer depends on CDN-hosted assets.

## What changes

- Download all 62 images from their current CDN URLs back into `src/assets/site/` with their original filenames (logo, client logos, team photos, portfolio shots, technology icons, backgrounds).
- Delete the 62 `.asset.json` pointer files once the real files are in place.
- Rewrite `src/lib/site-images.ts` to import the image files directly instead of the pointer JSON.
- Everything visual stays exactly the same — same images, same layout, same branding.

## Technical detail

- `src/lib/site-images.ts` is the only file that references the pointers, so it is the single place imports change:
  - before: `import logo from "@/assets/site/mapsoft-logo.png.asset.json"` then `logo.url`
  - after: `import logo from "@/assets/site/mapsoft-logo.png"` then `logo`
- The exported shapes (`logoUrl`, `img`, `techLogos`, `portfolioImages`, `teamPhotos`, `testimonialPhotos`, `clientLogos`) stay identical, so no component needs editing.
- Vite fingerprints and bundles the images at build time.
- `resolveJsonModule` in `tsconfig.json` stays enabled (harmless).
- Verify with a production build and a quick preview check that every image renders.

## Trade-offs

- Repo grows by roughly 2-3 MB of binary files.
- Images are served from your own build output rather than the global CDN.
