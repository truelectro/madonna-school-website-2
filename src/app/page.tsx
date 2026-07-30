import { ArrowRight, GraduationCap, Users, Calendar, Award, CheckCircle2, TrendingUp, ShieldCheck } from "lucide-react";
import Link from 'next/link';
import { client, urlFor, sanityFetch } from "@/sanity/lib/client";
import Image from "next/image";
import HeroMouseOrb from "@/components/ui/HeroMouseOrb";
import { BlockRenderer } from "@/components/sections/BlockRenderer";
import { HomeHeroCarousel } from "@/components/ui/HomeHeroCarousel";
import { HighlightedText } from "@/components/ui/HighlightedText";
import { PortableText } from "next-sanity";

export const revalidate = 0; // Disable static caching so changes show up instantly

export default async function Home() {
    const query = `*[_type == "homePage"][0]`;
    const page = await sanityFetch<any>(query) || {};

    const heroTag = page?.heroTag || "Sacrifice • Success • Service";
    const heroTitle = page?.heroTitle || "Where <span class='text-sky-400'>Leaders</span> <br />Are Built.";
    const heroSubtitle = page?.heroSubtitle || "Providing a holistic education that empowers students with critical thinking, moral integrity, and leadership skills. A legacy of excellence since 1964.";
    const heroImageUrls = page?.heroImages && Array.isArray(page.heroImages)
        ? page.heroImages.map((img: any) => urlFor(img).url())
        : [];
    const stats = page?.heroStats?.length > 0 ? page?.heroStats : [
        { label: 'Founding Year', value: '1964' },
        { label: 'B.E.C.E Results', value: 'Top 1%' },
        { label: 'Regional Champions', value: '5-Time' },
    ];

    const welcomeTag = page?.welcomeTag || "Welcome Message";
    const welcomeTitle = page?.welcomeTitle || "Celebrating 60 Years of Excellence.";
    const welcomeImageUrl = page?.welcomeImage ? urlFor(page.welcomeImage).url() : null;

    const differenceTag = page?.differenceTag || "Our Distinction";
    const differenceTitle = page?.differenceTitle || "The Madonna Difference.";
    const differenceImageUrl = page?.differenceImage ? urlFor(page.differenceImage).url() : null;

    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-[#051324] text-white pt-24 md:pt-32 pb-32 md:pb-48 lg:pb-64 relative overflow-hidden">
                {/* Animated Gradient Orbs */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />
                <HeroMouseOrb />

                <div className="container mx-auto px-6 relative z-20">
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-20">
                        {/* Left Content */}
                        <div className="lg:w-3/5">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-400/10 backdrop-blur-md rounded-full text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-6 lg:mb-8 border border-amber-400/20">
                                {heroTag}
                            </div>
                            <HighlightedText
                                text={heroTitle}
                                as="h1"
                                className="text-[2.5rem] sm:text-5xl md:text-[5.5rem] lg:text-[6.5rem] font-black mb-6 lg:mb-10 leading-[1.05] tracking-tight"
                            />
                            <div className="flex flex-col sm:flex-row gap-5 mt-12 hidden lg:flex">
                                <Link href="/admission" className="px-10 py-5 bg-[#D4AF37] hover:bg-[#c49f27] text-[#071322] transition-all rounded-full font-bold text-lg shadow-xl shadow-amber-500/10 flex items-center justify-center gap-3 group">
                                    Apply Today <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link href="/about" className="px-10 py-5 bg-white/5 hover:bg-white/10 transition-all text-white border border-white/15 rounded-full font-semibold text-lg flex items-center justify-center">
                                    Our History
                                </Link>
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className="lg:w-2/5 flex flex-col gap-8 lg:gap-12 lg:pt-16">
                            <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-normal text-left">
                                {heroSubtitle}
                            </p>

                            <div className="flex items-center gap-8 md:gap-12 pt-4 border-t border-slate-800/80">
                                {stats.map((stat: any, i: number) => (
                                    <div key={i} className="flex flex-col">
                                        <div className="text-3xl md:text-4xl font-black text-white mb-1 tracking-tight flex items-baseline gap-1">
                                            {stat.value} <span className="text-[#D4AF37] text-lg font-bold">+</span>
                                        </div>
                                        <div className="text-slate-400 text-xs font-semibold uppercase tracking-widest">{stat.label}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Mobile Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 mt-4 lg:hidden">
                                <Link href="/admission" className="px-8 py-4 bg-[#D4AF37] hover:bg-[#c49f27] text-[#071322] transition-all rounded-full font-bold text-base flex items-center justify-center gap-3">
                                    Apply Today
                                </Link>
                                <Link href="/about" className="px-8 py-4 bg-white/5 hover:bg-white/10 transition-all text-white border border-white/20 rounded-full font-semibold text-base flex items-center justify-center">
                                    Our History
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Overlapping Hero Image Carousel */}
            <HomeHeroCarousel heroImageUrls={heroImageUrls} />

            {/* Modular Content Builder — all sections (Welcome, Philosophy, Difference, plus any extra blocks) */}
            {page?.pageBuilder && (
                <BlockRenderer blocks={page.pageBuilder} />
            )}
        </main>
    );
}
