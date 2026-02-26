import { defineType, defineField, defineArrayMember } from 'sanity'

export const historyPageType = defineType({
    name: 'historyPage',
    title: 'History Page',
    type: 'document',
    groups: [
        { name: 'header', title: 'Header' },
        { name: 'timeline', title: 'Timeline' },
        { name: 'gratitude', title: 'Debt of Gratitude' },
        { name: 'extra', title: 'Additional Sections' },
    ],
    fields: [
        defineField({
            name: 'headerTitle',
            title: 'Header Title',
            type: 'string',
            initialValue: 'Our History',
            group: 'header',
        }),
        defineField({
            name: 'headerSubtitle',
            title: 'Header Subtitle',
            type: 'text',
            group: 'header',
        }),
        defineField({
            name: 'timelineEvents',
            title: 'Timeline Events',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'object',
                    fields: [
                        { name: 'year', type: 'string', title: 'Year' },
                        { name: 'title', type: 'string', title: 'Title' },
                        { name: 'description', type: 'text', title: 'Description' },
                    ],
                }),
            ],
            group: 'timeline',
        }),
        defineField({
            name: 'debtOfGratitudeTitle',
            title: 'Debt of Gratitude Title',
            type: 'string',
            initialValue: 'A Debt of Gratitude',
            group: 'gratitude',
        }),
        defineField({
            name: 'debtOfGratitudeContent',
            title: 'Debt of Gratitude Content',
            type: 'array',
            of: [{ type: 'block' }],
            group: 'gratitude',
        }),
        defineField({
            name: 'pageBuilder',
            title: 'Additional Sections',
            description: 'Add extra modular sections to this page.',
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
