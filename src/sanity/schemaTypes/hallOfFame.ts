import { defineType, defineField } from 'sanity'

export const hallOfFameType = defineType({
    name: 'hallOfFame',
    title: 'Hall of Fame / Awards',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title of Award / Competition',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Presidential Award', value: 'presidential_award' },
                    { title: 'Competition / Quiz', value: 'competition' },
                    { title: 'Academic Result', value: 'academic_result' },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'recipients',
            title: 'Recipients / Details',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'List the names of the recipients or achievements associated with this entry.',
        }),
        defineField({
            name: 'image',
            title: 'Image (Optional)',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'order',
            type: 'number',
            title: 'Display Order',
        }),
    ],
})
