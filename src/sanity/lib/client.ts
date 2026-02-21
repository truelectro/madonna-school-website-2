import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: '2023-01-01',
    useCdn: false, // Set to true for production for speed
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
    return builder.image(source)
}

/**
 * Resolves a Sanity file asset reference to a fully-qualified CDN URL.
 * The asset._ref format is: "file-<hash>-<extension>"
 * The CDN URL format is: https://cdn.sanity.io/files/<projectId>/<dataset>/<hash>.<ext>
 */
export function fileUrlFor(asset: { _ref: string }): string {
    const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''
    const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
    // ref format: "file-{hash}-{extension}"
    // Use lastIndexOf to safely split off the extension, since hash may contain hyphens
    const ref = asset._ref // e.g. "file-abc123def456ghi789-mp4"
    const withoutPrefix = ref.replace(/^file-/, '') // "abc123def456ghi789-mp4"
    const lastHyphen = withoutPrefix.lastIndexOf('-')
    const hash = withoutPrefix.slice(0, lastHyphen)  // "abc123def456ghi789"
    const ext = withoutPrefix.slice(lastHyphen + 1)  // "mp4"
    return `https://cdn.sanity.io/files/${projectId}/${dataset}/${hash}.${ext}`
}
