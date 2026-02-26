import { defineField, defineType } from 'sanity'

export const differenceSectionType = defineType({
    name: 'differenceSection',
    title: 'Difference Section',
    type: 'object',
    fields: [
        defineField({
            name: 'tag',
            title: 'Tag Line',
            type: 'string',
            initialValue: 'Our Distinction',
        }),
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            initialValue: 'The Madonna Difference.',
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'bullets',
            title: 'Bullet Points',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
        }),
    ],
})
