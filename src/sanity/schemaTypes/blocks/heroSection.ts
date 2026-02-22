import { defineField, defineType } from 'sanity'

export const heroSectionType = defineType({
    name: 'heroSection',
    title: 'Hero Section',
    type: 'object',
    fields: [
        defineField({
            name: 'badgeText',
            type: 'string',
            title: 'Badge Text',
            description: 'Upper text in a rounded badge (e.g. Sacrifice • Success • Service)',
        }),
        defineField({
            name: 'heading',
            type: 'string',
            title: 'Heading',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'subheading',
            type: 'text',
            title: 'Subheading/Description',
        }),
        defineField({
            name: 'backgroundImage',
            type: 'image',
            title: 'Main Hero Image',
            description: 'The large image on the right/center overlap.',
            options: { hotspot: true },
        }),
        defineField({
            name: 'ctaLabel',
            type: 'string',
            title: 'Primary CTA Label',
        }),
        defineField({
            name: 'ctaLink',
            type: 'string',
            title: 'Primary CTA Link',
        }),
        defineField({
            name: 'secondaryCtaLabel',
            type: 'string',
            title: 'Secondary CTA Label',
        }),
        defineField({
            name: 'secondaryCtaLink',
            type: 'string',
            title: 'Secondary CTA Link',
        }),
        defineField({
            name: 'stats',
            type: 'array',
            title: 'Statistics',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'label', type: 'string', title: 'Label' },
                        { name: 'value', type: 'string', title: 'Value (e.g. 1964)' }
                    ]
                }
            ]
        }),

    ],
    preview: {
        select: {
            title: 'heading',
            media: 'backgroundImage',
        },
        prepare({ title, media }) {
            return {
                title: title || 'Hero Section',
                subtitle: 'Hero Section',
                media: media,
            }
        },
    },
})
