export const site = {
  name: 'Machupicchu Beyond',
  legalName: 'MOTOANDES PERU E.I.R.L.',
  ruc: '20614108437',
  address: 'Calle Zetas 109, Cusco, Perú',
  city: 'Cusco, Perú',
  country: 'Perú',
  email: 'machupicchubeyond@gmail.com',
  phoneDisplay: '+51 977 373 935',
  whatsapp: '51977373935',
  googleMapsUrl: 'https://maps.google.com/?q=Calle+Zetas+109,+Cusco,+Peru',
  url: 'https://machupicchubeyond.com',
  defaultLocale: 'es',
  locales: ['es', 'en', 'pt'] as const,
  defaultImage: '/images/journeys/machu-picchu-mist.jpg',

  tagline: {
    es: 'Aventura, Sabiduría Ancestral y Turismo Responsable en los Andes',
    en: 'Adventure, Ancestral Wisdom & Responsible Tourism in the Andes',
    pt: 'Aventura, Sabedoria Ancestral e Turismo Responsável nos Andes',
  },

  description: {
    es: 'Agencia de viajes en Cusco especializada en trekking de alta montaña, turismo místico (ceremonias y ofrendas a la Pachamama) y responsabilidad social hacia comunidades campesinas, niños de zonas rurales y preservación de bosques altoandinos.',
    en: 'Cusco-based licensed travel agency specializing in high-mountain trekking, mystical journeys (ceremonies and Pachamama offerings), and social responsibility towards peasant communities, rural children, and high-Andean forest conservation.',
    pt: 'Agência de viagens em Cusco especializada em trekking de alta montanha, turismo místico (cerimônias e oferendas à Pachamama) e responsabilidade social com comunidades camponesas, crianças rurais e preservação de florestas altoandinas.',
  },

  history: {
    es: 'Machupicchu Beyond nace de la idea de hacer un turismo responsable, enfocado en el viajero aventurero que busca conexión con la naturaleza y su entorno, a través de retiros espirituales, ceremonias y ofrendas a la Pachamama. La responsabilidad social es un pilar fundamental: busca que el viajero tenga un impacto positivo, social y ambiental, en las comunidades altoandinas.',
    en: 'Machupicchu Beyond was born from the vision of responsible travel, dedicated to adventurous explorers seeking deep connection with nature and living traditions through spiritual retreats, sacred ceremonies, and offerings to Pachamama (Mother Earth). Social and environmental responsibility is our guiding pillar: ensuring every journey generates a tangible positive impact on rural Andean communities.',
    pt: 'A Machupicchu Beyond nasceu da visão de um turismo responsável, voltado ao viajante aventureiro que busca conexão genuína com a natureza e seu entorno por meio de retiros espirituais, cerimônias sagradas e oferendas à Pachamama (Mãe Terra). A responsabilidade social e ambiental é nosso pilar essencial: gerando impacto positivo nas comunidades camponesas altoandinas.',
  },

  social: {
    instagram: '',
    facebook: '',
    tripadvisor: '',
  },

  // Valores operativos fácilmente configurables por el cliente
  // TODO(cliente): Confirmar número definitivo de viajeros por grupo y experiencias vigentes
  operatingValues: {
    groupSize: 'Grupos reducidos (consultar disponibilidad)',
    operatingBase: 'Calle Zetas 109, Cusco',
    guidance: 'Guías de montaña & Maestros locales',
    impactFocus: 'Comunidades, Niñez rural y Bosques andinos',
  },
};

export type SiteLocale = typeof site.locales[number];

export function absoluteUrl(path = '/') {
  return new URL(path, site.url).toString();
}

