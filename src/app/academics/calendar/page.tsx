import { Calendar as CalendarIcon, Clock, Sparkles } from "lucide-react";
import { client, sanityFetch } from "@/sanity/lib/client";
import HeroMouseOrb from "@/components/ui/HeroMouseOrb";

export const revalidate = 0; // Disable static caching so changes show up instantly

export const metadata = {
    title: 'School Calendar | Madonna School Koforidua',
    description: 'Stay up to date with the academic calendar for Madonna School Koforidua.',
};

export default async function CalendarPage() {
    const calendarQuery = `*[_type == "calendarEvent"] | order(date asc) {
        title,
        description,
        term
    }`;
    const sanEvents = await sanityFetch<any[]>(calendarQuery) || [];

    return (
        <main className="min-h-screen">
            {/* Page Header */}
            <section className="bg-[#051324] pt-24 pb-16 md:pt-32 md:pb-24 text-white relative overflow-hidden">
                {/* Animated Gradient Orbs */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />
                <HeroMouseOrb />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full text-sky-200 text-sm font-bold tracking-wider uppercase mb-8 border border-white/10">
                        <Sparkles size={16} className="text-sky-400" /> Academic Year
                    </div>
                    <h1 className="text-3xl md:text-8xl font-black mb-6 tracking-tight">School <br /><span className="text-sky-400">Calendar</span></h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-medium">
                        Stay up to date with the academic calendar for the First Term of the 2025/2026 Academic Year.
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
                                <h2 className="text-3xl font-black text-gray-900 tracking-tight">1st Term Schedule</h2>
                                <p className="text-gray-500 font-medium">September 2025 - January 2026</p>
                            </div>
                        </div>

                        <div className="relative border-l-2 border-sky-200 ml-6 pb-4">
                            {sanEvents.map((event: any, i: number) => {
                                return (
                                    <div key={i} className="mb-10 ml-8 relative group">
                                        <div className="absolute -left-[45px] top-1 w-6 h-6 rounded-full bg-gray-200 border-4 border-white group-hover:bg-sky-500 transition-colors duration-300 shadow-sm" />
                                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 group-hover:border-sky-200 group-hover:shadow-md transition-all">
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                                            <p className="text-sky-600 font-black tracking-wide uppercase text-sm">{event.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                            {sanEvents.length === 0 && (
                                <div className="ml-8 py-12 text-center text-gray-400 font-medium">
                                    No calendar events have been added yet. Check back soon!
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
