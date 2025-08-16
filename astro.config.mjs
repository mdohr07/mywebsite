import { defineConfig } from 'astro/config';
import compress from 'astro-compress';
import sitemap from '@astrojs/sitemap';

import preact from '@astrojs/preact';

export default defineConfig({
  integrations: [compress(), sitemap(), preact()],
  output: 'static',
  trailingSlash: 'ignore',
  site: 'https://mdohr.space',
  prefetch: false,
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'vitesse-black'
    }
  }
});