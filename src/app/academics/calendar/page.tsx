import { Calendar as CalendarIcon, Clock } from "lucide-react";
import { client } from "@/sanity/lib/client";

export const revalidate = 60; // Revalidate every 60 seconds

export default async function CalendarPage() {
    const calendarQuery = `*[_type == "calendarEvent"] | order(date asc) {
        title,
        description,
        term
    }`;
    const sanEvents = await client.fetch(calendarQuery) || [];

    // Sort events (hack: rely on array indexing for now or map it manually)
    // Actually Sanity doesn't easily sort these without a strict Date, so we'll just display them as fetched.

    return (
        <main className="min-h-screen pt-32 pb-20 bg-slate-50">
            {/* Header */}
            <section className="bg-slate-900 py-24 mb-20 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 text-white/5 transform -rotate-12">
                    <CalendarIcon size={400} />
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tight leading-none uppercase">School <br /><span className="text-blue-400">Calendar</span></h1>
                    <p className="text-xl md:text-3xl text-slate-300 max-w-3xl font-medium leading-relaxed">
                        Stay up to date with the academic calendar for the First Term of the 2025/2026 Academic Year.
                    </p>
                </div>
            </section>

            <section className="container mx-auto px-6 max-w-4xl">
                <div className="bg-white rounded-[40px] shadow-xl shadow-slate-200/50 border border-slate-100 p-8 md:p-12">
                    <div className="flex items-center gap-4 mb-10 pb-6 border-b border-slate-100">
                        <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
                            <Clock size={32} />
                        </div>
                        <div>
                            <h2 className="text-3xl font-black text-slate-900 tracking-tight">1st Term Schedule</h2>
                            <p className="text-slate-500 font-medium">September 2025 - January 2026</p>
                        </div>
                    </div>

                    <div className="relative border-l-2 border-slate-200 ml-6 pb-4">
                        {sanEvents.map((event: any, i: number) => {
                            return (
                                <div key={i} className="mb-10 ml-8 relative group">
                                    <div className="absolute -left-[45px] top-1 w-6 h-6 rounded-full bg-slate-200 border-4 border-white group-hover:bg-blue-600 transition-colors duration-300 shadow-sm" />
                                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 group-hover:border-blue-200 group-hover:shadow-md transition-all">
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">{event.title}</h3>
                                        <p className="text-blue-600 font-black tracking-wide uppercase text-sm">{event.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </main>
    );
}

