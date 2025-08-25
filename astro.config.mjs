import { defineConfig } from 'astro/config';
import compress from 'astro-compress';
import sitemap from '@astrojs/sitemap';
import robots from 'astro-robots';
import preact from '@astrojs/preact';
import remarkSmartypants from 'remark-smartypants';

export default defineConfig({
  integrations: [compress(), sitemap(), robots(), preact()],
  output: 'static',
  trailingSlash: 'ignore',
  site: 'https://mdohr.space',
  prefetch: false,
  markdown: {
    remarkPlugins: [
      [remarkSmartypants, { quotes: '„“‚‘' }]
    ],
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'vitesse-black'
    }
  }
});