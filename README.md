# Jain Aradhana

*Prayer · Learn · Understand*

A community-oriented, mobile-first website for following **Jinendra Archana** and other Jain prayers — showing the original Hindi/Devanagari (or Sanskrit/Prakrit) text next to an easy English pronunciation and a plain-English meaning, line by line. Built especially for children and young people who are more comfortable in English than in Hindi, so they can participate in mandir prayers alongside their families.

No login, no backend, no build step required — it's a static site that runs entirely in the browser and can be installed to a phone's home screen.

---

## 1. The most important thing before you launch this

The Jinendra Archana section of this site is built from a real source: a 143-piece prayer book called *Jinendra Archana* (Vimal Jain Granthmala Prakashan, Delhi, and Pandit Todarmal Smarak Trust, Jaipur — 33rd revised edition, 1 January 2007). Its Hindi/Sanskrit text is set in a legacy, non-Unicode font, so it could not be machine-extracted — every verse on this site was read **visually, page by page**, and cross-checked a second time against a zoomed crop of the same page before being typed in.

**Five pieces are fully transcribed and checked, with Hindi/Sanskrit text, pronunciation and meaning:**
- **Navkar Mantra** — the traditional Namokar Mahamantra (also confirmed against page 48 of the source PDF)
- **Darshan Path** (pages 54–55) — a 13-verse classical Sanskrit hymn recited before darshan
- **Jinendra Vandana** (pages 49–53, by Dr. Hukamchand Bharill) — a 24-verse hymn, one verse per Tirthankara
- **Dev Stuti** (page 55, by Pandit Budhajan) — an 18th-century devotional hymn
- **Darshan Stuti** (page 53, by Pandit Daulatram) — a short hymn sung on beholding the Jina's image

**The other 139 pieces in the book** — including the well-known Deva-Shastra-Guru Pujan, Panch Parmeshthi Pujan, Bhaktamar Stotra, and well over a hundred bhakti songs — are **not yet transcribed**. Rather than skip them silently, every one of them is listed, in the book's own order, with its title, author and page number, in `data/archana-index.js` and on the `/archana` page — clearly marked as not yet available to read, with the exact page to go back to when someone is ready to transcribe it.

**Two prayers outside the PDF remain empty templates on purpose:**
- **Uvasaggaharam Stotra** and **Jinendra Aarti** — not part of the supplied PDF; add your own checked source before filling these in.

**Do not fill in any of the un-transcribed content from memory or from an AI.** Replace it only with text checked line-by-line against the physical/PDF book, a pathshala teacher, or your mandir's trust — see [§7](#7-adding-or-completing-a-prayer). English meaning lines for the PDF-sourced prayers are this project's own translation (the source book is Hindi/Sanskrit only) — treat them as a study aid and have them checked before treating them as authoritative liturgical translation.

---

## 2. Architecture

Plain HTML/CSS/JavaScript, no framework, no build tools, no external runtime dependencies (only two font families loaded from Google Fonts).

```
/
├── index.html            App shell: header, nav, #app mount point, footer
├── manifest.json         PWA manifest (installable to home screen)
├── service-worker.js     Offline caching of the app shell
│
├── css/
│   ├── style.css         Design tokens, components, mobile-first layout
│   └── responsive.css    Breakpoints (tablet nav switch, grid columns)
│
├── js/
│   ├── app.js             Hash-based router + every page renderer + nav wiring
│   ├── prayer-reader.js   The line-by-line prayer reader (display modes,
│   │                      pronunciation toggle, reading mode, learning mode,
│   │                      intro/outro couplets, "about this prayer" panel)
│   ├── search.js          Client-side search across prayers/learning/glossary
│   ├── storage.js         localStorage wrapper with in-memory fallback
│   ├── theme.js           Applies appearance/text-size/motion settings
│   └── utils.js           Small shared helpers (HTML escaping, debounce)
│
├── data/
│   ├── prayers.js         Fully-transcribed prayer content + verified/source metadata
│   ├── archana-index.js   Full 143-item table of contents of the source PDF,
│   │                      linking to prayers.js where a piece is transcribed
│   ├── tirthankaras.js    The 24 Tirthankaras (names, numbering)
│   ├── values.js          Jain values, Three Jewels, Learn Jainism topics
│   ├── festivals.js       Paryushan, Das Lakshana, Mahavir Jayanti, Samvatsari
│   └── glossary.js        Jain terms glossary
│
└── assets/icons/          App icons (generated abstract lotus mark), favicon
```