export function waLink(message: string, phone = site.whatsapp) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export const nav = [
  { href: '/rutas', label: 'Rutas & Treks' },
  { href: '/ceremonias', label: 'Ceremonias' },
  { href: '/impacto', label: 'Impacto Social' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/reservas', label: 'Cómo Reservar' },
  { href: '/diario', label: 'Diario' },
  { href: '/contacto', label: 'Contacto' },
];

export const trustPoints = [
  {
    title: 'Aventura & Trekking Seguro',
    text: 'Rutas de montaña y pasos glaciares con guías oficiales de montaña, equipos homologados y ritmos conscientes de aclimatación.',
  },
  {
    title: 'Turismo Místico con Respeto',
    text: 'Ceremonias andinas y despachos conducidos por auténticos maestros locales. Sin teatralizaciones ni clichés comerciales.',
  },
  {
    title: 'Responsabilidad Social Real',
    text: 'Cada expedición apoya directamente a comunidades campesinas, niños de zonas rurales y la conservación de bosques altoandinos.',
  },
  {
    title: 'Base Operativa Local en Cusco',
    text: 'Oficina física en Calle Zetas 109, Cusco. Atención directa, humana y transparente antes, durante y después del viaje.',
  },
];

// Indicadores clave fácilmente editables por el cliente
// TODO(cliente): Ajustar valores numéricos definitivos cuando estén confirmados
export const featuredNumbers = [
  { value: '3 Ejes', label: 'Aventura · Mística · Impacto' },
  { value: 'Cusco', label: 'Base Calle Zetas 109' },
  { value: 'Grupos', label: 'Reducidos y cuidados' },
  { value: 'Directo', label: 'Guías y maestros locales' },
];

export const reusedJourneyImages = [
  '/images/journeys/machu-picchu-mist.jpg',
  '/images/journeys/citadel-panorama.jpg',
  '/images/journeys/andean-trail.jpg',
  '/images/journeys/humantay-lake.jpg',
  '/images/journeys/ollantaytambo.jpg',
];

// Testimonios de referencia claramente etiquetados hasta recopilar testimonios oficiales
// TODO(cliente): Reemplazar con testimonios reales de viajeros verificados
export const testimonials: Array<{ quote: string; name: string; origin?: string; isReferential?: boolean }> = [
  {
    quote: 'La combinación de trekking exigente con la serenidad de una ofrenda a la Pachamama en la montaña fue profundamente transformadora.',
    name: 'Testimonio de Referencia (Valeria P.)',
    origin: 'Cusco · Aventura & Tradición',
    isReferential: true,
  },
  {
    quote: 'Se nota el respeto real hacia las comunidades y los arrieros locales. No es el típico tour masivo; hay tiempo para el silencio.',
    name: 'Testimonio de Referencia (Carlos M.)',
    origin: 'Salkantay Trek',
    isReferential: true,
  },
  {
    quote: 'La atención personalizada desde su oficina en Cusco y la calidez del maestro en el Valle Sagrado hicieron toda la diferencia.',
    name: 'Testimonio de Referencia (Andrea & Luis)',
    origin: 'Turismo Responsable',
    isReferential: true,
  },
];

export const philosophy = [
  {
    number: '01',
    title: 'Aventura & Resistencia',
    desc: 'Caminos remotos recorridos con seguridad técnica, guías experimentados y admiración por los glaciares y cordilleras andinas.',
  },
  {
    number: '02',
    title: 'Mística & Cosmovisión',
    desc: 'El viaje como puente hacia la naturaleza y el espíritu a través de ceremonias sagradas y ofrendas a la Pachamama.',
  },
  {
    number: '03',
    title: 'Responsabilidad Social',
    desc: 'Impacto positivo directo en comunidades campesinas altoandinas y apoyo activo a niños y niñas en zonas rurales.',
  },
  {
    number: '04',
    title: 'Preservación Ambiental',
    desc: 'Protección de bosques nativos altoandinos (queñuales), cuidado de fuentes de agua y filosofía estricta de no dejar rastro.',
  },
];

export const team = [
  {
    role: 'Coordinación & Concierge en Cusco',
    text: 'Equipo local con base en Calle Zetas 109, Cusco. Atiende tus consultas, coordina los cupos y prepara cada detalle antes de tu llegada.',
  },
  {
    role: 'Guías Oficiales de Montaña',
    text: 'Profesionales certificados con amplia experiencia en pasos de altura (Salkantay, Ausangate, Camino Inca) y protocolos de primeros auxilios.',
  },
  {
    role: 'Maestros y Paqos Tradicionales',
    text: 'Sabios andinos de linaje reconocido que conducen los ritos y despachos desde la autoridad espiritual de sus comunidades.',
  },
  {
    role: 'Arrieros, Porteadores y Familias Comunales',
    text: 'Familias campesinas aliadas que hacen posible la logística en ruta bajo condiciones justas, respeto mutuo y beneficio compartido.',
  },
];

export const siteFaq = [
  {
    q: '¿Dónde se encuentra la oficina de Machupicchu Beyond?',
    a: 'Nuestra base operativa oficial se encuentra en Calle Zetas 109, Cusco, Perú (a pocas cuadras de la Plaza de Armas). Operamos bajo la razón social MOTOANDES PERU E.I.R.L. con RUC 20614108437.',
  },
  {
    q: '¿Cuáles son los tres ejes de su propuesta de viaje?',
    a: 'Nos especializamos en: (1) Aventura y trekking de montaña, (2) Turismo místico y ceremonias ancestrales a la Pachamama, y (3) Responsabilidad social hacia comunidades campesinas, niñez rural y conservación de bosques altoandinos.',
  },
  {
    q: '¿Cómo se garantiza el impacto positivo en las comunidades?',
    a: 'Trabajamos directamente con familias campesinas, contratamos arrieros y porteadores bajo condiciones justas, apoyamos iniciativas escolares infantiles y promovemos la protección de los queñuales nativos.',
  },
  {
    q: '¿Cómo consulto disponibilidad o reservo una ruta?',
    a: 'Puedes escribirnos directamente a nuestro WhatsApp oficial (+51 977 373 935) o al correo machupicchubeyond@gmail.com con tu fecha estimada, experiencia de interés y número de viajeros.',
  },
  {
    q: '¿Qué nivel de exigencia tienen los treks?',
    a: 'Contamos con rutas para distintos perfiles: desde ceremonias suaves de 1 día en el Valle Sagrado hasta expediciones de alta montaña de 4 a 5 días con pasos por encima de los 4,600 msnm. Cada ficha detalla su exigencia y requerimientos.',
  },
];
