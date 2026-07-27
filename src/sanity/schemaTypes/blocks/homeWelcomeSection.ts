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
        defineField({ name: 'authorName', title: 'Author Name (e.g. Sr. Perpetual Owiredu)', type: 'string' }),
        defineField({ name: 'authorRole', title: 'Author Role (e.g. Headmistress)', type: 'string' }),
        defineField({ name: 'authorInitials', title: 'Author Initials (e.g. SO)', type: 'string' }),
        defineField({ name: 'authorImage', title: 'Author Photo', type: 'image', options: { hotspot: true } }),
    ],
})
