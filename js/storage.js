/**
 * js/storage.js
 * Small wrapper around localStorage that never throws — if storage is
 * unavailable (private browsing, disabled, quota full) the site keeps
 * working with in-memory defaults instead of breaking.
 */

const PREFIX = "jainAradhana:";
let memoryFallback = {};
let storageAvailable = true;

try {
  const testKey = PREFIX + "__test__";
  window.localStorage.setItem(testKey, "1");
  window.localStorage.removeItem(testKey);
} catch (e) {
  storageAvailable = false;
}

function get(key, fallback) {
  try {
    if (!storageAvailable) return memoryFallback[key] ?? fallback;
    const raw = window.localStorage.getItem(PREFIX + key);
    return raw === null ? fallback : JSON.parse(raw);
  } catch (e) {
    return fallback;
  }
}

function set(key, value) {
  try {
    if (!storageAvailable) {
      memoryFallback[key] = value;
      return;
    }
    window.localStorage.setItem(PREFIX + key, JSON.stringify(value));
  } catch (e) {
    memoryFallback[key] = value;
  }
}

function remove(key) {
  try {
    if (!storageAvailable) {
      delete memoryFallback[key];
      return;
    }
    window.localStorage.removeItem(PREFIX + key);
  } catch (e) {
    delete memoryFallback[key];
  }
}

export const storage = { get, set, remove, isAvailable: () => storageAvailable };

/* ---------- Convenience helpers for specific app data ---------- */

export const DEFAULT_SETTINGS = {
  appearance: "system", // light | dark | system
  textSize: "medium", // small | medium | large | xlarge
  prayerDisplay: "both", // hindi | pronunciation | both | meaning
  pronunciation: "simple", // simple | detailed
  readingMode: false,
  reduceMotion: false,
};

export function getSettings() {
  return { ...DEFAULT_SETTINGS, ...get("settings", {}) };
}

export function saveSettings(settings) {
  set("settings", settings);
}

export function getFavourites() {
  return get("favourites", []);
}

export function toggleFavourite(prayerId) {
  const favs = getFavourites();
  const idx = favs.indexOf(prayerId);
  if (idx === -1) favs.push(prayerId);
  else favs.splice(idx, 1);
  set("favourites", favs);
  return favs;
}

export function getRecentlyUsed() {
  return get("recentlyUsed", []);
}

export function addRecentlyUsed(prayerId) {
  let recents = getRecentlyUsed().filter((id) => id !== prayerId);
  recents.unshift(prayerId);
  recents = recents.slice(0, 8);
  set("recentlyUsed", recents);
  return recents;
}

export function getQuizProgress() {
  return get("quizProgress", {});
}

export function saveQuizProgress(progress) {
  set("quizProgress", progress);
}
