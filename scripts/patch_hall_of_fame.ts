import { createClient } from '@sanity/client';

const client = createClient({
    projectId: 'yi6lk936',
    dataset: 'production',
    apiVersion: '2023-01-01',
    token: process.env.SANITY_API_TOKEN,
    useCdn: false,
});

async function run() {
    const hofItems = [
        {
            title: "Presidential Awards 1997/98",
            category: "presidential_award",
            description: "Yvette Yeboah-Wadie received the Presidential Award for outstanding performance at the Basic Education Certificate Examination (B.E.C.E).",
            recipients: ["Yvette Yeboah-Wadie"],
            order: 1
        },
        {
            title: "Presidential Awards 2000/2001",
            category: "presidential_award",
            description: "Katarina Taylor received the Presidential Award for outstanding performance.",
            recipients: ["Katarina Taylor"],
            order: 2
        },
        {
            title: "Presidential Awards 2003/2004",
            category: "presidential_award",
            description: "Irene Frempong received the Presidential Award.",
            recipients: ["Irene Frempong"],
            order: 3
        },
        {
            title: "Presidential Awards 2008/2009",
            category: "presidential_award",
            description: "Judith Foli received the Presidential Award.",
            recipients: ["Judith Foli"],
            order: 4
        },
        {
            title: "Spelling Bee Regional Champions",
            category: "competition",
            description: "We have participated in five Spelling 'Bee' Competitions at the Regional Level and emerged second to none. We remain the Eastern Regional Champions! At the National Level, we have won two 3rd places and one 2nd place.",
            recipients: ["Madonna School Spelling Bee Team"],
            order: 5
        },
        {
            title: "Regional English and French Competitions",
            category: "competition",
            description: "The school has won several 1st and 2nd positions at the Regional level in English and French Competitions and a 3rd position at the National French Competition.",
            recipients: ["Madonna School Teams"],
            order: 6
        },
        {
            title: "Science and Mathematics Quizzes",
            category: "competition",
            description: "The school has won 1st Positions in most Science and Mathematics Quizzes (both Primary and JHS) at the Regional level (Eastern).",
            recipients: ["Math & Science Team"],
            order: 7
        }
    ];

    for (const item of hofItems) {
        try {
            await client.create({
                _type: 'hallOfFame',
                ...item
            });
            console.log(`✅ Created HOF: ${item.title}`);
        } catch (e: any) {
            console.error(e.message);
        }
    }
}

run();
