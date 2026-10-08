import sharp from 'sharp';
const src = 'C:/Users/mbern/dev/VAS/VANGUARD LOGOS/';
const out = 'public/brand/';
const map = { 'ICON_1-removebg-preview.png': 'icon', 'LOGO_2-removebg-preview.png': 'logo-horizontal', 'LOGO_1-removebg-preview.png': 'logo-stacked', 'LOGO_TXT-removebg-preview.png': 'wordmark' };
for (const [f, n] of Object.entries(map)) {
  const { data, info } = await sharp(src + f).ensureAlpha().trim({ threshold: 10 }).toBuffer({ resolveWithObject: true });
  const alpha = await sharp(data).extractChannel(3).toBuffer();
  const white = await sharp({ create: { width: info.width, height: info.height, channels: 3, background: '#ffffff' } }).joinChannel(alpha).png().toBuffer();
  await sharp(white).toFile(out + n + '-white.png');
  console.log(n, info.width, info.height);
}
