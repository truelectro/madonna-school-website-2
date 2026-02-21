import Studio from '@/components/admin/Studio'

// Required for static export of dynamic routes
export function generateStaticParams() {
    return [
        { index: [] },
        { index: ['structure'] },
        { index: ['structure', 'page'] },
        { index: ['structure', 'news'] },
        { index: ['structure', 'staff'] },
        { index: ['structure', 'calendarEvent'] },
        { index: ['structure', 'hallOfFame'] },
        { index: ['structure', 'anniversaryPlan'] },
        { index: ['structure', 'error'] },
    ]
}

// Enable static export for this segment
export const dynamic = 'force-static'

export default function AdminPage() {
    return <Studio />
}
