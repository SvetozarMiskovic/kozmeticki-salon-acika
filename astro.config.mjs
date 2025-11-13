// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://salonacika.appwrite.network',
  i18n: {
    defaultLocale: 'sr',
    routing: {
      prefixDefaultLocale: true,
    },
    locales: ['en', 'de', 'sr', 'sr-latn'],
  },
  integrations: [react(), icon()],
});
