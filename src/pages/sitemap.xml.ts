// Sitemap con alternativas hreflang (es/en) para cada página.
import type { APIRoute } from 'astro';
import { homePath } from '../i18n';
import { legalSlugs, type LegalKey } from '../i18n/legal';
import { SITE } from '../config';

const pairs: { es: string; en: string; priority: string }[] = [
  { es: homePath('es'), en: homePath('en'), priority: '1.0' },
  ...(['privacy', 'terms', 'cookies'] as LegalKey[]).map((k) => ({ es: legalSlugs.es[k], en: legalSlugs.en[k], priority: '0.3' })),
];

export const GET: APIRoute = () => {
  const abs = (p: string) => new URL(p, SITE.url).href;
  const today = new Date().toISOString().slice(0, 10);
  const urls = pairs.flatMap((p) => (['es', 'en'] as const).map((lang) => `  <url>
    <loc>${abs(p[lang])}</loc>
    <lastmod>${today}</lastmod>
    <priority>${p.priority}</priority>
    <xhtml:link rel="alternate" hreflang="es" href="${abs(p.es)}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${abs(p.en)}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(p.es)}"/>
  </url>`));
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
