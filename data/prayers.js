/**
 * data/prayers.js
 * ----------------------------------------------------------------------
 * CONTENT ACCURACY SYSTEM
 * Every prayer object carries a `verified` flag and a `source` note.
 *
 *   verified: true   -> text has been checked against a widely-accepted
 *                        traditional source and is safe to display as-is.
 *   verified: false  -> the page structure exists, but the Hindi /
 *                        transliteration / meaning fields are PLACEHOLDERS.
 *                        They are intentionally left blank or marked
 *                        [Needs verified text] rather than invented.
 *
 * DO NOT fill in a `false` entry with guessed or AI-generated verses.
 * Replace only with text checked by a knowledgeable Jain source
 * (a pathshala teacher, a printed prayer book, or a mandir trust),
 * then flip `verified` to true and fill in `source`.
 *
 * Each prayer's hindi[], transliterationSimple[], transliterationDetailed[]
 * and meaning[] arrays are line-aligned: index 0 of every array is the
 * same line of the prayer, so the reader can show them stacked together.
 * ----------------------------------------------------------------------
 */

export const prayers = [
  {
    id: "navkar-mantra",
    title: "Navkar Mantra",
    subtitle: "Namokar Mahamantra",
    category: "mantra",
    language: "Prakrit (Ardhamagadhi)",
    readingTimeMin: 1,
    verified: true,
    source:
      "Traditional Namokar Mahamantra (Prakrit). This nine-line mantra is the most fundamental prayer in Jainism and is recited, in this core form, across Jain traditions.",
    sect: "Common to all Jain traditions",
    audio: null, // add { src: "assets/audio/navkar-mantra.mp3" } once a verified recording exists
    lines: [
      {
        hindi: "णमो अरिहंताणं",
        transliterationSimple: "Namo Arihantanam",
        transliterationDetailed: "Ṇamo Arihantāṇaṁ",
        meaning: "I bow to the Arihants — those who have conquered their inner enemies (passions).",
      },
      {
        hindi: "णमो सिद्धाणं",
        transliterationSimple: "Namo Siddhanam",
        transliterationDetailed: "Ṇamo Siddhāṇaṁ",
        meaning: "I bow to the Siddhas — the fully liberated souls.",
      },
      {
        hindi: "णमो आयरियाणं",
        transliterationSimple: "Namo Ayariyanam",
        transliterationDetailed: "Ṇamo Āyariyāṇaṁ",
        meaning: "I bow to the Acharyas — the heads of the monastic order.",
      },
      {
        hindi: "णमो उवज्झायाणं",
        transliterationSimple: "Namo Uvajjhayanam",
        transliterationDetailed: "Ṇamo Uvajjhāyāṇaṁ",
        meaning: "I bow to the Upadhyayas — the teachers of scripture.",
      },
      {
        hindi: "णमो लोए सव्वसाहूणं",
        transliterationSimple: "Namo Loe Savva Sahunam",
        transliterationDetailed: "Ṇamo Loe Savva-sāhūṇaṁ",
        meaning: "I bow to all the Sadhus (monks and ascetics) anywhere in the world.",
      },
      {
        hindi: "एसो पंच णमोक्कारो",
        transliterationSimple: "Eso Pancha Namokkaro",
        transliterationDetailed: "Eso Pañca-ṇamokkāro",
        meaning: "This five-fold obeisance,",
      },
      {
        hindi: "सव्व पावप्पणासणो",
        transliterationSimple: "Savva Pavappanasano",
        transliterationDetailed: "Savva-pāva-ppaṇāsaṇo",
        meaning: "destroys all sins,",
      },
      {
        hindi: "मंगलाणं च सव्वेसिं",
        transliterationSimple: "Mangalanam Cha Savvesim",
        transliterationDetailed: "Maṅgalāṇaṁ ca savvesiṁ",
        meaning: "and among all auspicious things,",
      },
      {
        hindi: "पढमं हवइ मंगलं",
        transliterationSimple: "Padhamam Havai Mangalam",
        transliterationDetailed: "Paḍhamaṁ havai maṅgalaṁ",
        meaning: "this is the foremost auspicious one.",
      },
    ],
    about:
      "The Navkar Mantra (also called the Namokar Mahamantra) is recited before almost anything else in Jain life. It does not name any single Tirthankara — instead it bows to five categories of spiritually elevated souls (Arihants, Siddhas, Acharyas, Upadhyayas and all Sadhus), which is why it can be recited by Jains of every tradition.",
  },
  {
    id: "jinendra-archana",
    title: "Jinendra Archana",
    subtitle: "Ashtaprakari Puja song",
    category: "archana",
    language: "Hindi",
    readingTimeMin: 3,
    verified: false,
    source: null,
    sect: "Varies by mandir and tradition",
    audio: null,
    lines: [
      {
        hindi: "",
        transliterationSimple: "",
        transliterationDetailed: "",
        meaning: "",
      },
    ],
    about:
      "Jinendra Archana refers to the songs sung while performing the eight-fold (Ashtaprakari) puja to a Jina's image — offering water, sandalwood, rice, flowers, sweets, a lamp, incense and fruit. Wording differs between mandirs and regional traditions, so this entry is deliberately left as an empty template.",
    needsVerification: true,
  },
  {
    id: "uvasaggaharam-stotra",
    title: "Uvasaggaharam Stotra",
    subtitle: "Prayer to Parshvanatha",
    category: "stavan",
    language: "Prakrit",
    readingTimeMin: 2,
    verified: false,
    source: null,
    sect: "Primarily used in Shvetambar tradition",
    audio: null,
    lines: [
      {
        hindi: "",
        transliterationSimple: "",
        transliterationDetailed: "",
        meaning: "",
      },
    ],
    about:
      "A well-known stotra invoking Parshvanatha, traditionally attributed to Acharya Bhadrabahu. Left as a template here until the verses can be checked line-by-line against a printed source.",
    needsVerification: true,
  },
  {
    id: "mandir-aarti",
    title: "Jinendra Aarti",
    subtitle: "Evening aarti",
    category: "aarti",
    language: "Hindi",
    readingTimeMin: 2,
    verified: false,
    source: null,
    sect: "Varies by mandir",
    audio: null,
    lines: [
      {
        hindi: "",
        transliterationSimple: "",
        transliterationDetailed: "",
        meaning: "",
      },
    ],
    about:
      "Aarti songs differ widely between mandirs and regions. Add your mandir's own verified aarti text here rather than a generic one.",
    needsVerification: true,
  },
];

export function getPrayerById(id) {
  return prayers.find((p) => p.id === id) || null;
}
