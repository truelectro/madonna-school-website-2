import { Calendar, Target, Flag, Users, ArrowRight, Lightbulb, TrendingUp, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
    title: 'Madonna @ 60 Plan | Madonna School Koforidua',
    description: '60 Years of Holistic Education: Rebooting and Reigniting our Systems.',
};

export default function AnniversaryPlanPage() {
    const activities = [
        { date: "Fri, 21st Nov 2025", title: "Students Float for Public Awareness" },
        { date: "Fri, 28th Nov 2025", title: "Old & Current Students Float" },
        { date: "Fri, 28th Nov 2025", title: "Old Students Home Coming & Socialization" },
        { date: "Sat, 29th Nov 2025", title: "Launching of the 60th Anniversary" },
        { date: "Sat, 29th Nov 2025", title: "Health & Chiropractic Services and Exhibition" },
        { date: "Sun, 30th Nov 2025", title: "Thanksgiving Service at St. George Cathedral" }
    ];

    const framework = [
        { obj: "Build Stakeholder Bond", desc: "Engage stakeholders via PTA meetings and alumni outreach", lead: "Mr. Henry Larbi" },
        { obj: "Alumni Mentorship", desc: "Invite Old Students for professional mentorship sessions", lead: "Anniversary Committee" },
        { obj: "New Language Programs", desc: "Introduce German & Spanish Languages to curriculum", lead: "Anniversary Committee" },
        { obj: "Capacity Building", desc: "Organize training for staff and students efficiency", lead: "Sr. Perpetual" },
        { obj: "JHS Legacy Project", desc: "Build Anniversary Legacy Project (2-Stream JHS Complex) Sponsored by Nana Owiredu Wadie I", lead: "Nana Owiredu Wadie I" },
        { obj: "Internet & AI Centre", desc: "Establish connected campus with AI & Robotics Centre", lead: "PTA & Sr. Perpetual" },
    ];

    return (
        <main className="min-h-screen pt-32 pb-20 bg-gray-50">
            {/* Header */}
            <section className="bg-red-600 py-24 mb-20 text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]" />
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="inline-block p-4 bg-white/10 rounded-full mb-6 backdrop-blur-sm border border-white/20">
                        <Target className="w-12 h-12" />
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tight uppercase">Madonna @ 60</h1>
                    <p className="text-2xl md:text-3xl text-red-100 max-w-4xl mx-auto font-medium mb-4">
                        "60 Years of Holistic Education: Rebooting our Systems"
                    </p>
                    <p className="text-lg text-red-100 font-bold tracking-widest uppercase">Sacrifice • Success • Service</p>
                </div>
            </section>

            <section className="container mx-auto px-6 max-w-6xl">
                <div className="flex flex-col lg:flex-row gap-16">

                    {/* Schedule Column */}
                    <div className="lg:w-1/3 space-y-8">
                        <div className="bg-white p-8 rounded-[40px] shadow-sm border border-gray-100 sticky top-32">
                            <h2 className="text-2xl font-black text-gray-900 mb-8 border-b border-gray-100 pb-4 uppercase flex items-center gap-3">
                                <Calendar className="text-red-600" /> Event Schedule
                            </h2>
                            <div className="space-y-6">
                                {activities.map((act, i) => (
                                    <div key={i} className="flex flex-col gap-1 group">
                                        <span className="text-sm font-bold text-red-600 tracking-wider uppercase">{act.date}</span>
                                        <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors">{act.title}</span>
                                    </div>
                                ))}
                            </div>

                            <h2 className="text-2xl font-black text-gray-900 mt-12 mb-6 border-b border-gray-100 pb-4 uppercase">Key Speakers</h2>
                            <ul className="space-y-4">
                                <li className="font-bold text-gray-800">Nana Owiredu Wadie <span className="block text-sm font-medium text-gray-500">Chairman</span></li>
                                <li className="font-bold text-gray-800">Daasebre Nana Kwaku Boateng III <span className="block text-sm font-medium text-gray-500">Guest of Honour</span></li>
                                <li className="font-bold text-gray-800">Most Rev. Joseph Afrifah-Agyekum <span className="block text-sm font-medium text-gray-500">Special Guest of Honour</span></li>
                            </ul>
                        </div>
                    </div>

                    {/* Implementation Column */}
                    <div className="lg:w-2/3">
                        <h2 className="text-4xl font-black text-gray-900 mb-10 flex items-center gap-4 uppercase tracking-tighter">
                            <Lightbulb className="w-10 h-10 text-yellow-500" /> Strategic Framework
                        </h2>

                        <p className="text-xl text-gray-600 font-medium mb-12 leading-relaxed">
                            Our implementation period spans from August 2025 to November 2026, aimed at strengthening stakeholder engagement, improving academic standards, upgrading physical infrastructure, and building sustainable accountability systems.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            {framework.map((item, i) => (
                                <div key={i} className="bg-white p-8 rounded-[30px] shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.obj}</h3>
                                    <p className="text-gray-600 font-medium mb-6 leading-relaxed">{item.desc}</p>
                                    <div className="mt-auto flex items-center gap-2 pt-4 border-t border-gray-100 text-sm font-bold text-gray-400">
                                        <Users className="w-4 h-4" /> Lead: {item.lead}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 bg-gray-900 text-white p-10 rounded-[40px] shadow-2xl relative overflow-hidden">
                            <TrendingUp className="absolute -right-10 -bottom-10 w-64 h-64 text-white/5" />
                            <h3 className="text-3xl font-black mb-6 relative z-10">Expected Outcomes by 2026</h3>
                            <ul className="space-y-4 font-medium text-gray-300 relative z-10 text-lg">
                                <li className="flex items-start gap-4"><CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" /> Strong stakeholder partnerships and alumni network.</li>
                                <li className="flex items-start gap-4"><CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" /> Completion of the 2-Stream JHS Block.</li>
                                <li className="flex items-start gap-4"><CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" /> Operational AI Learning & Robotics Centre and Language Labs.</li>
                                <li className="flex items-start gap-4"><CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" /> Enhanced reputation as a model international school.</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}
