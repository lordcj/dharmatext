/**
 * SEO Content Generator
 * 
 * Auto-generates long-form, unique prose for every aarti and katha page.
 * This addresses the critical "content thin-ness" issue — Google needs
 * 300-500+ words of contextual content to rank pages effectively.
 * 
 * All content is server-rendered and visible to crawlers.
 */

// ─── Aarti SEO Content ─────────────────────────────────────────────

interface AartiSEOInput {
    title: string;
    titleHindi: string;
    description: string;
    deity: string;
    verseCount: string;
    slug: string;
}

export interface AartiSEOContent {
    aboutSection: string;
    aboutSectionHindi: string;
    whenToRecite: string;
    benefits: string[];
    howToRecite: { step: string; description: string }[];
}

const DEITY_CONTEXT: Record<string, {
    domain: string;
    blessings: string;
    festivals: string[];
    bestDay: string;
    bestTime: string;
    significance: string;
}> = {
    'Hanuman': {
        domain: 'strength, courage, and devotion',
        blessings: 'protection from evil spirits, physical strength, and unwavering courage',
        festivals: ['Hanuman Jayanti', 'Tuesday Puja', 'Saturday Puja'],
        bestDay: 'Tuesday and Saturday',
        bestTime: 'morning after bath or evening during Sandhya Aarti',
        significance: 'Lord Hanuman, the mighty son of Vayu (Wind God) and devoted servant of Lord Rama, represents the highest form of bhakti (devotion). His worship removes fear, anxiety, and negative energies.',
    },
    'Trimurti': {
        domain: 'universal blessings, creation, preservation, and destruction',
        blessings: 'overall well-being, harmony in life, and spiritual awakening',
        festivals: ['Daily Evening Aarti', 'Diwali', 'All Hindu festivals'],
        bestDay: 'Every day',
        bestTime: 'evening Sandhya Aarti time (dusk)',
        significance: 'This universal prayer addresses Jagdish (Lord of the Universe), encompassing Brahma, Vishnu, and Shiva — the three cosmic forces of creation, preservation, and dissolution.',
    },
    'Ganesha': {
        domain: 'wisdom, new beginnings, and obstacle removal',
        blessings: 'removal of obstacles, success in ventures, and intellectual growth',
        festivals: ['Ganesh Chaturthi', 'Wednesday Puja', 'Before any auspicious event'],
        bestDay: 'Wednesday',
        bestTime: 'at the start of any puja or new venture',
        significance: 'Lord Ganesha, the elephant-headed God, is always worshipped first among all deities. He is the remover of obstacles (Vighnaharta) and the lord of beginnings.',
    },
    'Shiva': {
        domain: 'destruction of evil, meditation, and transformation',
        blessings: 'inner peace, detachment from worldly desires, and spiritual liberation',
        festivals: ['Maha Shivaratri', 'Monday Puja', 'Shravan Month'],
        bestDay: 'Monday',
        bestTime: 'early morning (Brahma Muhurta) or evening Sandhya time',
        significance: 'Lord Shiva, the Mahadeva and Destroyer in the Holy Trinity, represents the transformative power of the universe. His worship purifies the soul and grants moksha (liberation).',
    },
    'Krishna': {
        domain: 'love, divine play, and spiritual wisdom',
        blessings: 'devotion, inner joy, and liberation through knowledge',
        festivals: ['Janmashtami', 'Wednesday Puja', 'Holi'],
        bestDay: 'Wednesday',
        bestTime: 'midnight (Janmashtami), or daily morning/evening',
        significance: 'Lord Krishna, the eighth avatar of Lord Vishnu, is the divine teacher of the Bhagavad Gita. He represents the perfect balance of worldly duties and spiritual truth.',
    },
    'Durga': {
        domain: 'power, protection, and destruction of evil',
        blessings: 'courage, protection from enemies, and victory over obstacles',
        festivals: ['Navratri', 'Durga Puja', 'Vijayadashami'],
        bestDay: 'Friday and during Navratri',
        bestTime: 'during Sandhya Aarti or at the beginning of Navratri puja',
        significance: 'Goddess Durga, the invincible warrior goddess, is the supreme manifestation of Shakti (divine feminine energy). She protects her devotees from all forms of evil.',
    },
    'Lakshmi': {
        domain: 'wealth, prosperity, and fortune',
        blessings: 'financial abundance, marital happiness, and material well-being',
        festivals: ['Diwali', 'Friday Puja', 'Sharad Purnima'],
        bestDay: 'Friday',
        bestTime: 'evening during Diwali Puja or regular Friday evening',
        significance: 'Goddess Lakshmi, the consort of Lord Vishnu, is the divine mother of wealth and prosperity. Her worship brings abundance in all forms — material, spiritual, and emotional.',
    },
    'Rama': {
        domain: 'righteousness, duty, and moral values',
        blessings: 'courage, dharma (righteousness), and a noble character',
        festivals: ['Ram Navami', 'Dussehra', 'Daily morning prayer'],
        bestDay: 'Every day',
        bestTime: 'morning during daily prayer',
        significance: 'Lord Rama, the seventh avatar of Vishnu and the hero of the Ramayana, is the embodiment of dharma (righteousness). His life is the supreme example of duty, honor, and devotion.',
    },
    'Saraswati': {
        domain: 'knowledge, music, arts, and wisdom',
        blessings: 'academic excellence, creative talent, and clarity of mind',
        festivals: ['Vasant Panchami', 'Before exams', 'Thursday Puja'],
        bestDay: 'Thursday',
        bestTime: 'morning, especially during study time',
        significance: 'Goddess Saraswati, seated on a white lotus with the Veena, is the divine patron of knowledge, wisdom, and the arts. Students and scholars seek her blessings for success.',
    },
    'Parvati': {
        domain: 'marital bliss, fertility, and feminine power',
        blessings: 'happy married life, strong family bonds, and inner strength',
        festivals: ['Teej', 'Gauri Puja', 'Monday (with Shiva)'],
        bestDay: 'Monday',
        bestTime: 'evening puja',
        significance: 'Goddess Parvati, the divine consort of Lord Shiva, represents the ideal wife, mother, and devotee. She is the gentle form of Shakti (divine feminine power).',
    },
    'Sai Baba': {
        domain: 'unity, faith, and compassion',
        blessings: 'peace of mind, resolution of difficulties, and spiritual progress',
        festivals: ['Sai Baba Punyatithi', 'Thursday Puja', 'Guru Purnima'],
        bestDay: 'Thursday',
        bestTime: 'morning and evening aarti at Sai temples',
        significance: 'Shirdi Sai Baba, the revered saint who preached "Sabka Malik Ek" (One God for all), transcended religious boundaries. His devotees seek his blessings for solutions to all life problems.',
    },
    'Kali': {
        domain: 'destruction of evil, time, and fierce protection',
        blessings: 'protection from dark forces, courage, and empowerment',
        festivals: ['Kali Puja', 'Diwali (in Bengal)', 'Navratri'],
        bestDay: 'Tuesday and Saturday',
        bestTime: 'midnight or during Kali Puja',
        significance: 'Goddess Kali, the fierce form of Shakti, destroys evil and ignorance. Despite her fearsome appearance, she is the compassionate mother who protects her devotees from harm.',
    },
    'Divinity': {
        domain: 'universal consciousness and enlightenment',
        blessings: 'spiritual awakening, inner light, and divine wisdom',
        festivals: ['Daily Sandhya', 'Guru Purnima', 'All auspicious occasions'],
        bestDay: 'Every day',
        bestTime: 'sunrise, noon, and sunset (Sandhya times)',
        significance: 'This sacred invocation addresses the universal divine force that pervades all creation, beyond any specific form or name.',
    },
    'Ganga': {
        domain: 'purification, salvation, and spiritual cleansing',
        blessings: 'purification of sins, spiritual merit, and liberation',
        festivals: ['Ganga Dussehra', 'Maha Shivaratri', 'Daily Ganga Aarti'],
        bestDay: 'Every day',
        bestTime: 'evening, especially during Ganga Aarti at Haridwar/Varanasi',
        significance: 'Mother Ganga, the holiest river in Hinduism, descended from heaven to earth by Lord Shiva\'s grace. Her waters are believed to purify sins and grant moksha.',
    },
    'Santoshi': {
        domain: 'contentment, family happiness, and wish fulfillment',
        blessings: 'family harmony, wish fulfillment, and contentment',
        festivals: ['Friday Vrat', 'Santoshi Mata Vrat'],
        bestDay: 'Friday',
        bestTime: 'morning or evening Friday Puja',
        significance: 'Goddess Santoshi, the Mother of Satisfaction, is the daughter of Lord Ganesha. Her Friday Vrat is immensely popular for fulfilling wishes and bringing contentment.',
    },
    'Shani': {
        domain: 'justice, karma, and discipline',
        blessings: 'relief from Shani Dasha, karmic balance, and discipline',
        festivals: ['Shani Jayanti', 'Saturday Puja', 'Shani Amavasya'],
        bestDay: 'Saturday',
        bestTime: 'evening Saturday puja, preferably at sunset',
        significance: 'Lord Shani, the God of Justice and son of Surya (Sun God), governs the karmic consequences of one\'s actions. His worship removes the adverse effects of Shani Dasha.',
    },
    'Surya': {
        domain: 'health, vitality, and life force',
        blessings: 'good health, confidence, and leadership qualities',
        festivals: ['Makar Sankranti', 'Chhath Puja', 'Sunday Puja'],
        bestDay: 'Sunday',
        bestTime: 'sunrise, during Surya Namaskar',
        significance: 'Lord Surya, the Sun God, is the source of all life and energy. His worship cures diseases, enhances vitality, and bestows brightness of intellect.',
    },
    'Tulsi': {
        domain: 'purity, devotion, and household sanctity',
        blessings: 'purity of mind, health, and household harmony',
        festivals: ['Tulsi Vivah', 'Daily evening worship', 'Kartik Month'],
        bestDay: 'Every day',
        bestTime: 'evening, during Tulsi Aarti',
        significance: 'Tulsi (Holy Basil) is considered the earthly form of Goddess Vrinda. Every Hindu household worships the Tulsi plant for its spiritual significance and medicinal properties.',
    },
};

