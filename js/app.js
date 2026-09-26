import { prayers, getPrayerById } from "../data/prayers.js";
import { archanaIndex, archanaSourceInfo, totalArchanaItems, transcribedArchanaItems } from "../data/archana-index.js";
import { tirthankaras, tirthankaraNote } from "../data/tirthankaras.js";
import { values, threeJewels, learnTopics } from "../data/values.js";
import { glossary } from "../data/glossary.js";
import { festivals } from "../data/festivals.js";
import { escapeHtml, debounce } from "./utils.js";
import { runSearch } from "./search.js";
import { renderPrayerReader, CATEGORY_LABELS } from "./prayer-reader.js";
import { applyTheme, watchSystemTheme } from "./theme.js";
import {
  getSettings,
  saveSettings,
  getFavourites,
  toggleFavourite,
  getRecentlyUsed,
  DEFAULT_SETTINGS,
} from "./storage.js";

const appEl = document.getElementById("app");
const navLinks = document.querySelectorAll("[data-nav-link]");

/* ------------------------------------------------------------------ */
/* Router                                                              */
/* ------------------------------------------------------------------ */

const routes = {
  "/": renderHome,
  "/archana": renderArchanaHub,
  "/prayers": renderPrayerLibrary,
  "/prayer": (id) => renderPrayer(id),
  "/learn": renderLearn,
  "/learn-topic": (id) => renderLearnTopic(id),
  "/values": renderValues,
  "/tirthankaras": renderTirthankaras,
  "/festivals": renderFestivals,
  "/glossary": renderGlossary,
  "/favourites": renderFavourites,
  "/settings": renderSettings,
  "/about": renderAbout,
  "/search": renderSearchPage,
};

