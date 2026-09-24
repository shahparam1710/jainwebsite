/**
 * js/theme.js
 * Applies appearance (light/dark/system), text size and reduced-motion
 * settings to the document root as data attributes, which style.css
 * reads via [data-theme], [data-text-size] and [data-reduce-motion].
 */

export function applyTheme(settings) {
  const root = document.documentElement;

  let resolvedTheme = settings.appearance;
  if (resolvedTheme === "system") {
    resolvedTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  root.setAttribute("data-theme", resolvedTheme);
  root.setAttribute("data-text-size", settings.textSize);
  root.setAttribute("data-reduce-motion", settings.reduceMotion ? "true" : "false");
  root.setAttribute("data-reading-mode", settings.readingMode ? "true" : "false");
}

export function watchSystemTheme(callback) {
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  const handler = () => callback();
  if (mq.addEventListener) mq.addEventListener("change", handler);
  else mq.addListener(handler);
}