function getDeityContext(deity: string) {
    return DEITY_CONTEXT[deity] || DEITY_CONTEXT['Divinity'];
}

export function generateAartiSEOContent(input: AartiSEOInput): AartiSEOContent {
    const ctx = getDeityContext(input.deity);

    const aboutSection = `${input.title} (${input.titleHindi}) is one of the most revered and widely recited devotional hymns in Hinduism. ${input.description} This sacred prayer, consisting of ${input.verseCount} verses, is dedicated to ${input.deity === 'Divinity' ? 'the universal divine force' : input.deity} and is an integral part of Hindu worship traditions across India and the world. ${ctx.significance} Reciting ${input.title} with sincere devotion is believed to invoke the blessings of ${ctx.domain}. The prayer is traditionally chanted in Devanagari script, and this page provides the complete text with Hindi meaning, English transliteration, and verse-by-verse interpretation to help devotees understand and recite it correctly.`;

    const aboutSectionHindi = `${input.titleHindi} (${input.title}) हिंदू धर्म में सबसे पवित्र और व्यापक रूप से पढ़ी जाने वाली भक्ति रचनाओं में से एक है। यह पवित्र प्रार्थना ${input.deity === 'Divinity' ? 'सार्वभौमिक दिव्य शक्ति' : input.deity} को समर्पित है और भारत भर में हिंदू पूजा परंपराओं का अभिन्न अंग है। इसे श्रद्धा से पढ़ने से ${ctx.domain} की कृपा प्राप्त होती है।`;

    const whenToRecite = `The best time to recite ${input.title} is ${ctx.bestTime}. It is especially powerful on ${ctx.bestDay}. The prayer holds special significance during ${ctx.festivals.join(', ')}. For maximum spiritual benefit, recite it after taking a bath, sitting in a clean and peaceful place, facing east or north, with a lit diya (lamp) and incense.`;

    const benefits = [
        `Invokes the divine blessings of ${input.deity === 'Divinity' ? 'the Supreme Being' : input.deity} for ${ctx.blessings}.`,
        `Purifies the mind and surroundings, creating a sacred atmosphere for worship.`,
        `Helps in developing concentration, peace of mind, and emotional stability.`,
        `Regular recitation builds a strong spiritual connection and deepens devotion (bhakti).`,
        `The vibrations of the sacred syllables have a calming effect on the nervous system.`,
        `Traditionally believed to protect the household from negative energies and evil influences.`,
    ];

    const howToRecite = [
        { step: 'Prepare your space', description: 'Clean the puja area. Place an idol or image of the deity. Light a diya (oil lamp) and incense (agarbatti).' },
        { step: 'Purify yourself', description: 'Take a bath or wash your hands, feet, and face. Wear clean clothes. Sit facing east or north on a clean mat or asana.' },
        { step: 'Begin with Om', description: 'Close your eyes and chant "Om" three times to center your mind. Offer flowers and prasad to the deity.' },
        { step: `Recite ${input.title}`, description: `Read each verse slowly and clearly. If reading in Hindi, try to understand the meaning. You can use the English transliteration if you cannot read Devanagari script.` },
        { step: 'Perform Aarti', description: 'After recitation, move the lit diya in a clockwise circular motion before the deity while reciting the final verse.' },
        { step: 'Conclude with prayer', description: 'Offer prasad (sacred food) to the deity. Distribute it among family members. Touch your eyes with the warmth of the diya flame as blessing.' },
    ];

    return { aboutSection, aboutSectionHindi, whenToRecite, benefits, howToRecite };
}

