const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const IMAGES_DIR = path.join(__dirname, '..', 'public', 'images');
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'images-optimized');

// Create output directory
if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function optimizeImage(filePath, fileName) {
    const ext = path.extname(fileName).toLowerCase();
    const baseName = path.basename(fileName, ext);
    const outputPath = path.join(OUTPUT_DIR, `${baseName}.webp`);

    try {
        const inputStats = fs.statSync(filePath);
        const inputSizeKB = (inputStats.size / 1024).toFixed(2);

        await sharp(filePath)
            .webp({ quality: 80 }) // Good quality with great compression
            .resize({
                width: 1200,  // Max width - good for web
                height: 1200, // Max height
                fit: 'inside',
                withoutEnlargement: true
            })
            .toFile(outputPath);

        const outputStats = fs.statSync(outputPath);
        const outputSizeKB = (outputStats.size / 1024).toFixed(2);
        const reduction = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);

        console.log(`✅ ${fileName}: ${inputSizeKB}KB → ${outputSizeKB}KB (${reduction}% smaller)`);

        return {
            file: fileName,
            before: inputStats.size,
            after: outputStats.size
        };
    } catch (error) {
        console.error(`❌ Error processing ${fileName}:`, error.message);
        return null;
    }
}

async function main() {
    console.log('🖼️  Starting image optimization...\n');

    const files = fs.readdirSync(IMAGES_DIR).filter(f =>
        ['.png', '.jpg', '.jpeg'].includes(path.extname(f).toLowerCase())
    );

    console.log(`Found ${files.length} images to optimize\n`);

    let totalBefore = 0;
    let totalAfter = 0;

    for (const file of files) {
        const result = await optimizeImage(path.join(IMAGES_DIR, file), file);
        if (result) {
            totalBefore += result.before;
            totalAfter += result.after;
        }
    }

    console.log('\n' + '='.repeat(60));
    console.log(`📊 SUMMARY`);
    console.log(`   Before: ${(totalBefore / 1024 / 1024).toFixed(2)} MB`);
    console.log(`   After:  ${(totalAfter / 1024 / 1024).toFixed(2)} MB`);
    console.log(`   Saved:  ${((totalBefore - totalAfter) / 1024 / 1024).toFixed(2)} MB (${((1 - totalAfter / totalBefore) * 100).toFixed(1)}%)`);
    console.log('='.repeat(60));
    console.log('\n✨ Optimized images saved to public/images-optimized/');
    console.log('   You can replace the original images folder after verification.');
}

main().catch(console.error);
