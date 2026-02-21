import { defineType, defineField } from 'sanity'

export const calendarEventType = defineType({
    name: 'calendarEvent',
    title: 'Calendar Event',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Event Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'date',
            title: 'Event Date',
            type: 'date',
            options: {
                dateFormat: 'YYYY-MM-DD',
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'term',
            title: 'Academic Term / Semester',
            type: 'string',
            options: {
                list: [
                    { title: 'First Term', value: 'first_term' },
                    { title: 'Second Term', value: 'second_term' },
                    { title: 'Third Term', value: 'third_term' },
                    { title: 'Full Year / Other', value: 'other' }
                ],
            },
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'date',
        },
    },
})