**Why this split:** religious content lives entirely in `data/`, completely separate from UI code. This means new prayers can be added by editing `data/prayers.js` and, if they come from the source book, linking them from `data/archana-index.js` — no HTML/CSS/JS knowledge required beyond following the existing object shape.

The app is a single-page app using the URL hash for routing (`#/prayers`, `#/prayer/navkar-mantra`, `#/archana`, etc.), so it works from a plain double-clicked `index.html` file with no server needed, and also deploys cleanly to GitHub Pages.

---

## 3. Features implemented

- **Jinendra Archana hub** (`/archana`): the central feature — a short introduction to the source book, quick links into the five ready-to-read pieces, and the full 143-item contents of the book grouped by section (Stavan Khand, Pujan Khand, Adhyatmik Path & Bhavna Khand, and the three parts of Bhakti Khand), with transcribed items linked and the rest shown with their page number
- **Prayer reader**: Hindi / Pronunciation / Both (default) / +Meaning display modes, line-by-line verse cards (never one giant paragraph), simple vs. detailed pronunciation toggle, opening/closing couplets (doha/soratha) rendered distinctly from the numbered verses, per-prayer favourite button
- **"About this prayer" panel**: source (with PDF page number where relevant), tradition, tucked behind a toggle so it doesn't clutter the reading view
- **Mandir Reading Mode**: hides navigation, enlarges text, quiets the UI, designed to be read one-handed on a phone during archana
- **Learning Mode**: a short guided walk-through (read Hindi → read pronunciation → try without → complete) for the opening line of a prayer
- **Prayer library**: search + category filters (Mantra / Stavan / Aarti / Other), with a link through to the full Archana contents
- **Favourites** and **Recently used**, both via `localStorage`, no account needed
- **Learn Jainism**: 12 short topic explainers (Ahimsa, Tirthankaras, Karma, Moksha, Navkar Mantra, etc.)
- **Jain Values** cards (Ahimsa, Anekantavada, Aparigraha, Satya, Asteya, Brahmacharya) + the Three Jewels
- **Tirthankaras** grid (all 24, standard names/numbering; symbol shown only where confidently known, `—` otherwise rather than guessed)
- **Jain Festivals**: Paryushan, Das Lakshana, Mahavir Jayanti, Samvatsari, each labelled by which tradition it's most associated with
- **Glossary** with simple + detailed definitions
- **Global search** across prayers, learning topics, values, Tirthankaras, festivals and glossary
- **Settings** (all fully functional, saved to `localStorage`): appearance (light/dark/system), text size (4 steps), prayer display mode (defaults to "Both"), pronunciation style, reading-mode default, reduce-motion, and a working "Reset preferences"
- **Audio hooks**: every prayer has an `audio` field; the reader shows a real player only if a source is set, otherwise an honest "Audio coming soon" — no fake players
- **Accessibility**: semantic headings, skip link, visible focus states, buttons (not clickable `div`s), ARIA labels/roles on toggles and the segmented controls, large tap targets, safe-area padding for notches
- **Responsive design**: bottom nav on mobile, top nav from tablet width up, fluid type scale, safe-area insets for iOS
- **PWA**: manifest + service worker (offline app-shell caching) + a real "Add to Home Screen" button that only appears when the browser actually fires the install prompt (no fake install button)
- **Dark mode**: full token-based theme, including Hindi/Sanskrit text kept legible in dark mode
- **Error handling**: missing meaning shows "Meaning to be verified." rather than breaking; `localStorage` unavailable falls back to in-memory state instead of crashing

---

## 4. Running it locally

No build step. Because the site uses ES module `<script type="module">` imports, open it through a local server rather than a `file://` URL (browsers block module imports over `file://`).

**Option A — Python (already installed on most machines):**
```bash
cd jain-aradhana
python3 -m http.server 8080
```
Then open `http://localhost:8080`.

**Option B — Node:**
```bash
npx serve .
```

---

## 5. Deploying to GitHub Pages

