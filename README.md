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
- **Datos de contacto:** `src/config.ts` (⚠️ ahora son valores de ejemplo: correo, teléfono y dominio).
- **Secciones y maquetación:** `src/components/Home.astro`.
- **Globo animado:** `src/components/GlobeNetwork.tsx` (globe.gl + three.js, carga diferida al hacer scroll). Ciudades y rutas en las constantes `ORIGINS` / `CCS`.
- **Colores y tipografía:** `src/styles/global.css` (tokens basados en `STITCH/DESIGN.md`).
- **Fotos:** ver `IMAGENES.md`.

El formulario de contacto abre el cliente de correo (`mailto:`). Para recibir envíos directos conecta un servicio (Formspree, Resend, etc.) en el script al final de `Home.astro`.
