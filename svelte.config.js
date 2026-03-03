import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter({
      fallback: '404.html'
    }),
    paths: {
      base: ''  // empty string since you're using a custom domain
    }
  }
};