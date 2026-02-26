import { defineType, defineField, defineArrayMember } from 'sanity'

export const hallOfFamePageType = defineType({
    name: 'hallOfFamePage',
    title: 'Hall of Fame Page',
    type: 'document',
    fields: [
        defineField({
            name: 'headerTitle',
            title: 'Header Title',
            type: 'string',
            initialValue: 'Hall of Fame',
        }),
        defineField({
            name: 'headerSubtitle',
            title: 'Header Subtitle',
            type: 'text',
        }),
        defineField({
            name: 'presidentialAwardsText',
            title: 'Presidential Awards Text',
            type: 'text',
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
        }),
        defineField({
            name: 'spellingBeeText',
            title: 'Spelling Bee Champions Text',
            type: 'text',
        }),
        defineField({
            name: 'scienceMathText',
            title: 'Science & Math Quizzes Text',
            type: 'text',
        }),
        defineField({
            name: 'beceResultsText',
            title: 'B.E.C.E. Results Highlight',
            type: 'text',
        }),
        defineField({
            name: 'englishFrenchText',
            title: 'English & French Text',
            type: 'text',
        }),
    ],
})
