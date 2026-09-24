# Jain Aradhana

*Prayer · Learn · Understand*

A community-oriented, mobile-first website for following **Jinendra Archana** and other Jain prayers — showing the original Hindi/Devanagari text next to an easy English pronunciation and a plain-English meaning, line by line. Built especially for children and young people who are more comfortable in English than in Hindi, so they can participate in mandir prayers alongside their families.

No login, no backend, no build step required — it's a static site that runs entirely in the browser and can be installed to a phone's home screen.

---

## 1. The most important thing before you launch this

**Almost none of the prayer text in this build has been verified against a real source yet — on purpose.**

Only the **Navkar Mantra** (`data/prayers.js`) has full Hindi / pronunciation / meaning text, sourced from the traditional Namokar Mahamantra that is common to all Jain traditions.

The following entries are deliberately left as **empty templates** — the page, the reader UI, the display-mode switcher, everything works, but the actual verse content is blank and the site clearly shows a "Content needed" notice instead of pretending there's text:

- **Jinendra Archana** (the main Ashtaprakari Puja song) — wording varies by mandir and region
- **Uvasaggaharam Stotra**
- **Jinendra Aarti**

**Do not fill these in from memory or from an AI.** Replace them only with text checked line-by-line against a printed prayer book, a pathshala teacher, or your mandir's trust — see [Adding a new prayer](#7-adding-or-completing-a-prayer) below. This matters more than having lots of content: 5 completely accurate prayers are worth more than 30 questionable ones.

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
│   │                      pronunciation toggle, reading mode, learning mode)
│   ├── search.js          Client-side search across prayers/learning/glossary
│   ├── storage.js         localStorage wrapper with in-memory fallback
│   ├── theme.js           Applies appearance/text-size/motion settings
│   └── utils.js           Small shared helpers (HTML escaping, debounce)
│
├── data/
│   ├── prayers.js         Prayer content + verified/source metadata
│   ├── tirthankaras.js    The 24 Tirthankaras (names, numbering)
│   ├── values.js          Jain values, Three Jewels, Learn Jainism topics
│   ├── festivals.js       Paryushan, Das Lakshana, Mahavir Jayanti, Samvatsari
│   └── glossary.js        Jain terms glossary
│
└── assets/icons/          App icons (generated abstract lotus mark), favicon
```

**Why this split:** religious content lives entirely in `data/`, completely separate from UI code. This means new prayers, terms, or festivals can be added by editing a single data file — no HTML/CSS/JS knowledge required beyond following the existing object shape.

The app is a single-page app using the URL hash for routing (`#/prayers`, `#/prayer/navkar-mantra`, etc.), so it works from a plain double-clicked `index.html` file with no server needed, and also deploys cleanly to GitHub Pages.

---

## 3. Features implemented

- **Jinendra Archana / prayer reader**: Hindi / Pronunciation / Both / +Meaning display modes, line-by-line verse cards (never one giant paragraph), simple vs. detailed pronunciation toggle, per-prayer favourite button
- **Mandir Reading Mode**: hides navigation, enlarges text, quiets the UI, designed to be read one-handed on a phone during archana
- **Learning Mode**: a short guided walk-through (read Hindi → read pronunciation → try without → complete) for the opening line of a prayer
- **Prayer library**: search + category filters (Archana / Mantra / Stavan / Aarti / Other)
- **Favourites** and **Recently used**, both via `localStorage`, no account needed
- **Learn Jainism**: 12 short topic explainers (Ahimsa, Tirthankaras, Karma, Moksha, Navkar Mantra, etc.)
- **Jain Values** cards (Ahimsa, Anekantavada, Aparigraha, Satya, Asteya, Brahmacharya) + the Three Jewels
- **Tirthankaras** grid (all 24, standard names/numbering; symbol shown only where confidently known, `—` otherwise rather than guessed)
- **Jain Festivals**: Paryushan, Das Lakshana, Mahavir Jayanti, Samvatsari, each labelled by which tradition it's most associated with
- **Glossary** with simple + detailed definitions
- **Global search** across prayers, learning topics, values, Tirthankaras, festivals and glossary
- **Settings** (all fully functional, saved to `localStorage`): appearance (light/dark/system), text size (4 steps), prayer display mode, pronunciation style, reading-mode default, reduce-motion, and a working "Reset preferences"
- **Audio hooks**: every prayer has an `audio` field; the reader shows a real player only if a source is set, otherwise an honest "Audio coming soon" — no fake players
- **Accessibility**: semantic headings, skip link, visible focus states, buttons (not clickable `div`s), ARIA labels/roles on toggles and the segmented controls, large tap targets, safe-area padding for notches
- **Responsive design**: bottom nav on mobile, top nav from tablet width up, fluid type scale, safe-area insets for iOS
- **PWA**: manifest + service worker (offline app-shell caching) + a real "Add to Home Screen" button that only appears when the browser actually fires the install prompt (no fake install button)
- **Dark mode**: full token-based theme, including Hindi text kept legible in dark mode
- **Error handling**: missing meaning/transliteration shows "Meaning not yet available." rather than breaking; `localStorage` unavailable falls back to in-memory state instead of crashing

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

Marked `verified: false` in `data/prayers.js`:

- Jinendra Archana (Ashtaprakari Puja song) — Hindi text, transliteration, meaning
- Uvasaggaharam Stotra — Hindi text, transliteration, meaning
- Jinendra Aarti — Hindi text, transliteration, meaning (this varies a lot by mandir; use your own mandir's version)

Also worth adding once available:
- Verified audio recordings (`audio: { src: "assets/audio/....mp3" }`)
- Symbols (lanchhana) for the Tirthankaras currently showing `—`
- A Hindi-language UI toggle (the code is structured so this can be added without restructuring — see `js/theme.js` / a future `js/i18n.js`)

---

## 7. Adding or completing a prayer

Open `data/prayers.js` and either edit an existing placeholder or copy this shape:

```js
{
  id: "unique-id-no-spaces",
  title: "Prayer name",
  subtitle: "Short subtitle",
  category: "archana", // "archana" | "mantra" | "stavan" | "aarti" | "other"
  language: "Hindi",
  readingTimeMin: 2,
  verified: true,       // only set true once a knowledgeable source has checked it
  source: "Where this text came from",
  sect: "Common to all traditions" or "Digambar" / "Shvetambar" / etc.,
  audio: null,           // or { src: "assets/audio/your-file.mp3" }
  lines: [
    {
      hindi: "देवनागरी पाठ",
      transliterationSimple: "Easy phonetic spelling",
      transliterationDetailed: "Diacritic-marked transliteration",
      meaning: "Plain English meaning of this line",
    },
    // one object per line — keeps everything aligned for the reader
  ],
  about: "One or two sentences of context shown above the reader.",
}
```

It will automatically appear in the Prayer Library, search, and (if you set its `id` in `js/app.js`'s `/archana` route) the main Archana shortcut. No other file needs to change.

---

## 8. Important warning on religious accuracy

This project intentionally followed a "do not invent" rule throughout: where reliable source text wasn't available, the build left a structured, clearly-labelled empty template rather than generating plausible-sounding Hindi/Prakrit verses. **Please keep that discipline going forward.** Before publishing any new or edited prayer text, have it checked by someone with genuine knowledge of the tradition and wording used at your mandir — ideally the same person(s) who would review a printed prayer book. Where different Jain communities use different wording for the same occasion (archana songs and aartis especially), prefer showing your own mandir's version and labelling it as such, rather than presenting one version as universal.
