import { defineField, defineType } from 'sanity'

export const videoSectionType = defineType({
    name: 'videoSection',
    title: 'Video Section',
    type: 'object',
    fields: [
        defineField({
            name: 'heading',
            type: 'string',
            title: 'Heading (optional)',
            description: 'A heading shown above the video.',
        }),
        defineField({
            name: 'caption',
            type: 'string',
            title: 'Caption (optional)',
            description: 'A short description or caption shown below the video.',
        }),
        // ── Option A: upload a video file (drag & drop) ──────────────────────
        defineField({
            name: 'videoFile',
            type: 'file',
            title: 'Upload Video File',
            description: 'Drag & drop or upload an MP4 / WebM video directly. If provided, this takes priority over the URL below.',
            options: {
                accept: 'video/*',
            },
        }),
        // ── Option B: embed a YouTube / Vimeo link ───────────────────────────
        defineField({
            name: 'videoUrl',
            type: 'url',
            title: 'OR — Embed URL',
            description: 'Paste a YouTube or Vimeo URL (e.g. https://www.youtube.com/watch?v=XXXXX). Used only when no file is uploaded above.',
        }),
        defineField({
            name: 'background',
            type: 'string',
            title: 'Background Style',
            options: {
                list: [
                    { title: 'Light (white / gray)', value: 'light' },
                    { title: 'Dark (navy)', value: 'dark' },
                ],
                layout: 'radio',
            },
            initialValue: 'light',
        }),
    ],
    preview: {
        select: {
            title: 'heading',
            subtitle: 'videoUrl',
        },
        prepare({ title, subtitle }) {
            return {
                title: title || 'Video Section',
                subtitle: subtitle || 'Uploaded file or no URL set',
                media: undefined,
            }
        },
    },
})
