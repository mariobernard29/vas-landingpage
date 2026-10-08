// Descarga las fotos editoriales desde el CDN de Unsplash (Unsplash License: uso
// comercial permitido) y genera tres tamaños por imagen:
//   <nombre>-sm.jpg (960 px), <nombre>-md.jpg (1600 px) y <nombre>.jpg (máximo).
// También escribe src/photos.json con las dimensiones para Img.astro.
// Uso: node scripts/fetch-photos.mjs [nombre ...]
import sharp from 'sharp';
import { readFileSync, writeFileSync, existsSync } from 'node:fs';

const out = 'public/images/';
const cdn = 'https://images.unsplash.com/';
// nombre: [archivo en el CDN, ancho máximo, autor, página en Unsplash]
const photos = {
  hero: ['photo-1474302770737-173ee21bab63', 3200, 'Chris Leipelt', '6w_dYdazo20'],
  'svc-management': ['photo-1619651006058-629dcb18e9ba', 2200, 'Jakob Rosen', '5ihdFOW_1o0'],
  'svc-fbo': ['photo-1687176606881-eb700ca17b5a', 2400, 'JD-Photos', 'ODLE53FKNVw'],
  aog: ['photo-1746442525676-14a3d8d2ffb3', 3200, 'Wesley Derks', '0Kq2YIYqais'],
  permits: ['photo-1588582669551-8617e4a757bb', 2600, 'Maksim Tarasov', 'p1kYI_kzySQ'],
  'ops-fuel': ['photo-1541612529637-7f8d12b21635', 2800, 'Jose Lebron', 'sAqXxp1l6WM'],
  'ops-catering': ['photo-1666307540113-07051f1a671c', 2000, 'Nahima Aparicio', 'Cxr7-XVQmLc'],
  'ops-transport': ['photo-1764547167506-2dbd358a5d82', 2800, 'Horizon flights', 'CkIxjwEDwIA'],
  'ops-hotel': ['photo-1631049307264-da0ec9d70304', 2800, 'Point3D Commercial Imaging Ltd.', 'oxeCZrodz78'],
  'ops-handling': ['photo-1742318522618-611a2299a9a4', 2800, 'noey tm', 'uaiLIzt8fto'],
  'ops-concierge': ['photo-1684426133903-620526a5cd21', 2800, 'Brandon Day', 'BHmtCKkFWjw'],
  caracas: ['photo-1714594922696-3a27d82a2919', 3000, 'Bona Lee', '8Pm2WioMBBQ'],
  margarita: ['photo-1748570569115-a3c90084718f', 3000, 'Paul Mac', 'ZXjCKNtNQOY'],
};

const manifestPath = 'src/photos.json';
const manifest = existsSync(manifestPath) ? JSON.parse(readFileSync(manifestPath, 'utf8')) : {};
const jpg = (q) => ({ quality: q, mozjpeg: true, progressive: true });

const only = process.argv.slice(2);
for (const [name, [file, w]] of Object.entries(photos)) {
  if (only.length && !only.includes(name)) continue;
  const res = await fetch(`${cdn}${file}?w=${w}&q=95&fm=jpg`);
  if (!res.ok) throw new Error(`${name}: HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const big = await sharp(buf).jpeg(jpg(82)).toFile(`${out}${name}.jpg`);
  await sharp(buf).resize({ width: 1600 }).sharpen({ sigma: 0.5 }).jpeg(jpg(82)).toFile(`${out}${name}-md.jpg`);
  await sharp(buf).resize({ width: 960 }).sharpen({ sigma: 0.5 }).jpeg(jpg(80)).toFile(`${out}${name}-sm.jpg`);
  manifest[name] = [big.width, big.height];
  console.log(name, `${big.width}x${big.height}`, Math.round(big.size / 1024) + 'KB');
}

// Foto propia (camioneta Vanguard): solo se reescalan los tamaños menores.
if (!only.length || only.includes('management')) {
  const src = 'public/images/management.jpg';
  const m = await sharp(src).metadata();
  await sharp(src).resize({ width: 960 }).jpeg(jpg(82)).toFile(`${out}management-sm.jpg`);
  manifest.management = [m.width, m.height];
}

writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n');
