/**
 * Seed script — populates all Sanity singleton page documents with the
 * existing hardcoded content so the client can immediately start editing.
 *
 * Usage:  node scripts/seed-singletons.js
 */

const fs = require('fs')
const path = require('path')

// Manually load .env.local
const envPath = path.join(__dirname, '..', '.env.local')
try {
    fs.readFileSync(envPath, 'utf8').split('\n').forEach((line) => {
        const [key, ...val] = line.split('=')
        if (key && val.length && process.env[key.trim()] === undefined) {
            process.env[key.trim()] = val.join('=').trim()
        }
    })
} catch (e) {
    // Ignore if file doesn't exist
}

// Helper: create a portable text block from a plain string
function textBlock(text) {
    return [
        {
            _type: 'block',
            _key: Math.random().toString(36).slice(2, 10),
            style: 'normal',
            markDefs: [],
            children: [{ _type: 'span', _key: 'a', marks: [], text }],
        },
    ]
}

async function seed() {
    const mutations = []
    const tx = {
        createIfNotExists: (doc) => mutations.push({ createIfNotExists: doc }),
        createOrReplace: (doc) => mutations.push({ createOrReplace: doc }),
        commit: () => {
            require('fs').writeFileSync('mutations.json', JSON.stringify({ mutations }, null, 2))
        }
    }

    // ── About Page ─────────────────────────────────────────
    tx.createOrReplace({
        _id: 'aboutPage',
        _type: 'aboutPage',
        headerTitle: 'Our Story',
        headerSubtitle: 'Discover the legacy, values, and vision that drive Madonna School towards academic and moral excellence.',
        missionTitle: 'Our Mission',
        missionText: 'To provide a holistic and rigorous education that empowers students with critical thinking, moral integrity, and the leadership skills necessary to excel in a rapidly changing global society.',
        visionTitle: 'Our Vision',
        visionText: 'To be the leading center of educational excellence in the region, recognized for producing graduates who are not only academically brilliant but also ethically grounded and socially responsible.',
        historyTitle: 'Founded in 1964. Built for Infinity.',
        historyContent: textBlock(
            'From its humble beginnings in an Information Centre in Koforidua, Madonna School has grown into a premier educational institution. Founded by the Holy Spirit Missionary Sisters in collaboration with Rev. Fr. Otto Walters SVD, the school has been a beacon of academic excellence and moral instruction for nearly six decades.'
        ),
        stats: [
            { _key: 's1', label: 'Founded', val: '1964' },
            { _key: 's2', label: 'Excellence', val: '100%' },
            { _key: 's3', label: 'Faculty', val: '50+' },
            { _key: 's4', label: 'Awards', val: '200+' },
        ],
        coreValuesTitle: 'Our Core Values',
        coreValuesSubtitle: 'The pillars that sustain our institution.',
        coreValues: [
            { _key: 'v1', title: 'Integrity', desc: 'Acting with honesty and strong moral principles at all times.' },
            { _key: 'v2', title: 'Service', desc: 'Dedicating ourselves to the growth and welfare of our community.' },
            { _key: 'v3', title: 'Innovation', desc: 'Embracing new ideas and methods to enhance learning.' },
            { _key: 'v4', title: 'Discipline', desc: 'Fostering the self-control necessary for personal and academic mastery.' },
        ],
    })

    // ── History Page ───────────────────────────────────────
    tx.createOrReplace({
        _id: 'historyPage',
        _type: 'historyPage',
        headerTitle: 'Our History',
        headerSubtitle: 'A legacy of faith, education, and community service starting from 1964.',
        timelineEvents: [
            { _key: 't1', year: '1964', title: 'The Vision Begins', description: 'The Holy Spirit Sisters left St. Agnes in Koforidua when the government took over. The next year, members of New Juaben asked them to start an international school. Rev. Fr. Otto Walters, SVD, collaborated with the Sisters to start Madonna School.' },
            { _key: 't2', year: '1965', title: 'First Classes', description: "A Kindergarten (KG 1) began in an Information Centre in town and later moved to the Sisters' Living Quarters. Sister Gerard Smith headed the school alongside Sister Anna Unterweger. There were ten children in Kindergarten and 14 in class 1." },
            { _key: 't3', year: '1967', title: 'A New Building', description: 'A new school building was blessed by Bishop Oliver Bowers. The first year was noisy with bulldozers, concrete mixers, carpenters, and masons working on the building.' },
            { _key: 't4', year: '1972', title: 'Full Administration', description: 'Sister Gerard became a full-time Headmistress, leading the school as its first batch of students took the Common Entrance Examination.' },
            { _key: 't5', year: '1977', title: 'Second Headmistress', description: 'Sister Maria Prokesch became the second Headmistress, bringing a strong focus to prayer groups and spiritual growth.' },
            { _key: 't6', year: '1983', title: 'New Leadership', description: 'Sister Yvonne Pereira headed the school until 1986. During her tenure, she left us the beautiful grotto and the statue of our Lady of Fatima.' },
            { _key: 't7', year: '1986', title: 'Academic Expansion', description: 'Sister Lilia Tiu took over administration. Under her leadership, the Science Block and Classrooms were completed. In 1989, the first batch of Junior Secondary students was enrolled and the Home Science Block was finished.' },
            { _key: 't8', year: '1995', title: 'Infrastructural Growth', description: 'Sister Mary Laureen Lahnan became Headmistress. The Junior High School building, the Library, and the Assembly Hall proudly became part of Madonna School.' },
            { _key: 't9', year: '2001', title: 'The Digital Age', description: 'Sister Lilia returned for a second tenure. The Computer Laboratory was built, giving children the opportunity to learn modern ICT skills.' },
            { _key: 't10', year: '2013 - 2016', title: 'Modern Innovations', description: 'Sr. Mary Lamisi Adomolga became the first Ghanaian Sister to head Madonna School. She spearheaded the acquisition of new school buses, the construction of walkways, the sick bay, the MOSA Computer Lab reroofing, and the school walling project.' },
        ],
        debtOfGratitudeTitle: 'A Debt of Gratitude',
        debtOfGratitudeContent: textBlock(
            'The school owes a big debt of gratitude to all the many benefactors who helped with each project. We also greatly appreciate the late Dominic Andoh, Archbishop Charles Gabriel Palmer-Buckle, Bishop Joseph Afriah-Agyekum, then Msgr. Francis Twum-Barimah, Fr. Paul Abankwah, Fr. Andrew Dunyo who were all local Managers. May God bless them generously!'
        ),
    })

    // ── Anniversary Plan Page ─────────────────────────────
    tx.createOrReplace({
        _id: 'anniversaryPlanPage',
        _type: 'anniversaryPlanPage',
        headerTitle: 'Madonna @ 60',
        headerSubtitle: '60 Years of Holistic Education: Rebooting our Systems',
        activities: [
            { _key: 'a1', date: 'Fri, 21st Nov 2025', title: 'Students Float for Public Awareness' },
            { _key: 'a2', date: 'Fri, 28th Nov 2025', title: 'Old & Current Students Float' },
            { _key: 'a3', date: 'Fri, 28th Nov 2025', title: 'Old Students Home Coming & Socialization' },
            { _key: 'a4', date: 'Sat, 29th Nov 2025', title: 'Launching of the 60th Anniversary' },
            { _key: 'a5', date: 'Sat, 29th Nov 2025', title: 'Health & Chiropractic Services and Exhibition' },
            { _key: 'a6', date: 'Sun, 30th Nov 2025', title: 'Thanksgiving Service at St. George Cathedral' },
        ],
        frameworkIntro: 'A comprehensive set of strategic objectives designed to guide the school through its next decade of growth and innovation.',
        framework: [
            { _key: 'f1', obj: 'Build Stakeholder Bond', desc: 'Engage stakeholders via PTA meetings and alumni outreach', lead: 'Mr. Henry Larbi' },
            { _key: 'f2', obj: 'Alumni Mentorship', desc: 'Invite Old Students for professional mentorship sessions', lead: 'Anniversary Committee' },
            { _key: 'f3', obj: 'New Language Programs', desc: 'Introduce German & Spanish Languages to curriculum', lead: 'Anniversary Committee' },
            { _key: 'f4', obj: 'Capacity Building', desc: 'Organize training for staff and students efficiency', lead: 'Sr. Perpetual' },
            { _key: 'f5', obj: 'JHS Legacy Project', desc: 'Build Anniversary Legacy Project (2-Stream JHS Complex) Sponsored by Nana Owiredu Wadie I', lead: 'Nana Owiredu Wadie I' },
            { _key: 'f6', obj: 'Internet & AI Centre', desc: 'Establish connected campus with AI & Robotics Centre', lead: 'PTA & Sr. Perpetual' },
        ],
    })

    // ── Contact Page ──────────────────────────────────────
    tx.createOrReplace({
        _id: 'contactPage',
        _type: 'contactPage',
        headerTitle: 'Reach Out',
        headerSubtitle: "Questions about admission, curriculum, or visiting? We're here to help you every step of the way.",
        phone: '+233(0)342022770',
        workingHours: 'Mon - Fri, 8:00 AM - 4:00 PM',
        email: 'madonnaschoolgh@gmail.com',
        responseTime: 'We typically reply within 24 hours',
        address: 'Koforidua, Eastern Region, Ghana',
    })

    // ── Hall of Fame Page ─────────────────────────────────
    tx.createOrReplace({
        _id: 'hallOfFamePage',
        _type: 'hallOfFamePage',
        headerTitle: 'Hall of Fame',
        headerSubtitle: 'Celebrating the outstanding achievements, brilliance, and excellence of Madonna School students on national and regional stages.',
        presidentialAwardsText: 'The school has over the years produced students who have received Presidential Awards for outstanding performance at the Basic Education Certificate Examination (B.E.C.E).',
        presidentialAwards: [
            { _key: 'p1', name: 'Yvette Yeboah-Wadie', year: '1997/98' },
            { _key: 'p2', name: 'Katarina Taylor', year: '2000/2001' },
            { _key: 'p3', name: 'Irene Frempong', year: '2003/2004' },
            { _key: 'p4', name: 'Judith Foli', year: '2008/2009' },
        ],
        spellingBeeText: 'We have participated in five (5) Spelling "Bee" Competitions at the Regional Level and have emerged second to none. Until we are dethroned, we remain the Eastern Regional Champions! At the National Level, we have won two 3rd places and one 2nd place, which we are immensely proud of.',
        scienceMathText: 'Madonna School has participated in several Regional and National Quizzes, Debates, and Competitions. The school has won 1st Positions in most Science and Mathematics Quizzes (both Primary and JHS) at the Regional level.',
        beceResultsText: 'B.E.C.E. results have always been enviable, scoring nine (1)s with the highest raw scores.',
        englishFrenchText: 'The school has won several 1st and 2nd positions at the Regional level in English and French Competitions and a 3rd position at the only National French Competition she attended.',
    })

    // ── MOSA Page ─────────────────────────────────────────
    tx.createOrReplace({
        _id: 'mosaPage',
        _type: 'mosaPage',
        headerTitle: 'MOSA',
        headerSubtitle: 'Madonna Old Students Association',
        welcomeTitle: 'Welcome Back, Madonians',
        welcomeText: 'MOSA serves as a vital bridge connecting generations of Madonna School alumni worldwide. Whether you graduated recently or decades ago, our association is dedicated to maintaining lifelong friendships, professional networking, and giving back to the institution that shaped us.',
    })

    // ── Home Page ──────────────────────────────────────────
    tx.createOrReplace({
        _id: 'homePage',
        _type: 'homePage',
        heroTag: 'Sacrifice • Success • Service',
        heroTitle: 'Where <span class="text-sky-400">Leaders</span> <br />Are Built.',
        heroSubtitle: 'Providing a holistic education that empowers students with critical thinking, moral integrity, and leadership skills. A legacy of excellence since 1964.',
        heroStats: [
            { _key: 'hs1', value: '1964', label: 'Founding Year' },
            { _key: 'hs2', value: 'Top 1%', label: 'B.E.C.E Results' },
            { _key: 'hs3', value: '5-Time', label: 'Regional Champions' },
        ],
        pageBuilder: [
            {
                _type: 'homeWelcomeSection',
                _key: 'b1',
                tag: 'Welcome Message',
                title: 'Celebrating 60 Years of Excellence.',
                text: [
                    {
                        _type: 'block',
                        _key: 'w1',
                        style: 'normal',
                        children: [{ _type: 'span', text: 'We joyfully welcome you to Madonna School, Koforidua, as we celebrate 60 years of quality and holistic Basic Education. Founded in 1966 by the Missionary Sisters, Servants of the Holy Spirit, our school has grown into a community of learning, faith, and service.' }]
                    },
                    {
                        _type: 'block',
                        _key: 'w2',
                        style: 'normal',
                        children: [{ _type: 'span', text: 'For six decades, Madonna School has remained true to its motto — "Sacrifice, Success, and Service." Guided by these enduring values, we have dedicated ourselves to nurturing disciplined, confident, and compassionate learners who excel both in academics and in character.' }]
                    },
                    {
                        _type: 'block',
                        _key: 'w3',
                        style: 'normal',
                        children: [{ _type: 'span', text: 'As we mark this Diamond Jubilee, we honor our founders, teachers, students, parents, and alumni who have contributed to the rich legacy we cherish today. Their collective sacrifice and commitment continue to inspire us to pursue excellence and to serve our society with integrity and purpose.' }]
                    }
                ]
            },
            {
                _type: 'homePhilosophySection',
                _key: 'b2',
                title: 'A Legacy of Excellence',
                subtitle: 'For over six decades, Madonna School has been at the forefront of educational innovation, transforming potential into achievement.',
                cards: [
                    { _key: 'pc1', title: 'High Academics', desc: "A curriculum that challenges and inspires, preparing students for the world's top universities." },
                    { _key: 'pc2', title: 'Moral Integrity', desc: "Instilling core values and discipline that form the bedrock of successful adult life." },
                    { _key: 'pc3', title: 'Global Leadership', desc: "Developing critical thinking and public speaking skills to lead in the 21st century." },
                ]
            },
            {
                _type: 'homeDifferenceSection',
                _key: 'b3',
                tag: 'Our Distinction',
                title: 'The Madonna Difference.',
                text: textBlock('We go beyond the classroom. Our holistic approach ensures that every student is nurtured emotionally, socially, and intellectually.'),
                bullets: [
                    'Unbeatable B.E.C.E Results',
                    'Presidential Award-Winning Students',
                    '5-Time Regional Spelling Bee Champions',
                    '1st in Regional Science & Math Quizzes',
                    'Accepts children from age 4 (KG 1)',
                    'Holistic Education (KG to JHS)',
                ]
            }
        ]
    })

    console.log('⏳ Committing transaction...')
    await tx.commit()
    console.log('✅ All singleton documents seeded successfully!')
    console.log('')
    console.log('You can now go to your Sanity Studio and see all the')
    console.log('pre-existing content ready to edit on each page tab.')
}

seed().catch((err) => {
    console.error('❌ Seed failed:', err.message)
    process.exit(1)
})
