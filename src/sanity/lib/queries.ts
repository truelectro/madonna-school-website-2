import { client } from './client'

export async function getStaff() {
    return await client.fetch(`*[_type == "staff"] | order(order asc)`)
}

export async function getNews() {
    return await client.fetch(`*[_type == "news"] | order(publishedAt desc)`)
}

export async function getPage(slug: string) {
    return await client.fetch(`*[_type == "page" && slug.current == $slug][0]`, { slug })
}
