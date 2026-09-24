/**
 * js/search.js
 * A simple, fast, client-side search across prayers, learning topics,
 * the glossary, tirthankaras and festivals. No external requests.
 */

import { prayers } from "../data/prayers.js";
import { learnTopics, values } from "../data/values.js";
import { glossary } from "../data/glossary.js";
import { tirthankaras } from "../data/tirthankaras.js";
import { festivals } from "../data/festivals.js";

export function runSearch(query) {
  const q = query.trim().toLowerCase();
  if (!q) return { prayers: [], learning: [], glossary: [] };

  const matchedPrayers = prayers
    .filter((p) => (p.title + " " + (p.subtitle || "") + " " + p.category).toLowerCase().includes(q))
    .map((p) => ({ type: "prayer", id: p.id, title: p.title, subtitle: p.subtitle }));

  const matchedLearning = [
    ...learnTopics
      .filter((t) => (t.title + " " + t.short).toLowerCase().includes(q))
      .map((t) => ({ type: "learn", id: t.id, title: t.title, subtitle: t.short })),
    ...values
      .filter((v) => (v.name + " " + v.tagline).toLowerCase().includes(q))
      .map((v) => ({ type: "value", id: v.id, title: v.name, subtitle: v.tagline })),
    ...tirthankaras
      .filter((t) => t.name.toLowerCase().includes(q))
      .map((t) => ({ type: "tirthankara", id: String(t.number), title: t.name, subtitle: `Tirthankara #${t.number}` })),
    ...festivals
      .filter((f) => f.name.toLowerCase().includes(q))
      .map((f) => ({ type: "festival", id: f.id, title: f.name, subtitle: f.tradition })),
  ];

  const matchedGlossary = glossary
    .filter((g) => (g.term + " " + g.simple).toLowerCase().includes(q))
    .map((g) => ({ type: "glossary", id: g.term, title: g.term, subtitle: g.simple }));

  return { prayers: matchedPrayers, learning: matchedLearning, glossary: matchedGlossary };
}
