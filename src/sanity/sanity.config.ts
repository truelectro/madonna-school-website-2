import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { presentationTool } from 'sanity/presentation'
import { schema } from './schemaTypes'
import { structure } from './structure'
import { locate } from './presentation/locate'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export default defineConfig({
    basePath: '/admin',
    projectId,
    dataset,
    schema,
    plugins: [
        structureTool({ structure }),
        presentationTool({
            locate,
            previewUrl: {
                draftMode: {
                    enable: '/api/draft-mode/enable',
                },
            },
        }),
    ],
})
