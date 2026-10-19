// Precalcula la malla de puntos sobre tierra firme del globo (GlobeNetwork.tsx).
// Hacerlo en el navegador costaba ~13 000 llamadas a geoContains y bloqueaba la página varios segundos.
// Escribe src/globe-dots.json como [lat, lng, lat, lng, ...] con dos decimales.
// Uso: node scripts/globe-dots.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { feature } from 'topojson-client';
import { geoContains } from 'd3-geo';

const topo = JSON.parse(readFileSync('node_modules/world-atlas/land-110m.json', 'utf8'));
const land = feature(topo, topo.objects.land);

// Espaciado uniforme en superficie
const step = 2.1;
const flat = [];
for (let lat = -56; lat <= 80; lat += step) {
  const k = step / Math.max(Math.cos((lat * Math.PI) / 180), 0.2);
  for (let lng = -180; lng < 180; lng += k) {
    if (geoContains(land, [lng, lat])) flat.push(Math.round(lat * 100) / 100, Math.round(lng * 100) / 100);
  }
}

writeFileSync('src/globe-dots.json', JSON.stringify(flat));
console.log(`${flat.length / 2} puntos -> src/globe-dots.json`);
