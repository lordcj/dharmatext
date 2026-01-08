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
        readTime: '10 min',
        chapters: [
            {
                id: 1,
                title: 'Story of the Moneylender',
                titleHindi: 'साहूकार की कहानी',
                content: [
                    "Once there was a rich moneylender who was childless. He worshipped Lord Shiva faithfully every Monday. Goddess Parvati pleaded with Shiva to grant him a child.",
                    "Shiva granted him a son, but with a lifespan of only 12 years. The moneylender accepted this with grace. When the boy turned 12, he was sent to Kashi.",
                    "On his way, he was married to a princess due to a twist of fate. Although he died at the age of 12 as predicted, Lord Shiva, moved by the devotion of the family and the plea of Parvati, restored him to life.",
                    "Thus, the Somvar Vrat proves that unwavering faith in Shiva conquers even death."
                ],
                contentHindi: [
                    "एक समय की बात है, एक धनी साहूकार था जिसके कोई संतान नहीं थी। वह प्रत्येक सोमवार को भगवान शिव की श्रद्धापूर्वक पूजा करता था। देवी पार्वती ने शिव से उसे संतान देने की प्रार्थना की।",
                    "शिव ने उसे एक पुत्र दिया, परन्तु उसकी आयु केवल 12 वर्ष थी। साहूकार ने इसे भी भगवान की कृपा मानकर स्वीकार किया। जब बालक 12 वर्ष का हुआ तो उसे काशी भेजा गया।",
                    "रास्ते में भाग्यवश उसका विवाह एक राजकुमारी से हो गया। यद्यपि वह 12 वर्ष की आयु में मृत्यु को प्राप्त हुआ, परन्तु भगवान शिव ने परिवार की भक्ति और पार्वती की प्रार्थना से प्रसन्न होकर उसे पुनर्जीवित कर दिया।",
                    "इस प्रकार सोमवार व्रत यह सिद्ध करता है कि शिव में अटल विश्वास मृत्यु को भी जीत सकता है।"
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
        readTime: '15 min',
        chapters: [{
            id: 1,
            title: 'The Story',
            titleHindi: 'कथा',
            content: [
                "Goddess Parvati once asked Shiva which Vrat is the most effective for fulfilling desires. Shiva described the Solah Somvar Vrat...",
                "It is said that by observing this fast for 16 consecutive Mondays with a simple heart, one can achieve anything they desire."
            ],
            contentHindi: [
                "एक बार देवी पार्वती ने शिव से पूछा कि कौन सा व्रत मनोकामनाओं को पूर्ण करने में सबसे प्रभावशाली है। शिव ने सोलह सोमवार व्रत का वर्णन किया...",
                "कहा जाता है कि सच्चे हृदय से लगातार सोलह सोमवार यह व्रत करने से व्यक्ति अपनी कोई भी इच्छा पूर्ण कर सकता है।"
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
        readTime: '10 min',
        chapters: [{
            id: 1,
            title: 'The Old Lady and Hanuman',
            titleHindi: 'बुढ़िया और हनुमान',
            content: [
                "An old lady used to fast every Tuesday. Her son was named Mangal. Lord Hanuman tested her devotion in the guise of a Sadhu...",
                "Despite the severe test, her faith did not waver, and Hanuman blessed her with eternal happiness."
            ],
            contentHindi: [
                "एक बुढ़िया माई हर मंगलवार को व्रत रखती थी। उसके बेटे का नाम मंगल था। हनुमान जी ने एक साधु का वेश धारण कर उसकी भक्ति की परीक्षा ली...",
                "कठिन परीक्षा के बावजूद उसकी आस्था डिगी नहीं और हनुमान जी ने उसे सदा सुखी रहने का आशीर्वाद दिया।"
            ]
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
        readTime: '10 min',
        chapters: [{
            id: 1,
            title: 'The Story of Budh Dev',
            titleHindi: 'बुध देव की कथा',
            content: ["A merchant went to bring his wife back from her parents' home on a Wednesday, which was considered inauspicious for travel. He faced many troubles...", "He prayed to Budh Dev for forgiveness and promised to observe the fast. His troubles vanished immediately."],
            contentHindi: ["एक व्यापारी बुधवार को अपनी पत्नी को उसके माता-पिता के घर से लाने गया, जो यात्रा के लिए अशुभ माना जाता था। उसे कई कष्ट झेलने पड़े...", "उसने बुध देव से क्षमा मांगी और व्रत रखने का वचन दिया। तुरंत उसके सभी कष्ट दूर हो गए।"]
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
        readTime: '12 min',
        chapters: [{
            id: 1,
            title: 'The Merchant and the Sadhu',
            titleHindi: 'व्यापारी और साधु',
            content: ["A wealthy merchant refused to give alms to a Sadhu (who was Brihaspati in disguise). Consequently, he lost his wealth...", "His wife then started observing the Thursday fast, and their prosperity was restored manifold."],
            contentHindi: ["एक धनी व्यापारी ने एक साधु (जो वास्तव में बृहस्पति देव थे) को भिक्षा देने से मना कर दिया। परिणामस्वरूप उसने अपना सारा धन खो दिया...", "उसकी पत्नी ने फिर गुरुवार का व्रत रखना शुरू किया और उनकी समृद्धि कई गुणा बढ़कर वापस आ गई।"]
        }]
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
        id: 'santoshi-mata-vrat-katha',
        slug: 'santoshi-mata-vrat-katha',
        title: 'Santoshi Mata Vrat Katha',
        titleHindi: 'संतोषी माता व्रत कथा',
        description: 'Popularized by devotees for fulfillment of wishes. Sour foods are strictly avoided on this day.',
        descriptionHindi: 'मनोकामनाओं की पूर्ति के लिए भक्तों द्वारा लोकप्रिय। इस दिन खट्टे भोजन से सख्ती से बचना चाहिए।',
        imagePath: '/images/santoshi-mata-vrat-katha.webp',
        deity: 'Santoshi Mata',
        readTime: '12 min',
        chapters: [{
            id: 1,
            title: 'The Old Woman and Her 7 Sons',
            titleHindi: 'बुढ़िया और उसके 7 बेटे',
            content: ["An old woman had 7 sons. The youngest was neglected. His wife observed the 16 Friday fasts of Santoshi Mata...", "The Goddess was pleased, and the couple was blessed with immense wealth and happiness."],
            contentHindi: ["एक बुढ़िया के 7 बेटे थे। सबसे छोटे की उपेक्षा होती थी। उसकी पत्नी ने संतोषी माता के 16 शुक्रवार व्रत रखे...", "माता प्रसन्न हुईं और दम्पती को अपार धन और सुख का आशीर्वाद मिला।"]
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
        id: 'mahalakshmi-vrat-katha',
        slug: 'mahalakshmi-vrat-katha',
        title: 'Mahalakshmi Vrat Katha',
        titleHindi: 'महालक्ष्मी व्रत कथा',
        description: 'A 16-day fast ending on the 8th day of the waning moon in Bhadrapada.',
        descriptionHindi: 'भाद्रपद में कृष्ण पक्ष की अष्टमी पर समाप्त होने वाला 16 दिन का व्रत।',
        imagePath: '/images/mahalakshmi-vrat-katha.webp',
        deity: 'Lakshmi',
        readTime: '15 min',
        chapters: [{
            id: 1,
            title: 'Queen Charumati',
            titleHindi: 'रानी चारुमती',
            content: ["Charumati, a devoted woman, dreamt of Goddess Mahalakshmi asking her to perform this Vrat...", "She did so with her friends, and they were all blessed with prosperity."],
            contentHindi: ["एक समर्पित महिला चारुमती को स्वप्न में देवी महालक्ष्मी ने यह व्रत करने को कहा...", "उसने अपनी सखियों के साथ ऐसा किया और सभी को समृद्धि का आशीर्वाद मिला।"]
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
    }
];
