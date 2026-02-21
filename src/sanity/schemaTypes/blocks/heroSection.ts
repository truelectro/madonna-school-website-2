import { defineField, defineType } from 'sanity'

export const heroSectionType = defineType({
    name: 'heroSection',
    title: 'Hero Section',
    type: 'object',
    fields: [
        defineField({
            name: 'heading',
            type: 'string',
            title: 'Heading',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'subheading',
            type: 'text',
            title: 'Subheading',
        }),
        defineField({
            name: 'backgroundImage',
            type: 'image',
            title: 'Background Image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'ctaLabel',
            type: 'string',
            title: 'CTA Button Label',
        }),
        defineField({
            name: 'ctaLink',
            type: 'string',
            title: 'CTA Button Link (URL or Path)',
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
