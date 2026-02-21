import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schema } from './schemaTypes'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export default defineConfig({
    basePath: '/admin',
    projectId,
    dataset,
    schema,
    plugins: [deskTool()],
})
