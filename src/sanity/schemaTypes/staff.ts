import { defineType, defineField } from 'sanity'

export const staffType = defineType({
    name: 'staff',
    title: 'Staff Member',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Headmistress / Administration', value: 'administration' },
                    { title: 'Teaching Staff', value: 'teaching' },
                    { title: 'Non-Teaching Staff', value: 'non_teaching' },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'role',
            type: 'string',
        }),
        defineField({
            name: 'image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'bio',
            type: 'text',
        }),
        defineField({
            name: 'order',
            type: 'number',
            title: 'Display Order',
        }),
    ],
})
