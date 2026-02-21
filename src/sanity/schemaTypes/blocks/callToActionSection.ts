import { defineField, defineType } from 'sanity'

export const callToActionSectionType = defineType({
    name: 'callToActionSection',
    title: 'Call to Action Section',
    type: 'object',
    fields: [
        defineField({
            name: 'heading',
            type: 'string',
            title: 'Heading',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'text',
            type: 'text',
            title: 'Short Description',
        }),
        defineField({
            name: 'buttonLabel',
            type: 'string',
            title: 'Button Label',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'buttonLink',
            type: 'string',
            title: 'Button Link',
            validation: (Rule) => Rule.required(),
        }),
    ],
    preview: {
        select: {
            title: 'heading',
        },
        prepare({ title }) {
            return {
                title: title || 'Call to Action',
                subtitle: 'CTA Section',
            }
        },
    },
})
