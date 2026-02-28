import { defineType, defineField, defineArrayMember } from 'sanity'

export const academicsPageType = defineType({
    name: 'academicsPage',
    title: 'Academics Page',
    type: 'document',
    groups: [
        { name: 'header', title: 'Header' },
        { name: 'calendar', title: 'Calendar Events' },
        { name: 'extra', title: 'Additional Sections' },
    ],
    fields: [
        defineField({
            name: 'headerTitle',
            title: 'Header Title',
            type: 'string',
            initialValue: 'Academics',
            group: 'header',
        }),
        defineField({
            name: 'headerSubtitle',
            title: 'Header Subtitle',
            type: 'text',
            initialValue: 'Stay up to date with the academic calendar and other resources.',
            group: 'header',
        }),

        // Calendar
        defineField({
            name: 'calendarTitle',
            title: 'Calendar Section Title',
            type: 'string',
            initialValue: '1st Term Schedule',
            group: 'calendar',
        }),
        defineField({
            name: 'calendarSubtitle',
            title: 'Calendar Section Subtitle',
            type: 'string',
            initialValue: 'September 2025 - January 2026',
            group: 'calendar',
        }),
        defineField({
            name: 'calendarEvents',
            title: 'Calendar Events',
            description: 'Add, remove, and reorder calendar events here.',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'object',
                    name: 'calendarEvent',
                    title: 'Calendar Event',
                    fields: [
                        defineField({
                            name: 'title',
                            title: 'Event Title',
                            type: 'string',
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: 'description',
                            title: 'Description / Date Range',
                            type: 'string',
                        }),
                        defineField({
                            name: 'term',
                            title: 'Academic Term',
                            type: 'string',
                            options: {
                                list: [
                                    { title: 'First Term', value: 'first_term' },
                                    { title: 'Second Term', value: 'second_term' },
                                    { title: 'Third Term', value: 'third_term' },
                                    { title: 'Full Year / Other', value: 'other' },
                                ],
                            },
                        }),
                    ],
                    preview: {
                        select: {
                            title: 'title',
                            subtitle: 'description',
                        },
                    },
                }),
            ],
            group: 'calendar',
        }),

        // Extra
        defineField({
            name: 'pageBuilder',
            title: 'Additional Sections',
            description: 'Add extra modular sections to this page (e.g. underneath the Calendar).',
            type: 'array',
            of: [
                { type: 'heroSection' },
                { type: 'textWithImageSection' },
                { type: 'callToActionSection' },
                { type: 'gallerySection' },
                { type: 'videoSection' },
            ],
            group: 'extra',
        }),
    ],
})
