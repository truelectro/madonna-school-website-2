import { ShieldCheck, Target, Eye, History as HistoryIcon, Award } from "lucide-react";
import HeroMouseOrb from "@/components/ui/HeroMouseOrb";
import { sanityFetch } from "@/sanity/lib/client";
import { PortableText } from "next-sanity";
import { BlockRenderer } from "@/components/sections/BlockRenderer";

export const revalidate = 0;

export default async function AboutPage() {
    const aboutQuery = `*[_type == "aboutPage"][0]`;
    const aboutData = (await sanityFetch<any>(aboutQuery)) || {};

    const extraBlocks = aboutData?.pageBuilder || [];

    const stats = aboutData.stats?.length > 0 ? aboutData.stats : [
        { label: 'Founded', val: '1964' },
        { label: 'Excellence', val: '100%' },
        { label: 'Faculty', val: '50+' },
        { label: 'Awards', val: '200+' },
    ];

    const coreValues = aboutData.coreValues?.length > 0 ? aboutData.coreValues : [
        { title: 'Integrity', desc: 'Acting with honesty and strong moral principles at all times.' },
        { title: 'Service', desc: 'Dedicating ourselves to the growth and welfare of our community.' },
        { title: 'Innovation', desc: 'Embracing new ideas and methods to enhance learning.' },
        { title: 'Discipline', desc: 'Fostering the self-control necessary for personal and academic mastery.' },
    ];
    return (
        <main className="min-h-screen">
            {/* Page Header */}
            <section className="bg-[#071322] pt-32 pb-24 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-400/5 rounded-full blur-[140px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
                <HeroMouseOrb />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-400/10 backdrop-blur-md rounded-full text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-8 border border-amber-400/20">
                        About Our School
                    </div>
                    <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tight">{aboutData.headerTitle || <>Our <span className="text-[#D4AF37]">Story</span></>}</h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
                        {aboutData.headerSubtitle || "Discover the legacy, values, and vision that drive Madonna School towards academic and moral excellence."}
                    </p>
                </div>
            </section>

            <div className="bg-[#FAF9F6] pt-16 pb-20">
                {/* Mission & Vision */}
                <section className="container mx-auto px-6 mb-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-10 md:p-12 bg-[#09162A] rounded-3xl text-white relative overflow-hidden border border-slate-800 shadow-xl">
                            <div className="w-14 h-14 bg-amber-400/15 text-[#D4AF37] rounded-2xl flex items-center justify-center mb-8 border border-amber-400/20">
                                <Target size={28} />
                            </div>
                            <h2 className="text-2xl font-bold mb-4 uppercase tracking-wider text-amber-400">{aboutData.missionTitle || "Our Mission"}</h2>
                            <p className="text-lg text-slate-200 leading-relaxed font-normal">
                                {aboutData.missionText || "To provide a holistic and rigorous education that empowers students with critical thinking, moral integrity, and the leadership skills necessary to excel in a rapidly changing global society."}
                            </p>
                        </div>

                        <div className="p-10 md:p-12 bg-white rounded-3xl text-slate-900 relative overflow-hidden border border-slate-200/80 shadow-md">
                            <div className="w-14 h-14 bg-slate-100 text-slate-800 rounded-2xl flex items-center justify-center mb-8 border border-slate-200">
                                <Eye size={28} />
                            </div>
                            <h2 className="text-2xl font-bold mb-4 uppercase tracking-wider text-slate-900">{aboutData.visionTitle || "Our Vision"}</h2>
                            <p className="text-lg text-slate-600 leading-relaxed font-normal">
                                {aboutData.visionText || "To be the leading center of educational excellence in the region, recognized for producing graduates who are not only academically brilliant but also ethically grounded and socially responsible."}
                            </p>
                        </div>
                    </div>
                </section>

                {/* History Section */}
                <section className="container mx-auto px-6 mb-24">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <div className="w-14 h-14 bg-amber-400/10 rounded-2xl flex items-center justify-center text-[#B8860B] mb-6 border border-amber-400/20">
                                <HistoryIcon size={28} />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">{aboutData.historyTitle || "Founded in 1964. Built for Excellence."}</h2>
                            <div className="space-y-5 text-base md:text-lg text-slate-600 leading-relaxed font-normal">
                                {aboutData.historyContent ? (
                                    <PortableText value={aboutData.historyContent} />
                                ) : (
                                    <>
                                        <p>
                                            Madonna School was established with a clear mandate: to create an oasis of learning where discipline and academic rigor are inseparable. Over the decades, we have evolved from a small local school into a beacon of educational distinction.
                                        </p>
                                        <p>
                                            Our journey has been marked by continuous innovation, from building state-of-the-art libraries to integrating digital learning platforms, all while maintaining the core values that have defined us for over 60 years.
                                        </p>
                                    </>
                                )}
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="grid grid-cols-2 gap-5">
                                {stats.map((stat: any, i: number) => (
                                    <div key={i} className="p-8 bg-white rounded-2xl text-center border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300">
                                        <div className="text-3xl md:text-4xl font-black text-[#071322] mb-1">{stat.val}</div>
                                        <div className="text-slate-500 font-semibold text-xs uppercase tracking-widest">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Values */}
                <section className="bg-[#071322] py-24 text-white relative overflow-hidden">
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-400/10 backdrop-blur-md rounded-full text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-6 border border-amber-400/20">
                                Our Principles
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">{aboutData.coreValuesTitle || "Our Core Values"}</h2>
                            <p className="text-lg text-slate-400 font-normal">{aboutData.coreValuesSubtitle || "The pillars that sustain our institution."}</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {coreValues.map((v: any, i: number) => (
                                <div key={i} className="space-y-4 p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                                    <div className="w-10 h-10 rounded-full bg-amber-400/20 text-[#D4AF37] font-bold text-sm flex items-center justify-center border border-amber-400/30">0{i + 1}</div>
                                    <h3 className="text-xl font-bold text-white">{v.title}</h3>
                                    <p className="text-slate-300 text-sm leading-relaxed">{v.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

            {/* Render any additional blocks from page builder */}
            {extraBlocks.length > 0 && <BlockRenderer blocks={extraBlocks} />}
        </main>
    );
}
