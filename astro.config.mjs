import sanity from '@sanity/astro';
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';

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
            studioBasePath: '/admin', // La puerta de entrada a tu panel
            studioRouterHistory: 'hash',
        }),
    ],
});