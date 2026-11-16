import type { APIRoute } from 'astro';
import { site } from '../data/site';
import { SUPPORTED_LOCALES } from '../i18n/utils';
import { getAllTourSlugs, getAllBlogSlugs } from '../i18n/content';

export const GET: APIRoute = async () => {
  const tourSlugs = await getAllTourSlugs();
  const blogSlugs = await getAllBlogSlugs();

  const staticRouteBases = [
    '',
    'rutas',
    'rutas/treks',
    'rutas/ceremonias',
    'rutas/peregrinaciones',
    'rutas/iniciacion',
    'ceremonias',
    'impacto',
    'nosotros',
    'reservas',
    'contacto',
    'diario',
    'terminos',
    'privacidad',
  ];

  const urls: Array<{ loc: string; alternates: Array<{ lang: string; href: string }> }> = [];

  for (const base of staticRouteBases) {
    const alternates = SUPPORTED_LOCALES.map((lang) => ({
      lang,
      href: new URL(base ? `/${lang}/${base}` : `/${lang}/`, site.url).toString(),
    }));

    for (const alt of alternates) {
      urls.push({
        loc: alt.href,
        alternates,
      });
    }
  }

  // Tours
  for (const slug of tourSlugs) {
    const alternates = SUPPORTED_LOCALES.map((lang) => ({
      lang,
      href: new URL(`/${lang}/rutas/${slug}`, site.url).toString(),
    }));

    for (const alt of alternates) {
      urls.push({
        loc: alt.href,
        alternates,
      });
    }
  }

  // Blog posts
  for (const slug of blogSlugs) {
    const alternates = SUPPORTED_LOCALES.map((lang) => ({
      lang,
      href: new URL(`/${lang}/diario/${slug}`, site.url).toString(),
    }));

    for (const alt of alternates) {
      urls.push({
        loc: alt.href,
        alternates,
      });
    }
  }

  const xmlEntries = urls
    .map((item) => {
      const altTags = item.alternates
        .map((a) => `    <xhtml:link rel="alternate" hreflang="${a.lang}" href="${a.href}" />`)
        .join('\n');
      return `  <url>\n    <loc>${item.loc}</loc>\n${altTags}\n    <changefreq>weekly</changefreq>\n    <priority>${item.loc.endsWith('/') ? '1.0' : '0.8'}</priority>\n  </url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${xmlEntries}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
