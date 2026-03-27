import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

export default {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html'  // keep this for SPA routing
    }),
    paths: {
      base: ''
    }
  },
  preprocess: vitePreprocess()
};