import { Calendar, Target, Flag, Users, ArrowRight, Lightbulb, TrendingUp, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import HeroMouseOrb from "@/components/ui/HeroMouseOrb";
import { sanityFetch } from "@/sanity/lib/client";
import { PortableText } from "next-sanity";
import { BlockRenderer } from "@/components/sections/BlockRenderer";

export const revalidate = 0;

export const metadata = {
    title: 'Madonna @ 60 Plan | Madonna School Koforidua',
    description: '60 Years of Holistic Education: Rebooting and Reigniting our Systems.',
};

export default async function AnniversaryPlanPage() {
    const planQuery = `*[_type == "anniversaryPlanPage"][0]`;
    const planData = (await sanityFetch<any>(planQuery)) || {};

    const extraBlocks = planData?.pageBuilder || [];

    const activities = planData.activities?.length > 0 ? planData.activities : [
        { date: "Fri, 21st Nov 2025", title: "Students Float for Public Awareness" },
        { date: "Fri, 28th Nov 2025", title: "Old & Current Students Float" },
        { date: "Fri, 28th Nov 2025", title: "Old Students Home Coming & Socialization" },
        { date: "Sat, 29th Nov 2025", title: "Launching of the 60th Anniversary" },
        { date: "Sat, 29th Nov 2025", title: "Health & Chiropractic Services and Exhibition" },
        { date: "Sun, 30th Nov 2025", title: "Thanksgiving Service at St. George Cathedral" }
    ];

    const framework = planData.framework?.length > 0 ? planData.framework : [
        { obj: "Build Stakeholder Bond", desc: "Engage stakeholders via PTA meetings and alumni outreach", lead: "Mr. Henry Larbi" },
        { obj: "Alumni Mentorship", desc: "Invite Old Students for professional mentorship sessions", lead: "Anniversary Committee" },
        { obj: "New Language Programs", desc: "Introduce German & Spanish Languages to curriculum", lead: "Anniversary Committee" },
        { obj: "Capacity Building", desc: "Organize training for staff and students efficiency", lead: "Sr. Perpetual" },
        { obj: "JHS Legacy Project", desc: "Build Anniversary Legacy Project (2-Stream JHS Complex) Sponsored by Nana Owiredu Wadie I", lead: "Nana Owiredu Wadie I" },
        { obj: "Internet & AI Centre", desc: "Establish connected campus with AI & Robotics Centre", lead: "PTA & Sr. Perpetual" },
    ];
    const keySpeakers = planData.keySpeakers?.length > 0 ? planData.keySpeakers : [
        { name: "Nana Owiredu Wadie", role: "Chairman" },
        { name: "Daasebre Nana Kwaku Boateng III", role: "Guest of Honour" },
        { name: "Most Rev. Joseph Afrifah-Agyekum", role: "Special Guest of Honour" }
    ];

    const expectedOutcomes = planData.expectedOutcomes?.length > 0 ? planData.expectedOutcomes : [
        "Strong stakeholder partnerships and alumni network.",
        "Completion of the 2-Stream JHS Block.",
        "Operational AI Learning & Robotics Centre and Language Labs.",
        "Enhanced reputation as a model international school."
    ];

    return (
        <main className="min-h-screen pb-20 bg-gray-50">
            {/* Header */}
            <section className="bg-[#071322] pt-40 pb-32 mb-16 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-400/5 rounded-full blur-[140px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
                <HeroMouseOrb />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-400/10 backdrop-blur-md rounded-full text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-8 border border-amber-400/20">
                        Jubilee Celebration
                    </div>
                    <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tight text-white">{planData.headerTitle || "Madonna @ 60"}</h1>
                    <p className="text-xl md:text-2xl text-slate-200 max-w-4xl mx-auto font-medium mb-4 leading-relaxed">
                        {planData.headerSubtitle || <>"60 Years of Holistic Education: Rebooting our Systems"</>}
                    </p>
                    <p className="text-sm text-[#D4AF37] font-bold tracking-widest uppercase">Sacrifice • Success • Service</p>
                </div>
            </section>

            <section className="container mx-auto px-6 max-w-6xl">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Schedule Column */}
                    <div className="lg:w-1/3 space-y-6">
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200/80 sticky top-32">
                            <h2 className="text-lg font-bold text-slate-900 mb-6 border-b border-slate-100 pb-3 uppercase tracking-wider flex items-center gap-2.5">
                                <Calendar className="text-[#B8860B] w-5 h-5" /> Event Schedule
                            </h2>
                            <div className="space-y-5">
                                {activities.map((act: any, i: number) => (
                                    <div key={i} className="flex flex-col gap-0.5 group border-b border-slate-100/80 pb-3 last:border-0 last:pb-0">
                                        <span className="text-xs font-bold text-[#B8860B] tracking-wider uppercase">{act.date}</span>
                                        <span className="text-slate-800 font-semibold text-sm group-hover:text-slate-900 transition-colors leading-snug">{act.title}</span>
                                    </div>
                                ))}
                            </div>

                            <h2 className="text-lg font-bold text-slate-900 mt-10 mb-4 border-b border-slate-100 pb-3 uppercase tracking-wider">Key Speakers</h2>
                            <ul className="space-y-3">
                                {keySpeakers.map((spk: any, i: number) => (
                                    <li key={i} className="font-bold text-slate-800 text-sm">
                                        {spk.name} <span className="block text-xs font-normal text-slate-500 mt-0.5">{spk.role}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Implementation Column */}
                    <div className="lg:w-2/3">
                        <h2 className="text-3xl font-extrabold text-slate-900 mb-6 flex items-center gap-3 uppercase tracking-tight">
                            <Lightbulb className="w-8 h-8 text-[#B8860B]" /> Strategic Framework
                        </h2>

                        <p className="text-base md:text-lg text-slate-600 font-normal mb-10 leading-relaxed">
                            {planData.frameworkIntro || "Our implementation period spans from August 2025 to November 2026, aimed at strengthening stakeholder engagement, improving academic standards, upgrading physical infrastructure, and building sustainable accountability systems."}
                        </p>

                        <div className="grid md:grid-cols-2 gap-5">
                            {framework.map((item: any, i: number) => (
                                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/80 hover:shadow-md transition-all duration-300">
                                    <h3 className="text-base font-bold text-slate-900 mb-2">{item.obj}</h3>
                                    <p className="text-slate-600 font-normal text-sm mb-4 leading-relaxed">{item.desc}</p>
                                    <div className="mt-auto flex items-center gap-2 pt-3 border-t border-slate-100 text-xs font-semibold text-slate-400">
                                        <Users className="w-3.5 h-3.5" /> Lead: {item.lead}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 bg-[#071322] text-white p-8 md:p-10 rounded-3xl shadow-xl relative overflow-hidden border border-slate-800">
                            <TrendingUp className="absolute -right-8 -bottom-8 w-56 h-56 text-white/5" />
                            <h3 className="text-2xl font-black mb-6 relative z-10">Expected Outcomes by 2026</h3>
                            <ul className="space-y-3 font-normal text-slate-300 relative z-10 text-sm md:text-base">
                                {expectedOutcomes.map((oc: string, i: number) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="text-[#D4AF37] mt-1 flex-shrink-0 w-5 h-5" /> {oc}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </section>

            {extraBlocks.length > 0 && <BlockRenderer blocks={extraBlocks} />}
        </main>
    );
}
