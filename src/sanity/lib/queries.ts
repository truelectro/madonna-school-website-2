import { sanityFetch } from './client'

export async function getStaff() {
    return await sanityFetch(`*[_type == "staff"] | order(order asc)`)
}

export async function getNews() {
    return await sanityFetch(`*[_type == "news"] | order(publishedAt desc)`)
}

export async function getPage(slug: string) {
    return await sanityFetch(`*[_type == "page" && slug.current == $slug][0]`, { slug })
}
