import { defineType, defineField } from 'sanity'

export const homePageType = defineType({
    name: 'homePage',
    title: 'Home Page',
    type: 'document',
    fields: [
        defineField({
            name: 'heroImage',
            title: 'Hero Image (right side)',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'pageBuilder',
            title: 'Page Builder (Modular Sections)',
            description: 'Add, remove and reorder sections on the home page.',
            type: 'array',
            of: [
                { type: 'heroSection' },
                { type: 'textWithImageSection' },
                { type: 'callToActionSection' },
                { type: 'gallerySection' },
                { type: 'videoSection' },
            ],
        }),
    ],
})
