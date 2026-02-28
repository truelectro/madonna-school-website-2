import { Clock } from "lucide-react";
import { sanityFetch } from "@/sanity/lib/client";
import HeroMouseOrb from "@/components/ui/HeroMouseOrb";
import { BlockRenderer } from "@/components/sections/BlockRenderer";

export const revalidate = 0;

export const metadata = {
    title: 'Academics | Madonna School Koforidua',
    description: 'Stay up to date with the academic calendar and other resources for Madonna School Koforidua.',
};

export default async function AcademicsPage() {
    const pageQuery = `*[_type == "academicsPage"][0]{
        headerTitle,
        headerSubtitle,
        calendarTitle,
        calendarSubtitle,
        calendarEvents[]{
            title,
            description,
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
            <section className="bg-[#051324] pt-24 pb-16 md:pt-32 md:pb-24 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />
                <HeroMouseOrb />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full text-sky-200 text-sm font-bold tracking-wider uppercase mb-8 border border-white/10">
                        Academic Year
                    </div>
                    {headerTitle.split(' ').length > 1 ? (
                        <h1 className="text-3xl md:text-8xl font-black mb-6 tracking-tight">
                            {headerTitle.split(' ').slice(0, -1).join(' ')} <br /><span className="text-sky-400">{headerTitle.split(' ').slice(-1)[0]}</span>
                        </h1>
                    ) : (
                        <h1 className="text-3xl md:text-8xl font-black mb-6 tracking-tight">
                            {headerTitle}
                        </h1>
                    )}
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-medium">
                        {headerSubtitle}
                    </p>
                </div>
            </section>

            <div className="bg-gray-50 py-10 md:py-20">
                <section className="container mx-auto px-6 max-w-4xl">
                    <div className="bg-white rounded-[40px] shadow-xl shadow-gray-200/50 border border-gray-100 p-8 md:p-12">
                        <div className="flex items-center gap-4 mb-10 pb-6 border-b border-gray-100">
                            <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center text-sky-600">
                                <Clock size={32} />
                            </div>
                            <div>
                                <h2 className="text-3xl font-black text-gray-900 tracking-tight">{calendarTitle}</h2>
                                <p className="text-gray-500 font-medium">{calendarSubtitle}</p>
                            </div>
                        </div>

                        <div className="relative border-l-2 border-sky-200 ml-6 pb-4">
                            {events.map((event: any, i: number) => (
                                <div key={i} className="mb-10 ml-8 relative group">
                                    <div className="absolute -left-[45px] top-1 w-6 h-6 rounded-full bg-gray-200 border-4 border-white group-hover:bg-sky-500 transition-colors duration-300 shadow-sm" />
                                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 group-hover:border-sky-200 group-hover:shadow-md transition-all">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                                        <p className="text-sky-600 font-black tracking-wide uppercase text-sm">{event.description}</p>
                                    </div>
                                </div>
                            ))}
                            {events.length === 0 && (
                                <div className="ml-8 py-12 text-center text-gray-400 font-medium">
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
