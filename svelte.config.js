import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

export default {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html',
      strict: false
    }),
    prerender: {
      crawl: true,
      entries: ['/', '/sitemap.xml', '/robots.txt']
    },
    paths: {
      base: ''
    }
  },
  preprocess: vitePreprocess()
};