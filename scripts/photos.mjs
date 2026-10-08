import sharp from 'sharp';
const s = 'C:/Users/mbern/dev/VAS/VANGUARD LOGOS/';
const o = 'public/images/';
const m = {
  'hero.jpg': ['Golden Hour Private Jet on Reflective Tarmac.png', {}],
  'management.jpg': ['fbo.jpeg', {}],
  'fbo.jpg': ['Golden Hour Private Jet Departure.png', {}],
  'aog.jpg': ['Nighttime Jet Engine Maintenance.png', {}],
};
for (const [out, [src]] of Object.entries(m)) {
  const i = await sharp(s + src).jpeg({ quality: 82, mozjpeg: true }).toFile(o + out);
  console.log(out, i.width, i.height, Math.round(i.size / 1024) + 'KB');
}
