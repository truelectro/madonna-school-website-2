import { createClient } from '@sanity/client';

const client = createClient({
    projectId: 'yi6lk936',
    dataset: 'production',
    apiVersion: '2023-01-01',
    token: process.env.SANITY_API_TOKEN,
    useCdn: false,
});

async function run() {
    const query = `*[_type == "page" && slug.current == "home"][0]`;
    const doc = await client.fetch(query);
    console.log(JSON.stringify(doc, null, 2));
}
run();
