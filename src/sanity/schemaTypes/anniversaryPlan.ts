import { defineType, defineField } from 'sanity'

export const anniversaryPlanType = defineType({
    name: 'anniversaryPlan',
    title: 'Anniversary Strategic Plan',
    type: 'document',
    fields: [
        defineField({
            name: 'activity',
            title: 'Activity',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'steps',
            title: 'Steps / Description',
            type: 'text',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'resources',
            title: 'Resources Needed',
            type: 'text',
        }),
        defineField({
            name: 'personInCharge',
            title: 'Person in Charge',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'timeline',
            title: 'Timeline',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'outcome',
            title: 'Outcome / Goal',
            type: 'string',
        }),
        defineField({
            name: 'order',
            title: 'Display Order',
            type: 'number',
            description: 'Use this to manually order the rows in the strategic plan table.',
        }),
    ],
    preview: {
        select: {
            title: 'activity',
            subtitle: 'timeline',
        },
    },
})
