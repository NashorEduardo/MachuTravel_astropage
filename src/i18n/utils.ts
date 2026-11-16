import { es } from './es';
import { en } from './en';
import { pt } from './pt';

export const SUPPORTED_LOCALES = ['es', 'en', 'pt'] as const;
export type SupportedLocale = typeof SUPPORTED_LOCALES[number];
export const DEFAULT_LOCALE: SupportedLocale = 'es';

export const dictionaries = { es, en, pt };

export const localesList = [
  { code: 'es' as const, label: 'Español', flag: '🇵🇪' },
  { code: 'en' as const, label: 'English', flag: '🇺🇸' },
  { code: 'pt' as const, label: 'Português', flag: '🇧🇷' },
];

export function isValidLocale(code: string): code is SupportedLocale {
  return SUPPORTED_LOCALES.includes(code as SupportedLocale);
}

export function getLocaleFromUrl(url: URL | string): SupportedLocale {
  const pathname = typeof url === 'string' ? url : url.pathname;
  const segments = pathname.split('/').filter(Boolean);
  const first = segments[0];
  if (first && isValidLocale(first)) {
    return first;
  }
  return DEFAULT_LOCALE;
}

export function useTranslations(locale: string | undefined = DEFAULT_LOCALE) {
  const lang = (locale && isValidLocale(locale) ? locale : DEFAULT_LOCALE) as SupportedLocale;
  return dictionaries[lang] || dictionaries.es;
}

export function getLocalizedPath(pathname: string, targetLocale: SupportedLocale): string {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length === 0) {
    return `/${targetLocale}/`;
  }
  if (isValidLocale(segments[0])) {
    segments[0] = targetLocale;
  } else {
    segments.unshift(targetLocale);
  }
  return `/${segments.join('/')}/`.replace(/\/+/g, '/');
}

export function getAlternateLinks(pathname: string, baseUrl: string) {
  const base = baseUrl.replace(/\/+$/, '');
  const links = SUPPORTED_LOCALES.map((locale) => ({
    locale,
    href: `${base}${getLocalizedPath(pathname, locale)}`,
  }));

  return {
    alternates: links,
    xDefault: `${base}${getLocalizedPath(pathname, DEFAULT_LOCALE)}`,
  };
}
