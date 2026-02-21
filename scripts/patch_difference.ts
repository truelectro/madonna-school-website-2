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
    
    // Check if it already has the difference block
    const hasDiff = doc.pageBuilder?.find((b: any) => b.heading?.includes('Difference'));
    if (hasDiff) {
        console.log("Already has difference block.");
        return;
    }
    
    const newBlock = {
        _key: 'difference1',
        _type: 'textWithImageSection',
        heading: 'The Madonna Difference.',
        content: [
            {
                _key: "diff_p1",
                _type: "block",
                children: [
                    {
                        _key: "diff_s1",
                        _type: "span",
                        marks: [],
                        text: "We go beyond the classroom. Our holistic approach ensures that every student is nurtured emotionally, socially, and intellectually. (Editable from Sanity!)"
                    }
                ],
                style: "normal"
            }
        ]
    };

    if (doc) {
        await client.patch(doc._id).insert('after', 'pageBuilder[-1]', [newBlock]).commit();
        console.log("Patched Difference block into Home!");
    }
}
run();
