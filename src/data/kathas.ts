export interface KathaChapter {
    id: number;
    title: string;
    titleHindi?: string;
    content: string[]; // English paragraphs
    contentHindi?: string[]; // Hindi paragraphs
}

export interface Katha {
    id: string;
    slug: string;
    title: string;
    titleHindi: string;
    description: string;
    descriptionHindi?: string;
    imagePath: string;
    deity: string;
    readTime: string;
    chapters: KathaChapter[];
}

export const kathas: Katha[] = [
    // --- WEEKLY VRATS ---
    {
        id: 'somvar-vrat-katha',
        slug: 'somvar-vrat-katha',
        title: 'Somvar Vrat Katha',
        titleHindi: 'सोमवार व्रत कथा',
        description: 'Dedicated to Lord Shiva. Devi Parvati asked Shiva about the significance of this fast. Observing this Vrat fulfills the wishes of the devotee and brings domestic harmony.',
        descriptionHindi: 'भगवान शिव को समर्पित। देवी पार्वती ने शिव से इस व्रत का महत्व पूछा। इस व्रत को करने से भक्त की मनोकामनाएं पूर्ण होती हैं और घर में सुख-शांति आती है।',
        imagePath: '/images/somvar-vrat-katha.webp',
        deity: 'Shiva',
        readTime: '15 min',
        chapters: [
            {
                id: 1,
                title: 'The Moneylender and Shiva\'s Grace',
                titleHindi: 'साहूकार और शिव कृपा',
                content: [
                    "Once, in a certain city, there lived a wealthy moneylender (Sahukar). Although he lacked no wealth in his home, he was deeply sorrowful because he had no children. Desiring a child, he fasted every Monday and worshiped Lord Shiva and Goddess Parvati with full devotion at the Shiva temple.",
                    "Seeing his devotion, Mother Parvati was pleased and requested Lord Shiva to fulfill the moneylender's wish. At Parvati's insistence, Lord Shiva said, 'O Parvati, in this world, every being reaps the fruits of their actions, and one must endure whatever is written in their destiny.' However, seeing the moneylender's devotion and Parvati's repeated pleas, Shiva granted him the boon of a son but revealed that the child would live for only 12 years.",
                    "The moneylender was listening to their conversation, so he felt neither joy nor sorrow. He continued worshiping Lord Shiva as before. After some time, his wife gave birth to a son. When the boy turned eleven, he was sent to Kashi (Varanasi) for his education.",
                    "The moneylender called the boy's maternal uncle and gave him a large sum of money, instructing, 'Take this boy to Kashi for his education. On the way, perform Yagnas (sacrificial fires) and give alms and food to Brahmins.' Both uncle and nephew set off for Kashi, performing Yagnas and donating to Brahmins along the way.",
                    "During their journey, they passed through a city where the king's daughter was getting married. The prince she was to marry was blind in one eye. The prince's father, wanting to hide his son's defect, thought, 'Why not have this moneylender's son marry the princess? After the marriage, I will send him away with wealth and take the princess to my city.' Thus, the boy was dressed as the groom and married to the princess.",
                    "The moneylender's son was honest. He did not feel this was right, so finding an opportunity, he wrote on the princess's scarf: 'You have been married to me, but the prince you will be sent off with is blind in one eye. I am going to Kashi to study.'",
                    "When the princess read the message on her scarf, she told her parents. The king refused to send his daughter away, and the wedding procession returned. Meanwhile, the moneylender's son and his uncle reached Kashi and performed a Yagna there.",
                    "On the day the boy turned 12, a Yagna was being held. The boy told his uncle, 'I am not feeling well.' The uncle said, 'Go inside and rest.' According to Shiva's boon, the boy's life ended shortly after. Seeing his dead nephew, the uncle began to lament loudly.",
                    "Coincidentally, Lord Shiva and Mother Parvati were passing by. Parvati said to Bholenath, 'Lord, I cannot bear the sound of this weeping. Please remove this person's suffering.' When Shiva approached the dead boy, he said, 'This is the same moneylender's son to whom I granted only 12 years of life. His time is now complete.'",
                    "But Mother Parvati, filled with maternal compassion, pleaded, 'O Mahadev, please grant this boy more life, otherwise his parents will die of grief in his separation.' Upon Parvati's repeated insistence, Lord Shiva granted the boy the boon of life. By Shiva's grace, the boy became alive again.",
                    "After completing his education, the boy returned to his city with his uncle. They reached the same city where he had been married. They organized a Yagna there as well. The boy's father-in-law recognized him, took him to the palace, treated him with great honor, and sent his daughter with him.",
                    "Back home, the moneylender and his wife were waiting for their son, fasting and thirsty. They had vowed that if they heard news of their son's death, they would give up their lives. But hearing the news of his survival, they were overjoyed.",
                    "That same night, Lord Shiva appeared in the moneylender's dream and said, 'O Merchant, pleased by your Monday fasts and listening to the Vrat Katha, I have granted your son a long life.' Similarly, whoever observes the Monday fast or listens to and reads this story, all their sorrows are removed, and all their wishes are fulfilled."
                ],
                contentHindi: [
                    "एक बार किसी एक नगर में एक साहूकार था। उसके घर में धन की कोई कमी नहीं थी लेकिन कोई संतान न होने के कारण वह बहुत दुखी था। संतान प्राप्ति के लिए वह हर सोमवार को व्रत रखता था और पूरी श्रद्धा के साथ शिव मंदिर जाकर भगवान शिव और माता पार्वती की पूजा करता था।",
                    "उसकी भक्ति देखकर एक दिन मां पार्वती प्रसन्न होकर भगवान शिव से साहूकार की मनोकामना पूर्ण करने का निवेदन किया। पार्वती जी के आग्रह पर भगवान शिव ने कहा कि ‘हे पार्वती, इस संसार में हर प्राणी को उसके कर्मों का फल मिलता है और जिसके भाग्य में जो हो उसे भोगना ही पड़ता है’ लेकिन पार्वती जी ने साहूकार की भक्ति देखकर उसकी मनोकामना पूर्ण करने की इच्छा व्यक्त की। माता पार्वती के आग्रह पर शिवजी ने साहूकार को पुत्र-प्राप्ति का वरदान तो दिया लेकिन उन्होंने बताया कि यह बालक 12 वर्ष तक ही जीवित रहेगा।",
                    "माता पार्वती और भगवान शिव की बातचीत को साहूकार सुन रहा था, इसलिए उसे ना तो इस बात की खुशी थी और ना ही दुख। वह पहले की भांति शिवजी की पूजा करता रहा। कुछ समय के बाद साहूकार की पत्नी ने एक पुत्र को जन्म दिया। जब वह बालक ग्यारह वर्ष का हुआ तो उसे पढ़ने के लिए काशी भेज दिया गया।",
                    "साहूकार ने पुत्र के मामा को बुलाकर उसे बहुत सारा धन देते हुए कहा कि तुम इस बालक को काशी विद्या प्राप्ति के लिए ले जाओ। तुम लोग रास्ते में यज्ञ कराते जाना और ब्राह्मणों को भोजन-दक्षिणा देते हुए जाना। दोनों मामा-भांजे इसी तरह यज्ञ कराते और ब्राह्मणों को दान-दक्षिणा देते काशी नगरी निकल पड़े।",
                    "इस दौरान रात में एक नगर पड़ा जहां नगर के राजा की कन्या का विवाह था, लेकिन जिस राजकुमार से उसका विवाह होने वाला था वह एक आंख से काना था। राजकुमार के पिता ने अपने पुत्र के काना होने की बात को छुपाने के लिए सोचा क्यों न उसने साहूकार के पुत्र को दूल्हा बनाकर राजकुमारी से विवाह करा दूं। विवाह के बाद इसको धन देकर विदा कर दूंगा और राजकुमारी को अपने नगर ले जाऊंगा। लड़के को दूल्हे के वस्त्र पहनाकर राजकुमारी से विवाह करा दिया गया।",
                    "साहूकार का पुत्र ईमानदार था। उसे यह बात सही नहीं लगी इसलिए उसने अवसर पाकर राजकुमारी के दुपट्टे पर लिखा कि ‘तुम्हारा विवाह तो मेरे साथ हुआ है लेकिन जिस राजकुमार के संग तुम्हें भेजा जाएगा वह एक आंख से काना है। मैं तो काशी पढ़ने जा रहा हूं।’",
                    "जब राजकुमारी ने चुन्नी पर लिखी बातें पढ़ी तो उसने अपने माता-पिता को यह बात बताई। राजा ने अपनी पुत्री को विदा नहीं किया फिर बारात वापस चली गई। दूसरी ओर साहूकार का लड़का और उसका मामा काशी पहुंचे और वहां जाकर उन्होंने यज्ञ किया।",
                    "जिस दिन लड़का 12 साल का हुआ उस दिन भी यज्ञ का आयोजन था लड़के ने अपने मामा से कहा कि मेरी तबीयत कुछ ठीक नहीं है। मामा ने कहा कि तुम अंदर जाकर आराम कर लो। शिवजी के वरदानुसार कुछ ही देर में उस बालक के प्राण निकल गए। मृत भांजे को देख उसके मामा ने विलाप करना शुरू किया।",
                    "संयोगवश उसी समय शिवजी और माता पार्वती उधर से जा रहे थे। पार्वती माता ने भोलेनाथ से कहा- स्वामी, मुझे इसके रोने के स्वर सहन नहीं हो रहा, आप इस व्यक्ति के कष्ट को अवश्य दूर करें। जब शिवजी मृत बालक के समीप गए तो वह बोले कि यह उसी साहूकार का पुत्र है, जिसे मैंने 12 वर्ष की आयु का वरदान दिया था, अब इसकी आयु पूरी हो चुकी है।",
                    "लेकिन मातृ भाव से विभोर माता पार्वती ने कहा कि हे महादेव, आप इस बालक को और आयु देने की कृपा करें अन्यथा इसके वियोग में इसके माता-पिता भी तड़प-तड़प कर मर जाएंगे। माता पार्वती के पुन: आग्रह पर भगवान शिव ने उस लड़के को जीवित होने का वरदान दिया। शिवजी की कृपा से वह लड़का जीवित हो गया।",
                    "शिक्षा पूरी करके लड़का मामा के साथ अपने नगर की ओर वापस चल दिया। दोनों चलते हुए उसी नगर में पहुंचे, जहां उसका विवाह हुआ था। उस नगर में भी उन्होंने यज्ञ का आयोजन किया। उस लड़के के ससुर ने उसे पहचान लिया और महल में ले जाकर उसकी खातिरदारी की और अपनी पुत्री को विदा किया।",
                    "इधर साहूकार और उसकी पत्नी भूखे-प्यासे रहकर बेटे की प्रतीक्षा कर रहे थे। उन्होंने प्रण कर रखा था कि यदि उन्हें अपने बेटे की मृत्यु का समाचार मिला तो वह भी प्राण त्याग देंगे परंतु अपने बेटे के जीवित होने का समाचार पाकर वह बेहद प्रसन्न हुए।",
                    "उसी रात भगवान शिव ने साहूकार के स्वप्न में आकर कहा- हे श्रेष्ठी, मैंने तेरे सोमवार के व्रत करने और व्रतकथा सुनने से प्रसन्न होकर तेरे पुत्र को लम्बी आयु प्रदान की है। इसी प्रकार जो कोई सोमवार व्रत करता है या कथा सुनता और पढ़ता है उसके सभी दुख दूर होते हैं और सभी मनोकामनाएं पूर्ण होती हैं।"
                ]
            }
        ]
    },
    {
        id: 'solah-somvar-vrat-katha',
        slug: 'solah-somvar-vrat-katha',
        title: 'Solah Somvar Vrat Katha',
        titleHindi: 'सोलह सोमवार व्रत कथा',
        description: 'The 16 Mondays Fast. Extremely powerful for finding a good spouse or resolving marriage difficulties. Even Goddess Parvati observed this to obtain Shiva as her husband.',
        descriptionHindi: 'सोलह सोमवार का व्रत। योग्य जीवनसाथी प्राप्त करने या विवाह की समस्याओं को सुलझाने के लिए अत्यंत शक्तिशाली। देवी पार्वती ने भी शिव को पति रूप में प्राप्त करने के लिए यह व्रत किया था।',
        imagePath: '/images/solah-somvar-vrat-katha.webp',
        deity: 'Shiva',
        readTime: '20 min',
        chapters: [{
            id: 1,
            title: 'The Divine Game of Dice',
            titleHindi: 'चौसर का खेल और सोलह सोमवार',
            content: [
                "Once, Shri Mahadevji (Lord Shiva), while traveling with Parvati, arrived in the city of Amravati in the mortal world. The king there had built a Shiva temple, which was extremely grand, delightful, and peace-giving. Shiva and Parvati stayed there during their journey.",
                "Parvati said, 'O Lord! Come, let us play a game of Chaupar (dice) here today.' The game began. Shiva said, 'I will win.' Thus, they started conversing. At that moment, the priest came to perform the Puja.",
                "Parvati asked, 'Priest, tell me, who will win?' The priest said, 'No one can be as expert as Mahadevji in this game, so certainly Mahadevji will win this round.' But the opposite happened; Parvati won. Consequently, Parvati cursed the priest to become a leper for speaking a falsehood.",
                "Now the priest became a leper. Shiva and Parvati both left. After some time, Apsaras (celestial nymphs) came to worship. They asked the priest the reason for his leprosy. The priest narrated everything.",
                "The Apsaras said, 'Priest, if you observe the 16 Mondays (Solah Somvar) fast, Shiva will be pleased and remove your distress.' The priest asked the Apsaras for the method of the fast. The Apsaras explained the complete method of observing the fast and its Udyapan (conclusion ceremony). The priest began the fast with valid methods and devotion and finally performed the Udyapan. By the effect of the fast, the priest became free from the disease.",
                "Some days later, Shankar and Parvati returned to that temple. Seeing the priest cured, Parvati asked, 'What remedy did you use to get freedom from my curse?' The priest said, 'O Mother! By observing the 16 Mondays fast as told by the Apsaras, my suffering has been removed.'",
                "Parvati also observed the 16 Mondays fast, due to which Kartikeya, who was displeased with her, became pleased and obedient to his mother.",
                "Kartikeya asked, 'O Mother! What is the reason that my mind is always attached to your feet?' Parvati told Kartikeya the significance and method of the 16 Mondays fast. Then Kartikeya also observed this fast, and his long-lost friend was found. Now the friend also observed this fast with the desire to get married.",
                "Consequently, he went to a foreign land. There was a Swayamvar (marriage ceremony) for the king's daughter. The king had vowed that he would marry the princess to whomever the female elephant garlanded. This Brahmin friend also went and sat in a corner to watch the Swayamvar. The elephant garlanded this Brahmin friend, so the king married his princess to him with great pomp. After that, both started living happily.",
                "One day the princess asked, 'O Lord! What virtuous deed did you perform that the elephant garlanded you?' The Brahmin husband said, 'I performed the 16 Mondays fast with full rituals and devotion as told by Kartikeya, as a result of which I got a fortunate wife like you.' Now the princess also fasted for a virtuous son and obtained a son endowed with all qualities. Growing up, the son also observed the 16 Mondays fast with the desire to gain a kingdom.",
                "Upon the king's passing to the celestial abode, this Brahmin boy got the throne, yet he continued to observe the fast. One day he asked his wife to take the Puja materials to the Shiva temple, but she sent the materials through her maids. When the king finished the worship, a divine voice from the sky said, 'O King, abandon this wife, or you will lose your kingdom.'",
                "Obeying the Lord's command, he expelled his wife from the palace. She then went to an old woman, cursing her fate, and told her tale of woe, admitting, 'I did not take the Puja materials to the Shiva temple as ordered by the king, and the king expelled me.'",
                "The old woman said, 'You will have to do my work.' She agreed. The old woman placed a bundle of yarn on her head and sent her to the market. On the way, a storm came, and the bundle blew away from her head. The old woman scolded her and chased her away.",
                "Now, walking from the old woman's place, the queen reached an Ashram. Gosainji (the sage) understood upon seeing her that this woman from a high family was struck by misfortune. Consoling her, he said, 'Daughter, stay in my Ashram, do not worry about anything.' The queen started living in the Ashram, but whatever object she touched would spoil. Seeing this, Gosainji asked, 'Daughter, due to which God's offense is this happening?' The queen revealed that she had disobeyed her husband's command and did not go to the Shiva temple for Puja, causing her these severe sufferings.",
                "Gosainji prayed to Shiva for her well-being and said, 'Daughter, perform the 16 Mondays fast according to the rules.' Then the queen completed the fast with proper rituals. By the effect of the fast, the king remembered the queen and sent messengers to search for her.",
                "Finding the queen in the Ashram, the messengers told the king. Then the king went there and said to Gosainji, 'Maharaj! This is my wife. I had abandoned her. Please allow her to go with me.' By Shiva's grace, observing the 16 Mondays fast every year, they lived happily and finally attained Shivlok (the abode of Shiva)."
            ],
            contentHindi: [
                "एक समय श्री महादेवजी पार्वती के साथ भ्रमण करते हुए मृत्युलोक में अमरावती नगरी में आए। वहां के राजा ने शिव मंदिर बनवाया था, जो कि अत्यंत भव्य एवं रमणीक तथा मन को शांति पहुंचाने वाला था। भ्रमण करते सम शिव-पार्वती भी वहां ठहर गए।",
                "पार्वतीजी ने कहा- हे नाथ! आओ, आज इसी स्थान पर चौसर-पांसे खेलें। खेल प्रारंभ हुआ। शिवजी कहने लगे- मैं जीतूंगा। इस प्रकार उनकी आपस में वार्तालाप होने लगी। उस समय पुजारीजी पूजा करने आए।",
                "पार्वतीजी ने पूछा- पुजारीजी, बताइए जीत किसकी होगी? पुजारी बोला- इस खेल में महादेवजी के समान कोई दूसरा पारंगत नहीं हो सकता इसलिए महादेवजी ही यह बाजी जीतेंगे। परंतु हुआ उल्टा, जीत पार्वतीजी की हुई। अत: पार्वतीजी ने पुजारी को कोढ़ी होने का श्राप दे दिया कि तूने मिथ्‍या भाषण किया है।",
                "अब तो पुजारी कोढ़ी हो गया। शिव-पार्वतीजी दोनों वापस चले गए। कुछ समय पश्चात अप्सराएं पूजा करने आईं। अप्सराओं ने पुजारी के उसके कोढ़ी होने का कारण पूछा। पुजारी ने सब बातें बता दीं।",
                "अप्सराएं कहने लगीं- पुजारीजी, आप 16 सोमवार का व्रत करें तो शिवजी प्रसन्न होकर आपका संकट दूर करेंगे। पुजारीजी ने अप्सराओं से व्रत की विधि पूछी। अप्सराओं ने व्रत करने और व्रत के उद्यापन करने की संपूर्ण विधि बता दी। पुजारी ने विधिपूर्वक श्रद्धाभाव से व्रत प्रारंभ किया और अंत में व्रत का उद्यापन भी किया। व्रत के प्रभाव से पुजारीजी रोगमुक्त हो गए।",
                "कुछ दिनों बाद शंकर-पार्वतजी पुन: उस मंदिर में आए तो पुजारीजी को रोगमुक्त देखकर पार्वतीजी ने पूछा- मेरे दिए हुए श्राप से मुक्ति पाने का तुमने कौन सा उपाय किया। पुजारीजी ने कहा- हे माता! अप्सराओं द्वारा बताए गए 16 सोमवार के व्रत करने से मेरा यह कष्ट दूर हुआ है।",
                "पार्वतीजी ने भी 16 सोमवार का व्रत किया जिससे उनसे रूठे हुए कार्तिकेयजी भी अपनी माता से प्रसन्न होकर आज्ञाकारी हुए। कार्तिकेयजी ने पूछा- हे माता! क्या कारण है कि मेरा मन सदा आपके चरणों में लगा रहता है। पार्वतीजी ने कार्तिकेय को 16 सोमवार के व्रत का माहात्म्य तथा विधि बताई, तब कार्तिकेयजी ने भी इस व्रत को किया तो उनका बिछड़ा हुआ मित्र मिल गया। अब मित्र ने भी इस व्रत को अपने विवाह होने की इच्छा से किया।",
                "फलत: वह विदेश गया। वहां के राजा की कन्या का स्वयंवर था। राजा ने प्रण किया था कि हथिनी जिस व्यक्ति के गले में वरमाला डाल देगी, उसी के साथ राजकुमारी का विवाह करूंगा। यह ब्राह्मण मित्र भी स्वयंवर देखने की इच्‍छा से वहां एक ओर जाकर बैठ गया। हथिनी ने इसी ब्राह्मण मित्र को माला पहनाई तो राजा ने बड़ी धूमधाम से अपनी राजकुमारी का विवाह उसके साथ कर दिया। तत्पश्चात दोनों सुखपूर्वक रहने लगे।",
                "एक दिन राजकन्या ने पूछा- हे नाथ! आपने कौन-सा पुण्य किया जिससे हथिनी ने आपके गले में वरमाला पहनाई। ब्राह्मण पति ने कहा- मैंने कार्तिकेयजी द्वारा बताए अनुसार 16 सोमवार का व्रत पूर्ण विधि-विधान सहित श्रद्धा-भक्ति से किया जिसके फल के कारण मुझे तुम्हारे जैसी सौभाग्यशाली पत्नी मिली। अब तो राजकन्या ने भी सत्य-पुत्र प्राप्ति के लिए व्रत किया और सर्वगुण संपन्न पुत्र प्राप्त किया। बड़े होकर पुत्र ने भी राज्य प्राप्ति की कामना से 16 सोमवार का व्रत किया।",
                "राजा के देवलोक होने पर इसी ब्राह्मण कुमार को राजगद्दी मिली, फिर भी वह इस व्रत को करता रहा। एक दिन उसने अपनी पत्नी से पूजा सामग्री शिवालय ले चलने को कहा, परंतु उसने पूजा सामग्री अपनी दासियों द्वारा भिजवा दी। जब राजा ने पूजन समाप्त किया, तो आकाशवाणी हुई कि हे राजा, तुम इस पत्नी को त्याग दो नहीं तो राजपाट से हाथ धोना पड़ेगा।",
                "प्रभु की आज्ञा मानकर उसने अपनी पत्नी को महल से निकाल दिया। तब वह अपने भाग्य को कोसती हुई एक बुढ़िया के पास गई और अपना दुखड़ा सुनाया तथा बुढ़िया को बताया- मैं पूजन सामग्री राजा के कहे अनुसार शिवालय में नहीं ले गई और राजा ने मुझे निकाल दिया।",
                "बुढ़िया ने कहा- तुझे मेरा काम करना पड़ेगा। उसने स्वीकार कर लिया, तब बुढ़िया ने सूत की गठरी उसके सिर पर रखी और बाजार भेज दिया। रास्ते में आंधी आई तो सिर पर रखी गठरी उड़ गई। बुढ़िया ने डांटकर उसे भगा दिया।",
                "अब रानी बुढ़िया के यहां से चलते-चलते एक आश्रम में पहुंची। गुसांईजी उसे देखते ही समझ गए कि यह उच्च घराने की अबला विपत्ति की मारी है। वे उसे धैर्य बंधाते हुए बोले- बेटी, तू मेरे आश्रम में रह, किसी प्रकार की चिंता मत कर। रानी आश्रम में रहने लगी, परंतु जिस वस्तु को वह हाथ लगाती, वह वस्तु खराब हो जाती। यह देखकर गुसांईजी ने पूछा- बेटी, किस देव के अपराध से ऐसा होता है? रानी ने बताया कि मैंने अपने पति की आज्ञा का उल्लंघन किया और शिवालय में पूजन के लिए नहीं गई, इससे मुझे घोर कष्ट उठाने पड़ रहे हैं।",
                "गुसांईजी ने शिवजी से उसके कुशलक्षेम के लिए प्रार्थना की और कहा- बेटी, तुम 16 सोमवार का व्रत विधि के अनुसार करो, तब रानी ने विधिपूर्वक व्रत पूर्ण किया। व्रत के प्रभाव से राजा को रानी की या‍द आई और दूतों को उसकी खोज में भेजा।",
                "आश्रम में रानी को देख दूतों ने राजा को बताया। तब राजा ने वहां जाकर गुसांईजी से कहा- महाराज! यह मेरी पत्नी है। मैंने इसका परित्याग कर दिया था। कृपया इसे मेरे साथ जाने की आज्ञा दें। शिवजी की कृपा से प्रतिवर्ष 16 सोमवार का व्रत करते हुए वे आनंद से रहने लगे और अंत में शिवलोक को प्राप्त हुए।"
            ]
        }]
    },
    {
        id: 'mangalvar-vrat-katha',
        slug: 'mangalvar-vrat-katha',
        title: 'Mangalvar Vrat Katha',
        titleHindi: 'मंगलवार व्रत कथा',
        description: 'Dedicated to Lord Hanuman. Removes obstacles, fear, and the malefic effects of Mars (Mangal).',
        descriptionHindi: 'भगवान हनुमान को समर्पित। बाधाओं, भय और मंगल ग्रह के दुष्प्रभावों को दूर करता है।',
        imagePath: '/images/mangalvar-vrat-katha.webp',
        deity: 'Hanuman',
        readTime: '20 min',
        chapters: [
            {
                id: 1,
                title: 'Story of Nanda Brahmin',
                titleHindi: 'नंदा ब्राह्मण की कथा',
                content: [
                    "Vyas Ji said—Once, at Naimisharanya Tirth, eighty thousand sages gathered and asked Shri Sut Ji, the knower of Puranas, 'O Great Sage! You have told us many stories from the Puranas. Now, please tell us such a fast and story by observing which one attains progeny, and gets rid of diseases, grief, fire, and all kinds of sorrows. In Kaliyuga, the lifespan of beings is short. If they are constantly plagued by diseases and worries, how will they focus on Sri Hari?'",
                    "Shri Sut Ji said—'O Sages! You have asked a very good question for the welfare of the world. Once, Yudhishthira asked Lord Krishna the same question. I will recite the dialogue between Lord Krishna and Yudhishthira to you. Listen carefully.'",
                    "There was a city named Kundalpur, where a Brahmin named Nanda lived. By God's grace, he had everything, yet he was unhappy because his wife, Sunanda, had no children. Sunanda was a devoted wife who worshiped Lord Hanuman faithfully. She would fast on Tuesdays and eat only after offering Bhog (food) to Hanuman Ji.",
                    "Once, on a Tuesday, due to excessive household work, the Brahmin woman could not offer Bhog to Hanuman Ji. She was very sad and did not eat anything, vowing, 'Now I will consume food and water only after offering Bhog to Hanuman Ji on the next Tuesday.'",
                    "She spent six days in this manner, remaining hungry and thirsty according to her resolve. On the following Tuesday, she fainted in the morning.",
                    "Pleased by her immense devotion, Lord Hanuman appeared and said, 'Sunanda! I am very pleased with your devotion. Arise and ask for a boon.' Overwhelmed with joy upon seeing her deity, Sunanda fell at his feet and said, 'O Lord, I have no children. Please bless me with progeny.'",
                    "Shri Mahavir Ji said, 'Your wish shall be fulfilled. You will give birth to a daughter who will yield gold from her eight limbs every day.' Saying this, he vanished. The Brahmin woman was delighted and told everything to her husband. The Brahmin was saddened to hear about a daughter but was very happy to hear about the gold, thinking his poverty would end.",
                    "By Hanuman Ji's grace, she gave birth to a beautiful daughter in the tenth month. The girl was named Ratnavali. True to the boon, she provided gold, and Nanda Brahmin became very wealthy. However, greed took over his mind.",
                    "When Ratnavali turned ten, Sunanda asked her husband to find a suitable groom. Nanda, blinded by greed, thought that if she married, the gold would go away. He eventually arranged her marriage to a virtuous Brahmin boy named Someshwar from Pampayi city but plotted a cruel deed.",
                    "While Someshwar was taking Ratnavali to his home, Nanda sent a messenger to kill his son-in-law on the way so that he could bring his daughter back and keep the gold. The messenger killed Someshwar. When Nanda arrived and told Ratnavali that robbers had killed her husband, she, in her grief, decided to commit Sati (burn herself with her husband).",
                    "Seeing her determination, Nanda was terrified of the sin of killing a son-in-law and losing the gold. As Ratnavali sat on the pyre with her husband's head in her lap, Mangal Dev (Mars/Hanuman) appeared, pleased by her devotion.",
                    "He said, 'Ratnavali! Your husband is immortal. Ask for any other boon.' Ratnavali asked for the welfare of all who worship on Tuesdays. Mangal Dev granted the boon, saying, 'Whoever worships on Tuesday mornings with red flowers and sandalwood will be free from diseases and separation. Women who fast on Tuesdays will never be widowed.'",
                    "Someshwar came back to life by Mangal Dev's grace. Ratnavali returned home happily with her husband, and by observing the Mangalvar Vrat, they lived a life of luxury and finally attained Swargalok (Heaven)."
                ],
                contentHindi: [
                    "व्यास जी ने कहा- एक बार नैमिषारण्य तीर्थ में अस्सी हजार मुनि एकत्र हो कर पुराणों के ज्ञाता श्री सूत जी से पूछने लगे- हे महामुने! आपने हमें अनेक पुराणों की कथाएं सुनाई हैं, अब कृपा करके हमें ऐसा व्रत और कथा बतायें जिसके करने से सन्तान की प्राप्ति हो तथा मनुष्यों को रोग, शोक, अग्नि, सर्व दुःख आदि का भय दूर हो",
                    "श्री सूत जी बोले- हे मुनियों! आपने लोक कल्याण के लिए बहुत ही उत्तम बात पूछी है। एक बार युधिष्ठिर ने भगवान श्रीकृष्ण से लोक कल्याण के लिए यही प्रश्न किया था। भगवान श्रीकृष्ण और युधिष्ठिर का संवाद तुम्हारे सामने कहता हूं, ध्यान देकर सुनो।",
                    "कुण्डलपुर नामक एक नगर था, उसमें नन्दा नामक एक ब्राह्‌मण रहता था। भगवान की कृपा से उसके पास सब कुछ था, फिर भी वह दुःखी था। इसका कारण यह था कि ब्राह्‌मण की स्त्री सुनन्दा के कोई सन्तान न थी। सुनन्दा पतिव्रता थी। भक्तिपूर्वक श्री हनुमान जी की आराधना करती थी। मंगलवार के दिन व्रत करके अन्त में भोजन बना कर हनुमान जी का भोग लगाने के बाद स्वयं भोजन करती थी।",
                    "एक बार मंगलवार के दिन ब्राह्‌मणी गृह कार्य की अधिकता के कारण हनुमान जी को भोग न लगा सकी, तो इस पर उसे बहुत दुःख हुआ। उसने कुछ भी नहीं खाया और अपने मन में प्रण किया कि अब तो अगले मंगलवार को ही हनुमान जी का भोग लगाकर अन्न-जल ग्रहण करूंगी।",
                    "ब्राह्‌मणी सुनन्दा प्रतिदिन भोजन बनाती, श्रद्धापूर्वक पति को खिलाती, परन्तु स्वयं भोजन नहीं करती और मन ही मन श्री हनुमान जी की आराधना करती थी। इसी प्रकार छः दिन गुजर गए, और ब्राह्‌मणी सुनन्दा अपने निश्चय के अनुसार भूखी प्यासी निराहार रही, अगले मंगलवार को ब्राह्‌मणी सुनन्दा प्रातः काल ही बेहोश होकर गिर पड़ी।",
                    "ब्राह्‌मणी सुनन्दा की इस असीम भक्ति के प्रभाव से श्री हनुमान जी बहुत प्रसन्न हुए और प्रकट होकर बोले- सुनन्दा ! मैं तेरी भक्ति से बहुत प्रसन्न हूं, तू उठ और वर मांग। सुनन्दा ने कहा- ‘हे प्रभु, मेरी कोई सन्तान नहीं है, कृपा करके मुझे सन्तान प्राप्ति का आशीर्वाद दें।’",
                    "श्री महावीर जी बोले -‘तेरी इच्छा पूर्ण होगी। तेरे एक कन्या पैदा होगी उसके अष्टांग प्रतिदिन सोना दिया करेंगे।’ इस प्रकार कह कर श्री महावीर जी अन्तर्ध्यान हो गये।",
                    "श्री हनुमान जी की कृपा से वह ब्राह्‌मणी गर्भवती हुई और दसवें महीने में उसे बहुत ही सुन्दर पुत्री प्राप्त हुई। उसका नाम रत्नावली रखा गया। रत्नावली का अष्टांग बहुत सा सोना देता था, उस सोने से नन्दा ब्राह्मण बहुत ही धनवान हो गया। धन के लोभ में ब्राह्मण की मति भ्रष्ट हो गई।",
                    "समय बीतने पर रत्नावली का विवाह सोमेश्वर नामक युवक से हुआ। परंतु ब्राह्मण नन्दा ने लोभ के वशीभूत होकर जमाई का वध करवा दिया ताकि बेटी और सोना वापस मिल जाए। पति की मृत्यु समाचार सुन रत्नावली ने सती होने का निर्णय लिया।",
                    "तभी मंगलदेव प्रकट हुए और बोले-‘हे रत्नावली! मैं तेरी पति भक्ति से बहुत प्रसन्न हूं। तेरा पति अजर-अमर है।' सोमेश्वर जीवित हो उठा। रत्नावली अपने पति को पुनः प्राप्त कर बहुत प्रसन्न हुई और मंगल देव का व्रत प्रत्येक मंगलवार को करके सुख-ऐश्वर्य को भोगते हुए अन्त में अपने पति के साथ स्वर्ग लोक को गई।"
                ]
            },
            {
                id: 2,
                title: 'Story of Keshavdatt and Anjali',
                titleHindi: 'केशवदत्त और अंजलि की कथा',
                content: [
                    "In Rishinagar, a Brahmin named Keshavdatt lived with his wife Anjali. They had no shortage of wealth but were worried due to childlessness. Both husband and wife worshiped Hanuman Ji every Tuesday. Many years passed, but they did not get a child.",
                    "One day, Keshavdatt went to the forest to worship Hanuman Ji. Anjali stayed home and observed the fast. However, due to some reason, she could not offer Bhog to Hanuman Ji that day and slept hungry after sunset. She vowed not to eat until she offered Bhog the next Tuesday.",
                    "She remained hungry and thirsty for six days. On the seventh day, Tuesday, she worshiped Hanuman Ji but fainted due to weakness. Hanuman Ji appeared in her dream and said, 'Rise, daughter! I am pleased with your worship. I grant you the boon of a beautiful and worthy son.'",
                    "Immediately, Anjali woke up, offered Bhog, and ate. By Hanuman Ji's grace, she gave birth to a beautiful son named Mangalprasad. When Keshavdatt returned and saw the child, he questioned Anjali. She told him the truth about Hanuman Ji's boon, but he did not believe her and suspected her character.",
                    "One day, Keshavdatt took Mangal with him to a well for a bath and pushed him into it. He returned home and lied that Mangal had not come with him. Just then, Mangal came running back home.",
                    "Keshavdatt was shocked. That night, Hanuman Ji appeared in his dream and scolded him, 'I granted you this son being pleased with your Tuesday fasts. Why do you suspect your wife?' Keshavdatt realized his mistake, apologized to Anjali, and accepted his son lovingly. By observing the Tuesday fast properly, all their sorrows vanished."
                ],
                contentHindi: [
                    "ऋषिनगर में केशवदत्त ब्राह्मण अपनी पत्नी अंजलि के साथ रहता था। केशवदत्त के घर में धन-संपत्ति की कोई कमी नहीं थी। नगर में सभी केशवदत्त का सम्मान करते थे, लेकिन केशवदत्त संतान नहीं होने से बहुत चिंतित रहता था।",
                    "दोनों पति-पत्नी प्रति मंगलवार को हनुमानजी की पूजा करते थे। विधिवत मंगलवार का व्रत करते हुए कई वर्ष बीत गए। ब्राह्मण बहुत निराश हो गया, लेकिन उसने व्रत करना नहीं छोड़ा।",
                    "कुछ दिनों के बाद केशवदत्त हनुमानजी की पूजा करने के लिए जंगल में चला गया। उसकी पत्नी अंजलि घर में रहकर मंगलवार का व्रत करने लगी। दोनों पति-पत्नी पुत्र-प्राप्ति के लिए मंगलवार का विधिवत व्रत करने लगे। अंजलि ने अगले मंगलवार को व्रत किया लेकिन किसी कारणवश उस दिन अंजलि हनुमानजी को भोग नहीं लगा सकी और उस दिन वह सूर्यास्त के बाद भूखी ही सो गई।",
                    "अगले मंगलवार को हनुमानजी को भोग लगाए बिना उसने भोजन नहीं करने का प्रण कर लिया। छः दिन तक अंजलि भूखी-प्यासी रही। सातवें दिन मंगलवार को अंजलि ने हनुमानजी की पूजा की, लेकिन तभी भूख-प्यास के कारण अंजलि बेहोश हो गई।",
                    "हनुमानजी ने उसे स्वप्न में दर्शन देते हुए कहा- ‘उठो पुत्री! मैं तुम्हारी पूजा-पाठ से बहुत प्रसन्न हूँ। तुम्हें सुंदर और सुयोग्य पुत्र होने का वर देता हूं।’ यह कहकर हनुमानजी अंतर्धान हो गए। तत्काल अंजलि ने उठकर हनुमानजी को भोग लगाया और स्वयं भोजन किया।",
                    "हनुमानजी की अनुकम्पा से अंजलि ने एक सुंदर शिशु को जन्म दिया। मंगलवार को जन्म लेने के कारण उस बच्चे का नाम मंगलप्रसाद रखा गया। कुछ दिनों बाद अंजलि का पति केशवदत्त भी घर लौट आया। उसने मंगल को देखा तो अंजलि से पूछा- ‘यह सुंदर बच्चा किसका है?’ अंजलि ने खुश होते हुए हनुमानजी के दर्शन देने और पुत्र प्राप्त होने का वरदान देने की सारी कथा सुना दी। लेकिन केशवदत्त को उसकी बातों पर विश्वास नहीं हुआ।",
                    "केशवदत्त ने उस बच्चे को मार डालने की योजना बनाई। एक दिन केशवदत स्नान के लिए कुएं पर गया। मंगल भी उसके साथ था। केशवदत्त ने मौका देखकर मंगल को कुएं में फेंक दिया और घर आकर बहाना बना दिया कि मंगल तो कुएं पर मेरे पास पहुंचा ही नहीं। केशवदत्त के इतने कहने के ठीक बाद मंगल दौड़ता हुआ घर लौट आया।",
                    "केशवदत्त मंगल को देखकर बुरी तरह हैरान हो उठा। उसी रात हनुमानजी ने केशवदत्त को स्वप्न में दर्शन देते हुए कहा- ‘तुम दोनों के मंगलवार के व्रत करने से प्रसन्न होकर, पुत्रजन्म का वर मैंने दिया था। फिर तुम अपनी पत्नी पर शक क्यों करते हो? ",
                    "उसी समय केशवदत्त ने अंजलि को जगाकर उससे क्षमा मांगते हुए स्वप्न में हनुमानजी के दर्शन देने की सारी कहानी सुनाई। केशवदत्त ने अपने बेटे को हृदय से लगाकर बहुत प्यार किया। उस दिन के बाद सभी आनंदपूर्वक रहने लगे।"
                ]
            }
        ]
    },

    {
        id: 'shukravar-vrat-katha',
        slug: 'shukravar-vrat-katha',
        title: 'Shukravar Vrat Katha',
        titleHindi: 'शुक्रवार व्रत कथा',
        description: 'Dedicated to Goddess Lakshmi or Santoshi Mata. Observed for wealth, Material comforts, and happy married life.',
        descriptionHindi: 'देवी लक्ष्मी या संतोषी माता को समर्पित। धन, भौतिक सुख और सुखी वैवाहिक जीवन के लिए।',
        imagePath: '/images/shukravar-vrat-katha.webp',
        deity: 'Lakshmi',
        readTime: '10 min',
        chapters: [{
            id: 1,
            title: 'Story of Lakshmi',
            titleHindi: 'लक्ष्मी की कथा',
            content: ["Devotion to Goddess Lakshmi on Fridays ensures that poverty never enters the home. One should offer white flowers and kheer."],
            contentHindi: ["शुक्रवार को देवी लक्ष्मी की भक्ति करने से घर में कभी दरिद्रता नहीं आती। इस दिन सफेद फूल और खीर का भोग लगाना चाहिए।"]
        }]
    },
    {
        id: 'vaibhav-lakshmi-vrat-katha',
        slug: 'vaibhav-lakshmi-vrat-katha',
        title: 'Vaibhav Lakshmi Vrat Katha',
        titleHindi: 'वैभव लक्ष्मी व्रत कथा',
        description: 'A miraculous fast for prosperity. Often observed by women for the prosperity of their household.',
        descriptionHindi: 'समृद्धि के लिए एक चमत्कारी व्रत। महिलाएं अक्सर अपने घर की समृद्धि के लिए इसे रखती हैं।',
        imagePath: '/images/vaibhav-lakshmi-vrat-katha.webp',
        deity: 'Lakshmi',
        readTime: '15 min',
        chapters: [{
            id: 1,
            title: 'Sheela and the Miracle',
            titleHindi: 'शीला और चमत्कार',
            content: ["Sheela, a pious woman, was suffering due to her husband's bad luck. An old woman taught her the Vaibhav Lakshmi Vrat...", "Upon observing the Vrat with strict discipline, her husband's nature changed, and they became wealthy again."],
            contentHindi: ["शीला, एक धर्मपरायण स्त्री, अपने पति के दुर्भाग्य के कारण कष्ट झेल रही थी। एक बुजुर्ग महिला ने उसे वैभव लक्ष्मी व्रत सिखाया...", "नियमित रूप से व्रत करने पर उसके पति की प्रकृति बदल गई और वे फिर से धनवान हो गए।"]
        }]
    },

    {
        id: 'shanivar-vrat-katha',
        slug: 'shanivar-vrat-katha',
        title: 'Shanivar Vrat Katha',
        titleHindi: 'शनिवार व्रत कथा',
        description: 'Dedicated to Lord Shani (Saturn). Reduces the malefic effects of Sade Sati and brings justice.',
        descriptionHindi: 'शनि देव को समर्पित। साढ़ेसाती के दुष्प्रभावों को कम करता है और न्याय दिलाता है।',
        imagePath: '/images/shanivar-vrat-katha.webp',
        deity: 'Shani Dev',
        readTime: '10 min',
        chapters: [{
            id: 1,
            title: 'Greatness of Shani Dev',
            titleHindi: 'शनि देव की महिमा',
            content: ["Once, the planets argued who was the greatest. King Vikramaditya was asked to judge. He gave Shani Dev a lower seat (iron)...", "Shani Dev proved his power by putting Vikramaditya through years of hardship, teaching him that no one is above the law of Karma."],
            contentHindi: ["एक बार ग्रहों में बहस हुई कि सबसे महान कौन है। राजा विक्रमादित्य से निर्णय करने को कहा गया। उन्होंने शनि देव को नीचा आसन (लोहे का) दिया...", "शनि देव ने विक्रमादित्य को वर्षों कष्ट देकर अपनी शक्ति सिद्ध की, यह सिखाते हुए कि कर्म के नियम से कोई ऊपर नहीं।"]
        }]
    },
    {
        id: 'ravivar-vrat-katha',
        slug: 'ravivar-vrat-katha',
        title: 'Ravivar Vrat Katha',
        titleHindi: 'रविवार व्रत कथा',
        description: 'Dedicated to Surya Dev (Sun). Cures skin diseases, brings health, and social status.',
        descriptionHindi: 'सूर्य देव को समर्पित। चर्म रोगों को ठीक करता है, स्वास्थ्य और सामाजिक प्रतिष्ठा प्रदान करता है।',
        imagePath: '/images/ravivar-vrat-katha.webp',
        deity: 'Surya',
        readTime: '10 min',
        chapters: [{
            id: 1,
            title: 'The Old Lady and the Cow',
            titleHindi: 'बुढ़िया और गाय',
            content: ["An old lady used to coat her house with cow dung every Sunday before sunrise. Surya Dev was pleased and gave her a golden cow...", "The King tried to steal the cow but realized the power of the old lady's devotion to the Sun God."],
            contentHindi: ["एक बुढ़िया हर रविवार सूर्योदय से पहले अपने घर को गोबर से लीपती थी। सूर्य देव प्रसन्न हुए और उसे एक सोने की गाय दी...", "राजा ने गाय चुराने की कोशिश की पर बुढ़िया की सूर्य देव के प्रति भक्ति की शक्ति को पहचाना।"]
        }]
    },

    // --- MONTHLY VRATS ---
    {
        id: 'satyanarayan-vrat-katha',
        slug: 'satyanarayan-vrat-katha',
        title: 'Shri Satyanarayan Vrat Katha',
        titleHindi: 'श्री सत्यनारायण व्रत कथा',
        description: 'The most popular katha recited on Purnima. Brings peace and prosperity.',
        descriptionHindi: 'पूर्णिमा पर पढ़ी जाने वाली सबसे लोकप्रिय कथा। शांति और समृद्धि प्रदान करती है।',
        imagePath: '/images/satyanarayan-vrat-katha.webp',
        deity: 'Vishnu',
        readTime: '20 min',
        chapters: [
            {
                id: 1,
                title: 'Chapter 1: The Origin',
                titleHindi: 'अध्याय १: उत्पत्ति',
                content: [
                    "Once, 88,000 rishis gathered at Naimisharanya. They asked Sutji for a Vrat to end human suffering. Sutji narrated the Satyanarayan Vrat as told by Lord Vishnu to Narad Muni.",
                    "Lord Vishnu said, 'This Vrat can be performed by anyone. Worship Satyanarayan (Truth as God) with devotion, and your sorrows will vanish.'"
                ],
                contentHindi: [
                    "एक बार नैमिषारण्य में 88,000 ऋषि एकत्रित हुए। उन्होंने सूतजी से मानव दुखों को दूर करने वाला व्रत पूछा। सूतजी ने सत्यनारायण व्रत का वर्णन किया जो भगवान विष्णु ने नारद मुनि को बताया था।",
                    "भगवान विष्णु ने कहा, 'यह व्रत कोई भी कर सकता है। सत्यनारायण (सत्य को भगवान मानकर) की भक्तिपूर्वक पूजा करो, तुम्हारे दुख दूर हो जाएंगे।'"
                ]
            },
            {
                id: 2,
                title: 'Chapter 2: The Brahmin and the Woodcutter',
                titleHindi: 'अध्याय २: ब्राह्मण और लकड़हारा',
                content: [
                    "A poor Brahmin in Kashi was wandering in hunger. Lord Vishnu appeared as an old man and taught him this Vrat. The Brahmin became wealthy.",
                    "A woodcutter saw the Brahmin performing the Puja and decided to do the same. He sold his wood for a higher price that day and performed the Vrat, eventually becoming a rich merchant."
                ],
                contentHindi: [
                    "काशी में एक गरीब ब्राह्मण भूखा भटक रहा था। भगवान विष्णु एक वृद्ध के रूप में प्रकट हुए और उसे यह व्रत सिखाया। ब्राह्मण धनवान हो गया।",
                    "एक लकड़हारे ने ब्राह्मण को पूजा करते देखा और वही करने का निर्णय लिया। उस दिन उसने अपनी लकड़ी अधिक दाम पर बेची और व्रत किया, अंततः वह एक धनी व्यापारी बना।"
                ]
            }
        ]
    },
    {
        id: 'ekadashi-vrat-katha',
        slug: 'ekadashi-vrat-katha',
        title: 'Ekadashi Vrat Katha',
        titleHindi: 'एकादशी व्रत कथा',
        description: 'Occurs twice a month. The most important fast in Vaishnavism to attain Moksha.',
        descriptionHindi: 'मास में दो बार आती है। मोक्ष प्राप्ति के लिए वैष्णव संप्रदाय में सबसे महत्वपूर्ण व्रत।',
        imagePath: '/images/ekadashi-vrat-katha.webp',
        deity: 'Vishnu',
        readTime: '15 min',
        chapters: [{
            id: 1,
            title: 'Significance',
            titleHindi: 'महत्व',
            content: ["Ekadashi is the 11th lunar day. It is said that sins dwell in grains on this day, so grains are avoided.", "Observing Nirjala Ekadashi (without water) is considered equal to observing all 24 Ekadashis."],
            contentHindi: ["एकादशी चंद्रमास की ग्यारहवीं तिथि है। कहा जाता है कि इस दिन पाप अन्न में वास करते हैं, इसलिए अन्न का त्याग किया जाता है।", "निर्जला एकादशी (बिना जल) का पालन करना 24 एकादशियों के समान माना जाता है।"]
        }]
    },
    {
        id: 'pradosh-vrat-katha',
        slug: 'pradosh-vrat-katha',
        title: 'Pradosh Vrat Katha',
        titleHindi: 'प्रदोष व्रत कथा',
        description: 'Observed on the 13th day (Trayodashi). Dedicated to Shiva, performed during twilight (Pradosh Kaal).',
        descriptionHindi: 'त्रयोदशी (13वें दिन) को मनाया जाता है। शिव को समर्पित, संध्याकाल (प्रदोष काल) में किया जाता है।',
        imagePath: '/images/pradosh-vrat-katha.webp',
        deity: 'Shiva',
        readTime: '12 min',
        chapters: [{
            id: 1,
            title: 'Significance',
            titleHindi: 'महत्व',
            content: ["Worshipping Shiva during the Pradosh time destroys all sins and bestows Moksha."],
            contentHindi: ["प्रदोष काल में शिव की पूजा करने से सभी पाप नष्ट होते हैं और मोक्ष की प्राप्ति होती है।"]
        }]
    },
    {
        id: 'sankashti-chaturthi-katha',
        slug: 'sankashti-chaturthi-katha',
        title: 'Sankashti Chaturthi Katha',
        titleHindi: 'संकष्टी चतुर्थी कथा',
        description: 'Dedicated to Ganesha on the 4th day after Full Moon. Removes all obstacles (Sankat).',
        descriptionHindi: 'पूर्णिमा के बाद चौथे दिन गणेश को समर्पित। सभी संकटों को दूर करता है।',
        imagePath: '/images/sankashti-chaturthi-katha.webp',
        deity: 'Ganesh',
        readTime: '10 min',
        chapters: [{
            id: 1,
            title: 'Story',
            titleHindi: 'कथा',
            content: ["Once the demigods were in trouble and asked Shiva for help. Shiva asked his sons Kartikeya and Ganesha who could solve it...", "Ganesha proved his wisdom by circumambulating his parents (his universe) and was thus worshipped first."],
            contentHindi: ["एक बार देवता संकट में थे और उन्होंने शिव से सहायता मांगी। शिव ने अपने पुत्रों कार्तिकेय और गणेश से पूछा कि कौन इसे सुलझा सकता है...", "गणेश ने अपने माता-पिता (अपने ब्रह्मांड) की परिक्रमा करके अपनी बुद्धिमत्ता सिद्ध की और इसलिए उन्हें पहले पूजा जाता है।"]
        }]
    },
    {
        id: 'purnima-vrat-katha',
        slug: 'purnima-vrat-katha',
        title: 'Purnima Vrat Katha',
        titleHindi: 'पूर्णिमा व्रत कथा',
        description: 'Full moon fast. Devotees worship Lord Vishnu or Shiva depending on tradition.',
        descriptionHindi: 'पूर्ण चंद्रमा का व्रत। परंपरा के अनुसार भक्त विष्णु या शिव की पूजा करते हैं।',
        imagePath: '/images/purnima-vrat-katha.webp',
        deity: 'Vishnu',
        readTime: '10 min',
        chapters: [{
            id: 1,
            title: 'Significance',
            titleHindi: 'महत्व',
            content: ["The Full Moon represents completeness. Fasting on this day calms the mind and body."],
            contentHindi: ["पूर्ण चंद्रमा पूर्णता का प्रतीक है। इस दिन व्रत रखने से मन और शरीर शांत होते हैं।"]
        }]
    },
    {
        id: 'masik-shivratri-katha',
        slug: 'masik-shivratri-katha',
        title: 'Masik Shivratri Katha',
        titleHindi: 'मासिक शिवरात्रि कथा',
        description: 'Monthly observance dedicated to Lord Shiva on the 14th night of the dark fortnight.',
        descriptionHindi: 'कृष्ण पक्ष की चतुर्दशी रात को शिव को समर्पित मासिक पालन।',
        imagePath: '/images/masik-shivratri-katha.webp',
        deity: 'Shiva',
        readTime: '10 min',
        chapters: [{
            id: 1,
            title: 'Significance',
            titleHindi: 'महत्व',
            content: ["It is the night when Shiva performed the Tandava. Fasting on this day controls the senses and anger."],
            contentHindi: ["यह वह रात है जब शिव ने तांडव नृत्य किया था। इस दिन व्रत करने से इंद्रियों और क्रोध पर नियंत्रण होता है।"]
        }]
    },

    // --- ANNUAL FESTIVALS ---
    {
        id: 'karwa-chauth-katha',
        slug: 'karwa-chauth-katha',
        title: 'Karwa Chauth Katha',
        titleHindi: 'करवा चौथ कथा',
        description: 'Observed by married women for the longevity of their husbands. Story of Queen Veervati.',
        descriptionHindi: 'विवाहित महिलाएं अपने पति की दीर्घायु के लिए करती हैं। रानी वीरवती की कहानी।',
        imagePath: '/images/karwa-chauth-katha.webp',
        deity: 'Parvati',
        readTime: '15 min',
        chapters: [{
            id: 1,
            title: 'Story of Queen Veervati',
            titleHindi: 'रानी वीरवती की कहानी',
            content: ["Veervati, a beautiful queen, observed the fast at her parents' home. Her brothers couldn't bear to see her hunger and tricked her into breaking the fast...", "Her husband died immediately. She prayed to Indrani and observed the fasts correctly throughout the year, eventually reviving her husband."],
            contentHindi: ["वीरवती, एक सुंदर रानी, अपने मायके में व्रत रख रही थी। उसके भाई उसकी भूख देख नहीं पाए और उसे धोखे से व्रत तुड़वा दिया...", "उसके पति की तुरंत मृत्यु हो गई। उसने इंद्राणी से प्रार्थना की और पूरे वर्ष सही ढंग से व्रत किया, अंततः उसके पति को पुनर्जीवित कर दिया।"]
        }]
    },
    {
        id: 'ahoi-ashtami-katha',
        slug: 'ahoi-ashtami-katha',
        title: 'Ahoi Ashtami Katha',
        titleHindi: 'अहोई अष्टमी कथा',
        description: 'Observed by mothers for the well-being of their sons.',
        descriptionHindi: 'माताएं अपने पुत्रों की भलाई के लिए करती हैं।',
        imagePath: '/images/ahoi-ashtami-katha.webp',
        deity: 'Ahoi Mata',
        readTime: '12 min',
        chapters: [{
            id: 1,
            title: 'The Syau and the Mother',
            titleHindi: 'स्याहू और माँ',
            content: ["A woman accidentally killed a cub of a Syau (hedgehog/porcupine) while digging soil...", "She lost her seven sons. She prayed to Ahoi Mata and served the Syau, eventually getting her sons back."],
            contentHindi: ["एक महिला ने मिट्टी खोदते समय गलती से एक स्याहू (साही/सेही) के बच्चे को मार दिया...", "उसने अपने सात बेटे खो दिए। उसने अहोई माता से प्रार्थना की और स्याहू की सेवा की, अंततः उसे अपने बेटे वापस मिल गए।"]
        }]
    },
    {
        id: 'hartalika-teej-katha',
        slug: 'hartalika-teej-katha',
        title: 'Hartalika Teej Katha',
        titleHindi: 'हरतालिका तीज कथा',
        description: 'Dedicated to Shiva and Parvati. Observed for marital bliss and finding a good husband.',
        descriptionHindi: 'शिव और पार्वती को समर्पित। वैवाहिक सुख और अच्छे पति की प्राप्ति के लिए।',
        imagePath: '/images/hartalika-teej-katha.webp',
        deity: 'Parvati',
        readTime: '15 min',
        chapters: [{
            id: 1,
            title: 'Parvati\'s Penance',
            titleHindi: 'पार्वती की तपस्या',
            content: ["Parvati made a Shiva Lingam out of sand and worshipped it with intense devotion to get Shiva as her husband...", "Shiva was pleased and accepted her."],
            contentHindi: ["पार्वती ने रेत से शिवलिंग बनाकर शिव को पति रूप में प्राप्त करने के लिए गहन भक्ति से पूजा की...", "शिव प्रसन्न हुए और उन्हें स्वीकार कर लिया।"]
        }]
    },
    {
        id: 'vat-savitri-vrat-katha',
        slug: 'vat-savitri-vrat-katha',
        title: 'Vat Savitri Vrat Katha',
        titleHindi: 'वट सावित्री व्रत कथा',
        description: 'The legendary story of Savitri and Satyavan. Observed for husband\'s longevity.',
        descriptionHindi: 'सावित्री और सत्यवान की पौराणिक कथा। पति की दीर्घायु के लिए।',
        imagePath: '/images/vat-savitri-vrat-katha.webp',
        deity: 'Savitri',
        readTime: '15 min',
        chapters: [{
            id: 1,
            title: 'Savitri and Yama',
            titleHindi: 'सावित्री और यम',
            content: ["Savitri followed Yama (God of Death) when he took her husband Satyavan's soul...", "Through her wisdom and devotion, she tricked Yama into granting her husband's life back."],
            contentHindi: ["सावित्री यम (मृत्यु के देवता) के पीछे गई जब वह उसके पति सत्यवान की आत्मा ले गये...", "अपनी बुद्धि और भक्ति से उसने यम से अपने पति का जीवन वापस प्राप्त किया।"]
        }]
    },
    {
        id: 'jivitputrika-vrat-katha',
        slug: 'jivitputrika-vrat-katha',
        title: 'Jivitputrika (Jitiya) Vrat Katha',
        titleHindi: 'जीवित्पुत्रिका व्रत कथा',
        description: 'Popular in Bihar/UP. Observed by mothers for their children\'s safety.',
        descriptionHindi: 'बिहार/उत्तर प्रदेश में लोकप्रिय। माताएं अपने बच्चों की सुरक्षा के लिए करती हैं।',
        imagePath: '/images/jivitputrika-vrat-katha.webp',
        deity: 'Jimutavahana',
        readTime: '15 min',
        chapters: [{
            id: 1,
            title: 'Story of Jimutavahana',
            titleHindi: 'जीमूतवाहन की कथा',
            content: ["Jimutavahana, a kind prince, offered himself to Garuda to save a snake (Naga)...", "His sacrifice pleased Garuda and the Nagas, ensuring the safety of children."],
            contentHindi: ["जीमूतवाहन, एक दयालु राजकुमार, ने एक साँप (नाग) को बचाने के लिए खुद को गरुड़ को अर्पित कर दिया...", "उनके बलिदान से गरुड़ और नाग प्रसन्न हुए, जिससे बच्चों की सुरक्षा सुनिश्चित हुई।"]
        }]
    },
    {
        id: 'mahashivratri-vrat-katha',
        slug: 'mahashivratri-vrat-katha',
        title: 'Mahashivratri Vrat Katha',
        titleHindi: 'महाशिवरात्रि व्रत कथा',
        description: 'The story of the hunter who unknowingly worshipped a Shiva Lingam.',
        descriptionHindi: 'उस शिकारी की कहानी जिसने अनजाने में शिवलिंग की पूजा कर दी।',
        imagePath: '/images/mahashivratri-vrat-katha.webp',
        deity: 'Shiva',
        readTime: '12 min',
        chapters: [{
            id: 1,
            title: 'The Hunter',
            titleHindi: 'शिकारी',
            content: ["A hunter got stuck in a Bel tree at night. To stay awake, he plucked leaves and dropped them...", "Unknowingly, he was dropping Bel leaves on a Shiva Lingam below. Shiva accepted this as worship and granted him Moksha."],
            contentHindi: ["एक शिकारी रात को बेल के पेड़ पर फँस गया। जागते रहने के लिए वह पत्ते तोड़कर नीचे गिराता रहा...", "अनजाने में वह नीचे शिवलिंग पर बेलपत्र गिरा रहा था। शिव ने इसे पूजा मानकर उसे मोक्ष प्रदान किया।"]
        }]
    },
    {
        id: 'janmashtami-vrat-katha',
        slug: 'janmashtami-vrat-katha',
        title: 'Janmashtami Vrat Katha',
        titleHindi: 'जन्माष्टमी व्रत कथा',
        description: 'The story of Lord Krishna\'s birth.',
        descriptionHindi: 'भगवान कृष्ण के जन्म की कहानी।',
        imagePath: '/images/janmashtami-vrat-katha.webp',
        deity: 'Krishna',
        readTime: '15 min',
        chapters: [{
            id: 1,
            title: 'Birth of Krishna',
            titleHindi: 'कृष्ण का जन्म',
            content: ["Vasudev and Devaki were imprisoned by Kansa. At midnight on Ashtami, Krishna was born...", "Vasudev carried him across the Yamuna to Gokul to save him from Kansa."],
            contentHindi: ["वासुदेव और देवकी कंस द्वारा कैद थे। अष्टमी की मध्यरात्रि को कृष्ण का जन्म हुआ...", "वासुदेव उन्हें कंस से बचाने के लिए यमुना पार करके गोकुल ले गए।"]
        }]
    },
    {
        id: 'rishi-panchami-katha',
        slug: 'rishi-panchami-katha',
        title: 'Rishi Panchami Katha',
        titleHindi: 'ऋषि पंचमी कथा',
        description: 'Observed to seek forgiveness for sins committed unknowingly.',
        descriptionHindi: 'अनजाने में किए गए पापों की क्षमा प्राप्त करने के लिए।',
        imagePath: '/images/rishi-panchami-katha.webp',
        deity: 'Saptarishi',
        readTime: '10 min',
        chapters: [{
            id: 1,
            title: 'Significance',
            titleHindi: 'महत्व',
            content: ["Worshipping the seven sages (Saptarishi) purifies the body and soul."],
            contentHindi: ["सप्तर्षियों की पूजा करने से शरीर और आत्मा शुद्ध होते हैं।"]
        }]
    },

    {
        id: 'anant-chaturdashi-katha',
        slug: 'anant-chaturdashi-katha',
        title: 'Anant Chaturdashi Katha',
        titleHindi: 'अनंत चतुर्दशी कथा',
        description: 'Dedicated to Lord Vishnu (Anant).',
        descriptionHindi: 'भगवान विष्णु (अनंत) को समर्पित।',
        imagePath: '/images/anant-chaturdashi-katha.webp',
        deity: 'Vishnu',
        readTime: '12 min',
        chapters: [{
            id: 1,
            title: 'Sushila and Kaundinya',
            titleHindi: 'सुशीला और कौंडिन्य',
            content: ["Sushila tied the Anant thread (14 knots) on her hand. Her husband Kaundinya tore it in arrogance...", "He lost everything. He realized his mistake, went to the forest to find Anant (Vishnu), and asked for forgiveness."],
            contentHindi: ["सुशीला ने अनंत धागा (14 गांठों वाला) अपने हाथ पर बांधा। उसके पति कौंडिन्य ने अहंकार में इसे तोड़ दिया...", "उसने सब कुछ खो दिया। उसे अपनी गलती का अहसास हुआ, वन में अनंत (विष्णु) को खोजने गया और क्षमा मांगी।"]
        }]
    },
    {
        id: 'mangla-gauri-katha',
        slug: 'mangla-gauri-katha',
        title: 'Mangla Gauri Katha',
        titleHindi: 'मंगला गौरी कथा',
        description: 'Observed by newly married women on Tuesdays during Shravan.',
        descriptionHindi: 'श्रावण में मंगलवार को नवविवाहित महिलाओं द्वारा किया जाता है।',
        imagePath: '/images/mangla-gauri-katha.webp',
        deity: 'Gauri',
        readTime: '10 min',
        chapters: [{
            id: 1,
            title: 'Significance',
            titleHindi: 'महत्व',
            content: ["Worshipping Gauri (Parvati) ensures the long life of the husband."],
            contentHindi: ["गौरी (पार्वती) की पूजा करने से पति की दीर्घायु सुनिश्चित होती है।"]
        }]
    },
    {
        id: 'varalakshmi-vratam',
        slug: 'varalakshmi-vratam',
        title: 'Varalakshmi Vratam',
        titleHindi: 'वरलक्ष्मी व्रतम',
        description: 'Highly popular in South India, dedicated to Goddess Lakshmi.',
        descriptionHindi: 'दक्षिण भारत में अत्यंत लोकप्रिय, देवी लक्ष्मी को समर्पित।',
        imagePath: '/images/varalakshmi-vratam.webp',
        deity: 'Lakshmi',
        readTime: '12 min',
        chapters: [{
            id: 1,
            title: 'Charumati\'s Devotion',
            titleHindi: 'चारुमती की भक्ति',
            content: ["Goddess Varalakshmi appeared in Charumati's dream. Worshiping her grants eight types of wealth (Ashta Lakshmi)."],
            contentHindi: ["देवी वरलक्ष्मी चारुमती के स्वप्न में प्रकट हुईं। उनकी पूजा करने से आठ प्रकार की संपदा (अष्ट लक्ष्मी) प्राप्त होती है।"]
        }]
    },
    {
        id: 'kokila-vrat',
        slug: 'kokila-vrat',
        title: 'Kokila Vrat',
        titleHindi: 'कोकिला व्रत',
        description: 'Observed in some regions during the leap month (Adhik Maas).',
        descriptionHindi: 'कुछ क्षेत्रों में अधिक मास के दौरान मनाया जाता है।',
        imagePath: '/images/kokila-vrat.webp',
        deity: 'Parvati',
        readTime: '10 min',
        chapters: [{
            id: 1,
            title: 'Parvati as Cuckoo',
            titleHindi: 'कोयल रूप में पार्वती',
            content: ["It is said Parvati worshipped Shiva in the form of a Cuckoo bird (Kokila) to get him as her husband."],
            contentHindi: ["कहा जाता है कि पार्वती ने शिव को पति रूप में पाने के लिए कोयल (कोकिला) के रूप में उनकी पूजा की।"]
        }]
    },
    {
        id: 'budhvar-vrat-katha',
        slug: 'budhvar-vrat-katha',
        title: 'Budhvar Vrat Katha',
        titleHindi: 'बुधवार व्रत कथा',
        description: 'Dedicated to Lord Ganesha or Budh Dev (Mercury). Promotes intelligence, business success, and peace.',
        descriptionHindi: 'भगवान गणेश या बुध देव को समर्पित। बुद्धि, व्यापार में सफलता और शांति प्रदान करता है।',
        imagePath: '/images/budhvar-vrat-katha.webp',
        deity: 'Ganesh',
        readTime: '15 min',
        chapters: [{
            id: 1,
            title: 'The Story of Madhusudan',
            titleHindi: 'मधुसूदन की कथा',
            content: [
                "In the city of Samtapur lived a wealthy man named Madhusudan. He was married to Sangeeta, a beautiful girl from Balrampur. Once, Madhusudan went to Balrampur on a Wednesday to bring his wife back home.",
                "Madhusudan asked his parents-in-law to bid farewell to Sangeeta. Her parents said, 'Son, today is Wednesday. One should not travel for any auspicious work on Wednesday.' But Madhusudan did not agree. He insisted on not believing in such omens.",
                "Both started their journey in a bullock cart. After traveling two kos (approx. 4 miles), one wheel of his cart broke. From there, they started walking. On the way, Sangeeta felt thirsty. Madhusudan made her sit under a tree and went to fetch water.",
                "When Madhusudan returned with water after some time, he was shocked to see another man who looked exactly like him sitting next to his wife. Sangeeta was also stunned to see Madhusudan. She could not distinguish between the two.",
                "Madhusudan asked that man, 'Who are you and why are you sitting near my wife?'",
                "Hearing Madhusudan, that man said, 'Oh brother, this is my wife Sangeeta. I have brought my wife from her in-laws. But who are you to ask me such a question?'",
                "Madhusudan said, 'You are definitely a thief or a cheat. This is my wife Sangeeta. I had gone to get water after making her sit under the tree.' On this, the man said, 'Oh brother! You are lying. I went to get water when Sangeeta, felt thirsty. I have even given her water. Now you quietly leave from here. Otherwise, I will call a soldier and get you arrested.'",
                "Both started fighting. Seeing them fight, many people gathered there. Some soldiers of the city also arrived. The soldiers caught both of them and took them to the King. Hearing the whole story, even the King could not decide. Sangeeta also could not recognize her real husband among the two.",
                "The King ordered both to be put in prison. Hearing the King's decision, the real Madhusudan got scared. Just then a voice from the sky said, 'Madhusudan! You did not listen to Sangeeta's parents and departed from your in-laws on Wednesday. All this is happening due to the wrath of Lord Budhdev.'",
                "Madhusudan prayed to Lord Budhdev, 'O Lord Budhdev, please forgive me. I have made a huge mistake. In the future, I will never travel on Wednesday and will always observe your fast on Wednesday.'",
                "On Madhusudan's prayer, Lord Budhdev forgave him. Immediately, the other person disappeared from before the King. The King and other people were surprised to see this miracle. Due to this grace of Lord Budhdev, the King bid farewell to Madhusudan and his wife with honor.",
                "After walking some distance, they found the bullock cart on the way. The broken wheel of the bullock cart was also fixed. Both sat in it and left for Samtapur. Madhusudan and his wife Sangeeta started living happily while observing the Wednesday fast. Thus, by the grace of Lord Budhdev, happiness started raining on them. In this way, Lord Budhdev removes all the sufferings of the men and women who observe the Wednesday fast and listen to the story properly."
            ],
            contentHindi: [
                "समतापुर नगर में मधुसूदन नामक एक व्यक्ति रहता था। वह बहुत धनवान था। मधुसूदन का विवाह बलरामपुर नगर की सुंदर लड़की संगीता से हुआ था। एक बार मधुसूदन अपनी पत्नी को लेने बुधवार के दिन बलरामपुर गया।",
                "मधुसूदन ने पत्नी के माता-पिता से संगीता को विदा कराने के लिए कहा। माता-पिता बोले- 'बेटा, आज बुधवार है। बुधवार को किसी भी शुभ कार्य के लिए यात्रा नहीं करते।' लेकिन मधुसूदन नहीं माना। उसने ऐसी शुभ-अशुभ की बातों को न मानने की बात कही।",
                "दोनों ने बैलगाड़ी से यात्रा प्रारंभ की। दो कोस की यात्रा के बाद उसकी गाड़ी का एक पहिया टूट गया। वहां से दोनों ने पैदल ही यात्रा शुरू की। रास्ते में संगीता को प्यास लगी। मधुसूदन उसे एक पेड़ के नीचे बैठाकर जल लेने चला गया।",
                "थोड़ी देर बाद जब मधुसूदन कहीं से जल लेकर वापस आया तो वह बुरी तरह हैरान हो उठा क्योंकि उसकी पत्नी के पास उसकी ही शक्ल-सूरत का एक दूसरा व्यक्ति बैठा था। संगीता भी मधुसूदन को देखकर हैरान रह गई। वह दोनों में कोई अंतर नहीं कर पाई।",
                "मधुसूदन ने उस व्यक्ति से पूछा 'तुम कौन हो और मेरी पत्नी के पास क्यों बैठे हो?'",
                "मधुसूदन की बात सुनकर उस व्यक्ति ने कहा- 'अरे भाई, यह मेरी पत्नी संगीता है। मैं अपनी पत्नी को ससुराल से विदा करा कर लाया हूं। लेकिन तुम कौन हो जो मुझसे ऐसा प्रश्न कर रहे हो?'",
                "मधुसूदन ने कहा 'तुम जरूर कोई चोर या ठग हो। यह मेरी पत्नी संगीता है। मैं इसे पेड़ के नीचे बैठाकर जल लेने गया था।' इस पर उस व्यक्ति ने कहा- 'अरे भाई! झूठ तो तुम बोल रहे हो। संगीता को प्यास लगने पर जल लेने तो मैं गया था। मैंने तो जल लाकर अपनी पत्नी को पिला भी दिया है। अब तुम चुपचाप यहां से चलते बनो। नहीं तो किसी सिपाही को बुलाकर तुम्हें पकड़वा दूंगा।'",
                "दोनों एक-दूसरे से लड़ने लगे। उन्हें लड़ते देख बहुत से लोग वहां एकत्र हो गए। नगर के कुछ सिपाही भी वहां आ गए। सिपाही उन दोनों को पकड़कर राजा के पास ले गए। सारी कहानी सुनकर राजा भी कोई निर्णय नहीं कर पाया। संगीता भी उन दोनों में से अपने वास्तविक पति को नहीं पहचान पा रही थी।",
                "राजा ने दोनों को कारागार में डाल देने के लिए कहा। राजा के फैसले पर असली मधुसूदन भयभीत हो उठा। तभी आकाशवाणी हुई- 'मधुसूदन! तूने संगीता के माता-पिता की बात नहीं मानी और बुधवार के दिन अपनी ससुराल से प्रस्थान किया। यह सब भगवान बुधदेव के प्रकोप से हो रहा है।'",
                "मधुसूदन ने भगवान बुधदेव से प्रार्थना की कि 'हे भगवान बुधदेव मुझे क्षमा कर दीजिए। मुझसे बहुत बड़ी गलती हुई। भविष्य में अब कभी बुधवार के दिन यात्रा नहीं करूंगा और सदैव बुधवार को आपका व्रत किया करूंगा।'",
                "मधुसूदन के प्रार्थना करने से भगवान बुधदेव ने उसे क्षमा कर दिया। तभी दूसरा व्यक्ति राजा के सामने से गायब हो गया। राजा और दूसरे लोग इस चमत्कार को देख हैरान हो गए। भगवान बुधदेव की इस अनुकम्पा से राजा ने मधुसूदन और उसकी पत्नी को सम्मानपूर्वक विदा किया।",
                "कुछ दूर चलने पर रास्ते में उन्हें बैलगाड़ी मिल गई। बैलगाड़ी का टूटा हुआ पहिया भी जुड़ा हुआ था। दोनों उसमें बैठकर समतापुर की ओर चल दिए। मधुसूदन और उसकी पत्नी संगीता दोनों बुधवार को व्रत करते हुए आनंदपूर्वक जीवन-यापन करने लगे। इस तरह भगवान बुधदेव की कृपा से उनके यहां खुशियां बरसने लगीं। इस तरह जो स्त्री-पुरुष विधिवत बुधवार का व्रत करके व्रतकथा सुनते हैं, भगवान बुधदेव उनके सभी कष्ट दूर करते है।"
            ]
        }]
    },
    {
        id: 'guruvar-vrat-katha',
        slug: 'guruvar-vrat-katha',
        title: 'Guruvar Vrat Katha',
        titleHindi: 'गुरुवार व्रत कथा',
        description: 'Dedicated to Lord Vishnu and Brihaspati (Jupiter). Brings wealth, education, and happy family life.',
        descriptionHindi: 'भगवान विष्णु और बृहस्पति देव को समर्पित। धन, शिक्षा और सुखी पारिवारिक जीवन प्रदान करता है।',
        imagePath: '/images/guruvar-vrat-katha.webp',
        deity: 'Vishnu',
        readTime: '20 min',
        chapters: [
            {
                id: 1,
                title: 'The Charitable King and Queen',
                titleHindi: 'दानी राजा और रानी',
                content: [
                    "A majestic and charitable King ruled in India. He used to help the poor and Brahmins daily. This was not liked by his Queen; she neither gave alms to the poor nor worshipped God and used to forbid the King from donating.",
                    "One day the King went to the forest to hunt, so the Queen was alone in the palace. At that time, Brihaspati Dev came to the King's palace in the guise of a sage and asked for alms. The Queen refused to give alms and said, 'O Sage! I am fed up with this charity. My husband keeps giving away all the wealth. I wish that our wealth gets destroyed so that neither the bamboo remains nor the flute plays.'",
                    "The Sage said, 'Devi, you are very strange. Everyone desires wealth and children. If you have excess wealth, give food to the hungry, build water huts for the thirsty, open inns for travelers, marry off the unmarried daughters of the poor. There are many such works by doing which your fame will spread in this world and the hereafter.'",
                    "But the sermon had no effect on the Queen. She said, 'Maharaj, do not explain anything to me. I do not want such wealth that I have to go around distributing everywhere.'",
                    "The Sage replied, 'If such is your wish, then so be it! Do this: on Thursday, coat the house with cow dung, wash your hair with yellow earth, wash clothes in a furnace. By doing this, all your wealth will be destroyed.' Saying this, the Sage disappeared.",
                    "Only three Thursdays had passed since the Queen followed the Sage's words, that all her wealth and property were destroyed. The King's family started craving for food.",
                    "Then one day the King said to the Queen, 'O Queen, you stay here, I will go to another country because everyone here knows me, so I cannot do any menial work.' Saying this, the King went to a foreign land. There he would cut wood from the forest and sell it in the city. He started spending his life like this. Here, as soon as the King left, the Queen and the maid started living in sorrow.",
                    "Once, when the Queen and the maid had to stay without food for seven days, the Queen said to her maid, 'O Maid! My sister lives in a nearby town. She is very wealthy. Go to her and bring something so that we can survive.' The maid went to the Queen's sister.",
                    "That day was Thursday and the Queen's sister was listening to the Thursday Vrat Katha at that time. The maid gave the Queen's message to her sister, but the elder sister did not reply. The maid was very sad and angry when she received no reply. She came back and told the Queen everything. Hearing this, the Queen cursed her fate.",
                    "On the other hand, the Queen's sister thought, 'My sister's maid had come, but I did not speak to her, she must have been very sad.' After finishing the story and worship, she came to her sister's house and said, 'O Sister! I was observing the Thursday fast. Your maid had come to my house but until the story is over, one does not get up or speak, that is why I did not speak. Tell me why the maid had come?'",
                    "The Queen said, 'Sister, what should I hide from you, there was no grain to eat in our house.' Saying this, the Queen's eyes filled with tears. She told her sister in detail about staying hungry for the last seven days along with the maid.",
                    "The Queen's sister said, 'Look Sister! Lord Brihaspati Dev fulfills everyone's wishes. Look, maybe there is grain kept in your house.' First, the Queen did not believe it but on her sister's insistence, she sent her maid inside, and she actually found a pot full of grain. The maid was very surprised to see this.",
                    "The maid said to the Queen, 'O Queen! When we do not get food, we observe a fast anyway, so why not ask them the method of the Vrat and Katha so that we can also observe the fast.' Then the Queen asked her sister about the Thursday fast.",
                    "Her sister explained, 'In the Thursday fast, worship Lord Vishnu with gram lentils (chana dal) and raisins (munakka) at the root of a banana tree, light a lamp, listen to the Vrat Katha, and eat only yellow food. This pleases Brihaspati Dev.' After explaining the method, the sister returned home.",
                    "Seven days later when Thursday came, the Queen and the maid kept the fast. They brought gram and jaggery from the stable. Then they worshipped the banana root and Lord Vishnu. Now they were very sad about where the yellow food would come from. Since they had kept the fast, Brihaspati Dev was pleased with them. So he took the form of an ordinary man and gave beautiful yellow food in two plates to the maid. The maid was happy to get the food and ate it with the Queen.",
                    "After that, they started fasting and worshipping every Thursday. By the grace of Lord Brihaspati, they got back their wealth and property, but the Queen started being lazy again like before.",
                    "Then the maid said, 'Look Queen! You used to be lazy like this before, you had trouble keeping the wealth, that is why all the wealth was destroyed and now when you have got the wealth by the grace of Lord Brihaspati, you are lazy again. After great difficulties, we have found this wealth, so we should do charity, feed the hungry, and spend the wealth on good deeds, which will increase the fame of your family, attain heaven and please the ancestors.' Listening to the maid, the Queen started spending her wealth on good deeds, which spread her fame in the entire city.",
                    "One day the King sat sadly in the forest. It was Thursday. Lord Brihaspati appeared as a sage and asked the reason for his sorrow.",
                    "The woodcutter (King) narrated his story. The Sage said, 'Your wife disrespected Lord Brihaspati, causing this condition. Now, you should perform the Thursday Katha. Offer gram and raisins (munakka), make nectar (panchamrit) with sugar and water, distribute it, and consume it yourself. God will fulfill your wishes.'",
                    "The woodcutter said, 'I don't earn enough to save anything.' The Sage said, 'Don't worry. Go to the city with wood today, you will get double the money.'",
                    "The King went, got double the money, and performed the Vrat. All his troubles vanished. But the next Thursday, he forgot the Vrat. Lord Brihaspati got angry.",
                    "The city King organized a feast and announced that everyone must come. The woodcutter arrived late. The King took him inside. The Queen's necklace was hanging on a peg but disappeared. The King thought the woodcutter stole it and put him in prison.",
                    "In prison, the woodcutter remembered the Sage. Brihaspati Dev appeared and scolded him for not performing the Vrat. He said, 'On Thursday, you will find four coins at the prison gate. Worship with them, and your troubles will end.'",
                    "He found the coins and performed the Katha. That night, Brihaspati Dev appeared in the King's dream and said, 'The man in prison is innocent. He is a King himself. The necklace is on the peg.'",
                    "The King woke up, found the necklace, apologized to the woodcutter, and sent him off with gifts. The woodcutter returned to his city.",
                    "Near his city, he was surprised to see gardens, inns, and temples. People said they belonged to the Queen and the maid. The King was angry but when he met the Queen, she explained it was the result of Brihaspati Vrat.",
                    "The King decided to perform the Katha three times a day. Once, he saw people carrying a dead body. He stopped them to tell the Katha. As the Katha ended, the dead man came back to life.",
                    "Later, a farmer refused to listen, and his oxen fell, and he got a stomach ache. His mother called the King back, listened to the Katha, and everything became fine.",
                    "Thus, whoever performs Brihaspati Vrat with devotion, listens to the story, or tells it to others, Lord Brihaspati fulfills all their wishes."
                ],
                contentHindi: [
                    "भारतवर्ष में एक प्रतापी और दानी राजा राज्य करता था। वह नित्य गरीबों और ब्राह्मणों की सहायता करता था। यह बात उसकी रानी को अच्छी नहीं लगती थी, वह न ही गरीबों को दान देती, न ही भगवान का पूजन करती थी और राजा को भी दान देने से मना किया करती थी।",
                    "एक दिन राजा शिकार खेलने वन को गए हुए थे, तो रानी महल में अकेली थी। उसी समय बृहस्पतिदेव साधु वेष में राजा के महल में भिक्षा के लिए गए और भिक्षा माँगी। रानी ने भिक्षा देने से इन्कार किया और कहा: हे साधु महाराज मैं तो दान पुण्य से तंग आ गई हूँ। मेरी इच्छा है कि हमारा धन नष्ट हो जाए फिर न रहेगा बांस न बजेगी बांसुरी।",
                    "साधु ने कहा: देवी तुम तो बड़ी विचित्र हो। यदि तुम्हारे पास अधिक धन है तो भूखों को भोजन दो, प्यासों के लिए प्याऊ बनवाओ, मुसाफिरों के लिए धर्मशालाएं खुलवाओ। जो निर्धन अपनी कुंवारी कन्याओं का विवाह नहीं कर सकते उनका विवाह करा दो।",
                    "परन्तु रानी पर उपदेश का कोई प्रभाव न पड़ा। वह बोली: महाराज आप मुझे कुछ न समझाएं। मैं ऐसा धन नहीं चाहती जो हर जगह बाँटती फिरूं।",
                    "साधु ने उत्तर दिया: यदि तुम्हारी ऐसी इच्छा है तो तथास्तु! तुम ऐसा करना कि बृहस्पतिवार को घर लीपकर पीली मिट्‌टी से अपना सिर धोकर स्नान करना, भट्‌टी चढ़ाकर कपड़े धोना, ऐसा करने से आपका सारा धन नष्ट हो जाएगा। इतना कहकर वह साधु महाराज वहाँ से आलोप हो गये।",
                    "साधु के अनुसार कही बातों को पूरा करते हुए रानी को केवल तीन बृहस्पतिवार ही बीते थे, कि उसकी समस्त धन-संपत्ति नष्ट हो गई। भोजन के लिए राजा का परिवार तरसने लगा।",
                    "तब एक दिन राजा ने रानी से बोला कि हे रानी, तुम यहीं रहो, मैं दूसरे देश को जाता हूँ। ऐसा कहकर राजा परदेश चला गया। वहाँ वह जंगल से लकड़ी काटकर लाता और शहर में बेचता। इधर, राजा के परदेश जाते ही रानी और दासी दुःखी रहने लगी।",
                    "एक बार जब रानी और दासी को सात दिन तक बिना भोजन के रहना पड़ा, तो रानी ने अपनी दासी से कहा: पास ही के नगर में मेरी बहिन रहती है। वह बड़ी धनवान है। तू उसके पास जा और कुछ ले आ। दासी रानी की बहिन के पास गई।",
                    "उस दिन गुरुवार था और रानी की बहिन उस समय बृहस्पतिवार व्रत की कथा सुन रही थी। दासी ने रानी की बहिन को अपनी रानी का संदेश दिया, लेकिन रानी की बड़ी बहिन ने कोई उत्तर नहीं दिया। दासी ने वापस आकर रानी को सारी बात बता दी। सुनकर रानी ने अपने भाग्य को कोसा।",
                    "उधर, रानी की बहिन ने सोचा कि मेरी बहिन की दासी आई थी, परंतु मैं उससे नहीं बोली। कथा सुनकर और पूजन समाप्त करके वह अपनी बहिन के घर आई और कहने लगी: हे बहिन! मैं बृहस्पतिवार का व्रत कर रही थी। जब तक कथा होती है, तब तक न तो उठते हैं और न ही बोलते हैं, इसलिए मैं नहीं बोली। कहो दासी क्यों गई थी?",
                    "रानी बोली: बहिन, तुमसे क्या छिपाऊं, हमारे घर में खाने तक को अनाज नहीं था। उसने दासी समेत पिछले सात दिनों से भूखे रहने तक की बात अपनी बहिन को विस्तार पूर्वक सुना दी।",
                    "रानी की बहिन बोली: देखो बहिन! भगवान बृहस्पतिदेव सबकी मनोकामना को पूर्ण करते हैं। देखो, शायद तुम्हारे घर में अनाज रखा हो। पहले तो रानी को विश्वास नहीं हुआ पर बहिन के आग्रह करने पर उसने अपनी दासी को अंदर भेजा तो उसे सचमुच अनाज से भरा एक घड़ा मिल गया।",
                    "दासी रानी से कहने लगी: हे रानी! क्यों न इनसे व्रत और कथा की विधि पूछ ली जाए, ताकि हम भी व्रत कर सकें। तब रानी ने अपनी बहिन से बृहस्पतिवार व्रत के बारे में पूछा।",
                    "उसकी बहिन ने बताया, बृहस्पतिवार के व्रत में चने की दाल और मुनक्का से विष्णु भगवान का केले की जड़ में पूजन करें तथा दीपक जलाएं, व्रत कथा सुनें और पीला भोजन ही करें। इससे बृहस्पतिदेव प्रसन्न होते हैं।",
                    "सात दिन के बाद जब गुरुवार आया, तो रानी और दासी ने व्रत रखा। घुड़साल में जाकर चना और गुड़ लेकर आईं। फिर उससे केले की जड़ तथा विष्णु भगवान का पूजन किया। अब पीला भोजन कहाँ से आए? चूंकि उन्होंने व्रत रखा था, इसलिए बृहस्पतिदेव उनसे प्रसन्न थे। वे एक साधारण व्यक्ति का रूप धारण कर दो थालों में सुन्दर पीला भोजन दासी को दे गए।",
                    "उसके बाद वे सभी गुरुवार को व्रत और पूजन करने लगी। बृहस्पति भगवान की कृपा से उनके पास फिर से धन-संपत्ति आ गई, परंतु रानी फिर से पहले की तरह आलस्य करने लगी।",
                    "तब दासी बोली: देखो रानी! तुम पहले भी इस प्रकार आलस्य करती थी, तुम्हें धन रखने में कष्ट होता था, इस कारण सभी धन नष्ट हो गया। अब हमें दान-पुण्य करना चाहिए, भूखे मनुष्यों को भोजन कराना चाहिए, और धन को शुभ कार्यों में खर्च करना चाहिए। दासी की बात मानकर रानी अपना धन शुभ कार्यों में खर्च करने लगी, जिससे पूरे नगर में उसका यश फैलने लगा।",
                    "एक दिन राजा दुःखी होकर जंगल में बैठा था। बृहस्पतिवार का दिन था, बृहस्पतिदेव साधु वेष में प्रकट हुए और कारण पूछा।",
                    "लकड़हारे (राजा) ने अपनी कथा सुनाई। साधु ने कहा: तुम्हारी स्त्री ने बृहस्पति भगवान का निरादर किया है। अब तुम बृहस्पतिवार के दिन कथा किया करो। दो पैसे के चने मुनक्का लाकर प्रसाद बनाओ।",
                    "लकड़हारे ने कहा: मेरे पास पैसा नहीं बचता। साधु ने कहा: आज तुम्हें लकड़ियों का दुगुना धन मिलेगा।",
                    "राजा ने व्रत किया और उसके क्लेश दूर हुए। परन्तु अगले गुरुवार वह व्रत करना भूल गया। भगवान नाराज हो गए।",
                    "शहर के राजा ने यज्ञ और भोज का आयोजन किया। लकड़हारा देर से पहुँचा। वहाँ रानी का हार खूंटी से गायब हो गया। राजा ने उसे चोर समझकर जेल में डाल दिया।",
                    "जेल में उसने साधु को याद किया। बृहस्पतिदेव ने प्रकट होकर उसे डांटा और कहा: दरवाजे पर चार पैसे मिलेंगे, उनसे पूजा करना।",
                    "उसने पूजा की। उसी रात राजा को स्वप्न आया कि कैदी निर्दोष है। राजा ने उसे छोड़ दिया और विदा किया।",
                    "राजा जब अपने नगर पहुँचा तो वहाँ बहुत उन्नति देख हैरान हुआ। रानी ने बताया यह बृहस्पतिदेव के व्रत का प्रभाव है।",
                    "राजा ने निश्चय किया कि वह दिन में तीन बार कथा कहेगा। एक बार उसने शव ले जा रहे लोगों को रोककर कथा सुनाई, तो मुर्दा जीवित हो गया।",
                    "एक किसान ने कथा सुनने से मना किया तो उसके बैल गिर गए और पेट में दर्द हुआ। बाद में कथा सुनने पर सब ठीक हो गया।",
                    "जो सदभावनापूर्वक बृहस्पतिवार का व्रत करता है एवं कथा पढता है, अथवा सुनता है, बृहस्पतिदेव उसकी सभी मनोकामना पूर्ण करते हैं।"
                ]
            },
            {
                id: 2,
                title: 'Story 2: The Brahmin and His Daughter',
                titleHindi: 'कथा २: ब्राह्मण और उसकी कन्या',
                content: [
                    "In ancient times, there lived a Brahmin who was very poor and had no children. His wife was very unkempt; she did not bathe nor worship any deity. This made the Brahmin very sad. God eventually blessed them with a daughter.",
                    "The daughter was very pious. She would bathe early, worship Lord Vishnu, and observe the Thursday fast. On her way to school, she would scatter barley, which would turn into gold on her return. She would collect it and bring it home.",
                    "One day, her father saw her cleaning the golden barley in a winnowing fan (soop) and said, 'Daughter, for golden barley, you should have a golden winnowing fan.' The next Thursday, she prayed to Brihaspati Dev for a golden fan, and her wish was granted.",
                    "A prince saw her cleaning barley in the golden fan and fell in love with her. He stopped eating and insisted on marrying her. The King found the girl, and she was married to the prince.",
                    "After she left, the Brahmin became poor again. He visited his daughter, who gave him wealth, but it didn't last. He went again, and she told him to bring her mother.",
                    "The daughter advised her mother to bathe and worship Lord Vishnu. The mother refused and ate leftovers. The daughter locked her in a room, made her bathe and worship. This corrected her intellect.",
                    "The mother started observing the Thursday fast. By its effect, they became wealthy and were blessed with sons. After a happy life, they attained heaven."
                ],
                contentHindi: [
                    "प्राचीन काल में एक ब्राह्मण रहता था, वह बहुत निर्धन था। उसके कोई सन्तान नहीं थी। उसकी स्त्री बहुत मलीनता के साथ रहती थी। वह स्नान न करती, किसी देवता का पूजन न करती, इससे ब्राह्मण देवता बड़े दुःखी थे।",
                    "भगवान की कृपा से ब्राह्मण की स्त्री के कन्या रूपी रत्न पैदा हुआ। कन्या बड़ी होने पर प्रातः स्नान करके विष्णु भगवान का जाप व बृहस्पतिवार का व्रत करने लगी। वह  विद्यालय जाती तो अपनी मुट्ठी में जौ भरके ले जाती और पाठशाला के मार्ग में डालती जाती। तब ये जौ स्वर्ण के हो जाते लौटते समय उनको बीन कर घर ले आती थी।",
                    "एक दिन वह बालिका सूप में उस सोने के जौ को फटककर साफ कर रही थी कि उसके पिता ने देख लिया और कहा - हे बेटी! सोने के जौ के लिए सोने का सूप होना चाहिए। दूसरे दिन बृहस्पतिवार था इस कन्या ने व्रत रखा और बृहस्पतिदेव से प्रार्थना करके कहा- मैंने आपकी पूजा सच्चे मन से की हो तो मेरे लिए सोने का सूप दे दो। बृहस्पतिदेव ने उसकी प्रार्थना स्वीकार कर ली। रोजाना की तरह वह कन्या जौ फैलाती हुई जाने लगी जब लौटकर जौ बीन रही थी तो बृहस्पतिदेव की कृपा से सोने का सूप मिला।",
                    "एक दिन वह कन्या सोने के सूप में जौ साफ कर रही थी। उस समय उस शहर का राजपुत्र वहां से होकर निकला। इस कन्या के रूप और कार्य को देखकर मोहित हो गया तथा अपने घर आकर भोजन तथा जल त्याग कर उदास होकर लेट गया। राजा ने कारण पूछा तो उसने उस लड़की से विवाह करने की हठ की।",
                    "राजा ने ब्राह्मण के घर जाकर विवाह का प्रस्ताव रखा और विधि-विधान से विवाह हो गया। कन्या के घर से जाते ही ब्राह्मण के घर में गरीबी आ गई।",
                    "एक दिन दुःखी होकर ब्राह्मण अपनी पुत्री के पास गया। कन्या ने बहुत सा धन देकर पिता को विदा किया, पर वह धन भी समाप्त हो गया। ब्राह्मण फिर गया तो लड़की बोली- माताजी को यहाँ ले आओ।",
                    "कन्या ने माँ को समझाया कि प्रातः स्नान करके विष्णु भगवान का पूजन करो तो दरिद्रता दूर होगी। परन्तु माँ ने नहीं माना और जूठन खा ली। पुत्री ने गुस्से में उसे कोठरी में बंद कर दिया।",
                    "प्रातःकाल उसे निकाला तथा स्नानादि कराके पाठ करवाया तो उसकी मां की बुद्धि ठीक हो गई और फिर प्रत्येक बृहस्पतिवार को व्रत रखने लगी। इस व्रत के प्रभाव से उसके मां बाप बहुत ही धनवान और पुत्रवान हो गए और स्वर्ग को प्राप्त हुए।"
                ]
            }
        ]
    },
    {
        id: 'santoshi-mata-vrat-katha',
        slug: 'santoshi-mata-vrat-katha',
        title: 'Santoshi Mata Vrat Katha',
        titleHindi: 'संतोषी माता व्रत कथा',
        description: 'Observed on Fridays for peace, prosperity, and fulfillment of wishes.',
        descriptionHindi: 'शुक्रवार को सुख, समृद्धि और मनोकामना पूर्ति के लिए किया जाता है।',
        imagePath: '/images/santoshi-mata-vrat-katha.webp',
        deity: 'Santoshi Mata',
        readTime: '20 min',
        chapters: [{
            id: 1,
            title: 'The Old Woman and Her 7 Sons',
            titleHindi: 'बुढ़िया और उसके 7 बेटे',
            content: [
                "There was an old woman who had seven sons. Six were earning, while one was unemployed. The old woman would cook for the six sons and feed them, and give their leftovers to the seventh son.",
                "One day, the seventh son said to his wife, 'Look how much my mother loves me.' The wife laughed and said, 'Why not, she feeds you everyone's leftovers.' He said, 'I cannot believe this until I see it with my own eyes.' The wife said, 'See for yourself.'",
                "A few days later, a festival came. Seven types of food and Churma laddus were made. He pretended to have a headache and slept in the kitchen covering his head with a thin cloth. He saw everything. The mother fed the six brothers sumptuously. When they finished, she made a laddu from their leftovers and called him, 'Son, brothers have eaten, now you eat.'",
                "He refused to eat and said, 'Mother, I am going abroad.' He left home. Before leaving, he went to the cowshed where his wife was making cow dung cakes. He said, 'I am going abroad. Keep your faith and stay with satisfaction (Santosh).' She asked for a token. He gave her a ring. She had nothing but cow dung on her hands, so she put a mark of her dung-filled hand on his back. He left.",
                "He reached a distant land and asked a merchant for a job. He got a job and with his hard work, he became a partner and eventually a famous merchant himself.",
                "Back home, his wife was mistreated by her in-laws. They made her do all the household work and sent her to fetch wood from the forest. She was given bread made of husk (bhusi) and water in a coconut shell.",
                "One day, while returning with wood, she saw some women observing Santoshi Mata Vrat. She asked them about it. They told her, 'This is Santoshi Mata Vrat. It destroys poverty and fulfills wishes. Take jaggery and gram (gur-chana) of 1.25 ana/rupee. Fast on Fridays, listen to the story, and do Udyapan when the wish is fulfilled. Do not eat or offer sour food.'",
                "She sold the wood, bought gur-chana, and started the Vrat. She prayed to Mata, 'I don't know the rules, I am ignorant, please remove my sorrow.'",
                "Mata was pleased. Soon, her husband's letter and money arrived. The in-laws were jealous. The wife went to the temple and cried, 'Mata, I don't want money, I want to see my husband.' Mata said, 'Go daughter, your husband will come.'",
                "Mata appeared in her husband's dream and told him about his wife's suffering. He immediately wrapped up his business and returned home loaded with wealth.",
                "The wife knew he was coming as told by Mata. She prepared three bundles of wood. She put one at the temple and one on the river bank. When she saw the dust rising from her husband's arrival, she shouted to her mother-in-law, 'Take the bundle of wood, give me the husk bread and water in coconut shell! Who is the guest today?'",
                "The mother-in-law, seeing her rich son, changed her tune and said, 'Daughter, why say such things? It is your husband.' The husband was shocked to see his wife's condition but she had the ring. He took her to a separate room and they lived like a King and Queen.",
                "She decided to do the Udyapan. She invited her nephews. The envious sister-in-law taught her children to ask for sour food (tamarind/khatai) during the feast.",
                "The children insisted on khatai. The innocent wife gave them money to buy it. They ate sour food. This angered Santoshi Mata. The King's soldiers arrested her husband.",
                "She ran to the temple crying. Mata said, 'You broke the rule of not eating/giving sour food.' She begged for forgiveness and promised to do Udyapan again properly.",
                "Mata forgave her. Her husband was released. She did the Udyapan again with strict adherence to no sour food. Mata was pleased.",
                "Nine months later, she gave birth to a beautiful son. One day Mata visited their house in a terrifying form. The in-laws panicked, but the daughter-in-law recognized her and worshipped her. The whole family was blessed."
            ],
            contentHindi: [
                "एक बुढ़िया थी, उसके सात बेटे थे। 6 कमाने वाले थे जबकि एक निक्कमा था। बुढ़िया छहों बेटों को अच्छे से भोजन कराती और उनसे जो कुछ जूठन बचती वह सातवें को दे देती।",
                "एक दिन वह पत्नी से बोला- देखो मेरी माँ को मुझ पर कितना प्रेम है। वह बोली- वह तो सबका झूठा तुमको खिलाती है। उसने छिपकर देखा तो सच्चाई पता चली। उसने खाना नहीं खाया और परदेश चला गया। जाते समय पत्नी को अंगूठी दी और पत्नी ने उसकी पीठ पर गोबर के हाथ की छाप लगा दी।",
                "परदेश में वह एक सेठ के यहां नौकरी करने लगे और अपनी मेहनत से जल्दी ही नामी सेठ बन गया।",
                "इधर उसकी पत्नी को सास-ससुर दु:ख देने लगे, उसे लकड़ी लेने जंगल में भेजते और भूसी की रोटी और नारियल की खोपड़ी में पानी देते।",
                "एक दिन उसने रास्ते में बहुत सी स्त्रियां संतोषी माता का व्रत करती देखीं। उसने विधि पूछी। उन्होंने बताया- सवा आने का गुड़ चना लेना, शुक्रवार को निराहार रह कर कथा सुनना, और खटाई न खाना।",
                "उसने लकड़ी बेचकर गुड़-चना लिया और व्रत शुरू किया। माता प्रसन्न हुईं। पति का पत्र और पैसा आया। फिर उसने पति के दर्शन की प्रार्थना की। माता ने पति के स्वप्न में जाकर उसे पत्नी की सुध लेने को कहा।",
                "पति बहुत सारा धन लेकर वापस आया। सास का व्यवहार बदल गया। बहू ने व्रत का उद्यापन करने का सोचा। उसने जेठ के लड़कों को भोजन पर बुलाया। जेठानी ने बच्चों को सिखा दिया कि खटाई मांगना।",
                "बच्चों ने खटाई की हठ की, और बहू ने पैसे दे दिए। बच्चों ने खटाई खाई, जिससे माता कुपित हो गईं। राजा के दूत पति को पकड़ कर ले गए।",
                "वह रोती हुई मंदिर गई। माता बोली- बेटी तूने उद्यापन में खटाई देकर व्रत भंग किया। उसने क्षमा मांगी और फिर से उद्यापन का वचन दिया। पति छूट गया।",
                "अगले उद्यापन में उसने सावधानी रखी कि किसी को खटाई न मिले। माता प्रसन्न हुईं। उसे पुत्र रत्न मिला। एक दिन माता उसके घर आईं। बहू ने उन्हें पहचान लिया और सबका कल्याण हुआ।"
            ]
        }]
    },
    {
        id: 'mahalakshmi-vrat-katha',
        slug: 'mahalakshmi-vrat-katha',
        title: 'Mahalakshmi Vrat Katha',
        titleHindi: 'महालक्ष्मी व्रत कथा',
        description: 'A 16-day fast ending on the 8th day of the waning moon in Bhadrapada.',
        descriptionHindi: 'भाद्रपद में कृष्ण पक्ष की अष्टमी पर समाप्त होने वाला 16 दिन का व्रत।',
        imagePath: '/images/mahalakshmi-vrat-katha.webp',
        deity: 'Lakshmi',
        readTime: '20 min',
        chapters: [
            {
                id: 1,
                title: 'Story 1: The Poor Brahmin',
                titleHindi: 'कथा १: गरीब ब्राह्मण',
                content: [
                    "In ancient times, a Brahmin lived in a village. He used to worship Lord Vishnu daily according to the rules. Pleased with his devotion, Lord Vishnu gave him darshan and promised to grant a boon according to his wish.",
                    "The Brahmin asked for the residence of Mother Lakshmi in his house. On the Brahmin saying so, Lord Vishnu said, 'A woman comes to the temple here every day and she makes cow dung cakes here. She is Mother Lakshmi herself. You invite her to your home. Upon the arrival of Goddess Lakshmi's footsteps in your house, your house will be filled with wealth and grains.'",
                    "Saying this, Lord Vishnu became invisible. Now, from the next morning, the Brahmin sat in front of the temple waiting for Goddess Lakshmi. When he saw Lakshmi Ji making cow dung cakes, he requested her to come to his house.",
                    "Hearing the Brahmin's words, Lakshmi Ji understood that this was told to the Brahmin by Vishnu Ji only. So she advised the Brahmin to perform the Mahalakshmi Vrat. Lakshmi Ji said to the Brahmin, 'You observe the Mahalakshmi Vrat for 16 days and on the last day of the Vrat, worship the Moon and offer Arghya to it, then your Vrat will be completed.'",
                    "The Brahmin also observed the Vrat as per Mahalakshmi's instructions and Goddess Lakshmi fulfilled his wish. Since that day, this Vrat has been observed with devotion."
                ],
                contentHindi: [
                    "प्राचीन काल की बात है, एक गाँव में एक ब्राह्मण रहता था। वह ब्राह्मण नियमानुसार भगवान विष्णु का पूजन प्रतिदिन करता था। उसकी भक्ति से प्रसन्न होकर भगवान विष्णु ने उसे दर्शन दिये और इच्छा अनुसार वरदान देने का वचन दिया।",
                    "ब्राह्मण ने माता लक्ष्मी का वास अपने घर मे होने का वरदान मांगा। ब्राह्मण के ऐसा कहने पर भगवान विष्णु ने कहा यहाँ मंदिर मैं प्रतिदिन एक स्त्री आती है और वह यहाँ गोबर के उपले थापति है। वही माता लक्ष्मी हैं, तुम उन्हें अपने घर में आमंत्रित करो। देवी लक्ष्मी के चरण तुम्हारे घर में पड़ने से तुम्हारा घर धन-धान्य से भर जाएगा।",
                    "ऐसा कहकर भगवान विष्णु अदृश्य हो गए। अब दूसरे दिन सुबह से ही ब्राह्मण देवी लक्ष्मी के इंतजार मे मंदिर के सामने बैठ गया। जब उसने लक्ष्मी जी को गोबर के उपले थापते हुये देखा, तो उसने उन्हे अपने घर पधारने का आग्रह किया।",
                    "ब्राह्मण की बात सुनकर लक्ष्मी जी समझ गयीं कि यह बात ब्राह्मण को विष्णुजी ने ही कही है। तो उन्होने ब्राह्मण को महालक्ष्मी व्रत करने की सलाह दी। लक्ष्मी जी ने ब्राह्मण से कहा कि तुम 16 दिनों तक महालक्ष्मी व्रत करो और व्रत के आखिरी दिन चंद्रमा का पूजन करके अर्ध्य देने से तुम्हारा व्रत पूर्ण होजाएगा।",
                    "ब्राह्मण ने भी महालक्ष्मी के कहे अनुसार व्रत किया और देवी लक्ष्मी ने भी उसकी मनोकामना पूर्ण की। उसी दिन से यह व्रत श्रद्धा से किया जाता है।"
                ]
            },
            {
                id: 2,
                title: 'Story 2: Kunti and the Elephant',
                titleHindi: 'कथा २: कुंती और हाथी',
                content: [
                    "Once in the Mahabharata era, in the city of Hastinapur, on the day of Mahalakshmi Vrat, Queen Gandhari invited all the women of the city for worship, but she did not invite Kunti. All of Gandhari's sons brought soil to their mother for worship and a huge elephant was made from this soil and installed in the middle of the palace.",
                    "When all the women of the city started going for worship, Kunti became sad. When Kunti's sons asked the reason for her sadness, she told everything.",
                    "On this, Arjun said, 'Mother, you prepare for the worship, I will bring an elephant for you.' Saying this, Arjun went to Indra Dev and brought Airavat for his mother's worship. After this, Kunti performed the worship with all rituals.",
                    "When the other women of the city came to know that Indra Dev's Airavat had come to Kunti's place, they also flocked for worship and everyone completed the worship with rituals."
                ],
                contentHindi: [
                    "एक बार महाभारत काल में हस्तिनापुर शहर में महालक्ष्मी व्रत के दिन महारानी गांधारी ने नगर की सारी स्त्रियों को पूजन के लिए आमंत्रित किया, परंतु उन्होने कुंती को आमंत्रण नहीं दिया। गांधारी के सभी पुत्रों ने पूजन के लिए अपनी माता को मिट्टी लाकर दी और इसी मिट्टी से एक विशाल हाथी का निर्माण किया गया और उसे महल के बीच मे स्थापित किया गया।",
                    "नगर की सारी स्त्रियाँ जब पूजन के लिए जाने लगी, तो कुंती उदास हो गयीं। जब कुंती के पुत्रों ने उनकी उदासी का कारण पूछा तो उसने सारी बात बताई।",
                    "इस पर अर्जुन ने कहा माता आप पूजन की तैयारी कीजिये मैं आपके लिए हाथी लेकर आता हूँ। ऐसा कहकर अर्जुन इन्द्र देव के पास गये और अपनी माता के पूजन के लिए ऐरावत को ले आए। इसके पश्चात कुंती ने सारे विधि-विधान से पूजन किया।",
                    "जब नगर की अन्य स्त्रियों को पता चला, कि कुंती के यहाँ इन्द्र देव की सारी ऐरावत आया है। तो वे भी पूजन के लिए उमड़ पड़ीं और सभी ने सविधि पूजन सम्पन्न किया।"
                ]
            }
        ]
    }
];
