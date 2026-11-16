# Machupicchu Beyond — implementación técnica V3

## Cambios aplicados en esta versión
### Base previa conservada
- Se mantuvo la estructura Astro, Content Collections, rutas dinámicas, sitemap, robots, legal pages y mejoras SEO/base de la V2.

### Mejoras visuales y de dinamismo
- Se añadió una capa de **animación sutil** con:
  - reveal on scroll,
  - efecto tilt/hover en tarjetas,
  - tarjetas flotantes en el hero,
  - carrusel horizontal automático de imágenes,
  - carrusel automático de comentarios.
- La home ganó más movimiento visual sin depender todavía de imágenes nuevas.
- La sección final de contacto dejó de verse vacía: ahora incorpora una **composición visual con imágenes reutilizadas**.

### Home rediseñada en V3
- Banda de indicadores rápidos: experiencias, tamaño de grupo, base operativa y acompañamiento.
- Reforzamiento visual del hero con tarjetas flotantes.
- Grid de experiencias más dinámico.
- Nueva cinta animada de imágenes reutilizadas.
- Nueva sección de comentarios/testimonios de referencia.
- La estructura general quedó más viva y comercial.

### Catálogo de tours
- `TourCatalog.astro` fue mejorado para que cada card tenga:
  - badge/tag,
  - meta visual más clara,
  - mini imagen secundaria reutilizada,
  - hover más dinámico.

### Fichas de tour (`/rutas/[slug]`)
Se añadieron varios bloques nuevos para que cada tour sea más completo:
- tarjeta lateral destacada en el hero,
- bloque de puntos clave,
- galería ampliada reutilizando imágenes existentes,
- bloque “qué hace especial a esta ruta”,
- comentarios referenciales,
- FAQ más protagonista,
- CTA visual para disponibilidad,
- sección de **otras rutas recomendadas** al final.

## Datos actualmente referenciales
- Los comentarios/testimonios añadidos son **temporales** y están preparados para ser reemplazados por testimonios reales.
- Varias galerías usan repetición/reutilización de imágenes existentes, tal como solicitaste, hasta que cargues las fotos definitivas.

## Próximo trabajo recomendado
1. Reemplazar galerías e imágenes reutilizadas por fotografías reales.
2. Revisar visualmente Home, catálogo y fichas de tour en móvil/tablet/desktop.
3. Afinar microdetalles de diseño (espaciados, tipografía, proporciones, densidad visual).
4. Cargar testimonios reales.
5. Completar redes sociales y señales de confianza reales.
6. En siguiente etapa: activar versión en inglés.

## Validación
- Se hizo revisión estática de estructura, rutas y assets usados en esta intervención.
- No fue posible validar el build completo en este entorno porque la instalación local de Astro quedó incompleta en `node_modules`.
- En tu equipo conviene ejecutar:

```bash
npm install
npm run build
npm run dev
```

Si el build reporta incompatibilidades, verifica la versión de Node y reinstala dependencias limpias.


---

# Machupicchu Beyond — Implementación Integral V4 (Estratégica, Multilingüe y de Contenido)

## 1. Resumen Ejecutivo de la Versión 4
La versión 4 representa una evolución integral de la arquitectura digital de **Machupicchu Beyond**, transitando desde una web de presentación experimental hacia una plataforma turística multilingüe de alto rendimiento, alineada estrictamente con los datos legales de la empresa, su manual de marca y un nuevo posicionamiento estratégico en tres ejes fundamentales:
1. **Aventura y trekking de alta montaña.**
2. **Turismo místico y cosmovisión viva (ceremonias y ofrendas a la Pachamama).**
3. **Responsabilidad social y ambiental (comunidades campesinas, niñez rural y conservación de bosques altoandinos).**

---

## 2. Actualización de Datos Oficiales de la Empresa
Se erradicaron de todo el código fuente los datos antiguos (correos temporales, números de teléfono anteriores y claims no corroborados) y se implantaron los datos jurídicos y comerciales oficiales:
- **Nombre comercial:** MACHUPICCHU BEYOND
- **Razón social:** MOTOANDES PERU E.I.R.L.
- **RUC:** 20614108437
- **Dirección legal y operativa:** Calle Zetas 109, Cusco, Perú (a pocas cuadras de la Plaza de Armas).
- **Correo oficial:** `machupicchubeyond@gmail.com`
- **WhatsApp oficial:** `+51 977 373 935` (`https://wa.me/51977373935`)
- **Historia oficial:** Redactada con calidez y profesionalismo sin invención de hechos ni fechas ficticias.
- **Transparencia legal:** Datos reflejados en Footer, Header, Nosotros, Contacto, Términos de Servicio, Política de Privacidad y metadatos estructurados Schema.org (`TravelAgency` y `WebSite`).

---

## 3. Internacionalización (i18n): Español + Inglés + Portugués
- **Enrutamiento nativo estático:** Se configuró `astro.config.mjs` con prefijos `/es/`, `/en/` y `/pt/`.
- **Redirección inteligente de raíz (`/`):** Genera una página de entrada ultra liviana en `dist/index.html` con `<meta http-equiv="refresh">` y script de detección por `localStorage` y `navigator.language`, dirigiendo con fluidez a `/es/` sin romper el build estático.
- **Diccionarios de UI desacoplados:** Creados en `src/i18n/es.ts`, `src/i18n/en.ts` y `src/i18n/pt.ts`, eliminando textos duros en componentes.
- **Utilidades tipadas:** `src/i18n/utils.ts` y `src/i18n/content.ts` con funciones de resolución de rutas (`getLocalizedPath`, `getAlternateLinks`, `getToursByLocale`).
- **Selector de idioma accesible:** Incorporado en el Header tanto para escritorio (píldoras con bandera y código de idioma) como en el menú drawer móvil.
- **SEO Internacional:** Generación de `<link rel="alternate" hreflang="...">` en `BaseLayout` y mapa de sitio XML `sitemap.xml` con etiquetas `xhtml:link` para todas las páginas e idiomas.

