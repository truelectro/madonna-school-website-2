import { createClient } from '@sanity/client';

export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '', // Replace with actual manually if env fails here
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: '2023-01-01',
    token: process.env.SANITY_API_TOKEN, // Need admin token
    useCdn: false,
});
