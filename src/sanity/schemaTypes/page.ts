import { defineType, defineField } from 'sanity'

export const pageType = defineType({
    name: 'page',
    title: 'Page Content',
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
            name: 'heroImage',
            type: 'image',
        }),
        defineField({
            name: 'pageBuilder',
            title: 'Page Builder (Modular Layout)',
            type: 'array',
            of: [
                { type: 'heroSection' },
                { type: 'textWithImageSection' },
                { type: 'callToActionSection' },
                { type: 'gallerySection' },
            ],
        }),
        defineField({
            name: 'content',
            title: 'Simple Content (Optional / Legacy)',
            type: 'array',
            of: [{ type: 'block' }],
        }),
    ],
})