// ─── Katha SEO Content ─────────────────────────────────────────────

interface KathaSEOInput {
    title: string;
    titleHindi: string;
    description: string;
    deity: string;
    readTime: string;
    slug: string;
}

export interface KathaSEOContent {
    aboutSection: string;
    aboutSectionHindi: string;
    vratVidhi: { step: string; description: string }[];
    benefits: string[];
    whenToObserve: string;
}

const VRAT_DAY_MAP: Record<string, string> = {
    'somvar': 'Monday (Somvar)',
    'mangalvar': 'Tuesday (Mangalvar)',
    'budhvar': 'Wednesday (Budhvar)',
    'guruvar': 'Thursday (Guruvar)',
    'shukravar': 'Friday (Shukravar)',
    'shanivar': 'Saturday (Shanivar)',
    'ravivar': 'Sunday (Ravivar)',
    'solah-somvar': 'sixteen consecutive Mondays',
    'satyanarayan': 'any full moon day (Purnima)',
    'santoshi': 'sixteen consecutive Fridays',
    'mahalakshmi': 'Bhadrapada month (August-September), for 16 days',
    'ekadashi': 'every Ekadashi (11th day of lunar fortnight)',
};

function getVratDay(slug: string): string {
    for (const [key, value] of Object.entries(VRAT_DAY_MAP)) {
        if (slug.includes(key)) return value;
    }
    return 'the prescribed auspicious day according to the Hindu calendar';
}

