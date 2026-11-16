import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://machupicchubeyond.com',
  output: 'static',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'pt'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
});
