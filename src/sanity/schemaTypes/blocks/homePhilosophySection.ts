import { defineType, defineField } from 'sanity'

export const homePhilosophySectionType = defineType({
    name: 'homePhilosophySection',
    title: 'Home: Philosophy Section',
    type: 'object',
    fields: [
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Subtitle', type: 'text' }),
        defineField({
            name: 'cards',
            title: 'Philosophy Cards',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', type: 'string', title: 'Title' },
                        { name: 'desc', type: 'text', title: 'Description' },
                    ]
                }
            ],
        }),
    ],
})
