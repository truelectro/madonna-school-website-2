import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { urlFor } from "@/sanity/lib/client";
import HeroMouseOrb from "@/components/ui/HeroMouseOrb";

export function HeroSection({ data }: { data: any }) {
    const heroImageUrl = data.backgroundImage ? urlFor(data.backgroundImage).url() : null;

    return (
        <>
            {/* Hero Main Content */}
            <section className="bg-[#051324] text-white pt-24 md:pt-32 pb-32 md:pb-48 lg:pb-64 relative overflow-hidden">
                {/* Animated Gradient Orbs */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />
                <HeroMouseOrb />

                <div className="container mx-auto px-6 relative z-20">
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-20">
                        {/* Left Content */}
                        <div className="lg:w-3/5">
                            {data.badgeText && (
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full text-blue-200 text-sm font-bold tracking-wider uppercase mb-6 lg:mb-8 border border-white/10">
                                    <Sparkles size={16} className="text-sky-400" /> {data.badgeText}
                                </div>
                            )}
                            <h1 className="text-[2.5rem] sm:text-5xl md:text-[5.5rem] lg:text-[6.5rem] font-black mb-6 lg:mb-10 leading-[1.05] tracking-tight">
                                {data.heading}
                            </h1>
                            <div className="flex flex-col sm:flex-row gap-6 mt-12 hidden lg:flex">
                                {data.ctaLabel && data.ctaLink && (
                                    <Link href={data.ctaLink} className="px-10 py-5 bg-sky-500 hover:bg-sky-600 text-white transition-all rounded-full font-black text-lg shadow-xl shadow-sky-500/20 flex items-center justify-center gap-3 group">
                                        {data.ctaLabel} <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                )}
                                {data.secondaryCtaLabel && data.secondaryCtaLink && (
                                    <Link href={data.secondaryCtaLink} className="px-10 py-5 bg-transparent hover:bg-white/5 transition-all text-white border border-white/20 rounded-full font-bold text-lg flex items-center justify-center">
                                        {data.secondaryCtaLabel}
                                    </Link>
                                )}
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className="lg:w-2/5 flex flex-col gap-8 lg:gap-12 lg:pt-16 text-left">
                            {data.subheading && (
                                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light border-l-2 border-sky-500/50 pl-6">
                                    {data.subheading}
                                </p>
                            )}

                            {data.stats && data.stats.length > 0 && (
                                <div className="flex items-center gap-8 md:gap-12 pt-4 flex-wrap">
                                    {data.stats.map((stat: any, i: number) => (
                                        <div key={i} className="flex flex-col">
                                            <div className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tighter flex items-baseline gap-1">
                                                {stat.value} <span className="text-sky-400 text-xl">+</span>
                                            </div>
                                            <div className="text-gray-400 text-xs md:text-sm font-bold uppercase tracking-widest">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Mobile Buttons */}
                            <div className="flex flex-col sm:flex-row gap-6 mt-4 lg:hidden">
                                {data.ctaLabel && data.ctaLink && (
                                    <Link href={data.ctaLink} className="px-8 py-4 bg-sky-500 hover:bg-sky-600 text-white transition-all rounded-full font-black text-lg flex items-center justify-center gap-3">
                                        {data.ctaLabel}
                                    </Link>
                                )}
                                {data.secondaryCtaLabel && data.secondaryCtaLink && (
                                    <Link href={data.secondaryCtaLink} className="px-8 py-4 bg-white/5 hover:bg-white/10 transition-all text-white border border-white/20 rounded-full font-bold text-lg flex items-center justify-center">
                                        {data.secondaryCtaLabel}
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Overlapping Hero Image */}
            <section className="relative z-30 -mt-24 md:-mt-32 lg:-mt-48 px-6 container mx-auto mb-12 md:mb-20 pointer-events-none">
                <div className="relative w-full aspect-[4/5] sm:aspect-video lg:aspect-[21/9] rounded-[40px] overflow-hidden shadow-2xl border-4 border-[#051324] bg-gray-200 pointer-events-auto group">
                    {heroImageUrl ? (
                        <Image
                            src={heroImageUrl}
                            alt={data.heading || "Hero Image"}
                            fill
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-1000"
                            priority
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gray-800 text-gray-500 font-bold">
                            No Image Selected
                        </div>
                    )}
                    <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent" />
                </div>
            </section>
        </>
    );
}
