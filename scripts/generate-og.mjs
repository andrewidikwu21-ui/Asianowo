import sharp from 'sharp';
import fs from 'fs';

const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#573B34"/>
  <rect x="40" y="40" width="1120" height="550" fill="none" stroke="#E9DAD5" stroke-width="1.5" opacity="0.3"/>
  <g text-anchor="middle" font-family="'Italianno', Georgia, serif">
    <text x="600" y="270" font-size="110" fill="#FFFFFF" letter-spacing="1">Asianowo</text>
  </g>
  <g text-anchor="middle" font-family="'Jost', system-ui, sans-serif">
    <text x="600" y="360" font-size="28" font-weight="500" fill="#E9DAD5" letter-spacing="3">THE ART OF PERSONAL STYLE</text>
    <line x1="520" y1="395" x2="680" y2="395" stroke="#78836B" stroke-width="2"/>
    <text x="600" y="445" font-size="22" fill="#FFFFFF" opacity="0.9">Wardrobe Styling &amp; Closet Organising in Lagos</text>
  </g>
</svg>
`;

if (!fs.existsSync('public')) {
  fs.mkdirSync('public', { recursive: true });
}

await sharp(Buffer.from(svg)).png().toFile('public/og-image.png');
console.log('public/og-image.png generated successfully.');
