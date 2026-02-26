import { defineType, defineField } from 'sanity'

export const homePageType = defineType({
    name: 'homePage',
    title: 'Home Page',
    type: 'document',
    groups: [
        { name: 'hero', title: 'Hero Section' },
        { name: 'content', title: 'Page Content (Re-orderable)' },
    ],
    fields: [
        // ── HERO (Fixed at top) ──
        defineField({
            name: 'heroTag',
            title: 'Hero Tag / Eyebrow',
            type: 'string',
            group: 'hero',
        }),
        defineField({
            name: 'heroTitle',
            title: 'Hero Title',
            type: 'string',
            group: 'hero',
            description: 'Can use <span> tags if custom rendering is built in frontend',
        }),
        defineField({
            name: 'heroSubtitle',
            title: 'Hero Subtitle',
            type: 'text',
            group: 'hero',
        }),
        defineField({
            name: 'heroImage',
            title: 'Hero Image',
            type: 'image',
            options: { hotspot: true },
            group: 'hero',
        }),
        defineField({
            name: 'heroStats',
            title: 'Quick Stats',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'value', type: 'string', title: 'Value (e.g. 1964, Top 1%)' },
                        { name: 'label', type: 'string', title: 'Label (e.g. Founding Year)' },
                    ]
                }
            ],
            group: 'hero',
        }),

        // ── RE-ORDERABLE CONTENT ──
        defineField({
            name: 'pageBuilder',
            title: 'Page Sections',
            description: 'Add and re-order the sections that appear below the hero.',
            type: 'array',
            group: 'content',
            of: [
                { type: 'welcomeSection' },
                { type: 'philosophySection' },
                { type: 'differenceSection' },
                { type: 'heroSection' },
                { type: 'textWithImageSection' },
                { type: 'callToActionSection' },
                { type: 'gallerySection' },
                { type: 'videoSection' },
            ],
        }),
    ],
})
