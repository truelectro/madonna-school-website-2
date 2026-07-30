import { createClient } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
export const apiVersion = '2023-01-01'

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false, // Set to false so Next.js handles caching instead of Sanity CDN
    stega: {
        studioUrl: '/admin',
    },
})

/**
 * Enhanced sanityFetch that respects Next.js Draft Mode.
 * Dynamically evaluates draftMode on the server to prevent dragging
 * server-only modules into client component bundles.
 */
export async function sanityFetch<T = unknown>(
    query: string,
    params: Record<string, unknown> = {},
    revalidate = 0
): Promise<T> {
    let isDraftMode = false

    if (typeof window === 'undefined') {
        try {
            const { draftMode } = await import('next/headers')
            const draft = await draftMode()
            isDraftMode = draft.isEnabled
        } catch {
            // Context where draftMode is unavailable
        }
    }

    if (isDraftMode) {
        const token = process.env.SANITY_API_READ_TOKEN
        return client
            .withConfig({
                token,
                perspective: 'previewDrafts',
                stega: true,
                useCdn: false,
            })
            .fetch<T>(query, params, {
                next: { revalidate: 0 },
            })
    }

    return client.fetch<T>(query, params, {
        next: { revalidate },
    })
}

const builder = createImageUrlBuilder(client)

export function urlFor(source: any) {
    return builder.image(source)
}

/**
 * Resolves a Sanity file asset reference to a fully-qualified CDN URL.
 * The asset._ref format is: "file-<hash>-<extension>"
 * The CDN URL format is: https://cdn.sanity.io/files/<projectId>/<dataset>/<hash>.<ext>
 */
export function fileUrlFor(asset: { _ref: string }): string {
    const ref = asset._ref
    const withoutPrefix = ref.replace(/^file-/, '')
    const lastHyphen = withoutPrefix.lastIndexOf('-')
    const hash = withoutPrefix.slice(0, lastHyphen)
    const ext = withoutPrefix.slice(lastHyphen + 1)
    return `https://cdn.sanity.io/files/${projectId}/${dataset}/${hash}.${ext}`
}
