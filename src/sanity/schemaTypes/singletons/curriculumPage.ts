import { defineType, defineField, defineArrayMember } from 'sanity'

export const curriculumPageType = defineType({
    name: 'curriculumPage',
    title: 'Curriculum Page',
    type: 'document',
    groups: [
        { name: 'header', title: 'Header' },
        { name: 'levels', title: 'Education Levels' },
        { name: 'extra', title: 'Additional Sections' },
    ],
    fields: [
        defineField({
            name: 'headerTitle',
            title: 'Header Title',
            type: 'string',
            initialValue: 'Curriculum Offered',
            group: 'header',
        }),
        defineField({
            name: 'headerSubtitle',
            title: 'Header Subtitle',
            type: 'text',
            initialValue: 'According to the current education reforms by Ghana Education Service (GES), our Basic school has been redefined to provide a holistic and modern learning structure.',
            group: 'header',
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
            group: 'levels',
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
