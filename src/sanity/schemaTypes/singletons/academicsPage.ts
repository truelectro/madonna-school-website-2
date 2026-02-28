import { defineType, defineField } from 'sanity'

export const academicsPageType = defineType({
    name: 'academicsPage',
    title: 'Academics Page',
    type: 'document',
    groups: [
        { name: 'header', title: 'Header' },
        { name: 'extra', title: 'Additional Sections' },
    ],
    fields: [
        defineField({
            name: 'headerTitle',
            title: 'Header Title',
            type: 'string',
            initialValue: 'Academics',
            group: 'header',
        }),
        defineField({
            name: 'headerSubtitle',
            title: 'Header Subtitle',
            type: 'text',
            initialValue: 'Stay up to date with the academic calendar and other resources.',
            group: 'header',
        }),
        // Extra
        defineField({
            name: 'pageBuilder',
            title: 'Additional Sections',
            description: 'Add extra modular sections to this page (e.g. underneath the Calendar).',
            type: 'array',
            of: [
                { type: 'heroSection' },
                { type: 'textWithImageSection' },
                { type: 'callToActionSection' },
                { type: 'gallerySection' },
                { type: 'videoSection' },
            ],
            group: 'extra',
        }),
    ],
})
