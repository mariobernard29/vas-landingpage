# Vanguard Aero Services — sitio web

Astro 7 + React 19 + Tailwind CSS 4. Sitio estático bilingüe: español (`/`) e inglés (`/en/`).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
npm run preview
```

## Dónde editar

- **Textos ES/EN:** `src/i18n/es.ts` y `src/i18n/en.ts` (misma estructura; TypeScript avisa si falta algo).
- **Datos de contacto:** `src/config.ts` (⚠️ siguen siendo valores de ejemplo: correo, teléfono y dominio).
- **Secciones y maquetación:** `src/components/Home.astro` (hero, solicitud rápida, servicios, un solo socio, AOG, permisos, destinos, nosotros + red, contacto).
- **Header / footer:** `src/components/Header.astro`, `src/components/Footer.astro`.
- **Globo animado:** `src/components/GlobeNetwork.tsx` (globe.gl + three.js, carga diferida al hacer scroll).
- **Colores y tipografía:** `src/styles/global.css` (Inter; charcoal, blanco roto, gris acero, azul noche y el azul de marca como acento).
- **Fotos:** ver `IMAGENES.md`.

El formulario de contacto abre el cliente de correo (`mailto:`). La “solicitud rápida” bajo el hero rellena ese formulario. Para recibir envíos directos conecta un servicio (Formspree, Resend, Netlify Forms, etc.) en el script al final de `Home.astro`.
