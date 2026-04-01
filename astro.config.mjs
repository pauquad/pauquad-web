import sanity from '@sanity/astro';
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    site: 'https://paulaquadrelli.com',
    output: 'static',

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