function parseHash() {
  const raw = window.location.hash.replace(/^#/, "") || "/";
  const [path, param] = raw.split("/").filter(Boolean).reduce(
    (acc, part, i, arr) => {
      if (i === 0) acc[0] = "/" + part;
      else acc[1] = decodeURIComponent(arr.slice(1).join("/"));
      return acc;
    },
    ["/", null]
  );
  return { path: path || "/", param };
}

function navigate(hash) {
  window.location.hash = hash;
}

function router() {
  const { path, param } = parseHash();
  const handler = routes[path] || renderHome;
  window.scrollTo({ top: 0, behavior: "instant" in document.documentElement.style ? "instant" : "auto" });
  handler(param);
  updateActiveNav(path);
}

function updateActiveNav(path) {
  navLinks.forEach((link) => {
    const target = link.getAttribute("href").replace(/^#/, "");
    const isHome = target === "/" && path === "/";
    const isMatch = isHome || (target !== "/" && path.startsWith(target));
    link.classList.toggle("is-active", isMatch);
    link.setAttribute("aria-current", isMatch ? "page" : "false");
  });
}

window.addEventListener("hashchange", router);

/* ------------------------------------------------------------------ */
/* Shared page chrome                                                  */
/* ------------------------------------------------------------------ */

function pageHeader(title, subtitle) {
  return `<header class="page-header"><h1>${escapeHtml(title)}</h1>${
    subtitle ? `<p>${escapeHtml(subtitle)}</p>` : ""
  }</header>`;
}

/* ------------------------------------------------------------------ */
/* Home                                                                 */
/* ------------------------------------------------------------------ */

function renderHome() {
  const recents = getRecentlyUsed()
    .map((id) => getPrayerById(id))
    .filter(Boolean);
  const favs = getFavourites()
    .map((id) => getPrayerById(id))
    .filter(Boolean);
  const featured = getPrayerById("navkar-mantra");

  appEl.innerHTML = `
    <section class="hero">
      <p class="hero-eyebrow">Jain Aradhana</p>
      <h1>Connect with Jain Dharma</h1>
      <p class="hero-sub">Read. Listen. Understand. Participate.</p>
      <div class="hero-actions">
        <a class="btn btn--primary" href="#/archana">Start Jinendra Archana</a>
        <a class="btn btn--ghost" href="#/prayers">Explore prayers</a>
        <a class="btn btn--ghost" href="#/learn">Learn Jainism</a>
      </div>
    </section>

    <section class="card-grid">
      <a class="feature-card" href="#/archana">
        <h2>Jinendra Archana</h2>
        <p>A 143-piece prayer book, with Hindi text and easy English pronunciation alongside it.</p>
      </a>
      <a class="feature-card" href="#/prayer/${featured.id}">
        <h2>Today's prayer</h2>
        <p>${escapeHtml(featured.title)} — ${escapeHtml(featured.subtitle)}</p>
      </a>
      <a class="feature-card" href="#/learn">
        <h2>Learn Jainism</h2>
        <p>Understand the principles behind the prayers.</p>
      </a>
    </section>

    ${
      recents.length
        ? `<section class="section-block">
             <h2 class="section-title">Continue where you left off</h2>
             <div class="prayer-row">${recents
               .slice(0, 4)
               .map((p) => prayerCard(p))
               .join("")}</div>
           </section>`
        : ""
    }

    ${
      favs.length
        ? `<section class="section-block">
             <h2 class="section-title">Your favourites</h2>
             <div class="prayer-row">${favs
               .slice(0, 4)
               .map((p) => prayerCard(p))
               .join("")}</div>
           </section>`
        : ""
    }

    <section class="section-block">
      <h2 class="section-title">Jain values</h2>
      <div class="value-row">
        ${values
          .slice(0, 3)
          .map(
            (v) => `<a class="value-chip-card" href="#/values">
              <h3>${escapeHtml(v.name)}</h3>
              <p>${escapeHtml(v.tagline)}</p>
            </a>`
          )
          .join("")}
      </div>
    </section>
  `;
}

function prayerCard(p) {
  const isFav = getFavourites().includes(p.id);
  return `
    <a class="prayer-card" href="#/prayer/${p.id}">
      <div class="prayer-card-top">
        <span class="badge">${CATEGORY_LABELS[p.category] || p.category}</span>
        ${isFav ? '<span class="fav-dot" aria-label="Favourited">♥</span>' : ""}
      </div>
      <h3>${escapeHtml(p.title)}</h3>
      <p>${escapeHtml(p.subtitle || "")}</p>
      <p class="prayer-card-meta">${p.language} · ${p.readingTimeMin} min${p.verified ? "" : " · needs verified text"}</p>
    </a>`;
}

/* ------------------------------------------------------------------ */
/* Jinendra Archana hub — the central feature                          */
/* ------------------------------------------------------------------ */

function renderArchanaHub() {
  const featured = ["darshan-path", "jinendra-vandana", "dev-stuti-budhajan", "darshan-stuti-daulatram", "navkar-mantra"]
    .map((id) => getPrayerById(id))
    .filter(Boolean);
  const done = transcribedArchanaItems();
  const total = totalArchanaItems();

  appEl.innerHTML = `
    ${pageHeader("Jinendra Archana", "A digital reading of the Jinendra Archana prayer book.")}

    <div class="notice notice--info">
      This section is built from a 143-piece prayer book, <em>${escapeHtml(archanaSourceInfo.title)}</em>
      (${escapeHtml(archanaSourceInfo.publisher)}, ${escapeHtml(archanaSourceInfo.edition)}).
      ${done} of ${total} pieces have been fully transcribed and checked so far — start with one of these,
      or browse the full contents below to see what's still on the way.
    </div>

    <div class="prayer-grid">
      ${featured.map((p) => prayerCard(p)).join("")}
    </div>

    <section class="section-block">
      <h2 class="section-title">Full contents of the book</h2>
      <p class="muted">Every item below is exactly as printed in the source book's table of contents. Items in colour are ready to read; the rest show their page number in the book so they can be checked and added later.</p>
      <div class="archana-toc">
        ${archanaIndex
          .map(
            (section) => `
          <details class="archana-toc-section">
            <summary>${escapeHtml(sectionLabel(section.section))} <span class="muted">(${section.items.length})</span></summary>
            <ol class="archana-toc-list">
              ${section.items
                .map(
                  (item) => `
                <li class="${item.prayerId ? "is-ready" : ""}">
                  ${
                    item.prayerId
                      ? `<a href="#/prayer/${item.prayerId}">${escapeHtml(item.title)}</a>`
                      : `<span>${escapeHtml(item.title)}</span>`
                  }
                  <span class="archana-toc-meta">${item.author && item.author !== "—" ? escapeHtml(item.author) + " · " : ""}pg ${item.sourcePage}</span>
                </li>`
                )
                .join("")}
            </ol>
          </details>`
          )
          .join("")}
      </div>
    </section>
  `;
}

function sectionLabel(key) {
  const labels = {
    "Stavan Khand": "Stavan Khand — short hymns",
    "Pujan Khand": "Pujan Khand — ritual pujas",
    "Adhyatmik Path evam Bhavna Khand": "Adhyatmik Path & Bhavna Khand — reflections",
    "Bhakti Khand — Dev Bhakti": "Bhakti Khand — Dev Bhakti",
    "Bhakti Khand — Shastra Bhakti": "Bhakti Khand — Shastra Bhakti",
    "Bhakti Khand — Guru Bhakti": "Bhakti Khand — Guru Bhakti",
    "Bhakti Khand — Vividh (Miscellaneous)": "Bhakti Khand — Vividh (miscellaneous)",
  };
  return labels[key] || key;
}

/* ------------------------------------------------------------------ */
/* Prayer library + reader                                             */
/* ------------------------------------------------------------------ */

function renderPrayerLibrary() {
  const categories = ["all", "mantra", "stavan", "aarti", "other"];
  let activeCategory = "all";
  let query = "";

  function list() {
    return prayers.filter((p) => {
      const matchesCategory = activeCategory === "all" || p.category === activeCategory;
      const matchesQuery = (p.title + " " + (p.subtitle || "")).toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }

  function paint() {
    const results = list();
    appEl.innerHTML = `
      ${pageHeader("Prayers", "Search the full prayer library.")}
      <p class="muted">Looking for the full Jinendra Archana prayer book? <a href="#/archana">Browse its full contents here</a>.</p>
      <div class="library-controls">
        <input type="search" id="prayer-search" placeholder="Search prayers…" aria-label="Search prayers" value="${escapeHtml(
          query
        )}" />
        <div class="filter-row">
          ${categories
            .map(
              (c) =>
                `<button class="filter-chip ${c === activeCategory ? "is-active" : ""}" data-cat="${c}">${
                  c === "all" ? "All" : CATEGORY_LABELS[c] || c
                }</button>`
            )
            .join("")}
        </div>
      </div>
      <div class="prayer-grid">
        ${
          results.length
            ? results.map((p) => prayerCard(p)).join("")
            : `<p class="empty-note">No prayers match your search.</p>`
        }
      </div>
    `;
    appEl.querySelector("#prayer-search").addEventListener(
      "input",
      debounce((e) => {
        query = e.target.value;
        paint();
        appEl.querySelector("#prayer-search").focus();
        const input = appEl.querySelector("#prayer-search");
        input.setSelectionRange(input.value.length, input.value.length);
      }, 120)
    );
    appEl.querySelectorAll("[data-cat]").forEach((btn) =>
      btn.addEventListener("click", () => {
        activeCategory = btn.dataset.cat;
        paint();
      })
    );
  }

  paint();
}

function renderPrayer(id) {
  const prayer = getPrayerById(id);
  if (!prayer) {
    appEl.innerHTML = `${pageHeader("Prayer not found")}<a class="btn btn--ghost" href="#/prayers">Back to prayers</a>`;
    return;
  }
  appEl.innerHTML = `<div id="reader-mount"></div>`;
  renderPrayerReader(prayer, document.getElementById("reader-mount"), { onNavigate: navigate });
}

/* ------------------------------------------------------------------ */
/* Learn Jainism                                                       */
/* ------------------------------------------------------------------ */

function renderLearn() {
  appEl.innerHTML = `
    ${pageHeader("Learn Jainism", "Short, accurate explanations behind the prayers and practices.")}
    <div class="topic-grid">
      ${learnTopics
        .map(
          (t) => `
        <a class="topic-card" href="#/learn-topic/${t.id}">
          <h2>${escapeHtml(t.title)}</h2>
          <p>${escapeHtml(t.short)}</p>
        </a>`
        )
        .join("")}
    </div>
  `;
}

function renderLearnTopic(id) {
  const topic = learnTopics.find((t) => t.id === id);
  if (!topic) {
    appEl.innerHTML = `${pageHeader("Topic not found")}<a class="btn btn--ghost" href="#/learn">Back to Learn</a>`;
    return;
  }
  appEl.innerHTML = `
    <a class="back-link" href="#/learn">← Learn Jainism</a>
    ${pageHeader(topic.title)}
    <div class="prose">
      <p class="lead">${escapeHtml(topic.short)}</p>
      <p>${escapeHtml(topic.long)}</p>
      ${
        topic.terms && topic.terms.length
          ? `<div class="term-tags">${topic.terms
              .map((term) => `<a class="chip" href="#/glossary">${escapeHtml(term)}</a>`)
              .join("")}</div>`
          : ""
      }
    </div>
  `;
}

/* ------------------------------------------------------------------ */
/* Values                                                              */
/* ------------------------------------------------------------------ */

function renderValues() {
  appEl.innerHTML = `
    ${pageHeader("Jain Values", "The core principles that shape Jain life and prayer.")}
    <div class="topic-grid">
      ${values
        .map(
          (v) => `
        <div class="value-card">
          <h2>${escapeHtml(v.name)}</h2>
          <p class="value-tagline">${escapeHtml(v.tagline)}</p>
          <p>${escapeHtml(v.short)}</p>
          <details><summary>Learn more</summary><p>${escapeHtml(v.long)}</p></details>
        </div>`
        )
        .join("")}
    </div>
    <section class="section-block">
      <h2 class="section-title">The Three Jewels (Ratnatraya)</h2>
      <div class="topic-grid">
        ${threeJewels
          .map(
            (j) => `
          <div class="value-card">
            <h2>${escapeHtml(j.name)}</h2>
            <p class="value-tagline">${escapeHtml(j.meaning)}</p>
            <p>${escapeHtml(j.short)}</p>
          </div>`
          )
          .join("")}
      </div>
    </section>
  `;
}

/* ------------------------------------------------------------------ */
/* Tirthankaras                                                        */
/* ------------------------------------------------------------------ */

function renderTirthankaras() {
  appEl.innerHTML = `
    ${pageHeader("Tirthankaras", "The 24 great teachers of this time cycle.")}
    <div class="notice notice--info">${escapeHtml(tirthankaraNote)}</div>
    <div class="tirthankara-grid">
      ${tirthankaras
        .map(
          (t) => `
        <div class="tirthankara-card">
          <span class="tirthankara-number">${t.number}</span>
          <h3>${escapeHtml(t.name)}</h3>
          ${t.alsoKnownAs ? `<p class="muted">Also known as ${escapeHtml(t.alsoKnownAs)}</p>` : ""}
          <p class="muted">${t.symbol ? `Symbol: ${escapeHtml(t.symbol)}` : "Symbol: —"}</p>
        </div>`
        )
        .join("")}
    </div>
  `;
}

/* ------------------------------------------------------------------ */
/* Festivals                                                           */
/* ------------------------------------------------------------------ */

function renderFestivals() {
  appEl.innerHTML = `
    ${pageHeader("Jain Festivals", "Key annual observances — practices vary by tradition and mandir.")}
    <div class="topic-grid">
      ${festivals
        .map(
          (f) => `
        <div class="value-card">
          <h2>${escapeHtml(f.name)}</h2>
          <p class="value-tagline">${escapeHtml(f.tradition)}</p>
          <p>${escapeHtml(f.what)}</p>
          <details>
            <summary>Why it matters &amp; how it's observed</summary>
            <p>${escapeHtml(f.why)}</p>
            <ul>${f.practices.map((p) => `<li>${escapeHtml(p)}</li>`).join("")}</ul>
          </details>
        </div>`
        )
        .join("")}
    </div>
  `;
}

/* ------------------------------------------------------------------ */
/* Glossary                                                             */
/* ------------------------------------------------------------------ */

function renderGlossary() {
  appEl.innerHTML = `
    ${pageHeader("Glossary", "Common Jain terms, explained simply.")}
    <div class="glossary-list">
      ${glossary
        .map(
          (g) => `
        <details class="glossary-item">
          <summary>${escapeHtml(g.term)} <span class="muted">— ${escapeHtml(g.simple)}</span></summary>
          <p>${escapeHtml(g.detail)}</p>
        </details>`
        )
        .join("")}
    </div>
  `;
}

/* ------------------------------------------------------------------ */
/* Favourites                                                          */
/* ------------------------------------------------------------------ */

function renderFavourites() {
  const favs = getFavourites()
    .map((id) => getPrayerById(id))
    .filter(Boolean);
  appEl.innerHTML = `
    ${pageHeader("Your Favourites")}
    ${
      favs.length
        ? `<div class="prayer-grid">${favs.map((p) => prayerCard(p)).join("")}</div>`
        : `<p class="empty-note">No favourites yet. Open a prayer and tap ♡ to save it here.</p>`
    }
  `;
}

/* ------------------------------------------------------------------ */
/* Settings                                                             */
/* ------------------------------------------------------------------ */

function renderSettings() {
  const settings = getSettings();

  function optionGroup(name, label, options, current) {
    return `
      <fieldset class="setting-group">
        <legend>${escapeHtml(label)}</legend>
        <div class="segmented" role="radiogroup" aria-label="${escapeHtml(label)}">
          ${options
            .map(
              (o) =>
                `<button type="button" class="${o.value === current ? "is-active" : ""}" data-setting="${name}" data-value="${o.value}">${escapeHtml(
                  o.label
                )}</button>`
            )
            .join("")}
        </div>
      </fieldset>`;
  }

  function toggleRow(name, label, current) {
    return `
      <div class="setting-toggle-row">
        <label for="setting-${name}">${escapeHtml(label)}</label>
        <button type="button" role="switch" aria-checked="${current}" id="setting-${name}" class="switch ${
      current ? "is-on" : ""
    }" data-toggle="${name}"></button>
      </div>`;
  }

  appEl.innerHTML = `
    ${pageHeader("Settings", "Changes save automatically on this device.")}
    <div class="settings-panel">
      ${optionGroup(
        "appearance",
        "Appearance",
        [
          { value: "light", label: "Light" },
          { value: "dark", label: "Dark" },
          { value: "system", label: "System" },
        ],
        settings.appearance
      )}
      ${optionGroup(
        "textSize",
        "Text size",
        [
          { value: "small", label: "Small" },
          { value: "medium", label: "Medium" },
          { value: "large", label: "Large" },
          { value: "xlarge", label: "Extra large" },
        ],
        settings.textSize
      )}
      ${optionGroup(
        "prayerDisplay",
        "Prayer display",
        [
          { value: "hindi", label: "Hindi" },
          { value: "pronunciation", label: "Pronunciation" },
          { value: "both", label: "Both" },
          { value: "meaning", label: "+ Meaning" },
        ],
        settings.prayerDisplay
      )}
      ${optionGroup(
        "pronunciation",
        "Pronunciation style",
        [
          { value: "simple", label: "Simple" },
          { value: "detailed", label: "Detailed" },
        ],
        settings.pronunciation
      )}
      ${toggleRow("readingMode", "Mandir reading mode by default", settings.readingMode)}
      ${toggleRow("reduceMotion", "Reduce animations", settings.reduceMotion)}

      <button class="btn btn--ghost" id="reset-settings">Reset preferences</button>
    </div>
  `;

  appEl.querySelectorAll("[data-setting]").forEach((btn) =>
    btn.addEventListener("click", () => {
      settings[btn.dataset.setting] = btn.dataset.value;
      saveSettings(settings);
      applyTheme(settings);
      renderSettings();
    })
  );
  appEl.querySelectorAll("[data-toggle]").forEach((btn) =>
    btn.addEventListener("click", () => {
      const key = btn.dataset.toggle;
      settings[key] = !settings[key];
      saveSettings(settings);
      applyTheme(settings);
      renderSettings();
    })
  );
  appEl.querySelector("#reset-settings").addEventListener("click", () => {
    saveSettings({ ...DEFAULT_SETTINGS });
    applyTheme(DEFAULT_SETTINGS);
    renderSettings();
  });
}

/* ------------------------------------------------------------------ */
/* About                                                                */
/* ------------------------------------------------------------------ */

function renderAbout() {
  appEl.innerHTML = `
    ${pageHeader("About Jain Aradhana")}
    <div class="prose">
      <p>Many children and young people grow up understanding English more comfortably than Hindi. They may recognise the prayers by ear but struggle to read the original Devanagari text.</p>
      <p>Jain Aradhana helps bridge that gap by placing three things side by side for every verified prayer: the original Hindi, an easy English pronunciation, and a plain-English meaning.</p>
      <p>This site is not a replacement for traditional prayer books, pathshala teachers, or mandir guidance — it is a companion meant to help people participate and learn alongside them.</p>
      <p>The Jinendra Archana section is built from a printed prayer book of the same name — <em>${escapeHtml(
        archanaSourceInfo.title
      )}</em>, compiled by ${escapeHtml(archanaSourceInfo.publisher)} (${escapeHtml(
    archanaSourceInfo.edition
  )}), originally sourced by that Trust. ${escapeHtml(archanaSourceInfo.acknowledgement)}</p>
      <div class="notice notice--info">This is an educational/community resource. Religious texts should be checked against trusted Jain sources before publication. See the README for the content verification process.</div>
    </div>
  `;
}

/* ------------------------------------------------------------------ */
/* Search                                                               */
/* ------------------------------------------------------------------ */

function renderSearchPage(query) {
  const q = query || "";
  function paint(value) {
    const results = runSearch(value);
    const total = results.prayers.length + results.learning.length + results.glossary.length;
    appEl.innerHTML = `
      ${pageHeader("Search")}
      <input type="search" id="global-search-input" value="${escapeHtml(
        value
      )}" placeholder="Search prayers, terms, Tirthankaras…" aria-label="Search" />
      ${
        !value
          ? `<p class="empty-note">Start typing to search prayers, learning topics and the glossary.</p>`
          : total === 0
          ? `<p class="empty-note">No results for "${escapeHtml(value)}".</p>`
          : `
          ${resultGroup("Prayers", results.prayers)}
          ${resultGroup("Learning", results.learning)}
          ${resultGroup("Glossary", results.glossary)}
        `
      }
    `;
    const input = appEl.querySelector("#global-search-input");
    input.addEventListener(
      "input",
      debounce((e) => paint(e.target.value), 120)
    );
    input.focus();
    input.setSelectionRange(input.value.length, input.value.length);
  }

  function resultGroup(label, items) {
    if (!items.length) return "";
    return `
      <section class="section-block">
        <h2 class="section-title">${label}</h2>
        <div class="search-result-list">
          ${items
            .map(
              (r) => `
            <a class="search-result" href="${hrefFor(r)}">
              <strong>${escapeHtml(r.title)}</strong>
              ${r.subtitle ? `<span>${escapeHtml(r.subtitle)}</span>` : ""}
            </a>`
            )
            .join("")}
        </div>
      </section>`;
  }

  function hrefFor(r) {
    if (r.type === "prayer") return `#/prayer/${r.id}`;
    if (r.type === "learn") return `#/learn-topic/${r.id}`;
    if (r.type === "value") return `#/values`;
    if (r.type === "tirthankara") return `#/tirthankaras`;
    if (r.type === "festival") return `#/festivals`;
    if (r.type === "glossary") return `#/glossary`;
    return "#/";
  }

  paint(q);
}

/* ------------------------------------------------------------------ */
/* Mobile nav + header search shortcut                                 */
/* ------------------------------------------------------------------ */

function wireHeaderSearch() {
  const btn = document.getElementById("header-search-btn");
  if (btn) btn.addEventListener("click", () => navigate("#/search"));
}

/* ------------------------------------------------------------------ */
/* Boot                                                                 */
/* ------------------------------------------------------------------ */

function boot() {
  const settings = getSettings();
  applyTheme(settings);
  watchSystemTheme(() => {
    if (getSettings().appearance === "system") applyTheme(getSettings());
  });
  wireHeaderSearch();
  router();

  // PWA install prompt (no fake UI — only shown if the browser fires the event)
  let deferredPrompt;
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
    const installBtn = document.getElementById("install-btn");
    if (installBtn) {
      installBtn.hidden = false;
      installBtn.addEventListener("click", async () => {
        installBtn.hidden = true;
        deferredPrompt.prompt();
        await deferredPrompt.userChoice;
        deferredPrompt = null;
      });
    }
  });

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("service-worker.js").catch(() => {
        /* offline support is a progressive enhancement — safe to ignore failures */
      });
    });
  }
}

boot();
