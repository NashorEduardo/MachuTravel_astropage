export const site = {
  name: 'Machupicchu Beyond',
  tagline: 'Travel & Adventure · Spiritual Journeys',
  description:
    'Viajes espirituales desde Cusco hacia santuarios remotos: ceremonias ancestrales, peregrinaciones y retiros en grupos pequeños.',
  url: 'https://machupicchubeyond.com',
  email: 'hola@machupicchubeyond.com',
  phoneDisplay: '+51 943 491 959',
  whatsapp: '51943491959',
  city: 'Cusco, Perú',
};

export function waLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const nav = [
  { href: '/rutas', label: 'Rutas' },
  { href: '/ceremonias', label: 'Ceremonias' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/diario', label: 'Diario' },
];

export const philosophy = [
  {
    number: '01',
    title: 'Autenticidad',
    desc: 'Conexión con la cultura, la historia y el territorio andino, sin filtros ni clichés turísticos.',
  },
  {
    number: '02',
    title: 'Aventura',
    desc: 'Caminos remotos, físicos y personales, recorridos en grupos pequeños y con tiempo para el silencio.',
  },
  {
    number: '03',
    title: 'Herencia',
    desc: 'Respeto por la cultura inca y por las comunidades que siguen cuidando estos santuarios.',
  },
  {
    number: '04',
    title: 'Conexión',
    desc: 'El viaje como puente entre las personas, la naturaleza y la energía del sol andino, el Inti.',
  },
];

export const team = [
  {
    role: 'Coordinación en Cusco',
    text: 'Arma el itinerario, confirma cupos y acompaña la llegada. Cada viaje parte desde Cusco.',
  },
  {
    role: 'Guías de montaña',
    text: 'Acompañan rutas de altura y cuidan el paso del grupo en cada tramo.',
  },
  {
    role: 'Maestros y facilitadores locales',
    text: 'Conducen las ceremonias desde su conocimiento y autoridad. La agencia organiza el viaje; el rito pertenece a quien lo guía.',
  },
  {
    role: 'Integración',
    text: 'Después de cada ceremonia hay tiempo para conversar, descansar y volver a la vida cotidiana.',
  },
];

export const siteFaq = [
  {
    q: '¿Desde dónde salen los viajes?',
    a: 'Los programas salen y regresan a Cusco. El recojo se coordina al confirmar la ruta.',
  },
  {
    q: '¿Cuántas personas van en cada grupo?',
    a: 'El proyecto trabaja con grupos de 4 a 8 viajeros. La disponibilidad se confirma para cada fecha.',
  },
  {
    q: '¿Necesito experiencia previa en ceremonia?',
    a: 'No. Antes de confirmar conversamos sobre el propósito del viaje y resolvemos tus preguntas. Algunas experiencias incluyen una entrevista previa.',
  },
  {
    q: '¿Cómo consulto o reservo una ruta?',
    a: 'Escríbenos con el viaje que te interesa, una fecha aproximada y el número de personas. Te respondemos con disponibilidad y los siguientes pasos.',
  },
  {
    q: '¿Todas las rutas incluyen ceremonia?',
    a: 'No. Hay peregrinaciones de montaña, experiencias ceremoniales y rutas de iniciación. Cada ficha describe lo que incluye.',
  },
];
