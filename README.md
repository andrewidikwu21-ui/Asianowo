# Asianowo — Wardrobe Styling & Closet Organising

Mobile-first marketing website for **Asianowo**, a Lagos, Nigeria wardrobe styling and closet curation business.  
Tagline: *"The Art of Personal Style."*

---

## 1. How to Update Slots and Prices (5-Line Guide)

All editable content lives in one single file: [`src/data/site.ts`](file:///c:/Users/HP%20840%20G3/OneDrive/Desktop/Asianowo/src/data/site.ts).

1. **Open** `src/data/site.ts` in your text editor.
2. **Update month and slots**: In `availability`, change `month: "November"` and `slotsLeft: "3"`.
3. **Update starting price**: In `pricing`, change `priceFrom: "₦500,000"`.
4. **Update travel fee note**: In `pricing`, update `travelFeeNote` with your current regional policy.
5. **Save and redeploy**: Commit and push to Git, or run `npm run build` to update the static build.

---

## 2. Deploying to Cloudflare Pages or Netlify

### Cloudflare Pages
1. Push your repository to GitHub or GitLab.
2. Go to the [Cloudflare Dashboard](https://dash.cloudflare.com/) > **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3. Select this repository.
4. Set build settings:
   - **Framework preset**: `Astro`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node.js version**: `20` or higher (e.g. `NODE_VERSION=20.18.0` in Environment Variables)
5. Tap **Save and Deploy**.

### Netlify
1. Connect your repository on [Netlify](https://app.netlify.com/).
2. Netlify will automatically detect Astro:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
3. Tap **Deploy Site**.

---

## 3. Going Live (Launch Gate Checklist)

Asianowo includes an automated **Launch Gate** to prevent incomplete or placeholder content from ever going live on the public domain.

1. **Deploy in Preview Mode first**:
   - Keep `LAUNCH: false` in `src/data/site.ts`.
   - The preview build will compile, output `<meta name="robots" content="noindex, nofollow">` to protect search indexation, and display a discrete `PREVIEW: not live` badge in the corner.
   - Review your preview deployment on an unlisted Cloudflare / Netlify URL (`*.pages.dev` or `*.netlify.app`).

2. **Replace All Placeholders in `src/data/site.ts`**:
   - Supply real, consented, face-free client project photos in place of placeholder SVGs.
   - Update `INCLUDED_*` bullets and `DURATION_*` lines for all 3 services.
   - Fill in real `MONTH` and `SLOTS_LEFT`.
   - Update `TRAVEL_FEE_NOTE`.
   - Remove any text containing `[PLACEHOLDER]`.

3. **Activate the Launch Gate**:
   - Open `src/data/site.ts` and set:
     ```ts
     LAUNCH: true,
     ```
4. **Run the Build**:
   - Run `npm run build`.
   - If any placeholder string or placeholder image is still referenced anywhere, the build will **deliberately fail** and print the exact file lines that need attention.
   - Once all placeholders are resolved, the build will succeed, generate an indexable `robots.txt` and `sitemap-index.xml`, and remove the preview badge.

5. **Connect the Public Domain**:
   - Once the build passes with `LAUNCH: true`, attach your custom domain (`asianowo.com`) in your Cloudflare Pages or Netlify dashboard.

---

## 4. Still Needed Before Going Live

The following items are placeholders in `src/data/site.ts` and must be provided before toggling `LAUNCH: true`:

- **PROJECT_PHOTOS**: 3 real, consented before/after pairs (must be strictly face-free, no street names, estate names, or house numbers).
- **INCLUDED_CLOSET_RESET**: Up to 3 confirmed bullets describing what is included in the Closet Reset.
- **DURATION_CLOSET_RESET**: Confirmed duration (e.g. "Usually 1 day").
- **INCLUDED_OUTFIT**: Up to 3 confirmed bullets for Outfit Building.
- **DURATION_OUTFIT**: Confirmed duration (e.g. "Usually 1 day").
- **INCLUDED_EDIT**: Up to 3 confirmed bullets for Keep, Remove, Refine.
- **DURATION_EDIT**: Confirmed duration (e.g. "Usually 1 day").
- **MONTH**: Current active booking month.
- **SLOTS_LEFT**: Number of remaining consultation slots.
- **TRAVEL_FEE_NOTE**: Detailed policy for locations outside Lagos.
- **LOGO_FILE**: Optional logo file if not using the default Italianno wordmark.
- **DOMAIN**: Production domain name (default: `asianowo.com`).
- **PORTRAIT**: Optional portrait image of the founder (hide slot if none provided).
- **TESTIMONIALS**: Real client quotes with written consent (optional; section automatically hides if list is empty).
- **CONTACT_EMAIL**: Optional email address for the footer.

---

## 5. Development & Verification Commands

```bash
# Install dependencies
npm install

# Start local dev server (http://localhost:4321)
npm run dev

# Build production bundle to dist/
npm run build

# Preview production build locally
npm run preview

# Audit bundle size & asset weights
node scripts/check-bundle-size.mjs
```

---

## 6. Architecture & Privacy Guarantees

- **Astro Static Generation**: Zero hydration overhead.
- **Strict Client Privacy**: Enforced policy that no photos display client faces, house numbers, or identifiable residential addresses.
- **Zero Cookies / Zero Trackers**: No popups, no consent banners needed.
- **Ultra-lightweight Vanilla JS**: Under 15 KB gzipped total HTML+CSS+JS payload, designed for outdoor legibility and fast loading on mobile networks.
