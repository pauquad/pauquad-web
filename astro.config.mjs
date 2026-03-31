import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    site: 'https://paulaquadrelli.com',
    output: 'static',
    adapter: cloudflare(),

    integrations: [
        react(),
        sanity({
            projectId: 'mb4a89ur',
            dataset: 'production',
            useCdn: false,
            studioBasePath: '/admin',
            studioRouterHistory: 'hash',
        }),
    ],
});