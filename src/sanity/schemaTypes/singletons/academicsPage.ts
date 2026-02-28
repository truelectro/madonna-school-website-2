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
                    name: 'calendarEventItem',
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
                            title: 'Description',
                            type: 'string',
                        }),
                        defineField({
                            name: 'startDate',
                            title: 'Start Date',
                            type: 'date',
                            options: {
                                dateFormat: 'DD MMM YYYY',
                            },
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: 'endDate',
                            title: 'End Date (optional, for multi-day events)',
                            type: 'date',
                            options: {
                                dateFormat: 'DD MMM YYYY',
                            },
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
                            startDate: 'startDate',
                            endDate: 'endDate',
                        },
                        prepare({ title, startDate, endDate }: { title: string; startDate: string; endDate: string }) {
                            const start = startDate ? new Date(startDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : '';
                            const end = endDate ? ` — ${new Date(endDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}` : '';
                            return {
                                title: title || 'Untitled Event',
                                subtitle: `${start}${end}`,
                            }
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
