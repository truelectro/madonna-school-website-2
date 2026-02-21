import { Users, Presentation, Globe, ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
    title: 'MOSA (Alumni) | Madonna School Koforidua',
    description: 'Connecting generations of Madonians worldwide.',
};

export default function MosaPage() {
    // Array to match generic school year lengths from '89 to present
    const years = Array.from({ length: 35 }, (_, i) => 1989 + i).reverse();

    return (
        <main className="min-h-screen pt-32 pb-20 bg-gray-50">
            {/* Header */}
            <section className="bg-[#051324] py-32 mb-20 text-white relative overflow-hidden">
                {/* Animated Gradient Orbs */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full text-sky-200 text-sm font-bold tracking-wider uppercase mb-8 border border-white/10">
                        <Sparkles size={16} className="text-sky-400" /> Alumni Network
                    </div>
                    <Users className="w-20 h-20 text-sky-400 mx-auto mb-6" />
                    <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tight uppercase">MOSA</h1>
                    <p className="text-2xl md:text-3xl text-gray-200 max-w-3xl mx-auto font-medium mb-4">
                        Madonna Old Students Association
                    </p>
                    <p className="text-lg text-sky-400 font-bold uppercase tracking-widest">A vital link between alumni and building our future</p>
                </div>
            </section>

            <section className="container mx-auto px-6 max-w-6xl">
                <div className="text-center mb-16">
                    <Globe className="w-12 h-12 text-gray-400 mx-auto mb-6" />
                    <h2 className="text-4xl font-black text-gray-900 mb-6 uppercase tracking-tighter">Welcome Back, Madonians</h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto font-medium leading-relaxed">
                        MOSA serves as a vital bridge connecting generations of Madonna School alumni worldwide. Whether you graduated recently or decades ago, our association is dedicated to maintaining lifelong friendships, professional networking, and giving back to the institution that shaped us.
                    </p>
                </div>

                {/* Database Search Section stub */}
                <div className="bg-white p-12 rounded-[50px] shadow-xl border border-gray-100 max-w-4xl mx-auto text-center mb-20">
                    <Presentation className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                    <h3 className="text-3xl font-black text-gray-900 mb-6">Alumni Database Directory</h3>
                    <p className="text-lg text-gray-500 mb-8 font-medium">Find your classmates. Select your graduating year below to view your year group.</p>

                    <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                        {years.slice(0, 15).map((year) => (
                            <button key={year} className="py-3 px-2 bg-gray-50 border border-gray-100 rounded-2xl text-gray-700 font-bold hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all shadow-sm">
                                Class of '{String(year).slice(-2)}
                            </button>
                        ))}
                    </div>
                    <button className="mt-8 text-purple-600 font-bold tracking-widest uppercase hover:underline flex justify-center items-center gap-2 w-full">
                        View Older Year Groups <ArrowRight size={18} />
                    </button>
                </div>

            </section>
        </main>
    );
}
