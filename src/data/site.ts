export const site = {
  name: 'Machupicchu Beyond',
  tagline: 'Travel & Adventure · Spiritual Journeys',
  description:
    'Viajes espirituales desde Cusco hacia santuarios remotos: ceremonias ancestrales, peregrinaciones y retiros en grupos pequeños.',
  url: 'https://machupicchubeyond.com',
  locale: 'es_PE',
  language: 'es',
  email: 'hola@machupicchubeyond.com',
  phoneDisplay: '+51 943 491 959',
  whatsapp: '51943491959',
  city: 'Cusco, Perú',
  defaultImage: '/images/journeys/machu-picchu-mist.jpg',
  social: {
    instagram: '',
    facebook: '',
    tripadvisor: '',
  },
};

export function absoluteUrl(path = '/') {
  return new URL(path, site.url).toString();
}

export function waLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const nav = [
  { href: '/rutas', label: 'Rutas' },
  { href: '/ceremonias', label: 'Ceremonias' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/diario', label: 'Diario' },
];

export const trustPoints = [
  { title: 'Base local en Cusco', text: 'Las rutas se coordinan desde Cusco y parten con información clara antes del viaje.' },
  { title: 'Grupos pequeños', text: 'Trabajamos con grupos reducidos para cuidar el ritmo, la conversación y el territorio.' },
  { title: 'Acompañamiento local', text: 'Guías, maestros y facilitadores participan desde su conocimiento y autoridad en cada experiencia.' },
  { title: 'Viajes con respeto', text: 'La cultura y el territorio no son un espectáculo: cada encuentro se plantea con cuidado y consentimiento.' },
];

export const featuredNumbers = [
  { value: '06', label: 'Experiencias activas' },
  { value: '4–8', label: 'Viajeros por grupo' },
  { value: 'Cusco', label: 'Base operativa' },
  { value: 'Local', label: 'Acompañamiento' },
];

export const reusedJourneyImages = [
  '/images/journeys/machu-picchu-mist.jpg',
  '/images/journeys/citadel-panorama.jpg',
  '/images/journeys/andean-trail.jpg',
  '/images/journeys/humantay-lake.jpg',
  '/images/journeys/ollantaytambo.jpg',
];

export const testimonials: Array<{ quote: string; name: string; origin?: string }> = [
  {
    quote: 'Se sintió como un viaje muy cuidado: ritmo tranquilo, buen acompañamiento y una experiencia más humana que turística.',
    name: 'Valeria P.',
    origin: 'Lima',
  },
  {
    quote: 'Nos gustó que todo estuviera claro antes de salir: logística, dificultad y el sentido de la ruta.',
    name: 'Carlos M.',
    origin: 'Quito',
  },
  {
    quote: 'El grupo pequeño hizo la diferencia. Hubo espacio para conversar, caminar en silencio y realmente conectar con el lugar.',
    name: 'Andrea & Luis',
    origin: 'Bogotá',
  },
  {
    quote: 'Más que una excursión, se sintió como una experiencia pensada con respeto por la cultura y el territorio.',
    name: 'Sofía R.',
    origin: 'Buenos Aires',
  },
];

export const philosophy = [
  { number: '01', title: 'Autenticidad', desc: 'Conexión con la cultura, la historia y el territorio andino, sin filtros ni clichés turísticos.' },
  { number: '02', title: 'Aventura', desc: 'Caminos remotos, físicos y personales, recorridos en grupos pequeños y con tiempo para el silencio.' },
  { number: '03', title: 'Herencia', desc: 'Respeto por la cultura inca y por las comunidades que siguen cuidando estos santuarios.' },
  { number: '04', title: 'Conexión', desc: 'El viaje como puente entre las personas, la naturaleza y la energía del sol andino, el Inti.' },
];

export const team = [
  { role: 'Coordinación en Cusco', text: 'Arma el itinerario, confirma cupos y acompaña la llegada. Cada viaje parte desde Cusco.' },
  { role: 'Guías de montaña', text: 'Acompañan rutas de altura y cuidan el paso del grupo en cada tramo.' },
  { role: 'Maestros y facilitadores locales', text: 'Conducen las ceremonias desde su conocimiento y autoridad. La agencia organiza el viaje; el rito pertenece a quien lo guía.' },
  { role: 'Integración', text: 'Después de cada ceremonia hay tiempo para conversar, descansar y volver a la vida cotidiana.' },
];

export const siteFaq = [
  { q: '¿Desde dónde salen los viajes?', a: 'Los programas salen y regresan a Cusco. El recojo se coordina al confirmar la ruta.' },
  { q: '¿Cuántas personas van en cada grupo?', a: 'El proyecto trabaja con grupos de 4 a 8 viajeros. La disponibilidad se confirma para cada fecha.' },
  { q: '¿Necesito experiencia previa en ceremonia?', a: 'No. Antes de confirmar conversamos sobre el propósito del viaje y resolvemos tus preguntas. Algunas experiencias incluyen una entrevista previa.' },
  { q: '¿Cómo consulto o reservo una ruta?', a: 'Escríbenos con el viaje que te interesa, una fecha aproximada y el número de personas. Te respondemos con disponibilidad y los siguientes pasos.' },
  { q: '¿Todas las rutas incluyen ceremonia?', a: 'No. Hay peregrinaciones de montaña, experiencias ceremoniales y rutas de iniciación. Cada ficha describe lo que incluye.' },
];
