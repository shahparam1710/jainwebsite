/**
 * js/prayer-reader.js
 * Renders a single prayer as a line-by-line reader with switchable
 * display modes (Hindi / Pronunciation / Both / +Meaning), adjustable
 * text size, a dedicated "Mandir Reading Mode", and a lightweight
 * step-by-step Learning Mode.
 */

import { getSettings, saveSettings, getFavourites, toggleFavourite, addRecentlyUsed } from "./storage.js";
import { escapeHtml } from "./utils.js";

const CATEGORY_LABELS = {
  archana: "Archana",
  stavan: "Stavan",
  mantra: "Mantra",
  aarti: "Aarti",
  other: "Other",
};

export function renderPrayerReader(prayer, container, { onNavigate } = {}) {
  addRecentlyUsed(prayer.id);
  const settings = getSettings();
  let displayMode = settings.prayerDisplay; // hindi | pronunciation | both | meaning
  let pronunciationMode = settings.pronunciation; // simple | detailed
  let learningMode = false;
  let learningStep = 0;

  function isFavourite() {
    return getFavourites().includes(prayer.id);
  }

  function lineHtml(line, index) {
    const showHindi = displayMode === "hindi" || displayMode === "both" || displayMode === "meaning";
    const showPron = displayMode === "pronunciation" || displayMode === "both" || displayMode === "meaning";
    const showMeaning = displayMode === "meaning";
    const pron =
      pronunciationMode === "detailed" ? line.transliterationDetailed : line.transliterationSimple;

    if (!prayer.verified) {
      return `
        <div class="verse-card verse-card--empty">
          <p class="verse-empty-note">Verified text for this line has not been added yet.</p>
        </div>`;
    }

    return `
      <div class="verse-card" data-line="${index}">
        <span class="verse-number">${index + 1}</span>
        <div class="verse-body">
          ${showHindi ? `<p class="verse-hindi" lang="hi">${escapeHtml(line.hindi)}</p>` : ""}
          ${
            showPron
              ? `<p class="verse-pron"><span class="verse-label">How to say it</span>${escapeHtml(pron)}</p>`
              : ""
          }
          ${
            showMeaning
              ? `<p class="verse-meaning"><span class="verse-label">Meaning</span>${escapeHtml(
                  line.meaning || "Meaning not yet available."
                )}</p>`
              : ""
          }
        </div>
      </div>`;
  }

  function learningStepsHtml() {
    const steps = ["Read Hindi", "Read pronunciation", "Try without pronunciation", "Complete prayer"];
    const line = prayer.lines[0];
    const pct = Math.round(((learningStep + 1) / steps.length) * 100);
    let body = "";
    if (learningStep === 0) {
      body = `<p class="verse-hindi" lang="hi">${escapeHtml(line.hindi)}</p>`;
    } else if (learningStep === 1) {
      body = `<p class="verse-hindi" lang="hi">${escapeHtml(line.hindi)}</p><p class="verse-pron"><span class="verse-label">How to say it</span>${escapeHtml(
        line.transliterationSimple
      )}</p>`;
    } else if (learningStep === 2) {
      body = `<p class="verse-pron"><span class="verse-label">Now say it from memory:</span></p><p class="verse-hindi" lang="hi">${escapeHtml(
        line.hindi
      )}</p>`;
    } else {
      body = `<p>Nicely done — you've worked through the opening line of ${escapeHtml(
        prayer.title
      )}. Switch off Learning Mode any time to read the full prayer.</p>`;
    }
    return `
      <div class="learning-panel">
        <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
        <p class="progress-label">${steps[learningStep]} · ${pct}%</p>
        <div class="verse-card">${body}</div>
        <div class="learning-controls">
          <button class="btn btn--ghost" id="learn-back" ${learningStep === 0 ? "disabled" : ""}>Back</button>
          <button class="btn btn--primary" id="learn-next">${
            learningStep === steps.length - 1 ? "Finish" : "Next"
          }</button>
        </div>
      </div>`;
  }

  function render() {
    container.innerHTML = `
      <div class="reader ${settings.readingMode ? "reader--focus" : ""}" id="reader-root">
        <div class="reader-topbar">
          <button class="icon-btn" id="reader-back" aria-label="Back">←</button>
          <div class="reader-title">
            <h1>${escapeHtml(prayer.title)}</h1>
            <p class="reader-subtitle">${escapeHtml(prayer.subtitle || "")}</p>
          </div>
          <button class="icon-btn" id="reader-fav" aria-label="Toggle favourite" aria-pressed="${isFavourite()}">${
      isFavourite() ? "♥" : "♡"
    }</button>
        </div>

        ${
          !prayer.verified
            ? `<div class="notice notice--warning">
                 <strong>Content needed:</strong> ${escapeHtml(
                   prayer.about || "This prayer's verified text has not been added yet."
                 )}
               </div>`
            : ""
        }

        <div class="reader-controls">
          <div class="segmented" role="group" aria-label="Display mode">
            <button data-mode="hindi" class="${displayMode === "hindi" ? "is-active" : ""}">Hindi</button>
            <button data-mode="pronunciation" class="${
              displayMode === "pronunciation" ? "is-active" : ""
            }">Pronunciation</button>
            <button data-mode="both" class="${displayMode === "both" ? "is-active" : ""}">Both</button>
            <button data-mode="meaning" class="${displayMode === "meaning" ? "is-active" : ""}">+ Meaning</button>
          </div>
          <div class="reader-toolbar">
            <button class="chip" id="reader-pron-toggle">${
              pronunciationMode === "simple" ? "Simple pronunciation" : "Detailed pronunciation"
            }</button>
            <button class="chip" id="reader-learn-toggle">${learningMode ? "Exit learning mode" : "Learn this prayer"}</button>
            <button class="chip" id="reader-focus-toggle">${settings.readingMode ? "Exit reading mode" : "Reading mode"}</button>
          </div>
        </div>

        ${
          learningMode
            ? learningStepsHtml()
            : `<div class="verses">${
                prayer.verified
                  ? prayer.lines.map((l, i) => lineHtml(l, i)).join("")
                  : lineHtml(prayer.lines[0], 0)
              }</div>
               <div class="audio-strip">
                 ${
                   prayer.audio
                     ? `<button class="btn btn--ghost" disabled>▶ Play (${escapeHtml(prayer.title)})</button>`
                     : `<p class="audio-soon">🔊 Audio coming soon</p>`
                 }
               </div>`
        }
      </div>`;

    container.querySelector("#reader-back").addEventListener("click", () => onNavigate && onNavigate("#/prayers"));
    container.querySelector("#reader-fav").addEventListener("click", () => {
      toggleFavourite(prayer.id);
      render();
    });
    container.querySelectorAll("[data-mode]").forEach((btn) => {
      btn.addEventListener("click", () => {
        displayMode = btn.dataset.mode;
        settings.prayerDisplay = displayMode;
        saveSettings(settings);
        render();
      });
    });
    const pronBtn = container.querySelector("#reader-pron-toggle");
    if (pronBtn)
      pronBtn.addEventListener("click", () => {
        pronunciationMode = pronunciationMode === "simple" ? "detailed" : "simple";
        settings.pronunciation = pronunciationMode;
        saveSettings(settings);
        render();
      });
    const learnBtn = container.querySelector("#reader-learn-toggle");
    if (learnBtn)
      learnBtn.addEventListener("click", () => {
        learningMode = !learningMode;
        learningStep = 0;
        render();
      });
    const focusBtn = container.querySelector("#reader-focus-toggle");
    if (focusBtn)
      focusBtn.addEventListener("click", () => {
        settings.readingMode = !settings.readingMode;
        saveSettings(settings);
        document.documentElement.setAttribute("data-reading-mode", settings.readingMode ? "true" : "false");
        render();
      });
    const learnNext = container.querySelector("#learn-next");
    if (learnNext)
      learnNext.addEventListener("click", () => {
        if (learningStep < 3) {
          learningStep += 1;
          render();
        } else {
          learningMode = false;
          render();
        }
      });
    const learnBack = container.querySelector("#learn-back");
    if (learnBack)
      learnBack.addEventListener("click", () => {
        if (learningStep > 0) {
          learningStep -= 1;
          render();
        }
      });
  }

  render();
}

export { CATEGORY_LABELS };
