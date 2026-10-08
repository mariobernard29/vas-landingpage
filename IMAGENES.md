# Fotografías

Dirección fotográfica: fotografía real de aviación ejecutiva, luz natural, operación en plataforma.
Se retiraron las imágenes generadas por IA anteriores (atardeceres dorados “perfectos”, motor de avión comercial).

Cada foto existe en tres tamaños: `<nombre>-sm.jpg` (960 px), `<nombre>-md.jpg` (1600 px) y `<nombre>.jpg` (hasta 3200 px). `src/components/Img.astro` arma el `srcset` con las dimensiones de `src/photos.json`; el navegador descarga solo el tamaño que necesita.

| Archivo | Uso | Autor (Unsplash) | Página |
|---|---|---|---|
| `hero.jpg` | Hero | Chris Leipelt | unsplash.com/photos/6w_dYdazo20 |
| `svc-management.jpg` | Servicios · Gestión de aeronaves | Jakob Rosen | unsplash.com/photos/5ihdFOW_1o0 |
| `svc-fbo.jpg` | Servicios · FBO | JD-Photos | unsplash.com/photos/ODLE53FKNVw |
| `aog.jpg` | AOG 24/7 (y Soporte AOG) | Wesley Derks | unsplash.com/photos/0Kq2YIYqais |
| `permits.jpg` | Permisos | Maksim Tarasov | unsplash.com/photos/p1kYI_kzySQ |
| `ops-fuel.jpg` | Un solo socio · Combustible | Jose Lebron | unsplash.com/photos/sAqXxp1l6WM |
| `ops-catering.jpg` | Un solo socio · Catering | Nahima Aparicio | unsplash.com/photos/Cxr7-XVQmLc |
| `ops-transport.jpg` | Un solo socio · Transporte | Horizon flights | unsplash.com/photos/CkIxjwEDwIA |
| `ops-hotel.jpg` | Un solo socio · Hospedaje | Point3D Commercial Imaging Ltd. | unsplash.com/photos/oxeCZrodz78 |
| `ops-handling.jpg` | Un solo socio · Handling | noey tm | unsplash.com/photos/uaiLIzt8fto |
| `ops-concierge.jpg` | Un solo socio · Concierge | Brandon Day | unsplash.com/photos/BHmtCKkFWjw |
| `caracas.jpg` | Destinos · Caracas | Bona Lee | unsplash.com/photos/8Pm2WioMBBQ |
| `margarita.jpg` | Destinos · Margarita (ubicación verificada en Unsplash) | Paul Mac | unsplash.com/photos/ZXjCKNtNQOY |
| `management.jpg` | Un solo socio · foto por defecto (camioneta Vanguard) | Propia | — |
| `og.jpg` | Vista previa al compartir (1200 × 630) | Generada desde `hero.jpg` | — |

Licencia Unsplash: uso comercial gratuito, sin atribución obligatoria (se documenta igualmente).

**Recomendación:** cuando Vanguard tenga una sesión fotográfica propia en CCS/PMV (personal con uniforme, vehículos, plataforma), reemplazar primero `hero.jpg`, `svc-fbo.jpg` y `ops-handling.jpg`: es lo que más credibilidad aporta.

Para volver a descargar u optimizar: `node scripts/fetch-photos.mjs [nombre ...]`.
