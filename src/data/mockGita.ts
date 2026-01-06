export interface Verse {
    id: number;
    sanskrit: string;
    transliteration: string;
    meaningHindi: string;
    meaningEnglish: string;
    moodTag: string;
    speaker: string;
}

export const gitaChapter1: Verse[] = [
    {
        id: 1,
        sanskrit: "धृतराष्ट्र उवाच |\nधर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः |\nमामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय ||1||",
        transliteration: "Dhrutarashtra Uvacha |\nDharma-kshetre kuru-kshetre samaveta yuyutsavah |\nMamakah pandavashchaiva kimakurvata sanjaya ||1||",
        meaningHindi: "हे संजय! धर्मभूमि कुरुक्षेत्र में एकत्रित, युद्ध की इच्छा वाले मेरे और पाण्डु के पुत्रों ने क्या किया?",
        meaningEnglish: "Dhritarashtra said: O Sanjay, after gathering on the holy field of Kurukshetra, and desiring to fight, what did my sons and the sons of Pandu do?",
        moodTag: "Anxiety & Attachment",
        speaker: "Dhritarashtra"
    },
    {
        id: 2,
        sanskrit: "सञ्जय उवाच |\nदृष्ट्वा तु पाण्डवानीकं व्यूढं दुर्योधनस्तदा |\nआचार्यमुपसङ्गम्य राजा वचनमब्रवीत् ||2||",
        transliteration: "Sanjaya Uvacha |\nDrishtva tu pandavanikam vyudham duryodhanastada |\nAcharyamupasangamya raja vachanamabravit ||2||",
        meaningHindi: "संजय ने कहा: उस समय राजा दुर्योधन ने व्यूहरचनायुक्त पाण्डवों की सेना को देखकर और द्रोणाचार्य के पास जाकर यह वचन कहा।",
        meaningEnglish: "Sanjay said: On observing the Pandava army standing in military formation, King Duryodhan approached his teacher Dronacharya and spoke the following words.",
        moodTag: "Observation",
        speaker: "Sanjaya"
    },
    {
        id: 3,
        sanskrit: "पश्यैतां पाण्डुपुत्राणामाचार्य महतीं चमूम् |\nव्यूढां द्रुपदपुत्रेण तव शिष्येण धीमता ||3||",
        transliteration: "Pashyaitam pandu-putranam acharya mahatim chamum |\nVyudham drupada-putrena tava shishyena dhimata ||3||",
        meaningHindi: "हे आचार्य! आपके बुद्धिमान शिष्य द्रुपदपुत्र (धृष्टद्युम्न) द्वारा व्यूहाकार खड़ी की हुई पाण्डुपुत्रों की इस बड़ी भारी सेना को देखिये।",
        meaningEnglish: "Behold, O Teacher, this huge army of the sons of Pandu, which your intelligent disciple, the son of Drupada, has so expertly arranged.",
        moodTag: "Strategic Fear",
        speaker: "Duryodhana"
    }
];
