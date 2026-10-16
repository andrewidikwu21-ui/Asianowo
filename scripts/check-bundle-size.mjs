import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';

function getFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getFiles(fullPath, fileList);
    } else {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

const distDir = path.resolve('dist');
const allFiles = getFiles(distDir);

console.log('=== BUNDLE SIZE AUDIT ===');
let totalBytes = 0;
let totalGzipBytes = 0;
let failedImages = [];

for (const file of allFiles) {
  const relative = path.relative(distDir, file);
  const buffer = fs.readFileSync(file);
  const size = buffer.length;
  const gzipSize = zlib.gzipSync(buffer).length;

  if (file.endsWith('.html') || file.endsWith('.css') || file.endsWith('.js')) {
    totalBytes += size;
    totalGzipBytes += gzipSize;
    console.log(`${relative.padEnd(45)}: ${(size / 1024).toFixed(2)} KB (gzipped: ${(gzipSize / 1024).toFixed(2)} KB)`);
  } else if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.webp') || file.endsWith('.svg') || file.endsWith('.avif')) {
    const kb = (size / 1024).toFixed(2);
    console.log(`[Image] ${relative.padEnd(37)}: ${kb} KB`);
    if (size > 150 * 1024) {
      failedImages.push(`${relative} (${kb} KB > 150 KB)`);
    }
  }
}

console.log('----------------------------------------------------');
console.log(`Total HTML + CSS + JS uncompressed: ${(totalBytes / 1024).toFixed(2)} KB`);
console.log(`Total HTML + CSS + JS gzipped:      ${(totalGzipBytes / 1024).toFixed(2)} KB (Target: < 100 KB)`);

if (totalGzipBytes < 100 * 1024) {
  console.log('✅ PASS: Total HTML+CSS+JS is well under 100 KB gzipped!');
} else {
  console.log('❌ FAIL: Exceeds 100 KB gzipped');
}

if (failedImages.length === 0) {
  console.log('✅ PASS: All images are well under 150 KB!');
} else {
  console.log('❌ FAIL: Some images exceed 150 KB:', failedImages);
}
