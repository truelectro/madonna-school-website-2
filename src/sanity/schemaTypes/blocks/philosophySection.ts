import { defineField, defineType } from 'sanity'

export const philosophySectionType = defineType({
    name: 'philosophySection',
    title: 'Philosophy Section',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            initialValue: 'A Legacy of Excellence',
        }),
        defineField({
            name: 'subtitle',
            title: 'Subtitle',
            type: 'text',
            initialValue: 'For over six decades, Madonna School has been at the forefront of educational innovation, transforming potential into achievement.',
        }),
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
