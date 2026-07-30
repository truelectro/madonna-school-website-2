import { Trophy, Star, Award, Medal, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import HeroMouseOrb from "@/components/ui/HeroMouseOrb";
import { sanityFetch } from "@/sanity/lib/client";
import { BlockRenderer } from "@/components/sections/BlockRenderer";

export const revalidate = 0;

export const metadata = {
    title: 'Hall of Fame | Madonna School Koforidua',
    description: 'Celebrating the outstanding achievements of Madonna School students.',
};

export default async function HallOfFamePage() {
    const hallOfFameQuery = `*[_type == "hallOfFamePage"][0]`;
    const hallOfFameData = (await sanityFetch<any>(hallOfFameQuery)) || {};

    const extraBlocks = hallOfFameData?.pageBuilder || [];

    const presidentialAwards = hallOfFameData.presidentialAwards?.length > 0 ? hallOfFameData.presidentialAwards : [
        { name: "Yvette Yeboah-Wadie", year: "1997/98" },
        { name: "Katarina Taylor", year: "2000/2001" },
        { name: "Irene Frempong", year: "2003/2004" },
        { name: "Judith Foli", year: "2008/2009" },
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
                        Academic Excellence
                    </div>
                    <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tight">{hallOfFameData.headerTitle || "Hall of Fame"}</h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
                        {hallOfFameData.headerSubtitle || "Celebrating the outstanding achievements, brilliance, and excellence of Madonna School students on national and regional stages."}
                    </p>
                </div>
            </section>

            <section className="container mx-auto px-6 max-w-6xl">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Presidential Awards Column */}
                    <div className="lg:w-1/2">
                        <div className="flex items-center gap-3.5 mb-8 border-b border-slate-200 pb-4">
                            <div className="p-3 bg-amber-400/15 text-[#B8860B] rounded-xl border border-amber-400/20">
                                <Award className="w-8 h-8" />
                            </div>
                            <h2 className="text-3xl font-extrabold text-slate-900 uppercase tracking-tight">Presidential <br /> Awards</h2>
                        </div>

                        <p className="text-base md:text-lg text-slate-600 font-normal mb-8 leading-relaxed">
                            {hallOfFameData.presidentialAwardsText || "The school has over the years produced students who have received Presidential Awards for outstanding performance at the Basic Education Certificate Examination (B.E.C.E)."}
                        </p>

                        <div className="grid gap-4">
                            {presidentialAwards.map((award: any, i: number) => (
                                <div key={i} className="flex items-center justify-between p-6 bg-white rounded-2xl shadow-sm border border-slate-200/80 hover:shadow-md transition-all duration-300 group">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-[#071322] text-[#D4AF37] rounded-full flex items-center justify-center font-bold text-base border border-slate-700">
                                            {i + 1}
                                        </div>
                                        <h3 className="text-lg font-bold text-slate-900">{award.name}</h3>
                                    </div>
                                    <div className="px-4 py-1.5 bg-amber-400/10 text-[#B8860B] font-bold rounded-full border border-amber-400/30 text-sm">
                                        {award.year}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Regional & National Competitions Column */}
                    <div className="lg:w-1/2 space-y-6">

                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200/80">
                            <div className="flex items-center gap-3 mb-4">
                                <Star className="w-6 h-6 text-[#B8860B]" />
                                <h3 className="text-xl font-extrabold text-slate-900 uppercase">Spelling Bee Champions</h3>
                            </div>
                            <p className="text-base text-slate-600 font-normal leading-relaxed">
                                {hallOfFameData.spellingBeeText || <>We have participated in five (5) Spelling "Bee" Competitions at the Regional Level and have emerged second to none. Until we are dethroned, we remain the <span className="text-slate-900 font-bold">Eastern Regional Champions</span>! At the National Level, we have won two 3rd places and one 2nd place, which we are immensely proud of.</>}
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200/80">
                            <div className="flex items-center gap-3 mb-4">
                                <Medal className="w-6 h-6 text-[#B8860B]" />
                                <h3 className="text-xl font-extrabold text-slate-900 uppercase">Science & Math Quizzes</h3>
                            </div>
                            <p className="text-base text-slate-600 font-normal leading-relaxed mb-6">
                                {hallOfFameData.scienceMathText || "Madonna School has participated in several Regional and National Quizzes, Debates, and Competitions. The school has won 1st Positions in most Science and Mathematics Quizzes (both Primary and JHS) at the Regional level."}
                            </p>
                            <div className="bg-amber-50/50 p-5 rounded-xl flex items-start gap-3 border border-amber-200/60">
                                <CheckCircle2 className="w-5 h-5 text-[#B8860B] flex-shrink-0 mt-0.5" />
                                <p className="text-slate-800 font-medium text-sm leading-relaxed">{hallOfFameData.beceResultsText || "B.E.C.E. results have always been enviable, scoring nine (1)s with the highest raw scores."}</p>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200/80">
                            <div className="flex items-center gap-3 mb-4">
                                <Star className="w-6 h-6 text-[#B8860B]" />
                                <h3 className="text-xl font-extrabold text-slate-900 uppercase">English & French</h3>
                            </div>
                            <p className="text-base text-slate-600 font-normal leading-relaxed">
                                {hallOfFameData.englishFrenchText || "The school has won several 1st and 2nd positions at the Regional level in English and French Competitions and a 3rd position at the only National French Competition she attended."}
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {extraBlocks.length > 0 && <BlockRenderer blocks={extraBlocks} />}
        </main>
    );
}
