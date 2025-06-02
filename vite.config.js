import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { enhancedImages } from '@sveltejs/enhanced-img';

export default defineConfig({
	plugins: [sveltekit(), enhancedImages()],
	define: {
		SUPERFORMS_LEGACY: true
	},
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern',
				silenceDeprecations: ['legacy-js-api']
			}
		}
	}
});