export function generateKathaSEOContent(input: KathaSEOInput): KathaSEOContent {
    const ctx = getDeityContext(input.deity);
    const vratDay = getVratDay(input.slug);

    const aboutSection = `${input.title} (${input.titleHindi}) is a sacred fasting story (Vrat Katha) from the Hindu tradition, dedicated to ${input.deity === 'Divinity' ? 'the supreme divine power' : input.deity}. ${input.description} This katha is traditionally recited on ${vratDay} while observing the vrat (fast). Estimated reading time is ${input.readTime}. ${ctx.significance} Reading this katha with faith and devotion during the prescribed fast is believed to fulfill wishes, remove obstacles, and earn the grace of ${input.deity === 'Divinity' ? 'the divine' : input.deity}. This page provides the complete katha text in both Hindi and English, so devotees worldwide can read and understand the sacred story.`;

    const aboutSectionHindi = `${input.titleHindi} (${input.title}) हिंदू परंपरा की एक पवित्र व्रत कथा है, जो ${input.deity === 'Divinity' ? 'परम दिव्य शक्ति' : input.deity} को समर्पित है। ${input.description} यह कथा पारंपरिक रूप से व्रत के दौरान पढ़ी जाती है। इस कथा को श्रद्धा और भक्ति से पढ़ने से मनोकामनाएं पूर्ण होती हैं और बाधाएं दूर होती हैं।`;

    const vratVidhi = [
        { step: 'संकल्प (Resolve)', description: `Wake up early on ${vratDay}. Take a bath and make a solemn resolve (sankalp) to observe the fast with devotion. Wear clean clothes.` },
        { step: 'पूजा की तैयारी (Preparation)', description: `Clean the puja area. Place an idol or image of ${input.deity}. Arrange flowers, akshat (rice grains), roli (vermillion), incense, and a diya.` },
        { step: 'पूजा विधि (Worship)', description: `Light the diya and incense. Offer flowers, akshat, and roli to the deity. Chant the deity's name or mantra 108 times or as prescribed.` },
        { step: 'कथा पाठ (Reading the Story)', description: `Sit in a clean place facing east or north. Read the complete Vrat Katha aloud or listen to it with full attention and devotion.` },
        { step: 'आरती (Aarti)', description: `After the katha, perform the aarti of ${input.deity}. Move the lit diya in a clockwise direction before the deity's image.` },
        { step: 'प्रसाद वितरण (Distribute Prasad)', description: `Prepare and offer prasad to the deity. Distribute it among family members and devotees. Break the fast only after completing the puja.` },
    ];

    const benefits = [
        `Earns the divine grace of ${input.deity === 'Divinity' ? 'the supreme power' : input.deity} and fulfills heartfelt wishes.`,
        `Removes obstacles, hardships, and karmic debts from one's life.`,
        `Brings peace, prosperity, and harmony to the household.`,
        `Strengthens faith, patience, and spiritual discipline.`,
        `Protects from negative energies and inauspicious planetary influences.`,
        `Believed to grant ${ctx.blessings} to sincere devotees.`,
    ];

    const whenToObserve = `This vrat is traditionally observed on ${vratDay}. Begin the fast at sunrise and maintain it until the puja and katha reading are complete. During the fast, devotees should abstain from consuming grains (some vrats allow fruits and milk). The fast is especially powerful during ${ctx.festivals.join(', ')}. For sixteen-day vrats, maintain continuity without breaking the sequence.`;

    return { aboutSection, aboutSectionHindi, vratVidhi, benefits, whenToObserve };
}

