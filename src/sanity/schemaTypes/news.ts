import { defineType, defineField } from 'sanity'

export const newsType = defineType({
    name: 'news',
    title: 'News & Events',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'publishedAt',
            type: 'datetime',
        }),
        defineField({
            name: 'mainImage',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'content',
            type: 'array',
            of: [{ type: 'block' }],
        }),
    ],
})
