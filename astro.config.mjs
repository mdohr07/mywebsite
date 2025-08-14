import { defineConfig } from 'astro/config';
import compress from 'astro-compress';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [compress(), sitemap()],
  output: 'static',
  trailingSlash: 'ignore',
  site: 'https://mdohr.space',
  prefetch: false,
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'github-light'
    }
  }
});