1. Create a new GitHub repository and push this folder's contents to it (the repo root should contain `index.html`, not a subfolder).
2. In the repo: **Settings → Pages → Source**, choose the `main` branch and `/ (root)`, then save.
3. GitHub will publish it at `https://<your-username>.github.io/<repo-name>/`.
4. Because the site uses relative paths throughout (`css/style.css`, not `/css/style.css`), it works correctly whether it's served from a domain root or a GitHub Pages subpath — no config changes needed.

---

## 6. Content still needed before this goes live at a mandir

139 of the 143 items listed on the `/archana` page still need transcription — see `data/archana-index.js` for the complete list with page numbers. Particularly high-value ones to do next, since they're the most commonly used in daily worship:

- **Deva-Shastra-Guru Pujan** (four versions in the book, pages 83, 87, 91, 95) — the everyday puja
- **Panch Parmeshthi Pujan** (page 101)
- **Bhaktamar Stotra** (pages 273 and 280 for the Hindi version)
- **Uvasaggaharam Stotra** and **Jinendra Aarti** — not in this PDF at all; source these separately

Also worth adding once available:
- Verified audio recordings (`audio: { src: "assets/audio/....mp3" }`)
- Symbols (lanchhana) for the Tirthankaras currently showing `—`
- A Hindi-language UI toggle (the code is structured so this can be added without restructuring — see `js/theme.js` / a future `js/i18n.js`)

---

## 7. Adding or completing a prayer

**If it's one of the 139 un-transcribed items from the source book:** find it in `data/archana-index.js` (title, author and page number are already there), open the PDF to that page, and transcribe carefully — re-reading each line at least twice, the way this project's first five pieces were done. Then add it to `data/prayers.js` using the shape below, and set that item's `prayerId` in `data/archana-index.js` to match.

**For any prayer**, open `data/prayers.js` and copy this shape:

```js
{
  id: "unique-id-no-spaces",
  title: "Prayer name",
  subtitle: "Short subtitle",
  category: "mantra", // "mantra" | "stavan" | "aarti" | "other"
  language: "Hindi",
  readingTimeMin: 2,
  verified: true,       // only set true once a knowledgeable source has checked it
  source: {
    text: "Where this text came from, e.g. 'Transcribed from the Jinendra Archana PDF, page 101.'",
    pdf: true,           // true if it came from the source PDF, false otherwise
    sourcePage: 101,      // the PDF's own printed page number
  },
  sect: "Common to all traditions", // or "Digambar" / "Shvetambar" / etc.
  audio: null,           // or { src: "assets/audio/your-file.mp3" }
  lines: [
    {
      hindi: "देवनागरी पाठ",
      transliterationSimple: "Easy phonetic spelling",
      transliterationDetailed: "Diacritic-marked transliteration",
      meaning: "Plain English meaning of this line",
    },
    // one object per line — keeps everything aligned for the reader.
    // Multi-line verses can use \n inside a single hindi/transliteration/
    // meaning string — the reader preserves line breaks.
  ],
  about: "One or two sentences of context shown above the reader.",
}
```

A prayer with an opening or closing couplet (like Jinendra Vandana's doha and soratha) can add `intro` and/or `outro` fields alongside `lines`, using the same `{ hindi, transliterationSimple, transliterationDetailed, meaning, label }` shape — the reader renders these visually set apart from the numbered verses.

It will automatically appear in the Prayer Library and search. To feature it on the Archana hub too, add it to the `featured` list near the top of `renderArchanaHub` in `js/app.js`.

---

## 8. Important warning on religious accuracy

This project intentionally followed a "do not invent" rule throughout: where reliable source text wasn't available, the build left a structured, clearly-labelled empty template or index entry rather than generating plausible-sounding Hindi/Sanskrit/Prakrit verses. **Please keep that discipline going forward.** Before publishing any new or edited prayer text, have it checked by someone with genuine knowledge of the tradition and wording used at your mandir — ideally the same person(s) who would review a printed prayer book. The English meanings on this site are this project's own translation, not part of the source PDF (which has no English) — have those checked too, especially for the more poetic, older-Hindi pieces (Jinendra Vandana, Dev Stuti, Darshan Stuti) where a single word can carry a lot of theological weight. Where different Jain communities use different wording for the same occasion (archana songs and aartis especially — note the book itself includes four different versions of the Deva-Shastra-Guru Pujan by four different authors), prefer showing your own mandir's preferred version and labelling it as such, rather than presenting one as universal.
