const fs = require('fs');
const path = require('path');

async function setup() {
    const url = 'https://raw.githubusercontent.com/gita/gita/master/data/verse.json';
    console.log('Downloading Gita verses from:', url);

    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const rawData = await res.json();

        console.log(`Downloaded ${rawData.length} verses.`);

        const cleanText = (txt) => {
            if (!txt) return '';
            // Remove the ending verse number like ||1.1||
            return txt.replace(/।।\d+\.\d+।।\s*$/, '').trim();
        };

        const verses = rawData.map(v => {
            // Create a unique ID like 101, 102... 1878
            // But verses > 99 in a chapter might clash?
            // Let's use 1000 * chapter + verse to be safe
            // e.g. 1001, 18078.
            const id = v.chapter_number * 1000 + v.verse_number;

            return {
                id: id,
                chapterId: v.chapter_number,
                verseNumber: v.verse_number,
                sanskrit: cleanText(v.text),
                transliteration: v.transliteration ? v.transliteration.trim() : '',
                meaningHindi: "अनुवाद जल्द ही आ रहा है...", // Translation coming soon
                meaningEnglish: v.word_meanings ? v.word_meanings.trim() : "Translation coming soon...",
                moodTag: "Wisdom", // Default tag
                speaker: v.text.includes("उवाच") ? (v.text.split("उवाच")[0] + " Uvacha") : "Krishna" // Simple heuristic
            };
        });

        const outputPath = path.join(__dirname, '../src/data/fullGita.ts');
        const fileContent = `export const fullGitaVerses = ${JSON.stringify(verses, null, 4)};`;

        fs.writeFileSync(outputPath, fileContent);
        console.log(`Saved ${verses.length} verses to ${outputPath}`);

    } catch (e) {
        console.error('Error:', e);
    }
}

setup();
