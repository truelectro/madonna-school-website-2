import { defineType, defineField } from 'sanity'

export const homePageType = defineType({
    name: 'homePage',
    title: 'Home Page',
    type: 'document',
    groups: [
        { name: 'hero', title: 'Hero Section' },
        { name: 'welcome', title: 'Welcome Section' },
        { name: 'philosophy', title: 'Philosophy' },
        { name: 'difference', title: 'The Difference' },
        { name: 'extra', title: 'Additional Sections' },
    ],
    fields: [
        // ── HERO ──
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

        // ── WELCOME ──
        defineField({
            name: 'welcomeTag',
            title: 'Welcome Tag',
            type: 'string',
            group: 'welcome',
        }),
        defineField({
            name: 'welcomeTitle',
            title: 'Welcome Title',
            type: 'string',
            group: 'welcome',
        }),
        defineField({
            name: 'welcomeText',
            title: 'Welcome Content',
            type: 'array',
            of: [{ type: 'block' }],
            group: 'welcome',
        }),
        defineField({
            name: 'welcomeImage',
            title: 'Welcome Image',
            type: 'image',
            options: { hotspot: true },
            group: 'welcome',
        }),

        // ── PHILOSOPHY ──
        defineField({
            name: 'philosophyTitle',
            title: 'Philosophy Title',
            type: 'string',
            group: 'philosophy',
        }),
        defineField({
            name: 'philosophySubtitle',
            title: 'Philosophy Subtitle',
            type: 'text',
            group: 'philosophy',
        }),
        defineField({
            name: 'philosophyCards',
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
            group: 'philosophy',
        }),

        // ── DIFFERENCE ──
        defineField({
            name: 'differenceTag',
            title: 'Difference Tag',
            type: 'string',
            group: 'difference',
        }),
        defineField({
            name: 'differenceTitle',
            title: 'Difference Title',
            type: 'string',
            group: 'difference',
        }),
        defineField({
            name: 'differenceText',
            title: 'Difference Content',
            type: 'array',
            of: [{ type: 'block' }],
            group: 'difference',
        }),
        defineField({
            name: 'differenceBullets',
            title: 'Bullet Points',
            type: 'array',
            of: [{ type: 'string' }],
            group: 'difference',
        }),
        defineField({
            name: 'differenceImage',
            title: 'Difference Image',
            type: 'image',
            options: { hotspot: true },
            group: 'difference',
        }),

        // ── EXTRA PAGE BUILDER ──
        defineField({
            name: 'pageBuilder',
            title: 'Page Builder (Modular Sections)',
            description: 'Add, remove and reorder additional sections at the bottom of the home page.',
            type: 'array',
            group: 'extra',
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
