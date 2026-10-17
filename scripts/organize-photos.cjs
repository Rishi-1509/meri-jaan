const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const memoriesDir = path.join(__dirname, '..', 'public', 'images', 'memories');
const allFiles = fs.readdirSync(memoriesDir).filter(f => f.match(/\.jpe?g$/i));

console.log('Total files found:', allFiles.length);

function getHash(filePath) {
  const buf = fs.readFileSync(filePath);
  return crypto.createHash('md5').update(buf).digest('hex');
}

// 1. First, check existing memory-01 to memory-47
const existingMemoryFiles = [];
for (let i = 1; i <= 47; i++) {
  const name = `memory-${String(i).padStart(2, '0')}.jpg`;
  const full = path.join(memoriesDir, name);
  if (fs.existsSync(full)) {
    existingMemoryFiles.push({ name, full, hash: getHash(full), num: i });
  }
}

console.log('Existing memory-XX files:', existingMemoryFiles.length);

// 2. Identify all unique images across all files in directory
const seenHashes = new Set();
const finalUniqueImages = [];

// Prioritize existing memory-XX files, but skip duplicates among them
for (const item of existingMemoryFiles) {
  if (!seenHashes.has(item.hash)) {
    seenHashes.add(item.hash);
    finalUniqueImages.push({
      targetName: item.name,
      currentPath: item.full,
      hash: item.hash,
    });
  } else {
    console.log(`Duplicate found in existing series: ${item.name}`);
  }
}

// Now find all other unique images not yet in seenHashes
let nextNum = 1;
// Find next available numbers
for (const file of allFiles) {
  const fullPath = path.join(memoriesDir, file);
  const hash = getHash(fullPath);
  if (!seenHashes.has(hash)) {
    seenHashes.add(hash);

    // Find next unused memory-XX number
    while (finalUniqueImages.some(img => img.targetName === `memory-${String(nextNum).padStart(2, '0')}.jpg`)) {
      nextNum++;
    }

    const targetName = `memory-${String(nextNum).padStart(2, '0')}.jpg`;
    finalUniqueImages.push({
      targetName,
      currentPath: fullPath,
      hash,
      sourceFile: file,
    });
    nextNum++;
  }
}

// Sort by targetName
finalUniqueImages.sort((a, b) => {
  const numA = parseInt(a.targetName.replace(/\D/g, ''), 10);
  const numB = parseInt(b.targetName.replace(/\D/g, ''), 10);
  return numA - numB;
});

console.log('Total unique images determined:', finalUniqueImages.length);

// 3. Create a temporary staging folder to write clean unique images
const tempDir = path.join(memoriesDir, '_unique_staging');
if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir);

for (const img of finalUniqueImages) {
  const destPath = path.join(tempDir, img.targetName);
  fs.copyFileSync(img.currentPath, destPath);
}

// 4. Clean out all old jpg/jpeg files in memoriesDir
for (const file of allFiles) {
  try {
    fs.unlinkSync(path.join(memoriesDir, file));
  } catch (e) {}
}

// 5. Move all staged clean files back to memoriesDir
const stagedFiles = fs.readdirSync(tempDir);
for (const f of stagedFiles) {
  fs.renameSync(path.join(tempDir, f), path.join(memoriesDir, f));
}
fs.rmdirSync(tempDir);

console.log(`Successfully organized ${stagedFiles.length} clean unique images from memory-01.jpg onwards with 0 duplicates!`);
