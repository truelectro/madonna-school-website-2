import { defineType, defineField } from 'sanity'

export const homeWelcomeSectionType = defineType({
    name: 'homeWelcomeSection',
    title: 'Home: Welcome Section',
    type: 'object',
    fields: [
        defineField({ name: 'tag', title: 'Tag', type: 'string' }),
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({ name: 'text', title: 'Content', type: 'array', of: [{ type: 'block' }] }),
        defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
    ],
})
