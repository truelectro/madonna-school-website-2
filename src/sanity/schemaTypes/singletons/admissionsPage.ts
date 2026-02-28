import { defineType, defineField, defineArrayMember } from 'sanity'

export const admissionsPageType = defineType({
    name: 'admissionsPage',
    title: 'Admissions Page',
    type: 'document',
    groups: [
        { name: 'header', title: 'Header' },
        { name: 'policy', title: 'Admission Policy' },
        { name: 'curriculum', title: 'Curriculum' },
        { name: 'extra', title: 'Additional Sections' },
    ],
    fields: [
        defineField({
            name: 'headerTitle',
            title: 'Header Title',
            type: 'string',
            initialValue: 'Admissions',
            group: 'header',
        }),
        defineField({
            name: 'headerSubtitle',
            title: 'Header Subtitle',
            type: 'text',
            initialValue: 'The journey toward excellence starts here. Learn about our admission process and curriculum.',
            group: 'header',
        }),
        // Policy Fields
        defineField({
            name: 'policyTitle',
            title: 'Policy Section Title',
            type: 'string',
            initialValue: 'Admission Policy',
            group: 'policy',
        }),
        defineField({
            name: 'generalRules',
            title: 'General Rules',
            type: 'array',
            of: [{ type: 'string' }],
            group: 'policy',
        }),
        defineField({
            name: 'kg1Rules',
            title: 'KG 1 Admission Rules',
            type: 'array',
            of: [{ type: 'string' }],
            group: 'policy',
        }),
        defineField({
            name: 'withdrawalRules',
            title: 'Withdrawal Policy Rules',
            type: 'array',
            of: [{ type: 'string' }],
            group: 'policy',
        }),
        defineField({
            name: 'onAdmissionNote',
            title: 'On Admission Note',
            type: 'text',
            initialValue: 'Ignorance of these rules and regulations will not be an excuse for any infringement, for which sanctions will be strictly applied.',
            group: 'policy',
        }),
        defineField({
            name: 'onAdmissionRequirements',
            title: 'On Admission Requirements',
            type: 'array',
            of: [{ type: 'string' }],
            group: 'policy',
        }),

        // Curriculum Fields
        defineField({
            name: 'curriculumTitle',
            title: 'Curriculum Section Title',
            type: 'string',
            initialValue: 'Curriculum Offered',
            group: 'curriculum',
        }),
        defineField({
            name: 'curriculumSubtitle',
            title: 'Curriculum Section Subtitle',
            type: 'text',
            initialValue: 'According to the current education reforms by Ghana Education Service (GES), our Basic school has been redefined to provide a holistic and modern learning structure.',
            group: 'curriculum',
        }),
        defineField({
            name: 'levels',
            title: 'Education Levels',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'object',
                    fields: [
                        { name: 'title', type: 'string', title: 'Level Title' },
                        { name: 'duration', type: 'string', title: 'Duration' },
                        { name: 'description', type: 'text', title: 'Description' },
                    ],
                }),
            ],
            group: 'curriculum',
        }),

        // Extra
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
