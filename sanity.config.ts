import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

export default defineConfig({
    name: 'blog',
    title: 'Blog',
    projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
    dataset: import.meta.env.PUBLIC_SANITY_DATASET,
    plugins: [structureTool()],
    schema: {
        types: [
            /* acá definiremos los campos más adelante */
        ],
    },
})