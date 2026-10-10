// Datos estructurados (schema.org) para la portada en cada idioma.
import { t, homePath, type Lang } from './i18n';
import { SITE } from './config';

export const homeJsonLd = (lang: Lang) => {
  const d = t(lang);
  const url = new URL(homePath(lang), SITE.url).href;
  const orgId = `${SITE.url}/#organization`;
  const languages = ['Spanish', 'English'];
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': orgId,
        name: SITE.name,
        legalName: 'Vanguard Aero Services, C.A.',
        url: SITE.url,
        logo: new URL('/icon-512.png', SITE.url).href,
        image: new URL('/images/og.jpg', SITE.url).href,
        description: d.meta.description,
        email: SITE.email,
        telephone: SITE.phone.replace(/\s/g, ''),
        priceRange: '$$$',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Aeropuerto Internacional Simón Bolívar',
          addressLocality: 'Maiquetía',
          addressRegion: 'La Guaira',
          addressCountry: 'VE',
        },
        geo: { '@type': 'GeoCoordinates', latitude: 10.6012, longitude: -66.9913 },
        areaServed: [
          { '@type': 'Airport', name: 'Aeropuerto Internacional Simón Bolívar', iataCode: 'CCS', icaoCode: 'SVMI' },
          { '@type': 'Airport', name: 'Aeropuerto Internacional del Caribe Santiago Mariño', iataCode: 'PMV', icaoCode: 'SVMG' },
          { '@type': 'Country', name: 'Venezuela' },
        ],
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '00:00',
          closes: '23:59',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: SITE.phone.replace(/\s/g, ''),
          email: SITE.email,
          contactType: lang === 'es' ? 'Centro de operaciones 24/7' : '24/7 operations center',
          availableLanguage: languages,
          areaServed: 'Worldwide',
        },
        knowsLanguage: languages,
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: d.nav.services,
          itemListElement: d.nav.servicesMenu.map((s) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: s.label, description: s.text, url: url + s.href },
          })),
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE.url}/#website`,
        url: SITE.url,
        name: SITE.name,
        publisher: { '@id': orgId },
        inLanguage: ['es', 'en'],
      },
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: d.meta.title,
        description: d.meta.description,
        inLanguage: lang,
        isPartOf: { '@id': `${SITE.url}/#website` },
        about: { '@id': orgId },
      },
    ],
  };
};
