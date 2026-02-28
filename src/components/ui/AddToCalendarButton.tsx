'use client'

import { CalendarPlus } from 'lucide-react'

interface AddToCalendarButtonProps {
    title: string
    description?: string
    startDate: string
    endDate?: string
}

function formatDateForGoogle(dateStr: string): string {
    // Convert YYYY-MM-DD to YYYYMMDD (all-day event format)
    return dateStr.replace(/-/g, '')
}

function formatDateForICS(dateStr: string): string {
    // ICS all-day: YYYYMMDD
    return dateStr.replace(/-/g, '')
}

function nextDay(dateStr: string): string {
    // ICS and Google all-day events use exclusive end dates
    const d = new Date(dateStr)
    d.setDate(d.getDate() + 1)
    return d.toISOString().split('T')[0]
}

export function AddToCalendarButton({ title, description, startDate, endDate }: AddToCalendarButtonProps) {
    const actualEnd = endDate || startDate
    const googleStart = formatDateForGoogle(startDate)
    const googleEnd = formatDateForGoogle(nextDay(actualEnd))

    const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${googleStart}/${googleEnd}&details=${encodeURIComponent(description || '')}&location=${encodeURIComponent('Madonna School, Koforidua')}`

    const handleDownloadICS = () => {
        const icsStart = formatDateForICS(startDate)
        const icsEnd = formatDateForICS(nextDay(actualEnd))
        const now = new Date().toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'

        const ics = [
            'BEGIN:VCALENDAR',
            'VERSION:2.0',
            'PRODID:-//Madonna School//Calendar//EN',
            'BEGIN:VEVENT',
            `DTSTART;VALUE=DATE:${icsStart}`,
            `DTEND;VALUE=DATE:${icsEnd}`,
            `SUMMARY:${title}`,
            `DESCRIPTION:${description || ''}`,
            `LOCATION:Madonna School, Koforidua`,
            `DTSTAMP:${now}`,
            `UID:${icsStart}-${title.replace(/\s/g, '')}@madonnaschool.com`,
            'END:VEVENT',
            'END:VCALENDAR',
        ].join('\r\n')

        const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `${title.replace(/[^a-zA-Z0-9]/g, '_')}.ics`
        a.click()
        URL.revokeObjectURL(url)
    }

    return (
        <div className="relative group/cal inline-block">
            <button
                className="w-9 h-9 rounded-xl bg-sky-50 text-sky-500 hover:bg-sky-500 hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm hover:shadow-md"
                title="Add to Calendar"
                aria-label="Add to Calendar"
            >
                <CalendarPlus size={16} />
            </button>

            {/* Dropdown */}
            <div className="absolute right-0 top-full mt-2 opacity-0 invisible group-hover/cal:opacity-100 group-hover/cal:visible transition-all duration-200 z-20">
                <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 w-48 flex flex-col">
                    <a
                        href={googleUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 text-sm text-gray-700 hover:text-sky-600 hover:bg-sky-50 transition-colors flex items-center gap-2"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" className="flex-shrink-0">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        Google Calendar
                    </a>
                    <button
                        onClick={handleDownloadICS}
                        className="px-4 py-2.5 text-sm text-gray-700 hover:text-sky-600 hover:bg-sky-50 transition-colors flex items-center gap-2 text-left w-full"
                    >
                        <CalendarPlus size={16} className="flex-shrink-0" />
                        Apple / Outlook (.ics)
                    </button>
                </div>
            </div>
        </div>
    )
}
