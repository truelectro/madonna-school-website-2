import { defineField, defineType } from 'sanity'

export const textWithImageSectionType = defineType({
    name: 'textWithImageSection',
    title: 'Text with Image Section',
    type: 'object',
    fields: [
        defineField({
            name: 'heading',
            type: 'string',
            title: 'Heading',
        }),
        defineField({
            name: 'content',
            type: 'array',
            of: [{ type: 'block' }],
            title: 'Content',
        }),
        defineField({
            name: 'image',
            type: 'image',
            title: 'Image',
            options: { hotspot: true },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'imagePosition',
            type: 'string',
            title: 'Image Position',
            options: {
                list: [
                    { title: 'Left', value: 'left' },
                    { title: 'Right', value: 'right' },
                ],
                layout: 'radio',
            },
            initialValue: 'left',
        }),
    ],
    preview: {
        select: {
            title: 'heading',
            media: 'image',
        },
        prepare({ title, media }) {
            return {
                title: title || 'Text with Image Section',
                subtitle: 'Text with Image',
                media: media,
            }
        },
    },
})
