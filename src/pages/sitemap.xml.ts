import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { site } from '../data/site';

export const GET: APIRoute = async () => {
  const tours = await getCollection('tours');
  const posts = await getCollection('blog');
  const staticPaths = ['/', '/rutas', '/rutas/ceremonias', '/rutas/peregrinaciones', '/rutas/iniciacion', '/ceremonias', '/nosotros', '/diario', '/contacto', '/privacidad', '/terminos'];
  const urls = [...staticPaths, ...tours.map((t) => `/rutas/${t.id}`), ...posts.map((p) => `/diario/${p.id}`)];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((path) => `  <url><loc>${new URL(path, site.url).toString()}</loc></url>`).join('\n')}\n</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
