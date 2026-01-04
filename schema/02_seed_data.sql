-- Seed Data for DharmaText

-- 1. Hanuman Chalisa (Tuesday / Hanuman)
DO $$
DECLARE
  v_category_id uuid;
  v_entity_id uuid;
BEGIN
  -- Get Category ID for Bhajans
  SELECT id INTO v_category_id FROM categories WHERE slug = 'bhajans';

  -- Create Entity
  INSERT INTO content_entities (slug, category_id, day_of_week)
  VALUES ('hanuman-chalisa', v_category_id, 2) -- 2 = Tuesday
  RETURNING id INTO v_entity_id;

  -- Hindi Translation
  INSERT INTO content_translations (entity_id, language_code, title, body_text, transliteration)
  VALUES (
    v_entity_id, 
    'hi', 
    'श्री हनुमान चालीसा', 
    '## दोहा
श्रीगुरु चरन सरोज रज निज मनु मुकुरु सुधारि।
बरनउँ रघुबर बिमल जसु जो दायकु फल चारि।।
बुद्धिहीन तनु जानिके सुमिरौं पवन-कुमार।
बल बुद्धि बिद्या देहु मोहिं हरहु कलेस बिकार।।

## चौपाई
जय हनुमान ज्ञान गुन सागर।
जय कपीस तिहुँ लोक उजागर।।
राम दूत अतुलित बल धामा।
अंजनि-पुत्र पवनसुत नामा।।
महाबीर बिक्रम बजरंगी।
कुमति निवार सुमति के संगी।।
(…Full text would continue here…)
',
    'Shri Guru Charan Saroj Raj Nij Manu Mukuru Sudhari...'
  );

  -- English Translation
  INSERT INTO content_translations (entity_id, language_code, title, body_text, transliteration)
  VALUES (
    v_entity_id, 
    'en', 
    'Hanuman Chalisa', 
    '## Doha
Cleansing the mirror of my mind with the dust from the Lotus-feet of Divine Guru, I describe the unblemished glory of Lord Rama, which bestows four fruits of life (Dharma, Artha, Kama, Moksha).

Considering myself devoid of intelligence, I meditate on you, O Son of the Wind. Grant me strength, intelligence, and wisdom, and remove my sorrows and shortcomings.

## Chaupai
Victory to Hanuman, the ocean of wisdom and virtue.
Victory to the Lord of Monkeys, who is well known in all three worlds.
Messenger of Rama, abode of incomparable strength.
Son of Anjani, also known as Pavan-Sutra (Son of Wind).
',
    NULL
  );
END $$;

-- 2. Om Jai Jagdish Hare (Friday/Aarti)
DO $$
DECLARE
  v_category_id uuid;
  v_entity_id uuid;
BEGIN
  SELECT id INTO v_category_id FROM categories WHERE slug = 'aartis';

  INSERT INTO content_entities (slug, category_id, day_of_week)
  VALUES ('om-jai-jagdish-hare', v_category_id, 5) -- 5 = Friday (General auspicious)
  RETURNING id INTO v_entity_id;

  INSERT INTO content_translations (entity_id, language_code, title, body_text)
  VALUES (v_entity_id, 'hi', 'ॐ जय जगदीश हरे', '
ॐ जय जगदीश हरे, स्वामी जय जगदीश हरे।
भक्त जनों के संकट, दास जनों के संकट,
क्षण में दूर करे, ॐ जय जगदीश हरे॥

जो ध्यावे फल पावे, दुःख बिनसे मन का,
स्वामी दुःख बिनसे मन का।
सुख सम्पति घर आवे, सुख सम्पति घर आवे,
कष्ट मिटे तन का, ॐ जय जगदीश हरे॥
');

  INSERT INTO content_translations (entity_id, language_code, title, body_text)
  VALUES (v_entity_id, 'en', 'Om Jai Jagdish Hare', '
Om, Victory to You, O Lord of the Universe,
You remove the troubles of your devotees in an instant.
Om, Victory to You, O Lord of the Universe.

He who meditates on You attains the fruits,
And the sorrows of the mind are destroyed.
Happiness and wealth come to his home,
And physical pain is removed.
');
END $$;

-- 3. Gita 1.1 (Scripture)
DO $$
DECLARE
  v_category_id uuid;
  v_entity_id uuid;
BEGIN
  SELECT id INTO v_category_id FROM categories WHERE slug = 'scriptures';

  INSERT INTO content_entities (slug, category_id, day_of_week)
  VALUES ('gita-1-1', v_category_id, 0) -- 0 = Sunday
  RETURNING id INTO v_entity_id;

  INSERT INTO content_translations (entity_id, language_code, title, body_text, transliteration)
  VALUES (
    v_entity_id, 
    'sa', 
    'भगवद् गीता - अध्याय १, श्लोक १', 
    'धृतराष्ट्र उवाच |
धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः |
मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय ||1-1||',
    'dhṛtarāṣṭra uvāca
dharma-kṣetre kuru-kṣetre samavetā yuyutsavaḥ
māmakāḥ pāṇḍavāś caiva kim akurvata sañjaya'
  );
END $$;
