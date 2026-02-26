import { defineType, defineField } from 'sanity'

export const contactPageType = defineType({
    name: 'contactPage',
    title: 'Contact Page',
    type: 'document',
    groups: [
        { name: 'header', title: 'Header' },
        { name: 'info', title: 'Contact Info' },
        { name: 'extra', title: 'Additional Sections' },
    ],
    fields: [
        defineField({
            name: 'headerTitle',
            title: 'Header Title',
            type: 'string',
            initialValue: 'Reach Out',
            group: 'header',
        }),
        defineField({
            name: 'headerSubtitle',
            title: 'Header Subtitle',
            type: 'text',
            group: 'header',
        }),
        defineField({
            name: 'phone',
            title: 'Phone Number',
            type: 'string',
            group: 'info',
        }),
        defineField({
            name: 'workingHours',
            title: 'Working Hours',
            type: 'string',
            group: 'info',
        }),
        defineField({
            name: 'email',
            title: 'Email Address',
            type: 'string',
            group: 'info',
        }),
        defineField({
            name: 'responseTime',
            title: 'Response Time',
            type: 'string',
            initialValue: 'We typically reply within 24 hours',
            group: 'info',
        }),
        defineField({
            name: 'address',
            title: 'Physical Address',
            type: 'string',
            group: 'info',
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
