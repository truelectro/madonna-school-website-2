import { defineType, defineField } from 'sanity'

export const homeDifferenceSectionType = defineType({
    name: 'homeDifferenceSection',
    title: 'Home: The Difference Section',
    type: 'object',
    fields: [
        defineField({ name: 'tag', title: 'Tag', type: 'string' }),
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({ name: 'text', title: 'Content', type: 'array', of: [{ type: 'block' }] }),
        defineField({ name: 'bullets', title: 'Checkmark List', type: 'array', of: [{ type: 'string' }] }),
        defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'badgeTitle', title: 'Badge Category (e.g. Alumni Network)', type: 'string' }),
        defineField({ name: 'badgeText', title: 'Badge Highlight Text (e.g. Over 10,000 successful alumni globally.)', type: 'string' }),
    ],
})
