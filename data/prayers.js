/**
 * data/prayers.js
 * ----------------------------------------------------------------------
 * CONTENT ACCURACY SYSTEM
 *
 *   verified: true   -> Hindi/Sanskrit text has been transcribed directly
 *                        from a named source and checked against it.
 *   verified: false  -> the page structure exists, but the text fields
 *                        are PLACEHOLDERS. Do not fill them in by guessing.
 *
 * PDF-SOURCED CONTENT
 * The five prayers below marked `source.pdf: true` were transcribed by
 * careful visual inspection of the user-supplied "Jinendra Archana" PDF
 * (compiled by Vimal Jain Granthmala Prakashan, Delhi, and Pandit
 * Todarmal Smarak Trust, Jaipur — 33rd revised edition, 1 January 2007;
 * text originally sourced by that Trust). The PDF's Hindi/Sanskrit text
 * uses a legacy non-Unicode Devanagari font ("Shree-Dev"), so it could
 * not be machine-extracted — every line was read visually from the
 * rasterised page and cross-checked a second time against a zoomed
 * crop of the same page. `sourcePage` gives the PDF's printed page
 * number so it can be checked against a physical or PDF copy.
 *
 * English meaning lines for the PDF-sourced prayers are this project's
 * own translation (the PDF itself is Hindi/Sanskrit only) and are
 * marked accordingly — treat them as a study aid, not a liturgical
 * translation, and have them checked by a knowledgeable reader before
 * treating them as authoritative.
 *
 * The full 143-item contents of the source book — almost all of it
 * not yet transcribed — is indexed separately in data/archana-index.js
 * so nothing in the book is silently dropped from the site, even
 * though only five pieces have full verse-by-verse content so far.
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
    source: {
      text:
        "Traditional Namokar Mahamantra (Prakrit) — common to all Jain traditions. Its opening five lines also appear on page 48 of the Jinendra Archana PDF, which this reading matches.",
      pdf: true,
      sourcePage: 48,
    },
    sect: "Common to all Jain traditions",
    audio: null,
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
      "The Navkar Mantra is recited before almost anything else in Jain life. It does not name any single Tirthankara — instead it bows to five categories of spiritually elevated souls, which is why it is recited across every Jain tradition.",
  },

  {
    id: "darshan-path",
    title: "Darshan Path",
    subtitle: "दर्शन-पाठ",
    category: "stavan",
    language: "Sanskrit",
    readingTimeMin: 2,
    verified: true,
    source: {
      text: "Transcribed from the Jinendra Archana PDF, pages 54-55 (untitled/traditional -- no author given in this collection).",
      pdf: true,
      sourcePage: 54,
    },
    sect: "Common Jain practice -- recited before darshan",
    audio: null,
    lines: [
      {
        hindi: "दर्शनं देवदेवस्य दर्शनं पापनाशनम्।\nदर्शनं स्वर्गसोपानं दर्शनं मोक्षसाधनम्।।१।।",
        transliterationSimple: "Darshanam devdevasya darshanam paapnaashanam,\nDarshanam swargsopaanam darshanam mokshsaadhanam.",
        transliterationDetailed: "Darśanaṁ devadevasya darśanaṁ pāpanāśanam,\nDarśanaṁ svargasopānaṁ darśanaṁ mokṣasādhanam.",
        meaning: "Seeing the God of gods destroys sin; it is the stairway to heaven and the means to liberation.",
      },
      {
        hindi: "दर्शनेन जिनेन्द्राणां साधूनां वन्दनेन च।\nन चिरं तिष्ठते पापं छिद्रहस्ते यथोदकम्।।२।।",
        transliterationSimple: "Darshanen jinendraanaam saadhunaam vandanen cha,\nNa chiram tishthate paapam chhidrahaste yathodakam.",
        transliterationDetailed: "Darśanena jinendrāṇāṁ sādhūnāṁ vandanena ca,\nNa ciraṁ tiṣṭhate pāpaṁ chidra-haste yathodakam.",
        meaning: "By seeing the Jinas and bowing to the monks, sin does not stay long -- like water held in a hand with a hole in it.",
      },
      {
        hindi: "वीतराग-मुखं दृष्ट्वा पद्मराग-समप्रभम्।\nजन्म-जन्मकृतं पापं दर्शनेन विनश्यति।।३।।",
        transliterationSimple: "Veetraag-mukham drishtwaa padmaraag-samprabham,\nJanma-janmakritam paapam darshanen vinashyati.",
        transliterationDetailed: "Vītarāga-mukhaṁ dṛṣṭvā padmarāga-samaprabham,\nJanma-janmakṛtaṁ pāpaṁ darśanena vinaśyati.",
        meaning: "Having seen that passion-free face, radiant like a ruby, sins gathered birth after birth are destroyed by this seeing.",
      },
      {
        hindi: "दर्शनं जिनसूर्यस्य संसारध्वान्तनाशनम्।\nबोधनं चित्त-पद्मस्य समस्तार्थ-प्रकाशनम्।।४।।",
        transliterationSimple: "Darshanam jinsuryasya sansaardhwaantnaashanam,\nBodhanam chitt-padmasya samastaarth-prakaashanam.",
        transliterationDetailed: "Darśanaṁ jina-sūryasya saṁsāra-dhvānta-nāśanam,\nBodhanaṁ citta-padmasya samastārtha-prakāśanam.",
        meaning: "Seeing the Jina, who is like the sun, destroys the darkness of worldly existence; it opens the lotus of the mind and illuminates every meaning.",
      },
      {
        hindi: "दर्शनं जिन-चन्द्रस्य सद्धर्मामृत-वर्षणम्।\nजन्म-दाहविनाशाय वर्धनं सुख-वारिधेः।।५।।",
        transliterationSimple: "Darshanam jin-chandrasya saddharmaamrit-varshanam,\nJanma-daahvinaashaay vardhanam sukh-vaaridheh.",
        transliterationDetailed: "Darśanaṁ jina-candrasya sad-dharmāmṛta-varṣaṇam,\nJanma-dāha-vināśāya vardhanaṁ sukha-vāridheḥ.",
        meaning: "Seeing the Jina, who is like the moon, showers the nectar of true dharma; it ends the burning of birth and swells the ocean of happiness.",
      },
      {
        hindi: "जीवादितत्त्वप्रतिपादकाय सम्यक्त्वमुख्याष्टगुणाश्रयाय।\nप्रशान्तरूपाय दिगम्बराय देवाधिदेवाय नमो जिनाय।।६।।",
        transliterationSimple: "Jeevaaditattvapratipaadkaay samyaktvamukhyaashtgunaashrayaay,\nPrashaantroopaay digambaraay devaadhidevaay namo jinaay.",
        transliterationDetailed: "Jīvādi-tattva-pratipādakāya samyaktva-mukhyāṣṭaguṇāśrayāya,\nPraśānta-rūpāya digambarāya devādhidevāya namo jināya.",
        meaning: "Salutations to the Jina -- teacher of the reality of soul and non-soul, abode of the eight essential qualities beginning with right faith, of perfectly peaceful form, the unclothed one, the God of gods.",
      },
      {
        hindi: "चिदानन्दैक-रूपाय जिनाय परमात्मने।\nपरमात्म-प्रकाशाय नित्यं सिद्धात्मने नमः।।७।।",
        transliterationSimple: "Chidaanandaik-roopaay jinaay parmaatmane,\nParmaatm-prakaashaay nityam siddhaatmane namah.",
        transliterationDetailed: "Cidānandaika-rūpāya jināya paramātmane,\nParamātma-prakāśāya nityaṁ siddhātmane namaḥ.",
        meaning: "Salutations to the Jina whose very nature is consciousness and bliss, the Supreme Soul, ever radiant with supreme awareness, the eternal liberated soul.",
      },
      {
        hindi: "अन्यथा शरणं नास्ति त्वमेव शरणं मम।\nतस्मात्कारुण्य-भावेन रक्ष रक्ष जिनेश्वर।।८।।",
        transliterationSimple: "Anyathaa sharanam naasti tvamev sharanam mam,\nTasmaatkaarunya-bhaaven raksh raksh jineshwar.",
        transliterationDetailed: "Anyathā śaraṇaṁ nāsti tvameva śaraṇaṁ mama,\nTasmāt kāruṇya-bhāvena rakṣa rakṣa jineśvara.",
        meaning: "There is no other refuge -- you alone are my refuge. Therefore, O Lord of the Jinas, out of compassion, protect me, protect me.",
      },
      {
        hindi: "नहि त्राता नहि त्राता नहि त्राता जगत्त्रये।\nवीतरागात्परो देवो न भूतो न भविष्यति।।९।।",
        transliterationSimple: "Nahi traataa nahi traataa nahi traataa jagattraye,\nVeetraagaatparo devo na bhooto na bhavishyati.",
        transliterationDetailed: "Nahi trātā nahi trātā nahi trātā jagat-traye,\nVītarāgāt paro devo na bhūto na bhaviṣyati.",
        meaning: "There is no saviour, no saviour, no saviour in the three worlds; there has never been, and never will be, any god higher than the one free of attachment.",
      },
      {
        hindi: "जिने भक्तिर्जिने भक्तिर्जिने भक्तिर्दिने दिने।\nसदा मेऽस्तु सदा मेऽस्तु सदा मेऽस्तु भवे भवे।।१०।।",
        transliterationSimple: "Jine bhaktirjine bhaktirjine bhaktirdine dine,\nSadaa me-astu sadaa me-astu sadaa me-astu bhave bhave.",
        transliterationDetailed: "Jine bhaktir jine bhaktir jine bhaktir dine dine,\nSadā me'stu sadā me'stu sadā me'stu bhave bhave.",
        meaning: "Devotion to the Jina, devotion to the Jina, devotion to the Jina, day after day -- may it always be mine, always be mine, always be mine, birth after birth.",
      },
      {
        hindi: "जिनधर्मविनिर्मुक्तो मा भवेच्चक्रवर्त्यपि।\nस्याच्चेटोऽपि दरिद्रोऽपि जिन-धर्मानुवासितः।।११।।",
        transliterationSimple: "Jindharmavinirmukto maa bhavechchakravartyapi,\nSyaachchetopi daridropi jin-dharmaanuvaasitah.",
        transliterationDetailed: "Jina-dharma-vinirmukto mā bhavec cakravarty api,\nSyāc ceṭo'pi daridro'pi jina-dharmānuvāsitaḥ.",
        meaning: "One without the Jina's dharma is truly poor, even as a universal emperor; one steeped in the Jina's dharma is truly rich, even as a servant or a pauper.",
      },
      {
        hindi: "जन्म-जन्मकृतं पापं जन्म-कोटिमुपार्जितम्।\nजन्म-मृत्यु-जरा-रोगं हन्यते जिन-दर्शनात्।।१२।।",
        transliterationSimple: "Janm-janmakritam paapam janm-kotimupaarjitam,\nJanm-mrityu-jaraa-rogam hanyate jin-darshanaat.",
        transliterationDetailed: "Janma-janma-kṛtaṁ pāpaṁ janma-koṭim upārjitam,\nJanma-mṛtyu-jarā-rogaṁ hanyate jina-darśanāt.",
        meaning: "Sins gathered birth after birth, accumulated over millions of births, and birth, death, old age and disease are all destroyed by the sight of the Jina.",
      },
      {
        hindi: "अद्याभवत्सफलता नयनद्वयस्य,\nदेव! त्वदीय-चरणाम्बुजवीक्षणेन।\nअद्य त्रिलोकतिलक! प्रतिभासते मे,\nसंसार-वारिधिरयं चुलुकप्रमाणम्।।१३।।",
        transliterationSimple:
          "Adyaabhavatsaphalataa nayandvayasya,\nDev! Tvadeey-charanaambujveekshanen.\nAdya trilokatilak! Pratibhaasate me,\nSansaar-vaaridhirayam chulukpramaanam.",
        transliterationDetailed:
          "Adyābhavat saphalatā nayana-dvayasya,\nDeva! Tvadīya-caraṇāmbuja-vīkṣaṇena.\nAdya trilokatilaka! Pratibhāsate me,\nSaṁsāra-vāridhir ayaṁ culuka-pramāṇam.",
        meaning:
          "Today my two eyes have found their fulfilment, O Lord, by beholding your lotus feet. Today, O jewel of the three worlds, this entire ocean of worldly existence seems to me no bigger than a handful of water.",
      },
    ],
    about:
      "A classical Sanskrit hymn traditionally recited before darshan (seeing the Jina's image), reflecting on why the act of seeing a passion-free, liberated being is itself spiritually powerful. It appears without an author's name in this collection.",
  },

  {
    id: "jinendra-vandana",
    title: "Jinendra Vandana",
    subtitle: "जिनेन्द्र-वन्दना",
    category: "stavan",
    language: "Hindi",
    readingTimeMin: 6,
    verified: true,
    source: {
      text: "Transcribed from the Jinendra Archana PDF, pages 49-53, by Dr. Hukamchand Bharill.",
      pdf: true,
      sourcePage: 49,
    },
    sect: "Common Jain practice",
    audio: null,
    intro: {
      hindi: "चौबीसों परिग्रह रहित, चौबीसों जिनराज।\nवीतराग सर्वज्ञ जिन, हितकर सर्व समाज।।",
      transliterationSimple: "Chaubeeson parigrah rahit, chaubeeson jinraaj,\nVeetraag sarvagya jin, hitkar sarv samaaj.",
      transliterationDetailed: "Caubīsoṁ parigraha rahit, caubīsoṁ jinarāja,\nVītarāga sarvajña jin, hitakar sarva samāja.",
      meaning: "Free of all twenty-four kinds of possession, the twenty-four Jina-kings -- passionless, omniscient Jinas, benefactors of the whole community.",
      label: "Opening doha",
    },
    lines: [
      {
        hindi: "श्री आदिनाथ अनादि मिथ्या मोह का मर्दन किया।\nआनन्दमय ध्रुवधाम निज भगवान का दर्शन किया।।\nनिज आतमा को जानकर निज आतमा अपना लिया।\nनिज आतमा में लीन हो निज आतमा को पा लिया।।१।।",
        transliterationSimple:
          "Shri Aadinaath anaadi mithyaa moh kaa mardan kiyaa,\nAanandmay dhruvdhaam nij bhagvaan kaa darshan kiyaa.\nNij aatmaa ko jaankar nij aatmaa apnaa liyaa,\nNij aatmaa mein leen ho nij aatmaa ko paa liyaa.",
        transliterationDetailed:
          "Śrī Ādinātha anādi mithyā moha kā mardana kiyā,\nĀnandamaya dhruvadhāma nija bhagavāna kā darśana kiyā.\nNija ātmā ko jānkar nija ātmā apnā liyā,\nNija ātmā meṁ līna ho nija ātmā ko pā liyā.",
        meaning:
          "Shri Adinath crushed beginningless false belief and beheld his own blissful, eternal true nature. Having known his own soul, he made it his own; absorbed in his own soul, he attained his own soul.",
      },
      {
        hindi: "जिन अजित जीता क्रोध रिपु निज आतमा को जानकर।\nनिज आतमा पहिचान कर निज आतमा का ध्यान धर।।\nउत्तम क्षमा की प्राप्ति की बस एक ही है साधना।\nआनन्दमय ध्रुवधाम निज भगवान की आराधना।।२।।",
        transliterationSimple:
          "Jin Ajit jeetaa krodh ripu nij aatmaa ko jaankar,\nNij aatmaa pahichaan kar nij aatmaa kaa dhyaan dhar.\nUttam kshamaa kee praapti kee bas ek hee hai saadhanaa,\nAanandmay dhruvdhaam nij bhagvaan kee aaraadhanaa.",
        transliterationDetailed:
          "Jina Ajita jītā krodha ripu nija ātmā ko jānkar,\nNija ātmā pahicān kar nija ātmā kā dhyāna dhar.\nUttama kṣamā kī prāpti kī bas ek hī hai sādhanā,\nĀnandamaya dhruvadhāma nija bhagavāna kī ārādhanā.",
        meaning:
          "Jina Ajitnath conquered the enemy of anger by knowing his own soul, recognising it and meditating on it. The one practice for attaining supreme forgiveness is this: worship of one's own blissful, eternal true nature.",
      },
      {
        hindi: "सम्भव असम्भव मान मार्दव धर्ममय शुद्धात्मा।\nतुमने बताया जगत को सब आतमा परमातमा।।\nछोटे-बड़े की भावना ही मान का आधार है।\nनिज आतमा की साधना ही साधना का सार है।।३।।",
        transliterationSimple:
          "Sambhav asambhav maan maardav dharmamay shuddhaatmaa,\nTumne bataayaa jagat ko sab aatmaa parmaatmaa.\nChhote-bade kee bhaavnaa hee maan kaa aadhaar hai,\nNij aatmaa kee saadhanaa hee saadhanaa kaa saar hai.",
        transliterationDetailed:
          "Sambhava asambhava māna mārdava dharmamaya śuddhātmā,\nTumne batāyā jagat ko sab ātmā paramātmā.\nChoṭe-baḍe kī bhāvnā hī māna kā ādhāra hai,\nNija ātmā kī sādhnā hī sādhnā kā sāra hai.",
        meaning:
          "Possible and impossible, pride and humility, the pure soul made of dharma -- you showed the world that all is soul, the Supreme Soul. The feeling of \"small\" and \"great\" is itself the root of pride; practising one's own soul is the essence of all practice.",
      },
      {
        hindi: "निज आतमा को आतमा ही जानना है सरलता।\nनिज आतमा की साधना आराधना है सरलता।।\nवैराग्य-जननी नन्दिनी अभिनन्दिनी है सरलता।\nहै साधकों की संगिनी आनन्द-जननी सरलता।।४।।",
        transliterationSimple:
          "Nij aatmaa ko aatmaa hee jaananaa hai saraltaa,\nNij aatmaa kee saadhanaa aaraadhanaa hai saraltaa.\nVairaagya-jananee nandinee abhinandinee hai saraltaa,\nHai saadhkon kee sangini aanand-jananee saraltaa.",
        transliterationDetailed:
          "Nija ātmā ko ātmā hī jānanā hai saralatā,\nNija ātmā kī sādhnā ārādhnā hai saralatā.\nVairāgya-jananī nandinī abhinandinī hai saralatā,\nHai sādhakoṁ kī saṅginī ānanda-jananī saralatā.",
        meaning:
          "To know one's own soul simply as soul is true simplicity; to practise one's own soul is the devotion that is simplicity. Simplicity is the mother of renunciation, the daughter who delights -- she is the very companion of the practitioner.",
      },
      {
        hindi: "हे सर्वदर्शी सुमति जिन! आनन्द के रसकन्द हो।\nहो शक्तियों के संग्रहालय ज्ञान के घनपिण्ड हो।।\nनिर्लोभ हो निर्दोष हो निष्क्रोध हो निष्काम हो।\nहो परम-पावन पतित-पावन शौचमय सुखधाम हो।।५।।",
        transliterationSimple:
          "He sarvadarshee sumati jin! Aanand ke raskand ho,\nHo shaktiyon ke sangrahaalay gyaan ke ghanpind ho.\nNirlobh ho nirdosh ho nishkrodh ho nishkaam ho,\nHo param-paavan patit-paavan shauchmay sukhdhaam ho.",
        transliterationDetailed:
          "He sarvadarśī sumati jin! Ānand ke rasakand ho,\nHo śaktiyoṁ ke saṅgrahālay jñān ke ghanapiṇḍ ho.\nNirlobh ho nirdoṣ ho niṣkrodh ho niṣkām ho,\nHo param-pāvan patit-pāvan śaucamay sukhdhām ho.",
        meaning:
          "O all-seeing Sumatinath! You are the very essence of the nectar of bliss, the treasure-house of powers, the dense mass of knowledge. Free of greed, faultless, free of anger, free of desire -- you are supremely pure, the purifier of the fallen, the abode of purity and happiness.",
      },
      {
        hindi: "मानता आनन्द सब जग हास में परिहास में।\nपर आपने निर्मद किया परिहास को परिहास में।।\nपरिहास भी है परिग्रह जग को बताया आपने।\nहे पद्मप्रभ परमातमा, पावन किया जग आपने।।६।।",
        transliterationSimple:
          "Maantaa aanand sab jag haas mein parihaas mein,\nPar aapne nirmad kiyaa parihaas ko parihaas mein.\nParihaas bhee hai parigrah jag ko bataayaa aapne,\nHe Padmaprabh parmaatmaa, paavan kiyaa jag aapne.",
        transliterationDetailed:
          "Māntā ānand sab jag hās meṁ parihās meṁ,\nPar āpne nirmad kiyā parihās ko parihās meṁ.\nParihās bhī hai parigraha jag ko batāyā āpne,\nHe Padmaprabh paramātmā, pāvan kiyā jag āpne.",
        meaning:
          "The whole world finds joy in laughter and jest, but you stripped jest itself of pride, within jest. You showed the world that even jest is a possession. O Padmaprabha, Supreme Soul, you purified the world.",
      },
      {
        hindi: "पारस सुपारस है वही पारस करे जो लोह को।\nवह आतमा ही है सुपारस जो स्वयं निर्मोह हो।।\nरति-राग वर्जित आतमा ही लोक में आराध्य है।\nनिज आतमा का ध्यान ही बस साधना है साध्य है।।७।।",
        transliterationSimple:
          "Paaras supaaras hai vahee paaras kare jo loh ko,\nVah aatmaa hee hai supaaras jo swayam nirmoh ho.\nRati-raag varjit aatmaa hee lok mein aaraadhya hai,\nNij aatmaa kaa dhyaan hee bas saadhanaa hai saadhya hai.",
        transliterationDetailed:
          "Pāras supāras hai vahī pāras kare jo loh ko,\nVah ātmā hī hai supāras jo svayaṁ nirmoh ho.\nRati-rāg varjit ātmā hī lok meṁ ārādhya hai,\nNija ātmā kā dhyān hī bas sādhnā hai sādhya hai.",
        meaning:
          "A touchstone is a true touchstone only if it turns iron to gold; the soul is a true touchstone only when it is itself free of attachment. The soul free of attachment and aversion alone is worthy of worship; meditating on one's own soul alone is both the practice and its goal.",
      },
      {
        hindi: "रति-अरतिहर श्री चन्द्र जिन तुम ही अपूर्व चन्द्र हो।\nनिःशेष हो निर्दोष हो निर्विघ्न हो निष्कंप हो।।\nनिकलंक हो अकलंक हो निस्ताप हो निष्पाप हो।\nयदि हैं अमावस अज्ञजन तो पूर्णमासी आप हो।।८।।",
        transliterationSimple:
          "Rati-aratihar Shri Chandra jin tum hee apoorv chandra ho,\nNihshesh ho nirdosh ho nirvighn ho nishkamp ho.\nNikalank ho akalank ho nistaap ho nishpaap ho,\nYadi hain amaavas agyajan to poornmaasee aap ho.",
        transliterationDetailed:
          "Rati-aratihar Śrī Candra jin tum hī apūrva candra ho,\nNiḥśeṣ ho nirdoṣ ho nirvighn ho niṣkamp ho.\nNikalaṅk ho akalaṅk ho nistāp ho niṣpāp ho,\nYadi haiṁ amāvas ajñajan to pūrṇamāsī āp ho.",
        meaning:
          "O Chandraprabha, remover of joy and sorrow, you alone are the peerless moon! You are complete, faultless, free of obstruction, unshaken. Spotless, unblemished, free of torment, free of sin -- if the unaware are the new-moon night, you are the full moon.",
      },
      {
        hindi: "विरहित विविधविधि सुविधि जिन निज आतमा में लीन हो।\nहो सर्वगुण सम्पन्न जिन सर्वज्ञ हो स्वाधीन हो।।\nशिवमग बतावनहार हो शत इन्द्रकरि अभिवन्ध हो।\nदुख-शोकहर भ्रम-रोगहर सन्तोषकर सानन्द हो।।९।।",
        transliterationSimple:
          "Virahit vividhvidhi suvidhi jin nij aatmaa mein leen ho,\nHo sarvagun sampann jin sarvagya ho swaadheen ho.\nShivmag bataavanhaar ho shat indrakari abhivandh ho,\nDukh-shokhar bhram-roghar santoshkar saanand ho.",
        transliterationDetailed:
          "Virahit vividh-vidhi suvidhi jin nija ātmā meṁ līna ho,\nHo sarvaguṇ sampanna jin sarvajña ho svādhīn ho.\nŚivamag batāvanhār ho śat indrakari abhivandh ho,\nDukh-śokhar bhram-roghar santoṣkar sānand ho.",
        meaning:
          "O Suvidhinath, free of every kind of affliction, absorbed in your own soul -- endowed with every virtue, omniscient and fully independent. You show the path to liberation, honoured even by a hundred Indras. You remove sorrow and grief, remove delusion and disease, and bring contentment and bliss.",
      },
      {
        hindi: "आपका गुणगान जो जन करें नित अनुराग से।\nसब भय भयंकर स्वयं भयकरि भाग जावें भाग से।।\nतुम हो स्वयंभू नाथ निर्भय जगत को निर्भय किया।\nहो स्वयं शीतल मलयगिरि से जगत को शीतल किया।।१०।।",
        transliterationSimple:
          "Aapkaa gungaan jo jan karein nit anuraag se,\nSab bhay bhayankar swayam bhaykari bhaag jaaven bhaag se.\nTum ho Swayambhu naath nirbhay jagat ko nirbhay kiyaa,\nHo swayam sheetal malaygiri se jagat ko sheetal kiyaa.",
        transliterationDetailed:
          "Āpkā guṇgān jo jan kareṁ nit anurāg se,\nSab bhay bhayaṅkar svayaṁ bhaykari bhāg jāveṁ bhāg se.\nTum ho Svayambhū nāth nirbhay jagat ko nirbhay kiyā,\nHo svayaṁ śītal malaygiri se jagat ko śītal kiyā.",
        meaning:
          "Those who sing your praises with constant devotion -- every fearsome fear flees from them in fear. You, Lord Svayambhu, made the fearful world fearless; being yourself as cool as the sandal-mountain, you made the world cool.",
      },
      {
        hindi: "नरतन विदारन मरन-मारन मलिन भाव विलोक के।\nदुर्गन्धमय मलमूत्रमय नरकादि थल अवलोक के।।\nजिनके न उपजे जुगुप्सा समभाव महल-मसान में।\nवे श्रेय श्रेयस्कर शिरि (श्री) श्रेयांस विचरें ध्यान में।।११।।",
        transliterationSimple:
          "Nartan vidaaran maran-maaran malin bhaav vilok ke,\nDurgandhmay malmootramay narkaadi thal avlok ke.\nJinke na upaje jugupsaa samabhaav mahal-masaan mein,\nVe shrey shreyaskar shiri (shri) Shreyaans vicharein dhyaan mein.",
        transliterationDetailed:
          "Nara-tan vidāran maran-māran malin bhāv vilok ke,\nDurgandhmay mal-mūtramay narkādi thal avlok ke.\nJinke na upaje jugupsā samabhāv mahal-masān meṁ,\nVe śrey śreyaskar śiri (śrī) Śreyāṁs vicareṁ dhyān meṁ.",
        meaning:
          "Beholding the human body torn apart in death after death, beholding foul, filthy places such as hell -- in whom no revulsion arose, who kept the same equanimity in a palace or a cremation ground -- may that most beneficial Shreyansanath move within our meditation.",
      },
      {
        hindi: "निज आतमा के भान बिन सुख मानकर रति-राग में।\nसारा जगत नित जल रहा है वासना की आग में।।\nतुम वेद-विरहित वेदविद् जिन वासना से दूर हो।\nवसुपूज्यसुत बस आप ही आनन्द से भरपूर हो।।१२।।",
        transliterationSimple:
          "Nij aatmaa ke bhaan bin sukh maankar rati-raag mein,\nSaaraa jagat nit jal rahaa hai vaasnaa kee aag mein.\nTum ved-virahit vedvid jin vaasnaa se door ho,\nVasupoojysut bas aap hee aanand se bharpoor ho.",
        transliterationDetailed:
          "Nija ātmā ke bhān bin sukh mānkar rati-rāg meṁ,\nSārā jagat nit jal rahā hai vāsnā kī āg meṁ.\nTum ved-virahit vedvid jin vāsnā se dūr ho,\nVasupūjyasut bas āp hī ānand se bharpūr ho.",
        meaning:
          "Without awareness of one's own soul, mistaking pleasure for attachment and passion, the whole world is forever burning in the fire of desire. You, O Jin, are beyond the Vedas yet know them, and are far from desire; O son of Vasupujya, you alone are ever filled with bliss.",
      },
      {
        hindi: "बस आतमा ही बस रहा है जिनके विमल श्रद्धान में।\nनिज आतमा बस एक ही नित रहे जिनके ध्यान में।।\nसब द्रव्य-गुण-पर्याय जिनके नित्य झलकें ज्ञान में।\nवे वेद विरहित विमल जिन विचरें हमारे ध्यान में।।१३।।",
        transliterationSimple:
          "Bas aatmaa hee bas rahaa hai jinke vimal shraddhaan mein,\nNij aatmaa bas ek hee nit rahe jinke dhyaan mein.\nSab dravya-gun-paryaay jinke nitya jhalkein gyaan mein,\nVe ved virahit vimal jin vicharein hamaare dhyaan mein.",
        transliterationDetailed:
          "Bas ātmā hī bas rahā hai jinke vimal śraddhān meṁ,\nNija ātmā bas ek hī nit rahe jinke dhyān meṁ.\nSab dravya-guṇ-paryāy jinke nitya jhalkeṁ jñān meṁ,\nVe ved virahit vimal jin vicareṁ hamāre dhyān meṁ.",
        meaning:
          "In whose pure faith only the soul abides; in whose meditation only the one soul ever remains; in whose knowledge every substance, quality and mode forever shines -- may that pure Jin, beyond the Vedas, move within our meditation.",
      },
      {
        hindi: "तुम हो अनादि अनन्त जिन तुम ही अखण्डानन्त हो।\nतुम वेद विरहित वेदविद् शिवकामिनी के कन्त हो।।\nतुम सन्त हो भगवन्त हो तुम भवजलधि के अन्त हो।\nतुम में अनन्तानन्त गुण तुम ही अनन्तानन्त हो।।१४।।",
        transliterationSimple:
          "Tum ho anaadi anant jin tum hee akhandaanant ho,\nTum ved virahit vedvid shivkaaminee ke kant ho.\nTum sant ho bhagvant ho tum bhavjaladhi ke ant ho,\nTum mein anantaanant gun tum hee anantaanant ho.",
        transliterationDetailed:
          "Tum ho anādi anant jin tum hī akhaṇḍānant ho,\nTum ved virahit vedvid śivkāminī ke kant ho.\nTum sant ho bhagvant ho tum bhavajaladhi ke ant ho,\nTum meṁ anantānant guṇ tum hī anantānant ho.",
        meaning:
          "You are beginningless and endless, O Jin; you alone are unbroken and infinite. Beyond the Vedas yet knowing them, you are the Lord of liberation. You are a saint, you are the Lord, you are the end of the ocean of worldly existence; infinite virtues are within you -- you alone are infinite upon infinite.",
      },
      {
        hindi: "हे धर्म जिन सद्धर्ममय सत् धर्म के आधार हो।\nभवभूमि का परित्याग कर जिन भवजलधि के पार हो।।\nआराधना आराधकर आराधना के सार हो।\nधरमातमा परमातमा तुम धर्म के अवतार हो।।१५।।",
        transliterationSimple:
          "He Dharm jin saddharmamay sat dharm ke aadhaar ho,\nBhavbhoomi kaa parityaag kar jin bhavjaladhi ke paar ho.\nAaraadhanaa aaraadhkar aaraadhanaa ke saar ho,\nDharmaatmaa parmaatmaa tum dharm ke avataar ho.",
        transliterationDetailed:
          "He Dharm jin saddharmamay sat dharm ke ādhār ho,\nBhavbhūmi kā parityāg kar jin bhavajaladhi ke pār ho.\nĀrādhanā ārādhkar ārādhanā ke sār ho,\nDharmātmā paramātmā tum dharm ke avatār ho.",
        meaning:
          "O Dharmanath, made of true dharma, you are the foundation of true religion. Having abandoned worldly ground, O Jin, you have crossed to the far shore of the ocean of the world. Having practised devotion, you are the very essence of devotion; soul of righteousness, Supreme Soul, you are the very incarnation of dharma.",
      },
      {
        hindi: "मोहक महल मणिमाल मण्डित सम्पदा षट्खण्ड की।\nहे शान्ति जिन तृण-सम तजी ली शरण एक अखण्ड की।।\nपायो अखण्डानन्द दर्शन ज्ञान बीरज आपने।\nसंसार पार उतारनी दी देशना प्रभु आपने।।१६।।",
        transliterationSimple:
          "Mohak mahal manimaal mandit sampadaa shatkhand kee,\nHe Shaanti jin trin-sam tajee lee sharan ek akhand kee.\nPaayo akhandaanand darshan gyaan beeraj aapne,\nSansaar paar utaarnee dee deshnaa prabhu aapne.",
        transliterationDetailed:
          "Mohak mahal maṇimāl maṇḍit sampadā ṣaṭkhaṇḍ kī,\nHe Śānti jin tṛṇ-sam tajī lī śaraṇ ek akhaṇḍ kī.\nPāyo akhaṇḍānand darśan jñān bīraj āpne,\nSansār pār utārnī dī deśnā prabhu āpne.",
        meaning:
          "The enchanting palace, decked with jewelled garlands, the wealth of the six regions -- O Shantinath, you gave it all up like straw and took refuge in the one, the unbroken. You attained unbroken bliss, vision, knowledge and strength; and you gave the teaching that ferries the world across.",
      },
      {
        hindi: "मनहर मदन तन वरन सुवरन सुमन सुमन-समान ही।\nधन-धान्य पूरित सम्पदा अगणित कुबेर-समान थी।।\nथीं उर्वशी सी अंगनाएँ संगिनी संसार की।\nश्री कुन्थु जिन तृण-सम तर्जी ली राह भवधि पार की।।१७।।",
        transliterationSimple:
          "Manhar madan tan varan suvaran suman suman-samaan hee,\nDhan-dhaany poorit sampadaa agnit Kuber-samaan thee.\nTheen Urvashee see anganaaein sangini sansaar kee,\nShri Kunthu jin trin-sam tarjee lee raah bhavdhi paar kee.",
        transliterationDetailed:
          "Manhar madan tan varan suvaran suman suman-samān hī,\nDhan-dhānya pūrit sampadā agaṇit Kuber-samān thī.\nThīṁ Urvaśī sī aṅganāeṁ saṅginī sansār kī,\nŚrī Kunthu jin tṛṇ-sam tarjī lī rāh bhavadhi pār kī.",
        meaning:
          "A form as beautiful and bright as a fresh flower; wealth and grain beyond counting, equal to Kubera's own; companions in life as graceful as Urvashi -- Shri Kunthunath renounced it all like straw and took the path that crosses the ocean of worldly existence.",
      },
      {
        hindi: "हे चक्रधर! जग जीतकर षट्खण्ड को निज वश किया।\nपर आतमा निज नित्य एक अखण्ड तुम अपना लिया।।\nहे ज्ञानघन अरनाथ जिन! धन-धान्य को ठुकरा दिया।\nविज्ञानघन आनन्दघन निज आतमा को पा लिया।।१८।।",
        transliterationSimple:
          "He Chakradhar! Jag jeetkar shatkhand ko nij vash kiyaa,\nPar aatmaa nij nitya ek akhand tum apnaa liyaa.\nHe Gyaanghan Arnaath jin! Dhan-dhaany ko thukraa diyaa,\nVigyaanghan aanandghan nij aatmaa ko paa liyaa.",
        transliterationDetailed:
          "He Cakradhar! Jag jītkar ṣaṭkhaṇḍ ko nij vaś kiyā,\nPar ātmā nij nitya ek akhaṇḍ tum apnā liyā.\nHe Jñānghan Aranāth jin! Dhan-dhānya ko ṭhukrā diyā,\nVijñānghan ānandghan nija ātmā ko pā liyā.",
        meaning:
          "O wheel-bearer, having conquered the world and brought the six regions under your rule, you made your own eternal, single, unbroken soul your own. O Aranath, dense with knowledge, you cast aside wealth and grain and attained your own soul, dense with understanding and bliss.",
      },
      {
        hindi: "हे दुपद-त्यागी मल्लिजिन! मन-मल्ल का मर्दन किया।\nएकान्त पीड़ित जगत को अनेकान्त का दर्शन दिया।।\nतुमने बताया जगत को क्रमबद्ध है सब परिणमन।\nहे सर्वदर्शी सर्वज्ञानी! नमन हो शत-शत नमन।।१९।।",
        transliterationSimple:
          "He dupad-tyaagee Mallijin! Man-mall kaa mardan kiyaa,\nEkaant peedit jagat ko anekaant kaa darshan diyaa.\nTumne bataayaa jagat ko kramabaddh hai sab parinaman,\nHe sarvadarshee sarvagyaanee! Naman ho shat-shat naman.",
        transliterationDetailed:
          "He dupad-tyāgī Mallijin! Man-mall kā mardan kiyā,\nEkānt pīḍit jagat ko anekānt kā darśan diyā.\nTumne batāyā jagat ko kramabaddh hai sab pariṇaman,\nHe sarvadarśī sarvajñānī! Naman ho śat-śat naman.",
        meaning:
          "O Mallinath, renouncer of possession! You crushed the wrestler that is the mind. To a world afflicted by one-sided views, you gave the vision of Anekanta (many-sidedness), showing that every change unfolds in an ordered sequence. O all-seeing, all-knowing one, salutations, a hundred and a hundred salutations.",
      },
      {
        hindi: "मुनिमनहरण श्री मुनिसुव्रत चतुष्पद परित्याग कर।\nनिजपद विहारी हो गये तुम अपद पद परिहार कर।।\nपाया परमपद आपने निज आतमा पहिचान कर।\nनिज आतमा को जानकर निज आतमा का ध्यान धर।।२०।।",
        transliterationSimple:
          "Munimanharan Shri Munisuvrat chatushpad parityaag kar,\nNijpad vihaaree ho gaye tum apad pad parihaar kar.\nPaayaa paramapad aapne nij aatmaa pahichaan kar,\nNij aatmaa ko jaankar nij aatmaa kaa dhyaan dhar.",
        transliterationDetailed:
          "Munimanharaṇ Śrī Munisuvrat catuṣpad parityāg kar,\nNijapad vihārī ho gaye tum apad pad parihār kar.\nPāyā paramapad āpne nija ātmā pahicān kar,\nNija ātmā ko jānkar nija ātmā kā dhyān dhar.",
        meaning:
          "Munisuvrata, who captivates the hearts of monks, renounced the fourfold and became a wanderer in his own true state, setting aside every unworthy state. Having recognised his own soul, he attained the supreme state; having known his own soul, he meditated upon it.",
      },
      {
        hindi: "निजपद विहारी धरमधारी धरममय धरमातमा।\nनिज आतमा को साध पाया परमपद परमातमा।।\nहे यान-त्यागी नमी! तेरी शरण में मम आतमा।\nतूने बताया जगत को सब आतमा परमातमा।।२१।।",
        transliterationSimple:
          "Nijpad vihaaree dharamdhaaree dharammay dharmaatmaa,\nNij aatmaa ko saadh paayaa paramapad parmaatmaa.\nHe yaan-tyaagee Namee! Teree sharan mein mam aatmaa,\nToone bataayaa jagat ko sab aatmaa parmaatmaa.",
        transliterationDetailed:
          "Nijapad vihārī dharamdhārī dharammay dharmātmā,\nNija ātmā ko sādh pāyā paramapad paramātmā.\nHe yān-tyāgī Namī! Terī śaraṇ meṁ mam ātmā,\nTūne batāyā jagat ko sab ātmā paramātmā.",
        meaning:
          "Wandering in his own true state, upholder of dharma, made of dharma -- he attained the supreme state, the Supreme Soul, by practising his own soul. O Naminath, renouncer of the chariot, my soul takes refuge in you; you showed the world that all is soul, the Supreme Soul.",
      },
      {
        hindi: "आसन बिना आसन जमा गिरनार पर घनश्याम तन।\nसद्बोध पाया आपने जग को बताया नेमि जिन।।\nस्वाधीन है प्रत्येक जन स्वाधीन है प्रत्येक कन।\nपरद्रव्य से है पृथक् पर हर द्रव्य अपने में मगन।।२२।।",
        transliterationSimple:
          "Aasan binaa aasan jamaa Girnaar par ghanshyaam tan,\nSadbodh paayaa aapne jag ko bataayaa Nemi jin.\nSwaadheen hai pratyek jan swaadheen hai pratyek kan,\nParadravya se hai prithak par har dravya apne mein magan.",
        transliterationDetailed:
          "Āsan binā āsan jamā Girnār par ghanaśyām tan,\nSadbodh pāyā āpne jag ko batāyā Nemi jin.\nSvādhīn hai pratyek jan svādhīn hai pratyek kan,\nParadravya se hai pṛthak par har dravya apne meṁ magan.",
        meaning:
          "Seated without a seat, your dark form still upon Girnar, you attained right understanding -- O Neminath, you showed the world that every being is independent, every particle is independent. Distinct from every other substance, each substance rests absorbed within itself.",
      },
      {
        hindi: "तुम हो अचेलक पार्श्वप्रभु! वस्त्रादि सब परित्याग कर।\nतुम वीतरागी हो गये रागादिभाव निवार कर।।\nतुमने बताया जगत को प्रत्येक कण स्वाधीन है।\nकर्ता न धर्ता कोई है अणु-अणु स्वयं में लीन है।।२३।।",
        transliterationSimple:
          "Tum ho achelak Paarshvaprabhu! Vastraadi sab parityaag kar,\nTum veetraagee ho gaye raagaadibhaav nivaar kar.\nTumne bataayaa jagat ko pratyek kan swaadheen hai,\nKartaa na dhartaa koee hai anu-anu swayam mein leen hai.",
        transliterationDetailed:
          "Tum ho acelak Pārśvaprabhu! Vastrādi sab parityāg kar,\nTum vītrāgī ho gaye rāgādibhāv nivār kar.\nTumne batāyā jagat ko pratyek kaṇ svādhīn hai,\nKartā na dhartā koī hai aṇu-aṇu svayaṁ meṁ līna hai.",
        meaning:
          "O Lord Parshva, you are unclothed! Having renounced garments and everything else, having removed attachment and every such feeling, you became free of passion. You showed the world that every particle is independent -- no one is its doer or sustainer; every atom rests absorbed within itself.",
      },
      {
        hindi: "हे पाणिपात्री वीर जिन! जग को बताया आपने।\nजग-जाल में अबतक फँसाया पुण्य एवं पाप ने।।\nपुण्य एवं पाप से है पार मग सुख-शान्ति का।\nयह धर्म का है मरम यह विस्फोट आतम क्रान्ति का।।२४।।",
        transliterationSimple:
          "He Paanipaatree Veer jin! Jag ko bataayaa aapne,\nJag-jaal mein abtak phansaayaa punya evam paap ne.\nPunya evam paap se hai paar mag sukh-shaanti kaa,\nYah dharm kaa hai maram yah visphot aatam kraanti kaa.",
        transliterationDetailed:
          "He Pāṇipātrī Vīra jin! Jag ko batāyā āpne,\nJag-jāl meṁ abtak phansāyā puṇya evaṁ pāp ne.\nPuṇya evaṁ pāp se hai pār mag sukh-śānti kā,\nYah dharm kā hai maram yah visphoṭ ātam krānti kā.",
        meaning:
          "O Veer Jin, who received alms in cupped hands, you showed the world -- until now, merit and demerit alike have trapped it in the web of the world. The path to happiness and peace lies beyond both merit and demerit; this is the very secret of dharma, the explosion of a revolution within the soul.",
      },
    ],
    outro: {
      hindi: "पुण्य-पाप से पार, निज आतम का धर्म है।\nमहिमा अपरम्पार, परम अहिंसा है यही।।",
      transliterationSimple: "Punya-paap se paar, nij aatam kaa dharm hai,\nMahimaa aparampaar, param ahinsaa hai yahee.",
      transliterationDetailed: "Puṇya-pāp se pār, nija ātam kā dharm hai,\nMahimā aparampār, param ahiṁsā hai yahī.",
      meaning: "Beyond merit and demerit lies the true dharma of one's own soul; this alone is the boundless glory of supreme non-violence.",
      label: "Closing soratha",
    },
    about:
      "A 24-verse hymn honouring each of the 24 Tirthankaras in turn. A note printed with the original explains its structure: each verse pairs one Tirthankara with the giving-up of one kind of parigraha (possession/attachment), so that by the 24th verse all 24 forms of possession have been addressed.",
  },

  {
    id: "dev-stuti-budhajan",
    title: "Dev Stuti",
    subtitle: "देव-स्तुति (पं. बुधजन कृत)",
    category: "stavan",
    language: "Hindi (Braj)",
    readingTimeMin: 3,
    verified: true,
    source: {
      text: "Transcribed from the Jinendra Archana PDF, page 55, by Pandit Budhajan.",
      pdf: true,
      sourcePage: 55,
    },
    sect: "Common Jain practice",
    audio: null,
    lines: [
      {
        hindi: "प्रभु पतित पावन, मैं अपावन, चरन आयो सरन जी।\nयो विरद आप निहार स्वामी, मेट जामन-मरन जी।।",
        transliterationSimple: "Prabhu patit paavan, main apaavan, charan aayo saran jee,\nYo virad aap nihaar swaamee, met jaaman-maran jee.",
        transliterationDetailed: "Prabhu patit pāvan, maiṁ apāvan, caran āyo saran jī,\nYo virad āp nihār svāmī, meṭ jāman-maran jī.",
        meaning: "O Lord, purifier of the fallen, I am impure; I come to take refuge at your feet. Seeing this, your very nature, O Master, erase my birth and death.",
      },
      {
        hindi: "तुम ना पिछान्यो आन मान्यो, देव विविध प्रकार जी।\nया बुद्धिसेती निज न जान्यो, भ्रम गिन्यो हितकार जी।।",
        transliterationSimple: "Tum naa pichhaanyo aan maanyo, dev vividh prakaar jee,\nYaa buddhisetee nij na jaanyo, bhram ginyo hitkaar jee.",
        transliterationDetailed: "Tum nā pichānyo ān mānyo, dev vividh prakār jī,\nYā buddhisetī nij na jānyo, bhram ginyo hitkār jī.",
        meaning: "I did not recognise you, and took other gods of many kinds to be true instead. With this understanding I did not know my own self, and mistook delusion for my well-wisher.",
      },
      {
        hindi: "भव विकट वन में करम वैरी, ज्ञान धन मेरो हर्यो।\nतब इष्ट भूल्यो भ्रष्ट होय, अनिष्ट गति धरतो फिर्यो।।",
        transliterationSimple: "Bhav vikat van mein karam vairee, gyaan dhan mero haryo,\nTab isht bhoolyo bhrasht hoy, anisht gati dharto phiryo.",
        transliterationDetailed: "Bhav vikaṭ van meṁ karam vairī, jñān dhan mero haryo,\nTab iṣṭ bhūlyo bhraṣṭ hoy, aniṣṭ gati dharto phiryo.",
        meaning: "In the terrible forest of worldly existence, the enemy karma stole away my wealth of knowledge. Then, having lost my true goal and fallen, I wandered through unwanted states of being.",
      },
      {
        hindi: "धन घड़ी यो धन दिवस यो ही, धन जनम मेरो भयो।\nअब भाग्य मेरो उदय आयो, दरश प्रभु को लख लयो।।",
        transliterationSimple: "Dhan ghadee yo dhan divas yo hee, dhan janam mero bhayo,\nAb bhaagya mero uday aayo, darash prabhu ko lakh layo.",
        transliterationDetailed: "Dhan ghaḍī yo dhan divas yo hī, dhan janam mero bhayo,\nAb bhāgya mero uday āyo, daraś prabhu ko lakh layo.",
        meaning: "Blessed is this moment, blessed is this day, blessed indeed is my birth. Now my fortune has risen, for I have beheld the sight of the Lord.",
      },
      {
        hindi: "छवि वीतरागी नगन मुद्रा, दृष्टि नासा पै धरैं।\nवसु प्रातिहार्य अनन्त गुण जुत, कोटि रविछवि को हरैं।।",
        transliterationSimple: "Chhavi veetraagee nagan mudraa, drishti naasaa pai dharein,\nVasu praatihaary anant gun jut, koti ravichhavi ko harein.",
        transliterationDetailed: "Chavi vītrāgī nagan mudrā, dṛṣṭi nāsā pai dhareṁ,\nVasu prātihārya anant guṇ jut, koṭi ravichavi ko hareṁ.",
        meaning: "Your form is passionless and unclothed, your gaze resting at the tip of your nose. Endowed with the eight divine accompaniments and infinite virtues, your radiance outshines a million suns.",
      },
      {
        hindi: "मिट गयो तिमिर मिथ्यात मेरो, उदय रवि आतम भयो।\nमो उर हरष ऐसो भयो, मनु रंक चिंतामणि लयो।।",
        transliterationSimple: "Mit gayo timir mithyaat mero, uday ravi aatam bhayo,\nMo ur harash aiso bhayo, manu rank chintaamani layo.",
        transliterationDetailed: "Miṭ gayo timir mithyāt mero, uday ravi ātam bhayo,\nMo ur haraṣ aiso bhayo, manu raṅk cintāmaṇi layo.",
        meaning: "The darkness of my false belief has vanished; the sun of my true self has risen. My heart filled with such joy, as if a pauper had found a wish-granting jewel.",
      },
      {
        hindi: "मैं हाथ जोड़ नवाय मस्तक, वीनऊँ तुव चरन जी।\nसर्वोत्कृष्ट त्रिलोकपति जिन, सुनहु तारन-तरन जी।।",
        transliterationSimple: "Main haath jod navaay mastak, veenaoon tuv charan jee,\nSarvotkrisht trilokpati jin, sunahu taaran-taran jee.",
        transliterationDetailed: "Maiṁ hāth joḍ navāy mastak, vīnaūṁ tuv caran jī,\nSarvotkṛṣṭ trilokpati jin, sunahu tāran-taran jī.",
        meaning: "With folded hands and bowed head, I entreat at your feet. O supreme Lord of the three worlds, Jina, hear me -- you who ferry souls across.",
      },
      {
        hindi: "जाचूँ नहीं सुरवास पुनि, नरराज परिजन साथ जी।\n'बुध' जाचहुँ तुव भक्ति भव-भव, दीजिये शिवनाथ जी।।",
        transliterationSimple: "Jaachoon naheen survaas puni, narraaj parijan saath jee,\n'Budh' jaachahun tuv bhakti bhav-bhav, deejiye Shivnaath jee.",
        transliterationDetailed: "Jācūṁ nahīṁ survās puni, narrāj parijan sāth jī,\n'Budh' jācahuṁ tuv bhakti bhav-bhav, dījiye Śivnāth jī.",
        meaning: "I do not ask for the abode of the gods, nor for kingship, nor for family. \"Budhajan\" asks only for devotion to you, birth after birth -- grant me this, O Lord of liberation.",
      },
    ],
    about:
      "A devotional hymn (harigitika metre) by the eighteenth-century poet Pandit Budhajan, expressing a devotee's confession of past confusion and the joy of finally beholding the passionless Jina.",
  },

  {
    id: "darshan-stuti-daulatram",
    title: "Darshan Stuti",
    subtitle: "दर्शन-स्तुति (पं. दौलतराम कृत)",
    category: "stavan",
    language: "Hindi",
    readingTimeMin: 2,
    verified: true,
    source: {
      text: "Transcribed from the Jinendra Archana PDF, page 53, by Pandit Daulatram.",
      pdf: true,
      sourcePage: 53,
    },
    sect: "Common Jain practice",
    audio: null,
    lines: [
      {
        hindi: "निरखत जिनचन्द्र-वदन स्व-पद सुरुचि आई।\nप्रकटी निज आन की पिछान ज्ञान भान की।\nकला उद्योत होत काम-जामनी पलाई।।निरखत.।।",
        transliterationSimple:
          "Nirakhat jinchandra-vadan sva-pad suruchi aaee,\nPrakatee nij aan kee pichhaan gyaan bhaan kee,\nKalaa udyot hot kaam-jaamnee palaaee. Nirakhat...",
        transliterationDetailed:
          "Nirakhat jinacandra-vadan sva-pad suruci āī,\nPrakaṭī nija ān kī pichān jñān bhān kī,\nKalā udyot hot kām-jāmnī palāī. Nirakhat...",
        meaning: "Beholding the Jina's moon-like face, a taste for my own true state arose. My own true recognition was revealed, as the sun of knowledge dawned; the light of true understanding appeared, and the night of desire fled. (Refrain: beholding...)",
      },
      {
        hindi: "शाश्वत आनन्द स्वाद पायो विनस्यो विषाद।\nआन में अनिष्ट-इष्ट कल्पना नसाई।।निरखत.।।",
        transliterationSimple: "Shaashwat aanand svaad paayo vinasyo vishaad,\nAan mein anisht-isht kalpanaa nasaaee. Nirakhat...",
        transliterationDetailed: "Śāśvat ānand svād pāyo vinasyo viṣād,\nĀn meṁ aniṣṭ-iṣṭ kalpanā nasāī. Nirakhat...",
        meaning: "I tasted eternal bliss, and all sorrow was destroyed; the imagining of good and bad in other things vanished. (Refrain: beholding...)",
      },
      {
        hindi: "साधी निज साध की समाधि मोह-व्याधि की।\nउपाधि को विराधि कैं आराधना सुहाई।।निरखत.।।",
        transliterationSimple: "Saadhee nij saadh kee samaadhi moh-vyaadhi kee,\nUpaadhi ko viraadhi kain aaraadhanaa suhaaee. Nirakhat...",
        transliterationDetailed: "Sādhī nija sādh kī samādhi moh-vyādhi kī,\nUpādhi ko virādhi kaiṁ ārādhanā suhāī. Nirakhat...",
        meaning: "I attained the true meditative state of my own, curing the disease of delusion; having overcome all outer entanglement, this devotion became delightful. (Refrain: beholding...)",
      },
      {
        hindi: "धन दिन छिन आज सुगुनि चिन्ते जिनराज अबै।\nसुधरो सब काज 'दौल' अचल रिद्धि पाई।।निरखत.।।",
        transliterationSimple: "Dhan din chhin aaj suguni chinte jinraaj abai,\nSudharo sab kaaj 'Daul' achal riddhi paaee. Nirakhat...",
        transliterationDetailed: "Dhan din chin āj suguni cinte jinrāj abai,\nSudharo sab kāj 'Daul' acal riddhi pāī. Nirakhat...",
        meaning: "Blessed is this day, this moment, now that I truly think of the Jina Lord. May all my affairs be set right -- \"Daul\" (the poet) has attained unshakeable prosperity. (Refrain: beholding...)",
      },
    ],
    about:
      "A short devotional hymn by the well-known Jain poet Pandit Daulatram (also known for the Chhah Dhala), sung on beholding the image of the Jina.",
  },

  {
    id: "uvasaggaharam-stotra",
    title: "Uvasaggaharam Stotra",
    subtitle: "Prayer to Parshvanatha",
    category: "stavan",
    language: "Prakrit",
    readingTimeMin: 2,
    verified: false,
    source: {
      text: null,
      pdf: false,
    },
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
      "A well-known stotra invoking Parshvanatha, traditionally attributed to Acharya Bhadrabahu. This prayer is not part of the Jinendra Archana PDF supplied for this site, so it is left as a template -- do not fill it in without a separate, checked source.",
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
    source: {
      text: null,
      pdf: false,
    },
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
      "Aarti songs differ widely between mandirs and regions, and this one is not part of the Jinendra Archana PDF supplied for this site. Add your own mandir's verified aarti text here rather than a generic one.",
    needsVerification: true,
  },
];

export function getPrayerById(id) {
  return prayers.find((p) => p.id === id) || null;
}
