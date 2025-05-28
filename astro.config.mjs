import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [tailwind(), compress(), sitemap()],
  output: 'static',
  trailingSlash: 'always',
  site: 'https://mdohr.space',
  prefetch: false,
});
