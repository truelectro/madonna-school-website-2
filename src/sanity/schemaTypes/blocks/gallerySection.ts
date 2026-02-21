import { defineField, defineType } from 'sanity'

export const gallerySectionType = defineType({
    name: 'gallerySection',
    title: 'Image Gallery Section',
    type: 'object',
    fields: [
        defineField({
            name: 'heading',
            type: 'string',
            title: 'Gallery Heading (Optional)',
        }),
        defineField({
            name: 'images',
            type: 'array',
            of: [
                {
                    type: 'image',
                    options: { hotspot: true }
                }
            ],
            title: 'Images',
            validation: (Rule) => Rule.min(1).required(),
        }),
    ],
    preview: {
        select: {
            title: 'heading',
            images: 'images',
        },
        prepare({ title, images }) {
            return {
                title: title || 'Gallery Section',
                subtitle: images ? `${(images as any[]).length} images` : 'Gallery Section',
            }
        },
    },
})
