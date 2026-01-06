export interface Verse {
    id: number;
    chapterId: number;
    verseNumber: number;
    sanskrit: string;
    transliteration: string;
    meaningHindi: string;
    meaningEnglish: string;
    moodTag: string;
    speaker: string;
}

export const chapter3: Verse[] = [
    // --- CHAPTER 3: Karma Yoga (The Yoga of Action) ---
    {
        id: 301,
        chapterId: 3,
        verseNumber: 1,
        sanskrit: "अर्जुन उवाच |\nज्यायसी चेत्कर्मणस्ते मता बुद्धिर्जनार्दन |\nतत्किं कर्मणि घोरे मां नियोजयसि केशव ||1||",
        transliteration: "Arjuna Uvacha |\nJyayasi chet karmanas te mata buddhir janardana |\nTat kim karmani ghore mam niyojayasi keshava ||1||",
        meaningHindi: "अर्जुन ने कहा: हे जनार्दन! हे केशव! यदि आप बुद्धि को सकाम कर्म से श्रेष्ठ मानते हैं, तो फिर मुझे इस घोर युद्ध रूपी कर्म में क्यों लगाते हैं?",
        meaningEnglish: "Arjuna said: O Janardana, O Keshava, if You consider knowledge to be superior to fruitive work, why do You urge me to engage in this ghastly warfare?",
        moodTag: "Confusion",
        speaker: "Arjuna"
    },
    {
        id: 302,
        chapterId: 3,
        verseNumber: 2,
        sanskrit: "व्यामिश्रेणेव वाक्येन बुद्धिं मोहयसीव मे |\nतदेकं वद निश्चित्य येन श्रेयोऽहमाप्नुयाम् ||2||",
        transliteration: "Vyamishreneva vakyena buddhim mohayasiva me |\nTad ekam vada nishchitya yena shreyo 'ham apnuyam ||2||",
        meaningHindi: "आप अपने मिले-जुले वचनों से मेरी बुद्धि को मोहित कर रहे हैं। अतः निश्चय करके मुझे वह एक बात बताइये जिससे मेरा कल्याण हो।",
        meaningEnglish: "My intelligence is bewildered by Your equivocal instructions. Therefore, please tell me decisively which will be most beneficial for me.",
        moodTag: "Desperation",
        speaker: "Arjuna"
    },
    {
        id: 303,
        chapterId: 3,
        verseNumber: 3,
        sanskrit: "श्रीभगवानुवाच |\nलोकेऽस्मिन्द्विविधा निष्ठा पुरा प्रोक्ता मयानघ |\nज्ञानयोगेन साङ्ख्यानां कर्मयोगेन योगिनाम् ||3||",
        transliteration: "Shri Bhagavan Uvacha |\nLoke 'smin dvi-vidha nishtha pura prokta mayanagha |\nJnana-yogena sankhyanam karma-yogena yoginam ||3||",
        meaningHindi: "श्री भगवान ने कहा: हे निष्पाप अर्जुन! इस लोक में दो प्रकार की निष्ठा मेरे द्वारा पहले कही गई है—ज्ञानियों के लिए ज्ञानयोग और योगियों के लिए कर्मयोग।",
        meaningEnglish: "The Supreme Personality of Godhead said: O sinless Arjuna, I have already explained that there are two classes of men who try to realize the Self. Some are inclined to understand it by empirical, philosophical speculation, and others by devotional service.",
        moodTag: "Instruction",
        speaker: "Krishna"
    },
    {
        id: 304,
        chapterId: 3,
        verseNumber: 4,
        sanskrit: "न कर्मणामनारम्भान्नैष्कर्म्यं पुरुषोऽश्नुते |\nन च संन्यसनादेव सिद्धिं समधिगच्छति ||4||",
        transliteration: "Na karmanam anarambhan naishkarmyam purusho 'shnute |\nNa cha sannyasanad eva siddhim samadhigacchati ||4||",
        meaningHindi: "मनुष्य न तो कर्मों को न करने से निष्कर्मता को प्राप्त होता है और न ही कर्मों के त्याग मात्र से सिद्धि (पूर्णता) को प्राप्त होता है।",
        meaningEnglish: "Not by merely abstaining from work can one achieve freedom from reaction, nor by renunciation alone can one attain perfection.",
        moodTag: "Guidance",
        speaker: "Krishna"
    },
    {
        id: 305,
        chapterId: 3,
        verseNumber: 5,
        sanskrit: "न हि कश्चित्क्षणमपि जातु तिष्ठत्यकर्मकृत् |\nकार्यते ह्यवशः कर्म सर्वः प्रकृतिजैर्गुणैः ||5||",
        transliteration: "Na hi kashchit kshanam api jatu tishthaty akarma-krit |\nKaryate hy avashah karma sarvah prakriti-jair gunaih ||5||",
        meaningHindi: "कोई भी मनुष्य किसी भी काल में क्षणमात्र भी कर्म किए बिना नहीं रह सकता, क्योंकि सभी मनुष्य प्रकृति से उत्पन्न गुणों द्वारा विवश होकर कर्म करते हैं।",
        meaningEnglish: "Everyone is forced to act helplessly according to the qualities he has acquired from the modes of material nature; therefore no one can refrain from doing something, not even for a moment.",
        moodTag: "Philosophy",
        speaker: "Krishna"
    },
    {
        id: 306,
        chapterId: 3,
        verseNumber: 6,
        sanskrit: "कर्मेन्द्रियाणि संयम्य य आस्ते मनसा स्मरन् |\nइन्द्रियार्थान्विमूढात्मा मिथ्याचारः स उच्यते ||6||",
        transliteration: "Karmendriyani samyamya ya aste manasa smaran |\nIndriyarthan vimudhatma mithyacharah sa uchyate ||6||",
        meaningHindi: "जो मूढ़ बुद्धि वाला मनुष्य कर्मेंद्रियों को हठपूर्वक रोककर मन से इंद्रिय-विषयों का चिंतन करता रहता है, वह मिथ्याचारी (पाखंडी) कहलाता है।",
        meaningEnglish: "One who restrains the senses of action but whose mind dwells on sense objects certainly deludes himself and is called a pretender.",
        moodTag: "Warning",
        speaker: "Krishna"
    },
    {
        id: 307,
        chapterId: 3,
        verseNumber: 7,
        sanskrit: "यस्त्विन्द्रियाणि मनसा नियम्यारभतेऽर्जुन |\nकर्मेन्द्रियैः कर्मयोगमसक्तः स विशिष्यते ||7||",
        transliteration: "Yas tv indriyani manasa niyamyarabhate 'rjuna |\nKarmendriyaih karma-yogam asaktah sa vishishyate ||7||",
        meaningHindi: "किन्तु हे अर्जुन! जो मनुष्य मन के द्वारा इंद्रियों को वश में करके, अनासक्त होकर कर्मेंद्रियों से कर्मयोग का आचरण करता है, वही श्रेष्ठ है।",
        meaningEnglish: "On the other hand, if a sincere person tries to control the active senses by the mind and begins karma-yoga (in Krishna consciousness) without attachment, he is by far superior.",
        moodTag: "Encouragement",
        speaker: "Krishna"
    },
    {
        id: 308,
        chapterId: 3,
        verseNumber: 8,
        sanskrit: "नियतं कुरु कर्म त्वं कर्म ज्यायो ह्यकर्मणः |\nशरीरयात्रापि च ते न प्रसिद्ध्येदकर्मणः ||8||",
        transliteration: "Niyatam kuru karma tvam karma jyayo hy akarmanah |\nSharira-yatrapi cha te na prasiddhyed akarmanah ||8||",
        meaningHindi: "तू शास्त्रविहित कर्तव्य कर्म कर, क्योंकि कर्म न करने की अपेक्षा कर्म करना श्रेष्ठ है। कर्म न करने से तेरा शरीर-निर्वाह भी नहीं सिद्ध होगा।",
        meaningEnglish: "Perform your prescribed duty, for doing so is better than not working. One cannot even maintain one's physical body without work.",
        moodTag: "Direct Command",
        speaker: "Krishna"
    },
    {
        id: 309,
        chapterId: 3,
        verseNumber: 9,
        sanskrit: "यज्ञार्थात्कर्मणोऽन्यत्र लोकोऽयं कर्मबन्धनः |\nतदर्थं कर्म कौन्तेय मुक्तसङ्गः समाचर ||9||",
        transliteration: "Yajnarthat karmano 'nyatra loko 'yam karma-bandhanah |\nTad-artham karma kaunteya mukta-sangah samachara ||9||",
        meaningHindi: "यज्ञ (विष्णु) के निमित्त किए जाने वाले कर्मों के अतिरिक्त अन्य कर्मों में लगा हुआ यह मनुष्य समुदाय कर्मबंधन में बंधता है। इसलिए हे अर्जुन! आसक्ति रहित होकर उस यज्ञ के निमित्त ही कर्म कर।",
        meaningEnglish: "Work done as a sacrifice for Vishnu has to be performed; otherwise work causes bondage in this material world. Therefore, O son of Kunti, perform your prescribed duties for His satisfaction, and in that way you will always remain free from bondage.",
        moodTag: "Philosophy",
        speaker: "Krishna"
    },
    {
        id: 310,
        chapterId: 3,
        verseNumber: 10,
        sanskrit: "सहयज्ञाः प्रजाः सृष्ट्वा पुरोवाच प्रजापतिः |\nअनेन प्रसविष्यध्वमेष वोऽस्त्विष्टकामधुक् ||10||",
        transliteration: "Saha-yajnah prajah srishtva purovacha prajapatih |\nAnena prasavishyadhvam esha vo 'stv ishta-kama-dhuk ||10||",
        meaningHindi: "प्रजापति ब्रह्मा ने कल्प के आदि में यज्ञ सहित प्रजाओं को रचकर कहा कि इस यज्ञ द्वारा तुम लोग वृद्धि को प्राप्त होओ और यह यज्ञ तुम लोगों को इच्छित भोग प्रदान करने वाला हो।",
        meaningEnglish: "In the beginning of creation, the Lord of all creatures sent forth generations of men and demigods, along with sacrifices for Vishnu, and blessed them by saying, 'Be thou happy by this yajna [sacrifice] because its performance will bestow upon you everything desirable for living happily and achieving liberation.'",
        moodTag: "History",
        speaker: "Krishna"
    }
];

