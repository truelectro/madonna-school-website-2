import { defineField, defineType } from 'sanity'

export const welcomeSectionType = defineType({
    name: 'welcomeSection',
    title: 'Welcome Section',
    type: 'object',
    fields: [
        defineField({
            name: 'tag',
            title: 'Tag Line',
            type: 'string',
            initialValue: 'Welcome Message',
        }),
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            initialValue: 'Celebrating 60 Years of Excellence.',
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
        }),
    ],
})