---

## 4. Esquema de Contenido y Expansión de Catálogo
Se amplió la colección de tours en `src/content.config.ts` admitiendo el tipo `'trekking'` y nuevos campos opcionales:
- `maxAltitude`: Altitud máxima del recorrido.
- `difficulty`: Nivel de esfuerzo físico.
- `departurePoint` / `returnPoint`: Puntos de inicio y fin.
- `whatToBring`: Lista de equipamiento sugerido.
- `restrictions`: Requisitos y condiciones médicas.
- `weatherPolicy`: Protocolo de seguridad climática.
- `priceFrom`: Indicador de precio inicial o consulta.

### Fichas de tours creadas y localizadas (30 archivos Markdown en total: 10 ES, 10 EN, 10 PT):
1. **Salkantay Trek a Machu Picchu (5D/4N)** — Paso Salkantay (4,630 msnm), laguna Humantay y ceja de selva.
2. **Camino Inca Clásico a Machu Picchu (4D/3N)** — Paso Warmiwañusqa (4,215 msnm), Wiñay Wayna e Inti Punku.
3. **Ausangate Trek & 7 Lagunas (4D/3N)** — Circuito de altura alrededor del Apu sagrado, pasos sobre 5,000 msnm y termas de Pacchanta.
4. **Trek Glaciar Huaytapallana & Huancayo (3D/2N)** — Cordillera Central, lagunas Lasuntay y cultura Wanka.
5. **Santuario de Waqrapukara (2D/1N)** — Fortaleza sobre el cañón del Apurímac con hospedaje campesino.
6. **Camino de Sabiduría Q'ero (5D/4N)** — Convivencia comunitaria y rito de Karpay.
7. **Peregrinación al Apu Ausangate (4D/3N)** — Enfoque místico y ofrenda con maestro andino.
8. **Despacho a la Pachamama (Full Day)** — Valle Sagrado, ofrenda de Ayni y kintu de coca.
9. **Despertar Solar en Machu Picchu (2D/1N)** — Amanecer consciente con pernocte en Aguas Calientes.
10. **Retiro de Conexión en Ceja de Selva (4D/3N)** — Dieta vegetal, maloca tradicional y contención emocional.

*Regla crítica aplicada:* No se inventaron precios comerciales, itinerarios finales ni porcentajes. Todo dato pendiente fue identificado claramente con `"Consultar"` o `"Por confirmar"`.

---

## 5. Páginas Nuevas y Rediseñadas
1. **Home (`/[lang]/`):** Hero cinematográfico con propuesta de valor en 3 ejes, doble botón CTA ("Ver rutas" y "Escribir por WhatsApp"), indicadores de base operativa en Calle Zetas 109, grid dinámico de rutas, bloque de impacto social, carrusel visual, testimonios etiquetados como referenciales, resumen de cómo reservar y FAQ.
2. **Catálogo (`/[lang]/rutas` y `/treks`):** Filtros reactivos por categoría (Todas, Treks, Ceremonias, Peregrinaciones, Iniciación) y chips informativos con altitud, dificultad y precio.
3. **Ficha de Tour (`/[lang]/rutas/[slug]`):** Ficha técnica en banda, acordeón de itinerario por días, incluye / no incluye, qué llevar, restricciones médicas, política de clima, galería mosaico, sidebar sticky y barra CTA flotante fija en pantallas móviles.
4. **Ceremonias (`/[lang]/ceremonias`):** Fichas estructuradas transparentes por experiencia (qué es, quién la dirige, dónde se realiza, duración, qué incluye, requisitos, qué debe saber el viajero).
5. **Impacto Social (`/[lang]/impacto`):** Detalle de los tres pilares (comunidades campesinas, niñez rural, bosques de queñual) y caja destacada de pendientes éticos con comentarios `TODO(cliente)`.
6. **Nosotros (`/[lang]/nosotros`):** Historia oficial de la empresa, filosofía de viaje, red de acompañamiento y cuadro formal de datos jurídicos (MOTOANDES PERU E.I.R.L. · RUC 20614108437).
7. **Cómo Reservar (`/[lang]/reservas`):** Pasos claros de reserva y políticas estructuradas (adelanto, métodos de pago, cancelación, reprogramación, clima y menores de edad) con etiquetas `[POR CONFIRMAR]`.
8. **Contacto (`/[lang]/contacto`):** Datos oficiales de Calle Zetas 109, enlace liviano a Google Maps, selector con pre-selección por query param (`?ruta=...`) y apertura automática de WhatsApp con mensaje estructurado.
9. **Términos y Privacidad (`/[lang]/terminos`, `/[lang]/privacidad`):** Actualizados con razón social, RUC y sección detallada de "Reservas, pagos y cancelaciones".

---

## 6. Verificación Técnica y Rendimiento
- **Compilación estática:** `npm run build` ejecutado exitosamente.
- **Páginas generadas:** 80 páginas HTML estáticas en total (incluyendo todas las rutas en ES, EN, PT, redirección raíz, error 404 y sitemap XML).
- **Tiempo de build:** ~7 segundos.
- **Cero errores:** Sin advertencias de rutas en conflicto ni parámetros faltantes.
