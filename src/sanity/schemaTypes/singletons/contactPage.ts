import { defineType, defineField } from 'sanity'

export const contactPageType = defineType({
    name: 'contactPage',
    title: 'Contact Page',
    type: 'document',
    fields: [
        defineField({
            name: 'headerTitle',
            title: 'Header Title',
            type: 'string',
            initialValue: 'Reach Out',
        }),
        defineField({
            name: 'headerSubtitle',
            title: 'Header Subtitle',
            type: 'text',
        }),
        defineField({
            name: 'phone',
            title: 'Phone Number',
            type: 'string',
        }),
        defineField({
            name: 'workingHours',
            title: 'Working Hours',
            type: 'string',
        }),
        defineField({
            name: 'email',
            title: 'Email Address',
            type: 'string',
        }),
        defineField({
            name: 'responseTime',
            title: 'Response Time',
            type: 'string',
            initialValue: 'We typically reply within 24 hours',
        }),
        defineField({
            name: 'address',
            title: 'Physical Address',
            type: 'string',
        }),
    ],
})
