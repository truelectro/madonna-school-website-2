import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CallToActionSection({ data }: { data: any }) {
    return (
        <section className="py-24 relative">
            <div className="container mx-auto px-6">
                <div className="bg-blue-600 rounded-[40px] md:rounded-[60px] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-900/20">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl -mr-48 -mt-48 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-3xl -ml-48 -mb-48 pointer-events-none" />

                    <div className="relative z-10 max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">
                            {data.heading}
                        </h2>
                        {data.text && (
                            <p className="text-xl md:text-2xl text-blue-100 mb-12 font-medium leading-relaxed">
                                {data.text}
                            </p>
                        )}
                        {data.buttonLabel && data.buttonLink && (
                            <Link href={data.buttonLink} className="px-10 py-5 bg-white text-blue-600 rounded-2xl font-black text-xl hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all inline-flex items-center gap-3 hover:-translate-y-1">
                                {data.buttonLabel} <ArrowRight className="w-6 h-6" />
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