// ─── Deity Hub Content ──────────────────────────────────────────────

export interface DeityHubContent {
    name: string;
    nameHindi: string;
    slug: string;
    description: string;
    descriptionHindi: string;
    significance: string;
    mantra: string;
    mantraHindi: string;
    festivals: string[];
    worshipDay: string;
}

export const DEITY_HUBS: DeityHubContent[] = [
    {
        name: 'Lord Hanuman', nameHindi: 'श्री हनुमान जी', slug: 'hanuman',
        description: 'Lord Hanuman, the mighty son of Vayu (Wind God) and the greatest devotee of Lord Rama, symbolizes strength, courage, and selfless devotion. Known as Bajrangbali and Sankat Mochan, he is worshipped for protection, courage, and removal of all obstacles.',
        descriptionHindi: 'श्री हनुमान जी, पवन पुत्र और भगवान राम के परम भक्त, शक्ति, साहस और निःस्वार्थ भक्ति के प्रतीक हैं। बजरंगबली और संकटमोचन के नाम से प्रसिद्ध, उनकी पूजा सुरक्षा, साहस और बाधाओं को दूर करने के लिए की जाती है।',
        significance: 'Hanuman Chalisa is the most popular prayer in India, with over 10 million monthly searches. Hanuman represents the ideal devotee (bhakta) and is worshipped across all Hindu traditions.',
        mantra: 'Om Hanumate Namah', mantraHindi: 'ॐ हनुमते नमः',
        festivals: ['Hanuman Jayanti', 'Tuesday Puja', 'Saturday Puja'],
        worshipDay: 'Tuesday & Saturday',
    },
    {
        name: 'Lord Shiva', nameHindi: 'भगवान शिव', slug: 'shiva',
        description: 'Lord Shiva, the Mahadeva and the destroyer in the Hindu Trinity (Trimurti), represents the transformative power of the universe. Known as Bholenath, Shankar, and Neelkanth, he is the supreme ascetic and the lord of meditation.',
        descriptionHindi: 'भगवान शिव, महादेव और हिंदू त्रिमूर्ति में संहारक, ब्रह्मांड की परिवर्तनकारी शक्ति का प्रतिनिधित्व करते हैं। भोलेनाथ, शंकर और नीलकंठ के नाम से प्रसिद्ध, वे परम योगी और ध्यान के स्वामी हैं।',
        significance: 'Shiva worship is central to Shaivism and is practiced across India. The Maha Mrityunjaya Mantra and Om Jai Shiv Omkara are among the most recited prayers.',
        mantra: 'Om Namah Shivaya', mantraHindi: 'ॐ नमः शिवाय',
        festivals: ['Maha Shivaratri', 'Shravan Month', 'Monday Puja'],
        worshipDay: 'Monday',
    },
    {
        name: 'Lord Ganesha', nameHindi: 'श्री गणेश जी', slug: 'ganesha',
        description: 'Lord Ganesha, the elephant-headed God and the son of Shiva and Parvati, is the remover of obstacles (Vighnaharta) and the lord of beginnings. He is worshipped first before any auspicious event or ceremony.',
        descriptionHindi: 'श्री गणेश जी, गजमुख भगवान और शिव-पार्वती के पुत्र, विघ्नहर्ता और शुभारंभ के देवता हैं। किसी भी शुभ कार्य या अनुष्ठान से पहले सबसे पहले उनकी पूजा की जाती है।',
        significance: 'Ganesh Chaturthi is one of India\'s biggest festivals. Ganesha is the most widely worshipped deity in Hinduism, invoked at the start of all endeavors.',
        mantra: 'Om Gan Ganapataye Namah', mantraHindi: 'ॐ गं गणपतये नमः',
        festivals: ['Ganesh Chaturthi', 'Sankashti Chaturthi', 'Wednesday Puja'],
        worshipDay: 'Wednesday',
    },
    {
        name: 'Lord Krishna', nameHindi: 'श्री कृष्ण भगवान', slug: 'krishna',
        description: 'Lord Krishna, the eighth avatar of Lord Vishnu, is the divine teacher of the Bhagavad Gita, the playful butter-thief of Vrindavan, and the supreme personality of Godhead. He represents the perfect balance of worldly duties and spiritual truth.',
        descriptionHindi: 'श्री कृष्ण भगवान, भगवान विष्णु के आठवें अवतार, भगवद्गीता के दिव्य उपदेशक, वृंदावन के नटखट नंदलाल और परमात्मा हैं। वे सांसारिक कर्तव्यों और आध्यात्मिक सत्य के आदर्श संतुलन का प्रतिनिधित्व करते हैं।',
        significance: 'Krishna worship (Vaishnavism) is one of the largest Hindu traditions. The Bhagavad Gita is the most translated and read Hindu scripture worldwide.',
        mantra: 'Hare Krishna Hare Krishna', mantraHindi: 'हरे कृष्ण हरे कृष्ण',
        festivals: ['Janmashtami', 'Holi', 'Govardhan Puja'],
        worshipDay: 'Wednesday',
    },
    {
        name: 'Goddess Durga', nameHindi: 'मां दुर्गा', slug: 'durga',
        description: 'Goddess Durga, the invincible warrior goddess and the supreme manifestation of Shakti (divine feminine energy), rides a lion and wields divine weapons. She destroyed the buffalo demon Mahishasura and protects the universe from evil.',
        descriptionHindi: 'मां दुर्गा, अजेय योद्धा देवी और शक्ति की सर्वोच्च अभिव्यक्ति, सिंह पर सवार होकर दिव्य अस्त्रों से सुसज्जित हैं। उन्होंने महिषासुर का वध किया और ब्रह्मांड की बुराई से रक्षा करती हैं।',
        significance: 'Navratri (Nine Nights) and Durga Puja are celebrated with grand festivities across India, especially in West Bengal, Gujarat, and North India.',
        mantra: 'Om Dum Durgaye Namah', mantraHindi: 'ॐ दुं दुर्गायै नमः',
        festivals: ['Navratri', 'Durga Puja', 'Vijayadashami'],
        worshipDay: 'Friday & Navratri',
    },
    {
        name: 'Goddess Lakshmi', nameHindi: 'मां लक्ष्मी', slug: 'lakshmi',
        description: 'Goddess Lakshmi, the divine consort of Lord Vishnu, is the deity of wealth, fortune, prosperity, and beauty. She emerged during the Samudra Manthan (churning of the ocean) and is worshipped on Diwali for blessings of abundance.',
        descriptionHindi: 'मां लक्ष्मी, भगवान विष्णु की दिव्य पत्नी, धन, भाग्य, समृद्धि और सौंदर्य की देवी हैं। समुद्र मंथन के दौरान उनका प्रकट होना और दीपावली पर उनकी पूजा, समृद्धि की कामना का प्रतीक है।',
        significance: 'Lakshmi Puja during Diwali is the most widely observed financial/spiritual ritual in India. She represents both material and spiritual wealth.',
        mantra: 'Om Shreem Mahalakshmiyei Namah', mantraHindi: 'ॐ श्रीं महालक्ष्म्यै नमः',
        festivals: ['Diwali', 'Sharad Purnima', 'Friday Puja'],
        worshipDay: 'Friday',
    },
    {
        name: 'Lord Rama', nameHindi: 'श्री राम', slug: 'rama',
        description: 'Lord Rama, the seventh avatar of Vishnu and the hero of the epic Ramayana, is the embodiment of dharma (righteousness), honor, and devotion. Known as Maryada Purushottam (the ideal man), his life is the supreme example of duty and moral values.',
        descriptionHindi: 'श्री राम, विष्णु के सातवें अवतार और रामायण के नायक, धर्म, सम्मान और भक्ति के मूर्त रूप हैं। मर्यादा पुरुषोत्तम के नाम से विख्यात, उनका जीवन कर्तव्य और नैतिक मूल्यों का सर्वोच्च उदाहरण है।',
        significance: 'Ram Navami and the recitation of Ramcharitmanas are central to Hindu devotion. "Jai Shri Ram" is one of the most popular devotional chants in India.',
        mantra: 'Sri Ram Jai Ram Jai Jai Ram', mantraHindi: 'श्री राम जय राम जय जय राम',
        festivals: ['Ram Navami', 'Dussehra', 'Vivah Panchami'],
        worshipDay: 'Every day',
    },
    {
        name: 'Goddess Saraswati', nameHindi: 'मां सरस्वती', slug: 'saraswati',
        description: 'Goddess Saraswati, seated on a white lotus with the Veena in hand, is the divine patron of knowledge, wisdom, music, arts, and learning. She grants clarity of thought, eloquence, and academic excellence to her devotees.',
        descriptionHindi: 'मां सरस्वती, श्वेत कमल पर विराजमान और हाथ में वीणा लिए, ज्ञान, विद्या, संगीत, कला और शिक्षा की दिव्य संरक्षक हैं। वे अपने भक्तों को विचारों की स्पष्टता, वाक्पटुता और शैक्षिक उत्कृष्टता प्रदान करती हैं।',
        significance: 'Vasant Panchami marks Saraswati Puja, when students worship books, instruments, and tools of learning. She is the patron goddess of all educational institutions.',
        mantra: 'Om Aim Saraswatyai Namah', mantraHindi: 'ॐ ऐं सरस्वत्यै नमः',
        festivals: ['Vasant Panchami', 'Navratri (5th Day)', 'Thursday Puja'],
        worshipDay: 'Thursday',
    },
];

export function getDeityBySlug(slug: string): DeityHubContent | undefined {
    return DEITY_HUBS.find(d => d.slug === slug);
}

export function getAllDeities(): DeityHubContent[] {
    return DEITY_HUBS;
}
