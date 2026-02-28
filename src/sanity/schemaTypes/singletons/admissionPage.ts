import { defineType, defineField, defineArrayMember } from 'sanity'

export const admissionPageType = defineType({
    name: 'admissionPage',
    title: 'Admission Policy Page',
    type: 'document',
    groups: [
        { name: 'header', title: 'Header' },
        { name: 'rules', title: 'Rules & Policies' },
        { name: 'extra', title: 'Additional Sections' },
    ],
    fields: [
        defineField({
            name: 'headerTitle',
            title: 'Header Title',
            type: 'string',
            initialValue: 'Admission Policy',
            group: 'header',
        }),
        defineField({
            name: 'headerSubtitle',
            title: 'Header Subtitle',
            type: 'text',
            initialValue: 'The journey toward excellence starts here. Learn about our admission rules, processes, and requirements.',
            group: 'header',
        }),
        defineField({
            name: 'generalRules',
            title: 'General Rules',
            type: 'array',
            of: [{ type: 'string' }],
            group: 'rules',
        }),
        defineField({
            name: 'kg1Rules',
            title: 'KG 1 Admission Rules',
            type: 'array',
            of: [{ type: 'string' }],
            group: 'rules',
        }),
        defineField({
            name: 'withdrawalRules',
            title: 'Withdrawal Policy Rules',
            type: 'array',
            of: [{ type: 'string' }],
            group: 'rules',
        }),
        defineField({
            name: 'onAdmissionNote',
            title: 'On Admission Note',
            type: 'text',
            initialValue: 'Ignorance of these rules and regulations will not be an excuse for any infringement, for which sanctions will be strictly applied.',
            group: 'rules',
        }),
        defineField({
            name: 'onAdmissionRequirements',
            title: 'On Admission Requirements',
            type: 'array',
            of: [{ type: 'string' }],
            group: 'rules',
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
