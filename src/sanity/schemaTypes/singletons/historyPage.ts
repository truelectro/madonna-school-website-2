import { defineType, defineField, defineArrayMember } from 'sanity'

export const historyPageType = defineType({
    name: 'historyPage',
    title: 'History Page',
    type: 'document',
    fields: [
        defineField({
            name: 'headerTitle',
            title: 'Header Title',
            type: 'string',
            initialValue: 'Our History',
        }),
        defineField({
            name: 'headerSubtitle',
            title: 'Header Subtitle',
            type: 'text',
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
        }),
        defineField({
            name: 'debtOfGratitudeTitle',
            title: 'Debt of Gratitude Title',
            type: 'string',
            initialValue: 'A Debt of Gratitude',
        }),
        defineField({
            name: 'debtOfGratitudeContent',
            title: 'Debt of Gratitude Content',
            type: 'array',
            of: [{ type: 'block' }],
        }),
    ],
})
