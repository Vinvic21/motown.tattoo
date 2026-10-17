# Motown Tattoo Company website

Responsive React + Vite site (React Router, plain CSS, no UI library).

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview
```

## Pages
- `/` Home: neon-sign hero, featured work, how booking works, reviews
- `/work` Gallery with filters and lightbox ("Ask for something similar" opens WhatsApp with the piece named)
- `/visit` Address, live open/closed status (Detroit time), hours, map, socials
- `/book` Message builder: fills in a WhatsApp message live, then "Send on WhatsApp"

## WhatsApp booking
- Floating WhatsApp button, bottom-right on every page, with a welcome bubble after ~3 seconds (dismissed for the session).
- Every "Book on WhatsApp" button opens `wa.me/13156960147` with a ready-made message.
- Edit the number, links, hours, reviews and default message in `src/data.js`.

## Notes
- The photos in `public/images` are the ones you sent. `storefront.png` and `lounge.png` are Google Maps screenshots (the maps overlay is cropped by the layout); swap in originals from the shop for best quality.
- Hosting: `vercel.json` and `public/_redirects` handle SPA routing on Vercel and Netlify.
- Fonts (Pirata One, Barlow) load from Google Fonts.
