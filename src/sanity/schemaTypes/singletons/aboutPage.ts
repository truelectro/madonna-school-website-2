import { defineType, defineField, defineArrayMember } from 'sanity'

export const aboutPageType = defineType({
    name: 'aboutPage',
    title: 'About Page',
    type: 'document',
    fields: [
        defineField({
            name: 'headerTitle',
            title: 'Header Title',
            type: 'string',
            initialValue: 'Our Story',
        }),
        defineField({
            name: 'headerSubtitle',
            title: 'Header Subtitle',
            type: 'text',
        }),
        defineField({
            name: 'missionTitle',
            title: 'Mission Title',
            type: 'string',
            initialValue: 'Our Mission',
        }),
        defineField({
            name: 'missionText',
            title: 'Mission Text',
            type: 'text',
        }),
        defineField({
            name: 'visionTitle',
            title: 'Vision Title',
            type: 'string',
            initialValue: 'Our Vision',
        }),
        defineField({
            name: 'visionText',
            title: 'Vision Text',
            type: 'text',
        }),
        defineField({
            name: 'historyTitle',
            title: 'History Section Title',
            type: 'string',
            initialValue: 'Founded in 1964. Built for Infinity.',
        }),
        defineField({
            name: 'historyContent',
            title: 'History Section Content',
            type: 'array',
            of: [{ type: 'block' }],
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
        }),
        defineField({
            name: 'coreValuesTitle',
            title: 'Core Values Title',
            type: 'string',
            initialValue: 'Our Core Values',
        }),
        defineField({
            name: 'coreValuesSubtitle',
            title: 'Core Values Subtitle',
            type: 'string',
            initialValue: 'The pillars that sustain our institution.',
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
        }),
    ],
})
