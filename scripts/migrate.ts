import { createClient } from '@sanity/client';

const client = createClient({
    projectId: 'yi6lk936',
    dataset: 'production',
    apiVersion: '2023-01-01',
    token: process.env.SANITY_API_TOKEN,
    useCdn: false,
});

async function migrate() {
    console.log("Starting Phase 2 Migration...");

    // 1. Staff
    const JSON_STAFF = {
        headmistress: { name: "Sr. Perpetual Owiredu (SSpS)", role: "Headmistress", category: "administration" },
        teachingStaff: [
            { name: "Homawoo Justine", role: "Assistant Headmistress", category: "teaching" },
            { name: "Akrobetu Charles", role: "Teacher", category: "teaching" },
            { name: "Danquah Cynthia", role: "Teacher", category: "teaching" },
            { name: "Owusu Nora Akua", role: "Teacher", category: "teaching" },
            { name: "Akotuah William", role: "Teacher", category: "teaching" },
            { name: "Owusu Emmanuel Gorman", role: "Teacher", category: "teaching" },
            { name: "Opoku Abena Veronica", role: "Teacher", category: "teaching" },
            { name: "Dodounou Matthias", role: "Teacher", category: "teaching" },
            { name: "Akulimase Felicia", role: "Teacher", category: "teaching" },
            { name: "Akuffu Gyampoh Rita", role: "Teacher", category: "teaching" },
            { name: "Akrasi Lisa Safoa", role: "Teacher", category: "teaching" },
            { name: "Aidoo Bernice", role: "Teacher", category: "teaching" },
            { name: "Amable Samuel", role: "Teacher", category: "teaching" },
            { name: "Ephraim-Amoo Patricia", role: "Teacher", category: "teaching" },
            { name: "Teye Mensah Theodora", role: "Teacher", category: "teaching" },
            { name: "Sam Josephine", role: "Teacher", category: "teaching" },
            { name: "Aziafor Christian", role: "Teacher", category: "teaching" },
            { name: "Obeng Amoah", role: "Teacher", category: "teaching" },
            { name: "Kwakye Eunice Yeboah", role: "Teacher", category: "teaching" },
            { name: "Amuzu Vicentia", role: "Teacher", category: "teaching" },
            { name: "Gyekye Daniel", role: "Teacher", category: "teaching" },
            { name: "Sabeng Dorcas", role: "Teacher", category: "teaching" },
            { name: "Baduwaa Gifty Asiaw", role: "Teacher", category: "teaching" },
            { name: "Adepa Rosemary Nyamekye", role: "Teacher", category: "teaching" },
            { name: "Kontoh Ebenezer Okyere", role: "Teacher", category: "teaching" },
            { name: "Mensah Jeremiah", role: "Teacher", category: "teaching" },
            { name: "Comfort Sekyeraa Marfo", role: "Teacher", category: "teaching" }
        ],
        nonTeachingStaff: [
            { name: "Abdul Baba", role: "Staff", category: "non_teaching" },
            { name: "Amoh Peter", role: "Staff", category: "non_teaching" },
            { name: "Fianko Stephen Kwesi", role: "Staff", category: "non_teaching" },
            { name: "Goha Daniel", role: "Staff", category: "non_teaching" },
            { name: "Tanor Emmanuel", role: "Staff", category: "non_teaching" },
            { name: "Solomon Tettey Doe", role: "Staff", category: "non_teaching" },
            { name: "Abugri Mohammed", role: "Staff", category: "non_teaching" },
            { name: "Esther Ohene Danso", role: "Staff", category: "non_teaching" },
            { name: "Osafo Peter", role: "Staff", category: "non_teaching" },
            { name: "Benyi Portia", role: "Staff", category: "non_teaching" },
            { name: "Tetteh Julius Kwadwo-Dei", role: "Staff", category: "non_teaching" },
            { name: "Caleb Emmanuel Achine", role: "Staff", category: "non_teaching" },
            { name: "Hawa Osumanu", role: "Staff", category: "non_teaching" },
            { name: "Grace Nora Ollai", role: "Staff", category: "non_teaching" }
        ]
    };

    let order = 1;
    for (const staff of [JSON_STAFF.headmistress, ...JSON_STAFF.teachingStaff, ...JSON_STAFF.nonTeachingStaff]) {
        try {
            await client.create({
                _type: 'staff',
                name: staff.name,
                role: staff.role,
                category: staff.category,
                order: order++
            });
        } catch (e: any) {
            console.error(`Failed to push staff ${staff.name}`, e.message);
        }
    }
    console.log("✅ Staff pushed");

    // 2. News
    const newsItems = [
        { title: "Madonna School Celebrates 60th Anniversary", excerpt: "A grand celebration marking six decades of academic excellence...", date: "2023-10-24" },
        { title: "Inter-School Sports Competition Victory", excerpt: "Our students displayed incredible sportsmanship and won 15 gold medals...", date: "2023-11-12" },
        { title: "New Science Lab Inauguration", excerpt: "Enhancing our STEM curriculum with state-of-the-art equipment...", date: "2023-12-05" },
        { title: "Admission for 2024/2025 Now Open", excerpt: "Join the community of excellence. Find out more about our admission process...", date: "2024-01-10" }
    ];

    for (const news of newsItems) {
        try {
            await client.create({
                _type: 'news',
                title: news.title,
                slug: { _type: 'slug', current: news.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '') },
                publishedAt: (new Date(news.date)).toISOString(),
                content: [{ _type: 'block', style: 'normal', children: [{ _type: 'span', marks: [], text: news.excerpt }] }]
            });
        } catch (e: any) {
            console.error(`Failed to push news ${news.title}`, e.message);
        }
    }
    console.log("✅ News pushed");

    // 3. Calendar Events
    const calendarEvents = [
        "Staff Meeting - Monday, 8th September, 2025",
        "School Re-opens - Tuesday, 9th September, 2025",
        "Extra Classes Begins - Monday, 15th September, 2025",
        "Meeting with KG1 Parents - Tuesday, 16th September, 2025",
        "Meeting with JHS 3 Parents - Wednesday, 17th September, 2025",
        "Opening Mass - Friday, 19th September, 2025",
        "Kwame Nkrumah Memorial Day (Public Holiday) - Monday, 22nd September, 2025",
        "Water Day - Friday, 26th September, 2025",
        "Meeting with JHS 2 Parents - Tuesday, 30th September, 2025",
        "First Check of Output of Work - Monday – Friday, 6th – 17th October, 2025",
        "Mid – Term Examination - Monday - Friday, 20th – 24th October, 2025",
        "P.T.A. Executive Meeting - Wednesday, 22nd October, 2025",
        "Rehearsals towards Anniversary Launch Begins - Monday, 27th October, 2025",
        "P.T.A. General Meeting - Wednesday, 29th October, 2025",
        "Open Day (P.T.I) - Thursday, 30th October, 2025",
        "Mid–Term Break - Friday, 31st October, 2025",
        "School Resumes from Mid–Term Break - Monday, 3rd November, 2025",
        "Deadline for the submission of End of First Term Examination Questions - Monday – Friday, 10th – 14th November, 2025",
        "First Mock (JHS 3 Students) - Monday – Friday, 17th – 21st November, 2025",
        "Anniversary Launching Week - Monday – Sunday, 24th – 30th November, 2025",
        "Revision Week - Monday – Tuesday, 1st – 2nd December, 2025",
        "End of First Terms Examination (KG1- JHS 3) - Wednesday – Monday, 3rd – 15th December, 2025",
        "Farmer’s Day - Friday, 12th December, 2025",
        "Submission of Textbooks & Library Books - Tuesday, 16th December, 2025",
        "Closing Mass / Carol Service - Wednesday, 17th December, 2025"
    ];

    for (const event of calendarEvents) {
        let [desc, dateStr] = event.split(' - ');
        try {
            await client.create({
                _type: 'calendarEvent',
                title: desc,
                term: 'term1',
                description: dateStr
            });
        } catch (e: any) {
            console.error(`Failed to push calendar event ${desc}`, e.message);
        }
    }
    console.log("✅ Calendar Events pushed");

    // 4. Page Builder Static pages
    const historyPage = {
        _type: 'page', title: 'Our History', slug: { _type: 'slug', current: 'history' },
        pageBuilder: [
            { _key: 'h1', _type: 'heroSection', heading: 'Our History', subheading: 'A legacy of faith, education, and community service starting from 1964.' },
            {
                _key: 'h2', _type: 'textWithImageSection', heading: 'History Timeline', imagePosition: 'right', content: [
                    { _key: 'c1', _type: 'block', style: 'normal', children: [{ _type: 'span', marks: [], text: 'For details on our history, please visit our legacy timeline.' }] }
                ]
            }
        ]
    };

    const hallOfFamePage = {
        _type: 'page', title: 'Hall of Fame', slug: { _type: 'slug', current: 'hall-of-fame' },
        pageBuilder: [
            { _key: 'h1', _type: 'heroSection', heading: 'Hall of Fame', subheading: 'Celebrating the outstanding achievements of Madonna School students.' },
            {
                _key: 'h2', _type: 'textWithImageSection', heading: 'Presidential Awards', imagePosition: 'left', content: [
                    { _key: 'c1', _type: 'block', style: 'normal', children: [{ _type: 'span', marks: [], text: 'The school has produced students who have received Presidential Awards.' }] }
                ]
            }
        ]
    };

    const mosaPage = {
        _type: 'page', title: 'MOSA Alumni', slug: { _type: 'slug', current: 'mosa' },
        pageBuilder: [
            { _key: 'h1', _type: 'heroSection', heading: 'MOSA Alumni', subheading: 'Connecting generations of Madonians worldwide.' },
            {
                _key: 'h2', _type: 'textWithImageSection', heading: 'Welcome Back, Madonian!', imagePosition: 'left', content: [
                    { _key: 'c1', _type: 'block', style: 'normal', children: [{ _type: 'span', marks: [], text: 'We serve as a vital link between alumni and the school.' }] }
                ]
            }
        ]
    };

    const annoPage = {
        _type: 'page', title: 'Madonna @ 60', slug: { _type: 'slug', current: 'anniversary-plan' },
        pageBuilder: [
            { _key: 'h1', _type: 'heroSection', heading: 'Madonna @ 60', subheading: '60 Years of Holistic Education.' },
            {
                _key: 'h2', _type: 'textWithImageSection', heading: 'Strategic Objectives', imagePosition: 'left', content: [
                    { _key: 'c1', _type: 'block', style: 'normal', children: [{ _type: 'span', marks: [], text: 'We aim to reinvent the systems for the next generation.' }] }
                ]
            }
        ]
    };

    try {
        await client.create(historyPage);
        await client.create(hallOfFamePage);
        await client.create(mosaPage);
        await client.create(annoPage);
        console.log("✅ Pages pushed");
    } catch (e: any) {
        console.error("Failed pushing pages", e.message);
    }
}

migrate();
