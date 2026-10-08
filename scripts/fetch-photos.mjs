// Descarga las fotos editoriales desde el CDN de Unsplash (Unsplash License: uso
// comercial permitido) y genera dos tamaños por imagen: <nombre>.jpg y <nombre>-sm.jpg.
// Uso: node scripts/fetch-photos.mjs [nombre ...]
import sharp from 'sharp';

const out = 'public/images/';
const cdn = 'https://images.unsplash.com/';
// nombre: [archivo en el CDN, ancho grande, autor, página en Unsplash]
const photos = {
  hero: ['photo-1474302770737-173ee21bab63', 2400, 'Chris Leipelt', '6w_dYdazo20'],
  'svc-management': ['photo-1619651006058-629dcb18e9ba', 1400, 'Jakob Rosen', '5ihdFOW_1o0'],
  'svc-fbo': ['photo-1687176606881-eb700ca17b5a', 1600, 'JD-Photos', 'ODLE53FKNVw'],
  aog: ['photo-1746442525676-14a3d8d2ffb3', 2400, 'Wesley Derks', '0Kq2YIYqais'],
  permits: ['photo-1588582669551-8617e4a757bb', 1600, 'Maksim Tarasov', 'p1kYI_kzySQ'],
  'ops-fuel': ['photo-1541612529637-7f8d12b21635', 1400, 'Jose Lebron', 'sAqXxp1l6WM'],
  'ops-catering': ['photo-1666307540113-07051f1a671c', 1200, 'Nahima Aparicio', 'Cxr7-XVQmLc'],
  'ops-transport': ['photo-1764547167506-2dbd358a5d82', 1400, 'Horizon flights', 'CkIxjwEDwIA'],
  'ops-hotel': ['photo-1631049307264-da0ec9d70304', 1400, 'Point3D Commercial Imaging Ltd.', 'oxeCZrodz78'],
  'ops-handling': ['photo-1742318522618-611a2299a9a4', 1400, 'noey tm', 'uaiLIzt8fto'],
  'ops-concierge': ['photo-1684426133903-620526a5cd21', 1400, 'Brandon Day', 'BHmtCKkFWjw'],
  caracas: ['photo-1714594922696-3a27d82a2919', 1800, 'Bona Lee', '8Pm2WioMBBQ'],
  margarita: ['photo-1748570569115-a3c90084718f', 1800, 'Paul Mac', 'ZXjCKNtNQOY'],
};

const only = process.argv.slice(2);
for (const [name, [file, w]] of Object.entries(photos)) {
  if (only.length && !only.includes(name)) continue;
  const res = await fetch(`${cdn}${file}?w=${w}&q=90&fm=jpg`);
  if (!res.ok) throw new Error(`${name}: HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const big = await sharp(buf).jpeg({ quality: 78, mozjpeg: true }).toFile(`${out}${name}.jpg`);
  const sm = await sharp(buf).resize({ width: Math.round(w / 2) }).jpeg({ quality: 76, mozjpeg: true }).toFile(`${out}${name}-sm.jpg`);
  console.log(name, `${big.width}x${big.height}`, Math.round(big.size / 1024) + 'KB', '/', Math.round(sm.size / 1024) + 'KB');
}
