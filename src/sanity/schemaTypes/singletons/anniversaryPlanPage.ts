import { defineType, defineField, defineArrayMember } from 'sanity'

export const anniversaryPlanPageType = defineType({
    name: 'anniversaryPlanPage',
    title: 'Anniversary Plan Page Wrapper',
    type: 'document',
    fields: [
        defineField({
            name: 'headerTitle',
            title: 'Header Title',
            type: 'string',
            initialValue: 'Madonna @ 60',
        }),
        defineField({
            name: 'headerSubtitle',
            title: 'Header Subtitle',
            type: 'text',
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
        }),
        defineField({
            name: 'frameworkIntro',
            title: 'Strategic Framework Introduction',
            type: 'text',
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
        }),
    ],
})
