import type { Lang } from './index';

export type LegalKey = 'privacy' | 'terms' | 'cookies';
type Section = { h: string; p: string[] };
type Page = { title: string; lead: string; sections: Section[] };

export const legalSlugs: Record<Lang, Record<LegalKey, string>> = {
  es: { privacy: '/privacidad/', terms: '/terminos/', cookies: '/cookies/' },
  en: { privacy: '/en/privacy/', terms: '/en/terms/', cookies: '/en/cookies/' },
};

export const legalLabels: Record<Lang, Record<LegalKey, string>> = {
  es: { privacy: 'Política de privacidad', terms: 'Términos y condiciones', cookies: 'Política de cookies' },
  en: { privacy: 'Privacy policy', terms: 'Terms & conditions', cookies: 'Cookie policy' },
};

export const legalMeta: Record<Lang, { updated: string; date: string; back: string; draftNote: string }> = {
  es: {
    updated: 'Última actualización',
    date: '7 de octubre de 2026',
    back: 'Volver al inicio',
    draftNote: 'Este documento es informativo y está sujeto a revisión legal.',
  },
  en: {
    updated: 'Last updated',
    date: 'October 7, 2026',
    back: 'Back to home',
    draftNote: 'This document is informational and subject to legal review.',
  },
};

export const legal: Record<Lang, Record<LegalKey, Page>> = {
  es: {
    privacy: {
      title: 'Política de privacidad',
      lead: 'En Vanguard Aero Services respetamos su privacidad y tratamos la información personal con discreción y únicamente para prestarle nuestros servicios.',
      sections: [
        { h: '1. Quiénes somos', p: ['Vanguard Aero Services (“Vanguard”, “nosotros”) presta servicios de gestión de aeronaves, FBO, soporte AOG y trámites aeronáuticos en Caracas (CCS) y la Isla de Margarita (PMV), Venezuela. Puede contactarnos en el correo indicado al final de este documento.'] },
        { h: '2. Datos que recopilamos', p: ['Datos que usted nos proporciona al contactarnos o solicitar un servicio: nombre, empresa u operador, correo electrónico, teléfono, matrícula o tipo de aeronave, servicio requerido y el mensaje que nos envíe.', 'Para ejecutar los servicios (por ejemplo permisos, migración, aduanas, traslados u hospedaje) podemos necesitar datos de pasajeros y tripulación, como nombres, nacionalidad y documentos de viaje. Solo los solicitamos cuando son necesarios para la operación.'] },
        { h: '3. Cómo usamos la información', p: ['Responder sus consultas y preparar cotizaciones.', 'Coordinar y ejecutar los servicios contratados, incluidos los trámites ante autoridades aeronáuticas, migratorias y aduaneras.', 'Cumplir obligaciones legales y regulatorias aplicables.', 'No vendemos su información ni la usamos para publicidad de terceros.'] },
        { h: '4. Formulario de contacto', p: ['El formulario de este sitio no almacena sus datos en nuestros servidores: al enviarlo se abre WhatsApp o su aplicación de correo (según la opción que elija) con el mensaje redactado, y es ese mensaje el que usted decide enviarnos. La información viaja entonces por WhatsApp o por su proveedor de correo.'] },
        { h: '5. Con quién compartimos datos', p: ['Solo con terceros necesarios para prestar el servicio: autoridades competentes (por ejemplo INAC, SAIME o SENIAT), operadores aeroportuarios, proveedores de combustible, catering, transporte y alojamiento, y talleres o proveedores técnicos. Exigimos a estos terceros un uso acorde con la finalidad del servicio.'] },
        { h: '6. Conservación y seguridad', p: ['Conservamos los datos durante el tiempo necesario para cumplir la finalidad para la que fueron recopilados y las obligaciones legales aplicables. Aplicamos medidas razonables de seguridad técnicas y organizativas para proteger la información contra acceso no autorizado, pérdida o alteración.'] },
        { h: '7. Sus derechos', p: ['Usted puede solicitar acceso, rectificación o eliminación de sus datos personales, así como oponerse a su tratamiento cuando proceda, escribiéndonos al correo de contacto. Responderemos en un plazo razonable.'] },
        { h: '8. Cambios en esta política', p: ['Podemos actualizar esta política para reflejar cambios en nuestros servicios o en la normativa. La fecha de última actualización aparece al inicio del documento.'] },
      ],
    },
    terms: {
      title: 'Términos y condiciones',
      lead: 'Al utilizar este sitio web usted acepta los siguientes términos. Si no está de acuerdo, le pedimos que no lo utilice.',
      sections: [
        { h: '1. Objeto', p: ['Este sitio presenta información sobre los servicios de Vanguard Aero Services: gestión de aeronaves, servicios FBO, soporte AOG y permisos y trámites aeronáuticos. La información tiene carácter informativo y no constituye una oferta vinculante.'] },
        { h: '2. Servicios y cotizaciones', p: ['La prestación de cada servicio se formaliza mediante cotización, orden de servicio o contrato específico, cuyas condiciones, tarifas y plazos prevalecen sobre este sitio.', 'La disponibilidad de servicios puede depender de terceros, de las autoridades competentes, de las condiciones operativas del aeropuerto y de factores climáticos o de fuerza mayor.'] },
        { h: '3. Permisos y trámites', p: ['Gestionamos y coordinamos permisos y autorizaciones, pero su otorgamiento depende exclusivamente de las autoridades competentes. Los plazos y requisitos pueden variar y no podemos garantizar su aprobación. El cliente es responsable de la veracidad y vigencia de la documentación que nos proporciona.'] },
        { h: '4. Obligaciones del cliente', p: ['Proporcionar información veraz y completa y notificar oportunamente cualquier cambio en su operación.', 'Cumplir la normativa aeronáutica, migratoria, aduanera y de seguridad aplicable a su aeronave, tripulación y pasajeros.', 'Pagar las tarifas y cargos acordados, incluidos los cobrados por terceros y autoridades.'] },
        { h: '5. Limitación de responsabilidad', p: ['En la máxima medida permitida por la ley, Vanguard no será responsable por retrasos, cancelaciones o daños derivados de decisiones de autoridades, de terceros proveedores, de condiciones meteorológicas o de eventos fuera de su control razonable. Nada en estos términos excluye la responsabilidad que no pueda excluirse legalmente.'] },
        { h: '6. Propiedad intelectual', p: ['El nombre, el logotipo, los textos, las imágenes y el diseño de este sitio pertenecen a Vanguard Aero Services o se usan con autorización. No pueden reproducirse ni utilizarse sin permiso previo y por escrito.'] },
        { h: '7. Enlaces y contenido de terceros', p: ['Este sitio puede contener enlaces a sitios de terceros sobre los cuales no tenemos control ni asumimos responsabilidad.'] },
        { h: '8. Modificaciones', p: ['Podemos modificar estos términos en cualquier momento. La versión vigente es la publicada en este sitio.'] },
        { h: '9. Ley aplicable', p: ['Estos términos se rigen por las leyes de la República Bolivariana de Venezuela. Cualquier controversia se someterá a los tribunales competentes, sin perjuicio de lo que se acuerde en el contrato de servicio correspondiente.'] },
      ],
    },
    cookies: {
      title: 'Política de cookies',
      lead: 'Este documento explica qué son las cookies y cómo las usa este sitio web.',
      sections: [
        { h: '1. ¿Qué son las cookies?', p: ['Las cookies son pequeños archivos que un sitio web guarda en su dispositivo para recordar información sobre su visita.'] },
        { h: '2. Cookies en este sitio', p: ['Actualmente este sitio **no utiliza cookies de seguimiento, publicidad ni analítica**. No creamos perfiles de navegación ni compartimos su actividad con terceros.', 'Su navegador puede almacenar de forma temporal recursos técnicos (como la caché de fuentes e imágenes) necesarios para mostrar la página con rapidez; no se usan para identificarle.'] },
        { h: '3. Cambios futuros', p: ['Si en el futuro incorporamos herramientas de analítica u otros servicios que usen cookies, actualizaremos esta política y, cuando corresponda, solicitaremos su consentimiento.'] },
        { h: '4. Cómo gestionar las cookies', p: ['Puede bloquear o eliminar cookies desde la configuración de su navegador. Tenga en cuenta que bloquear algunas puede afectar el funcionamiento de otros sitios web.'] },
      ],
    },
  },
  en: {
    privacy: {
      title: 'Privacy policy',
      lead: 'At Vanguard Aero Services we respect your privacy and handle personal information with discretion and solely to provide our services.',
      sections: [
        { h: '1. Who we are', p: ['Vanguard Aero Services (“Vanguard”, “we”) provides aircraft management, FBO, AOG support and aviation paperwork services in Caracas (CCS) and Margarita Island (PMV), Venezuela. You can reach us at the email address listed at the end of this document.'] },
        { h: '2. Data we collect', p: ['Data you provide when you contact us or request a service: name, company or operator, email, phone, aircraft registration or type, requested service and your message.', 'To carry out services (for example permits, immigration, customs, transfers or accommodation) we may need passenger and crew data such as names, nationality and travel documents. We only request it when needed for the operation.'] },
        { h: '3. How we use information', p: ['To answer your inquiries and prepare quotes.', 'To coordinate and perform contracted services, including procedures before aviation, immigration and customs authorities.', 'To comply with applicable legal and regulatory obligations.', 'We do not sell your information or use it for third-party advertising.'] },
        { h: '4. Contact form', p: ['The form on this site does not store your data on our servers: when you submit it, WhatsApp or your email app opens (depending on the option you choose) with the message drafted, and it is that message you choose to send to us. The information then travels through WhatsApp or your email provider.'] },
        { h: '5. Who we share data with', p: ['Only with third parties necessary to deliver the service: competent authorities (such as INAC, SAIME or SENIAT), airport operators, fuel, catering, transport and accommodation providers, and technical workshops or suppliers. We require these parties to use the data consistently with the purpose of the service.'] },
        { h: '6. Retention and security', p: ['We keep data for as long as necessary for the purpose it was collected and to meet applicable legal obligations. We apply reasonable technical and organizational safeguards to protect information against unauthorized access, loss or alteration.'] },
        { h: '7. Your rights', p: ['You may request access to, correction of or deletion of your personal data, and object to its processing where applicable, by writing to the contact email. We will respond within a reasonable time.'] },
        { h: '8. Changes to this policy', p: ['We may update this policy to reflect changes in our services or regulations. The last-updated date appears at the top of the document.'] },
      ],
    },
    terms: {
      title: 'Terms & conditions',
      lead: 'By using this website you agree to the following terms. If you do not agree, please do not use it.',
      sections: [
        { h: '1. Purpose', p: ['This site presents information about Vanguard Aero Services: aircraft management, FBO services, AOG support and aviation permits and paperwork. The information is for general purposes and does not constitute a binding offer.'] },
        { h: '2. Services and quotes', p: ['Each service is formalized through a quote, service order or specific contract, whose terms, fees and lead times prevail over this site.', 'Availability of services may depend on third parties, competent authorities, airport operating conditions and weather or force majeure events.'] },
        { h: '3. Permits and paperwork', p: ['We manage and coordinate permits and authorizations, but their issuance depends exclusively on the competent authorities. Lead times and requirements may vary and we cannot guarantee approval. The client is responsible for the accuracy and validity of the documents provided to us.'] },
        { h: '4. Client obligations', p: ['To provide truthful and complete information and promptly notify any change to the operation.', 'To comply with aviation, immigration, customs and security regulations applicable to the aircraft, crew and passengers.', 'To pay the agreed fees and charges, including those billed by third parties and authorities.'] },
        { h: '5. Limitation of liability', p: ['To the fullest extent permitted by law, Vanguard shall not be liable for delays, cancellations or damages arising from decisions of authorities, third-party providers, weather or events beyond its reasonable control. Nothing in these terms excludes liability that cannot be excluded by law.'] },
        { h: '6. Intellectual property', p: ['The name, logo, texts, images and design of this site belong to Vanguard Aero Services or are used with permission. They may not be reproduced or used without prior written consent.'] },
        { h: '7. Third-party links and content', p: ['This site may contain links to third-party sites over which we have no control and for which we assume no responsibility.'] },
        { h: '8. Changes', p: ['We may modify these terms at any time. The version in force is the one published on this site.'] },
        { h: '9. Governing law', p: ['These terms are governed by the laws of the Bolivarian Republic of Venezuela. Any dispute will be submitted to the competent courts, without prejudice to what is agreed in the relevant service contract.'] },
      ],
    },
    cookies: {
      title: 'Cookie policy',
      lead: 'This document explains what cookies are and how this website uses them.',
      sections: [
        { h: '1. What are cookies?', p: ['Cookies are small files that a website stores on your device to remember information about your visit.'] },
        { h: '2. Cookies on this site', p: ['This site currently **does not use tracking, advertising or analytics cookies**. We do not build browsing profiles or share your activity with third parties.', 'Your browser may temporarily store technical resources (such as cached fonts and images) needed to display the page quickly; they are not used to identify you.'] },
        { h: '3. Future changes', p: ['If we later add analytics tools or other services that use cookies, we will update this policy and, where required, request your consent.'] },
        { h: '4. Managing cookies', p: ['You can block or delete cookies from your browser settings. Note that blocking some of them may affect how other websites work.'] },
      ],
    },
  },
};
