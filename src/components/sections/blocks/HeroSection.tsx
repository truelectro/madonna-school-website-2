import Image from "next/image";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { urlFor } from "@/sanity/lib/client";

export function HeroSection({ data }: { data: any }) {
    return (
        <section className="relative min-h-[70vh] flex items-center bg-[#051324] text-white overflow-hidden py-32">
            {data.backgroundImage && (
                <div className="absolute inset-0 overflow-hidden z-0">
                    <Image
                        src={urlFor(data.backgroundImage).url()}
                        alt="Hero Background"
                        fill
                        className="object-cover opacity-30 mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-blue-900/60 z-10 mix-blend-multiply" />
                </div>
            )}
            {!data.backgroundImage && (
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[120px] animate-pulse pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse delay-700 pointer-events-none" />
                </div>
            )}

            <div className="container mx-auto px-6 relative z-20">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full text-sky-200 text-sm font-bold tracking-wider uppercase mb-8 border border-white/10">
                        <Sparkles size={16} className="text-sky-400" /> {data.heading}
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.05] tracking-tight uppercase">
                        {data.heading}
                    </h1>
                    {data.subheading && (
                        <p className="text-xl md:text-2xl mb-12 text-gray-200 leading-relaxed max-w-3xl mx-auto font-light">
                            {data.subheading}
                        </p>
                    )}
                    {data.ctaLabel && data.ctaLink && (
                        <div className="flex justify-center mt-6">
                            <Link href={data.ctaLink} className="px-10 py-5 bg-sky-500 hover:bg-sky-600 text-white transition-all rounded-full font-black text-lg shadow-2xl shadow-sky-500/20 inline-flex items-center justify-center group">
                                {data.ctaLabel}
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
