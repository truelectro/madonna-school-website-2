import { Trophy, Star, Award, Medal, CheckCircle2, Sparkles } from 'lucide-react';
import Image from 'next/image';
import HeroMouseOrb from "@/components/ui/HeroMouseOrb";

export const metadata = {
    title: 'Hall of Fame | Madonna School Koforidua',
    description: 'Celebrating the outstanding achievements of Madonna School students.',
};

export default function HallOfFamePage() {
    const presidentialAwards = [
        { name: "Yvette Yeboah-Wadie", year: "1997/98" },
        { name: "Katarina Taylor", year: "2000/2001" },
        { name: "Irene Frempong", year: "2003/2004" },
        { name: "Judith Foli", year: "2008/2009" },
    ];

    return (
        <main className="min-h-screen pb-20 bg-gray-50">
            {/* Header */}
            <section className="bg-[#051324] pt-40 pb-32 mb-20 text-white relative overflow-hidden">
                {/* Animated Gradient Orbs */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
                <HeroMouseOrb />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full text-sky-200 text-sm font-bold tracking-wider uppercase mb-8 border border-white/10">
                        <Sparkles size={16} className="text-sky-400" /> Academic Excellence
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tight">Hall of Fame</h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-medium">
                        Celebrating the outstanding achievements, brilliance, and excellence of Madonna School students on national and regional stages.
                    </p>
                </div>
            </section>

            <section className="container mx-auto px-6 max-w-6xl">
                <div className="flex flex-col lg:flex-row gap-16">

                    {/* Presidential Awards Column */}
                    <div className="lg:w-1/2">
                        <div className="flex items-center gap-4 mb-10 border-b border-gray-200 pb-6">
                            <div className="p-4 bg-yellow-100 text-yellow-600 rounded-2xl shadow-sm">
                                <Award className="w-10 h-10" />
                            </div>
                            <h2 className="text-4xl font-black text-gray-900 uppercase tracking-tighter">Presidential <br /> Awards</h2>
                        </div>

                        <p className="text-xl text-gray-600 font-medium mb-10 leading-relaxed">
                            The school has over the years produced students who have received Presidential Awards for outstanding performance at the Basic Education Certificate Examination (B.E.C.E).
                        </p>

                        <div className="grid gap-6">
                            {presidentialAwards.map((award, i) => (
                                <div key={i} className="flex items-center justify-between p-8 bg-white rounded-[30px] shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center font-bold text-xl group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                            {i + 1}
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900">{award.name}</h3>
                                    </div>
                                    <div className="px-6 py-2 bg-yellow-50 text-yellow-700 font-black rounded-full border border-yellow-200 text-lg">
                                        {award.year}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Regional & National Competitions Column */}
                    <div className="lg:w-1/2 space-y-10">

                        <div className="bg-white p-10 rounded-[40px] shadow-xl border border-gray-100 group">
                            <div className="flex items-center gap-4 mb-6">
                                <Star className="w-8 h-8 text-blue-600" />
                                <h3 className="text-2xl font-black text-gray-900 uppercase">Spelling Bee Champions</h3>
                            </div>
                            <p className="text-lg text-gray-600 font-medium leading-relaxed">
                                We have participated in five (5) Spelling "Bee" Competitions at the Regional Level and have emerged second to none. Until we are dethroned, we remain the <span className="text-blue-600 font-bold">Eastern Regional Champions</span>! At the National Level, we have won two 3rd places and one 2nd place, which we are immensely proud of.
                            </p>
                        </div>

                        <div className="bg-white p-10 rounded-[40px] shadow-lg border border-gray-100 group">
                            <div className="flex items-center gap-4 mb-6">
                                <Medal className="w-8 h-8 text-green-600" />
                                <h3 className="text-2xl font-black text-gray-900 uppercase">Science & Math Quizzes</h3>
                            </div>
                            <p className="text-lg text-gray-600 font-medium leading-relaxed mb-6">
                                Madonna School has participated in several Regional and National Quizzes, Debates, and Competitions. The school has won 1st Positions in most Science and Mathematics Quizzes (both Primary and JHS) at the Regional level.
                            </p>
                            <div className="bg-green-50 p-6 rounded-2xl flex items-start gap-4 border border-green-100">
                                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                                <p className="text-green-800 font-medium">B.E.C.E. results have always been enviable, scoring nine (1)s with the highest raw scores.</p>
                            </div>
                        </div>

                        <div className="bg-white p-10 rounded-[40px] shadow-md border border-gray-100 group">
                            <div className="flex items-center gap-4 mb-6">
                                <Star className="w-8 h-8 text-purple-600" />
                                <h3 className="text-2xl font-black text-gray-900 uppercase">English & French</h3>
                            </div>
                            <p className="text-lg text-gray-600 font-medium leading-relaxed">
                                The school has won several 1st and 2nd positions at the Regional level in English and French Competitions and a 3rd position at the only National French Competition she attended.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}
