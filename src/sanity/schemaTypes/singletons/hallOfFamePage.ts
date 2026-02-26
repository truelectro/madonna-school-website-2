import { defineType, defineField, defineArrayMember } from 'sanity'

export const hallOfFamePageType = defineType({
    name: 'hallOfFamePage',
    title: 'Hall of Fame Page',
    type: 'document',
    groups: [
        { name: 'header', title: 'Header' },
        { name: 'awards', title: 'Awards & Achievements' },
        { name: 'extra', title: 'Additional Sections' },
    ],
    fields: [
        defineField({
            name: 'headerTitle',
            title: 'Header Title',
            type: 'string',
            initialValue: 'Hall of Fame',
            group: 'header',
        }),
        defineField({
            name: 'headerSubtitle',
            title: 'Header Subtitle',
            type: 'text',
            group: 'header',
        }),
        defineField({
            name: 'presidentialAwardsText',
            title: 'Presidential Awards Text',
            type: 'text',
            group: 'awards',
        }),
        defineField({
            name: 'presidentialAwards',
            title: 'Presidential Awards',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'object',
                    fields: [
                        { name: 'name', type: 'string', title: 'Name' },
                        { name: 'year', type: 'string', title: 'Year' },
                    ],
                }),
            ],
            group: 'awards',
        }),
        defineField({
            name: 'spellingBeeText',
            title: 'Spelling Bee Champions Text',
            type: 'text',
            group: 'awards',
        }),
        defineField({
            name: 'scienceMathText',
            title: 'Science & Math Quizzes Text',
            type: 'text',
            group: 'awards',
        }),
        defineField({
            name: 'beceResultsText',
            title: 'B.E.C.E. Results Highlight',
            type: 'text',
            group: 'awards',
        }),
        defineField({
            name: 'englishFrenchText',
            title: 'English & French Text',
            type: 'text',
            group: 'awards',
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
