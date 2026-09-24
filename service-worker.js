/**
 * service-worker.js
 * Caches the app shell (HTML/CSS/JS/data/icons) so the site keeps working
 * on a weak or absent mandir wifi connection after the first successful load.
 * Uses a cache-first strategy for the app shell and network-first for
 * anything else, falling back to cache when offline.
 */

const CACHE_NAME = "jain-aradhana-v1";
const APP_SHELL = [
  "./",
  "./index.html",
  "./css/style.css",
  "./css/responsive.css",
  "./js/app.js",
  "./js/storage.js",
  "./js/theme.js",
  "./js/prayer-reader.js",
  "./js/search.js",
  "./js/utils.js",
  "./data/prayers.js",
  "./data/tirthankaras.js",
  "./data/values.js",
  "./data/festivals.js",
  "./data/glossary.js",
  "./manifest.json",
  "./assets/icons/icon-192.png",
  "./assets/icons/icon-512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .catch(() => {
        /* if one asset fails to precache, don't block install */
      })
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      const network = fetch(event.request)
        .then((response) => {
          if (response && response.status === 200 && response.type === "basic") {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});
