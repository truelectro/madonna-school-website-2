import { Users, Presentation, Globe, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import HeroMouseOrb from "@/components/ui/HeroMouseOrb";
import { sanityFetch } from "@/sanity/lib/client";
import { BlockRenderer } from "@/components/sections/BlockRenderer";

export const revalidate = 0;

export const metadata = {
    title: 'MOSA (Alumni) | Madonna School Koforidua',
    description: 'Connecting generations of Madonians worldwide.',
};

export default async function MosaPage() {
    const mosaQuery = `*[_type == "mosaPage"][0]`;
    const mosaData = (await sanityFetch<any>(mosaQuery)) || {};

    const extraBlocks = mosaData?.pageBuilder || [];

    // Array to match generic school year lengths from '89 to present
    const years = Array.from({ length: 35 }, (_, i) => 1989 + i).reverse();

    return (
        <main className="min-h-screen pb-20 bg-gray-50">
            {/* Header */}
            <section className="bg-[#071322] pt-40 pb-32 mb-16 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-400/5 rounded-full blur-[140px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
                <HeroMouseOrb />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-400/10 backdrop-blur-md rounded-full text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-8 border border-amber-400/20">
                        Alumni Network
                    </div>
                    <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tight">{mosaData.headerTitle || "MOSA"}</h1>
                    <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto font-medium mb-4">
                        {mosaData.headerSubtitle || "Madonna Old Students Association"}
                    </p>
                    <p className="text-xs text-[#D4AF37] font-bold uppercase tracking-widest">A vital link between alumni and building our future</p>
                </div>
            </section>

            <section className="container mx-auto px-6 max-w-6xl">
                <div className="text-center mb-16">
                    <Globe className="w-12 h-12 text-gray-400 mx-auto mb-6" />
                    <h2 className="text-4xl font-black text-gray-900 mb-6 uppercase tracking-tighter">{mosaData.welcomeTitle || "Welcome Back, Madonians"}</h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto font-medium leading-relaxed">
                        {mosaData.welcomeText || "MOSA serves as a vital bridge connecting generations of Madonna School alumni worldwide. Whether you graduated recently or decades ago, our association is dedicated to maintaining lifelong friendships, professional networking, and giving back to the institution that shaped us."}
                    </p>
                </div>

                {/* Database Search Section stub */}
                <div className="bg-white p-12 rounded-[50px] shadow-xl border border-gray-100 max-w-4xl mx-auto text-center mb-20">
                    <Presentation className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                    <h3 className="text-3xl font-black text-gray-900 mb-6">{mosaData.directoryTitle || "Alumni Database Directory"}</h3>
                    <p className="text-lg text-gray-500 mb-8 font-medium">{mosaData.directorySubtitle || "Find your classmates. Select your graduating year below to view your year group."}</p>

                    <div className="grid grid-cols-3 md:grid-cols-5 gap-3.5">
                        {years.slice(0, 15).map((year) => (
                            <button key={year} className="py-3 px-2 bg-slate-50 border border-slate-200/80 rounded-xl text-slate-700 font-bold hover:bg-[#071322] hover:text-[#D4AF37] hover:border-[#071322] transition-all text-sm shadow-xs">
                                Class of '{String(year).slice(-2)}
                            </button>
                        ))}
                    </div>
                    <button className="mt-8 text-[#B8860B] font-bold tracking-wider text-xs uppercase hover:underline flex justify-center items-center gap-1.5 w-full">
                        View Older Year Groups <ArrowRight size={16} />
                    </button>
                </div>

            </section>

            {extraBlocks.length > 0 && <BlockRenderer blocks={extraBlocks} />}
        </main>
    );
}
