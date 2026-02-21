import { createClient } from '@sanity/client';

const client = createClient({
    projectId: 'yi6lk936',
    dataset: 'production',
    apiVersion: '2023-01-01',
    token: process.env.SANITY_API_TOKEN,
    useCdn: false,
});

async function run() {
    // Delete the redundant generic pages we made earlier that are now custom custom pages
    const slugsToDelete = ['history', 'hall-of-fame', 'mosa', 'anniversary-plan'];
    
    for (const slug of slugsToDelete) {
        try {
            const query = `*[_type == "page" && slug.current == "${slug}"]{ _id }`;
            const docs = await client.fetch(query);
            for (const doc of docs) {
                await client.delete(doc._id);
                console.log(`✅ Deleted redundant page: ${slug}`);
            }
        } catch (e: any) {
            console.error(e.message);
        }
    }
}
run();
