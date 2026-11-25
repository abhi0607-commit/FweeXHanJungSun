# fwee × 한정선 — Find Your Sweet Spot

Interactive version of the fwee × Han Jung Sun mock campaign portfolio (React + Vite, no backend).

## Preview locally

```bash
npm install
npm run dev
```

Project Link: https://fweexhanjungsun.vercel.app/

To check the production build:

```bash
npm run build
npm run preview
```

## Share it online

`npm run build` creates a `dist` folder (about 15 MB) that works on any static host:

- **Netlify Drop (easiest):** sign in at https://app.netlify.com/drop and drag the `dist` folder onto the page. You get a public link.
- **Vercel or GitHub Pages** also work; the site uses relative paths, so it runs from any sub-folder.

Rebuild and re-upload `dist` after every change.

## English / Korean

The site is bilingual. The EN | KR switch in the header changes the language instantly, remembers the choice
(localStorage key `fwee-hjs-lang`) and defaults to English for first-time visitors.

- All text lives in `src/locales/en.json` and `src/locales/ko.json`, under the same keys. Edit copy there, not in the components.
- `src/i18n.jsx` holds the language context, the `t('key')` lookup and the switcher.
- Shade names (Strawberry Reveal, Peach Yogurt, Hongsi Blush, Fig Velvet), the hero wordmark and the
  "Find Your Sweet Spot" tagline stay in English in both languages on purpose.
- Text baked into images (moodboard, collection, charms, pop-up storefront, brand table) is not translated.

## Images

The original images stay untouched in this folder. `npm run images` regenerates the web-sized copies and the
cropped shades/charms in `public/images` from them.

Independent portfolio concept. Not affiliated with or endorsed by fwee or Han Jung Sun. Includes AI-generated concept visuals.
