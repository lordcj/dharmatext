const fs = require('fs');
const path = require('path');

const files = [
    path.join(__dirname, '..', 'src', 'data', 'kathas.ts'),
    path.join(__dirname, '..', 'src', 'data', 'aartis.ts')
];

files.forEach(file => {
    console.log(`Processing ${path.basename(file)}...`);
    let content = fs.readFileSync(file, 'utf8');
    const originalContent = content;

    // Replace .png with .webp for image paths
    content = content.replace(/imagePath: '\/images\/([^']+)\.png'/g, "imagePath: '/images/$1.webp'");

    if (content !== originalContent) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`  ✅ Updated image paths to .webp`);
    } else {
        console.log(`  ℹ️ No changes needed`);
    }
});

console.log('\nDone!');
