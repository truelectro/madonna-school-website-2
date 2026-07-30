import { Clock } from "lucide-react";
import { sanityFetch } from "@/sanity/lib/client";
import HeroMouseOrb from "@/components/ui/HeroMouseOrb";
import { BlockRenderer } from "@/components/sections/BlockRenderer";
import { AddToCalendarButton } from "@/components/ui/AddToCalendarButton";

export const revalidate = 0;

export const metadata = {
    title: 'Academics | Madonna School Koforidua',
    description: 'Stay up to date with the academic calendar and other resources for Madonna School Koforidua.',
};

function formatDate(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    });
}

export default async function AcademicsPage() {
    const pageQuery = `*[_type == "academicsPage"][0]{
        headerTitle,
        headerSubtitle,
        calendarTitle,
        calendarSubtitle,
        calendarEvents[] | order(startDate asc) {
            title,
            description,
            startDate,
            endDate,
            term
        },
        pageBuilder
    }`;
    const data = (await sanityFetch<any>(pageQuery)) || {};

    const headerTitle = data.headerTitle || "Academics";
    const headerSubtitle = data.headerSubtitle || "Stay up to date with the academic calendar and other resources.";
    const calendarTitle = data.calendarTitle || "1st Term Schedule";
    const calendarSubtitle = data.calendarSubtitle || "September 2025 - January 2026";
    const events = data.calendarEvents || [];
    const extraBlocks = data.pageBuilder || [];

    return (
        <main className="min-h-screen">
            {/* Page Header */}
            <section className="bg-[#071322] pt-32 pb-24 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-400/5 rounded-full blur-[140px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
                <HeroMouseOrb />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-400/10 backdrop-blur-md rounded-full text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-8 border border-amber-400/20">
                        Academic Year
                    </div>
                    {headerTitle.split(' ').length > 1 ? (
                        <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tight text-white">
                            {headerTitle.split(' ').slice(0, -1).join(' ')} <br /><span className="text-[#D4AF37]">{headerTitle.split(' ').slice(-1)[0]}</span>
                        </h1>
                    ) : (
                        <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tight text-white">
                            {headerTitle}
                        </h1>
                    )}
                    <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
                        {headerSubtitle}
                    </p>
                </div>
            </section>

            <div className="bg-[#FAF9F6] py-16 md:py-24">
                <section className="container mx-auto px-6 max-w-4xl">
                    <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-200/80 p-8 md:p-12">
                        <div className="flex items-center gap-4 mb-10 pb-6 border-b border-slate-100">
                            <div className="w-14 h-14 bg-amber-400/15 text-[#B8860B] rounded-2xl flex items-center justify-center border border-amber-400/20">
                                <Clock size={28} />
                            </div>
                            <div>
                                <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">{calendarTitle}</h2>
                                <p className="text-slate-500 font-medium text-sm">{calendarSubtitle}</p>
                            </div>
                        </div>

                        <div className="relative border-l border-slate-200 ml-4 pb-4">
                            {events.map((event: any, i: number) => (
                                <div key={i} className="mb-8 ml-6 relative group">
                                    <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-amber-400 border-2 border-white group-hover:scale-125 transition-transform duration-300 shadow-sm" />
                                    <div className="bg-slate-50/80 p-6 rounded-2xl border border-slate-200/80 group-hover:border-amber-400/50 group-hover:bg-amber-50/20 group-hover:shadow-md transition-all">
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="flex-1">
                                                <h3 className="text-lg font-bold text-slate-900 mb-1">{event.title}</h3>
                                                {event.startDate && (
                                                    <p className="text-[#B8860B] font-bold tracking-wide uppercase text-xs mb-2">
                                                        {formatDate(event.startDate)}
                                                        {event.endDate && event.endDate !== event.startDate && (
                                                            <> — {formatDate(event.endDate)}</>
                                                        )}
                                                    </p>
                                                )}
                                                {event.description && (
                                                    <p className="text-slate-600 text-sm font-normal">{event.description}</p>
                                                )}
                                            </div>
                                            {event.startDate && (
                                                <AddToCalendarButton
                                                    title={event.title}
                                                    description={event.description}
                                                    startDate={event.startDate}
                                                    endDate={event.endDate}
                                                />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {events.length === 0 && (
                                <div className="ml-6 py-12 text-center text-slate-400 font-medium text-sm">
                                    No calendar events have been added yet. Check back soon!
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </div>

            {extraBlocks.length > 0 && <BlockRenderer blocks={extraBlocks} />}
        </main>
    );
}
