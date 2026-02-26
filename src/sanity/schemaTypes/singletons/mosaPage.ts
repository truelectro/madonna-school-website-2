import { defineType, defineField } from 'sanity'

export const mosaPageType = defineType({
    name: 'mosaPage',
    title: 'MOSA Page',
    type: 'document',
    fields: [
        defineField({
            name: 'headerTitle',
            title: 'Header Title',
            type: 'string',
            initialValue: 'MOSA',
        }),
        defineField({
            name: 'headerSubtitle',
            title: 'Header Subtitle',
            type: 'string',
            initialValue: 'Madonna Old Students Association',
        }),
        defineField({
            name: 'welcomeTitle',
            title: 'Welcome Title',
            type: 'string',
            initialValue: 'Welcome Back, Madonians',
        }),
        defineField({
            name: 'welcomeText',
            title: 'Welcome Text',
            type: 'text',
        }),
    ],
})
