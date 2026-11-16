import { getCollection, type CollectionEntry } from 'astro:content';
import { SUPPORTED_LOCALES, type SupportedLocale } from './utils';

export interface LocalizedTour extends CollectionEntry<'tours'> {
  slug: string;
  baseId: string;
}

export interface LocalizedBlogPost extends CollectionEntry<'blog'> {
  slug: string;
  baseId: string;
}

export async function getToursByLocale(locale: SupportedLocale): Promise<LocalizedTour[]> {
  const tours = await getCollection('tours', ({ id }) => id.startsWith(`${locale}/`));
  return tours
    .map((tour) => {
      const [, ...slugParts] = tour.id.split('/');
      const slug = slugParts.join('/');
      return {
        ...tour,
        slug,
        baseId: slug,
      };
    })
    .sort((a, b) => (a.data.order ?? 99) - (b.data.order ?? 99));
}

export async function getBlogPostsByLocale(locale: SupportedLocale): Promise<LocalizedBlogPost[]> {
  const posts = await getCollection('blog', ({ id }) => id.startsWith(`${locale}/`));
  return posts
    .map((post) => {
      const [, ...slugParts] = post.id.split('/');
      const slug = slugParts.join('/');
      return {
        ...post,
        slug,
        baseId: slug,
      };
    })
    .sort((a, b) => b.data.date.localeCompare(a.data.date));
}

export async function getAllTourSlugs(): Promise<string[]> {
  const esTours = await getToursByLocale('es');
  return esTours.map((t) => t.slug);
}

export async function getAllBlogSlugs(): Promise<string[]> {
  const esPosts = await getBlogPostsByLocale('es');
  return esPosts.map((p) => p.slug);
}
