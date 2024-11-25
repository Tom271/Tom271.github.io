import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
			pages: 'build', // Output directory for GitHub Pages
			assets: 'build', // Directory for static assets
			fallback: null,  // No fallback for static sites
		  }),
	},
	extensions: ['.svelte', '.md'],
	preprocess:  [
		sveltePreprocess(),
		mdsvex({
			extensions: ['.md']
		})
	]
};

export default config;
