const sharp = require('sharp');
const path = require('path');

async function convertPngsToWebp() {
    const assetsDir = path.join(__dirname, '..', 'public', 'assets');
    
    const files = ['peacock.png', 'peacock_side_frame.png'];
    
    for (const file of files) {
        const inputPath = path.join(assetsDir, file);
        const outputPath = path.join(assetsDir, file.replace('.png', '.webp'));
        
        try {
            const info = await sharp(inputPath)
                .webp({ quality: 80 })
                .toFile(outputPath);
            
            console.log(`✅ ${file} → ${file.replace('.png', '.webp')}`);
            console.log(`   Size: ${(info.size / 1024).toFixed(1)} KB`);
        } catch (err) {
            console.error(`❌ Failed to convert ${file}:`, err.message);
        }
    }
}

convertPngsToWebp();
