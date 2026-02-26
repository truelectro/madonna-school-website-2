import { defineType, defineField, defineArrayMember } from 'sanity'

export const aboutPageType = defineType({
    name: 'aboutPage',
    title: 'About Page',
    type: 'document',
    groups: [
        { name: 'header', title: 'Header' },
        { name: 'mission', title: 'Mission & Vision' },
        { name: 'history', title: 'History' },
        { name: 'values', title: 'Core Values' },
        { name: 'extra', title: 'Additional Sections' },
    ],
    fields: [
        defineField({
            name: 'headerTitle',
            title: 'Header Title',
            type: 'string',
            initialValue: 'Our Story',
            group: 'header',
        }),
        defineField({
            name: 'headerSubtitle',
            title: 'Header Subtitle',
            type: 'text',
            group: 'header',
        }),
        defineField({
            name: 'missionTitle',
            title: 'Mission Title',
            type: 'string',
            initialValue: 'Our Mission',
            group: 'mission',
        }),
        defineField({
            name: 'missionText',
            title: 'Mission Text',
            type: 'text',
            group: 'mission',
        }),
        defineField({
            name: 'visionTitle',
            title: 'Vision Title',
            type: 'string',
            initialValue: 'Our Vision',
            group: 'mission',
        }),
        defineField({
            name: 'visionText',
            title: 'Vision Text',
            type: 'text',
            group: 'mission',
        }),
        defineField({
            name: 'historyTitle',
            title: 'History Section Title',
            type: 'string',
            initialValue: 'Founded in 1964. Built for Infinity.',
            group: 'history',
        }),
        defineField({
            name: 'historyContent',
            title: 'History Section Content',
            type: 'array',
            of: [{ type: 'block' }],
            group: 'history',
        }),
        defineField({
            name: 'stats',
            title: 'Statistics',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'object',
                    fields: [
                        { name: 'label', type: 'string', title: 'Label' },
                        { name: 'val', type: 'string', title: 'Value' },
                    ],
                }),
            ],
            group: 'history',
        }),
        defineField({
            name: 'coreValuesTitle',
            title: 'Core Values Title',
            type: 'string',
            initialValue: 'Our Core Values',
            group: 'values',
        }),
        defineField({
            name: 'coreValuesSubtitle',
            title: 'Core Values Subtitle',
            type: 'string',
            initialValue: 'The pillars that sustain our institution.',
            group: 'values',
        }),
        defineField({
            name: 'coreValues',
            title: 'Core Values',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'object',
                    fields: [
                        { name: 'title', type: 'string', title: 'Title' },
                        { name: 'desc', type: 'text', title: 'Description' },
                    ],
                }),
            ],
            group: 'values',
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
