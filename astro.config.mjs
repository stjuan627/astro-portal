// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://escaperoads.org',
  redirects: {
    '/games/escape-road': {
      status: 301,
      destination: '/',
    },
  },
  integrations: [
    tailwind()
  ],
  experimental: {
    contentIntellisense: true,
  }
});
