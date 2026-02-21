const https = require('https');

const API_VERSION = 'v2023-01-01';
const PROJECT_ID = 'yi6lk936';
const DATASET = 'production';
const TOKEN = 'skVfHgvn4vSbOtjGopgusY46IfErJ20XXyIK6qn85bVSwXLFy2a9PQHgXOATpI3XXfI6h8IvPvY0dDXPUgTzxt9KoNXIRNzNlKtPezA7522KvVYazDtoiOuFLuQo8dzvpB1DTLsclpL6JRvyYR0aDdZdHGUlU6yM75ON7eK5yqBA6gZ9CBbX';
const DOC_ID = 'ppUGg4uPFIzmjioafZ5hHH';

const mutation = {
    mutations: [
        {
            patch: {
                id: DOC_ID,
                insert: {
                    after: 'pageBuilder[-1]',
                    items: [
                        {
                            _key: `difference-${Date.now()}`,
                            _type: 'textWithImageSection',
                            heading: 'The Madonna Difference.',
                            content: [
                                {
                                    _key: `diff_p1_${Date.now()}`,
                                    _type: 'block',
                                    children: [
                                        {
                                            _key: `diff_s1_${Date.now()}`,
                                            _type: 'span',
                                            marks: [],
                                            text: 'We go beyond the classroom. Our holistic approach ensures that every student is nurtured emotionally, socially, and intellectually.'
                                        }
                                    ],
                                    style: 'normal'
                                }
                            ]
                        }
                    ]
                }
            }
        }
    ]
};

const req = https.request(`https://${PROJECT_ID}.api.sanity.io/${API_VERSION}/data/mutate/${DATASET}`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${TOKEN}`
    }
}, (res) => {
    let rawData = '';
    res.on('data', (chunk) => rawData += chunk);
    res.on('end', () => console.log('Response:', rawData));
});

req.on('error', (e) => console.error(e));
req.write(JSON.stringify(mutation));
req.end();
