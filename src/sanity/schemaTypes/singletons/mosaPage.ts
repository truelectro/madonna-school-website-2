import { defineType, defineField } from 'sanity'

export const mosaPageType = defineType({
    name: 'mosaPage',
    title: 'MOSA Page',
    type: 'document',
    groups: [
        { name: 'header', title: 'Header' },
        { name: 'content', title: 'Content' },
        { name: 'extra', title: 'Additional Sections' },
    ],
    fields: [
        defineField({
            name: 'headerTitle',
            title: 'Header Title',
            type: 'string',
            initialValue: 'MOSA',
            group: 'header',
        }),
        defineField({
            name: 'headerSubtitle',
            title: 'Header Subtitle',
            type: 'string',
            initialValue: 'Madonna Old Students Association',
            group: 'header',
        }),
        defineField({
            name: 'welcomeTitle',
            title: 'Welcome Title',
            type: 'string',
            initialValue: 'Welcome Back, Madonians',
            group: 'content',
        }),
        defineField({
            name: 'welcomeText',
            title: 'Welcome Text',
            type: 'text',
            group: 'content',
        }),
        defineField({
            name: 'directoryTitle',
            title: 'Directory Section Title',
            type: 'string',
            initialValue: 'Alumni Database Directory',
            group: 'content',
        }),
        defineField({
            name: 'directorySubtitle',
            title: 'Directory Section Subtitle',
            type: 'string',
            initialValue: 'Find your classmates. Select your graduating year below to view your year group.',
            group: 'content',
        }),
        defineField({
            name: 'pageBuilder',
            title: 'Additional Sections',
            description: 'Add extra modular sections to this page.',
            type: 'array',
            of: [
                { type: 'homeWelcomeSection' },
                { type: 'homePhilosophySection' },
                { type: 'homeDifferenceSection' },
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
