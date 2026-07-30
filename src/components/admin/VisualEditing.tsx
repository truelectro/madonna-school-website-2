'use client'

import { VisualEditing as SanityVisualEditing } from 'next-sanity/visual-editing'
import { ExternalLink, X } from 'lucide-react'

export default function VisualEditing() {
    return (
        <>
            <SanityVisualEditing />
            <div className="fixed bottom-4 right-4 z-[99999] flex items-center gap-3 rounded-full bg-slate-900/95 px-4 py-2.5 text-xs text-white shadow-2xl backdrop-blur-md border border-slate-700/80 transition-all hover:bg-slate-900">
                <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="font-medium tracking-wide text-slate-200">
                    Live Sanity Preview Active
                </span>
                <a
                    href="/admin"
                    target="_top"
                    className="flex items-center gap-1 font-semibold text-emerald-400 hover:text-emerald-300 transition-colors ml-1"
                >
                    Studio <ExternalLink className="w-3 h-3" />
                </a>
                <a
                    href="/api/draft-mode/disable"
                    className="ml-1 rounded-full p-1 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
                    title="Exit Draft Preview"
                >
                    <X className="w-3.5 h-3.5" />
                </a>
            </div>
        </>
    )
}
