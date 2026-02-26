import { defineType, defineField, defineArrayMember } from 'sanity'

export const anniversaryPlanPageType = defineType({
    name: 'anniversaryPlanPage',
    title: 'Anniversary Plan Page',
    type: 'document',
    groups: [
        { name: 'header', title: 'Header' },
        { name: 'schedule', title: 'Event Schedule' },
        { name: 'framework', title: 'Strategic Framework' },
        { name: 'extra', title: 'Additional Sections' },
    ],
    fields: [
        defineField({
            name: 'headerTitle',
            title: 'Header Title',
            type: 'string',
            initialValue: 'Madonna @ 60',
            group: 'header',
        }),
        defineField({
            name: 'headerSubtitle',
            title: 'Header Subtitle',
            type: 'text',
            group: 'header',
        }),
        defineField({
            name: 'activities',
            title: 'Event Schedule',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'object',
                    fields: [
                        { name: 'date', type: 'string', title: 'Date' },
                        { name: 'title', type: 'string', title: 'Title' },
                    ],
                }),
            ],
            group: 'schedule',
        }),
        defineField({
            name: 'frameworkIntro',
            title: 'Strategic Framework Introduction',
            type: 'text',
            group: 'framework',
        }),
        defineField({
            name: 'framework',
            title: 'Strategic Framework',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'object',
                    fields: [
                        { name: 'obj', type: 'string', title: 'Objective' },
                        { name: 'desc', type: 'text', title: 'Description' },
                        { name: 'lead', type: 'string', title: 'Lead / Person in Charge' },
                    ],
                }),
            ],
            group: 'framework',
        }),
        defineField({
            name: 'pageBuilder',
            title: 'Additional Sections',
            description: 'Add extra modular sections to this page.',
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
