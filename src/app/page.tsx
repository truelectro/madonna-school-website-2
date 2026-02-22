import { ArrowRight, GraduationCap, Users, Calendar, Award, CheckCircle2, TrendingUp, Sparkles, ShieldCheck } from "lucide-react";
import Link from 'next/link';
import { client, urlFor, sanityFetch } from "@/sanity/lib/client";
import Image from "next/image";
import HeroMouseOrb from "@/components/ui/HeroMouseOrb";
import { BlockRenderer } from "@/components/sections/BlockRenderer";

export const revalidate = 0; // Disable static caching so changes show up instantly

export default async function Home() {
    const query = `*[_type == "page" && slug.current == "home"][0]`;
    const page = await sanityFetch<any>(query) || {};

    const heroImageUrl = page?.heroImage ? urlFor(page.heroImage).url() : null;

    // Find the welcome section to find if it has an image
    const welcomeSection = page?.pageBuilder?.find((block: any) => block._type === 'textWithImageSection' && (block.heading?.includes('Welcome') || block.heading?.includes('Celebrating')));
    const welcomeImageUrl = welcomeSection?.image ? urlFor(welcomeSection.image).url() : null;

    // Find the difference section to see if it has a custom uploaded image
    const differenceSection = page?.pageBuilder?.find((block: any) => block._type === 'textWithImageSection' && block.heading?.includes('Difference'));
    const differenceImageUrl = differenceSection?.image ? urlFor(differenceSection.image).url() : null;

    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-[#051324] text-white pt-32 pb-48 lg:pb-64 relative overflow-hidden">
                {/* Animated Gradient Orbs */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />
                <HeroMouseOrb />

                <div className="container mx-auto px-6 relative z-20">
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-20">
                        {/* Left Content */}
                        <div className="lg:w-3/5">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full text-blue-200 text-sm font-bold tracking-wider uppercase mb-8 border border-white/10">
                                <Sparkles size={16} className="text-sky-400" /> Sacrifice • Success • Service
                            </div>
                            <h1 className="text-[2.5rem] sm:text-5xl md:text-[5.5rem] lg:text-[6.5rem] font-black mb-10 leading-[1.05] tracking-tight">
                                Where <span className="text-sky-400">Leaders</span> <br />Are Built.
                            </h1>
                            <div className="flex flex-col sm:flex-row gap-6 mt-12 hidden lg:flex">
                                <Link href="/admission" className="px-10 py-5 bg-sky-500 hover:bg-sky-600 text-white transition-all rounded-full font-black text-lg shadow-xl shadow-sky-500/20 flex items-center justify-center gap-3 group">
                                    Apply Today <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link href="/about" className="px-10 py-5 bg-transparent hover:bg-white/5 transition-all text-white border border-white/20 rounded-full font-bold text-lg flex items-center justify-center">
                                    Our History
                                </Link>
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className="lg:w-2/5 flex flex-col gap-12 lg:pt-16">
                            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light border-l-2 border-sky-500/50 pl-6">
                                Providing a holistic education that empowers students with critical thinking, moral integrity, and leadership skills. A legacy of excellence since 1964.
                            </p>

                            <div className="flex items-center gap-8 md:gap-12 pt-4">
                                {[
                                    { label: 'Founding Year', value: '1964' },
                                    { label: 'B.E.C.E Results', value: 'Top 1%' },
                                    { label: 'Regional Champions', value: '5-Time' },
                                ].map((stat, i) => (
                                    <div key={i} className="flex flex-col">
                                        <div className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tighter flex items-baseline gap-1">
                                            {stat.value} <span className="text-sky-400 text-xl">+</span>
                                        </div>
                                        <div className="text-gray-400 text-xs md:text-sm font-bold uppercase tracking-widest">{stat.label}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Mobile Buttons */}
                            <div className="flex flex-col sm:flex-row gap-6 mt-4 lg:hidden">
                                <Link href="/admission" className="px-8 py-4 bg-sky-500 hover:bg-sky-600 text-white transition-all rounded-full font-black text-lg flex items-center justify-center gap-3">
                                    Apply Today
                                </Link>
                                <Link href="/about" className="px-8 py-4 bg-white/5 hover:bg-white/10 transition-all text-white border border-white/20 rounded-full font-bold text-lg flex items-center justify-center">
                                    Our History
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Overlapping Hero Image */}
            <section className="relative z-30 -mt-32 lg:-mt-48 px-6 container mx-auto mb-20 pointer-events-none">
                <div className="relative w-full aspect-video md:aspect-[21/9] rounded-[40px] overflow-hidden shadow-2xl border-4 border-[#051324] bg-gray-200 pointer-events-auto group">
                    {heroImageUrl ? (
                        <Image
                            src={heroImageUrl}
                            alt="Madonna School Campus"
                            fill
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-1000"
                            priority
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gray-800 text-gray-500 font-bold">
                            Hero Image Placeholder
                        </div>
                    )}
                    {/* Optional play button overlay if it were a video */}
                    <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent" />
                </div>
            </section>

            {/* Welcome Section */}
            <section className="py-24 bg-blue-50 relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className={`mx-auto bg-white rounded-[40px] shadow-2xl shadow-blue-900/5 border border-blue-100 ${welcomeImageUrl
                        ? 'max-w-7xl flex flex-col lg:flex-row items-center gap-12 lg:gap-16 p-8 md:p-12'
                        : 'max-w-4xl p-12 md:p-16'
                        }`}>
                        {welcomeImageUrl && (
                            <div className="w-full lg:w-1/2 relative aspect-square lg:aspect-[4/5] rounded-[30px] overflow-hidden shadow-lg border border-gray-100 flex-shrink-0">
                                <Image
                                    src={welcomeImageUrl}
                                    alt="Welcome to Madonna School"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        )}

                        <div className={welcomeImageUrl ? "w-full lg:w-1/2" : ""}>
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 text-sm font-bold tracking-wider uppercase mb-8 rounded-full">
                                <Sparkles size={16} /> Welcome Message
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 leading-tight tracking-tight">
                                Celebrating 60 Years of <span className="text-blue-600">Excellence</span>.
                            </h2>
                            <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-medium">
                                <p>
                                    We joyfully welcome you to Madonna School, Koforidua, as we celebrate 60 years of quality and holistic Basic Education. Founded in 1966 by the Missionary Sisters, Servants of the Holy Spirit, our school has grown into a community of learning, faith, and service.
                                </p>
                                <p>
                                    For six decades, Madonna School has remained true to its motto — <span className="text-blue-700 font-bold">“Sacrifice, Success, and Service.”</span> Guided by these enduring values, we have dedicated ourselves to nurturing disciplined, confident, and compassionate learners who excel both in academics and in character.
                                </p>
                                <p>
                                    As we mark this Diamond Jubilee, we honor our founders, teachers, students, parents, and alumni who have contributed to the rich legacy we cherish today. Their collective sacrifice and commitment continue to inspire us to pursue excellence and to serve our society with integrity and purpose.
                                </p>
                                <p>
                                    We invite you to join us in celebrating this milestone and in shaping the next chapter of the Madonna story — one built on faith, knowledge, and service to humanity.
                                </p>
                                <p className="text-xl font-bold text-gray-900 mt-8">
                                    Happy 60th Anniversary, Madonna School — Sacrifice, Success, Service!
                                </p>
                            </div>
                            <div className="mt-12 pt-8 border-t border-gray-100 flex items-center gap-6">
                                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-blue-500/30">
                                    SO
                                </div>
                                <div>
                                    <h4 className="text-xl font-black text-gray-900 tracking-tight">Sr. Perpetual Owiredu</h4>
                                    <p className="text-blue-600 font-bold uppercase tracking-widest text-xs mt-1">Headmistress, Madonna School - Koforidua</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-24">
                        <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 tracking-tight">
                            A Legacy of <span className="text-blue-600 underline decoration-blue-200 underline-offset-8">Excellence</span>
                        </h2>
                        <p className="text-xl text-gray-500 leading-relaxed font-medium">
                            For over six decades, Madonna School has been at the forefront of educational innovation, transforming potential into achievement.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            {
                                title: 'High Academics',
                                desc: 'A curriculum that challenges and inspires, preparing students for the world\'s top universities.',
                                icon: GraduationCap,
                                color: 'bg-blue-600'
                            },
                            {
                                title: 'Moral Integrity',
                                desc: 'Instilling core values and discipline that form the bedrock of successful adult life.',
                                icon: ShieldCheck,
                                color: 'bg-indigo-600'
                            },
                            {
                                title: 'Global Leadership',
                                desc: 'Developing critical thinking and public speaking skills to lead in the 21st century.',
                                icon: Award,
                                color: 'bg-blue-400'
                            }
                        ].map((item, i) => (
                            <div key={i} className="p-12 bg-gray-50 rounded-[40px] hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 group border border-transparent hover:border-gray-100">
                                <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform`}>
                                    <item.icon size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-lg">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-32 bg-gray-50 relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-24">
                        <div className="lg:w-1/2">
                            <div className="inline-block px-4 py-1 bg-blue-100 text-blue-700 text-xs font-black uppercase tracking-widest rounded-full mb-6">
                                Our Distinction
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black mb-10 text-gray-900 leading-tight tracking-tighter">
                                The Madonna <br />Difference.
                            </h2>
                            <p className="text-xl text-gray-600 mb-12 leading-relaxed font-medium">
                                We go beyond the classroom. Our holistic approach ensures that every student is nurtured emotionally, socially, and intellectually.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                {[
                                    "Unbeatable B.E.C.E Results",
                                    "Presidential Award-Winning Students",
                                    "5-Time Regional Spelling Bee Champions",
                                    "1st in Regional Science & Math Quizzes",
                                    "Accepts children from age 4 (KG 1)",
                                    "Holistic Education (KG to JHS)"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 text-gray-800 font-bold text-lg">
                                        <CheckCircle2 className="text-blue-600 w-6 h-6 flex-shrink-0" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative">
                            <div className="aspect-[4/5] bg-gray-200 rounded-[60px] overflow-hidden shadow-3xl relative group">
                                {differenceImageUrl ? (
                                    <Image
                                        src={differenceImageUrl}
                                        alt="The Madonna Difference"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-1000"
                                    />
                                ) : (
                                    <>
                                        <div className="absolute inset-0 bg-blue-600/5 mix-blend-multiply" />
                                        <div className="absolute inset-0 flex items-center justify-center text-blue-100 transform group-hover:scale-105 transition-transform duration-1000">
                                            <Users size={300} strokeWidth={0.5} />
                                        </div>
                                    </>
                                )}
                            </div>
                            <div className="absolute -bottom-12 -left-12 bg-white p-12 rounded-[40px] shadow-2xl border border-gray-100 max-w-sm hidden md:block">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="flex -space-x-4">
                                        {[1, 2, 3, 4].map(i => (
                                            <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-blue-500 flex items-center justify-center text-[10px] font-bold text-white">
                                                UA
                                            </div>
                                        ))}
                                    </div>
                                    <div className="text-sm font-black text-gray-400 uppercase tracking-widest">Alumni Network</div>
                                </div>
                                <div className="text-2xl font-black text-gray-900 leading-tight">
                                    Over 10,000 successful alumni globally.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sanity Page Builder extras (e.g. video sections added in Studio) */}
            {(() => {
                const extraBlocks = (page?.pageBuilder || []).filter(
                    (b: any) => b._type === 'videoSection' || b._type === 'callToActionSection'
                );
                return extraBlocks.length > 0 ? <BlockRenderer blocks={extraBlocks} /> : null;
            })()}

            {/* CTA Section */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="bg-blue-600 rounded-[60px] p-12 md:p-24 text-center text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-48 -mt-48" />
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tight">Ready to join our family?</h2>
                            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto font-medium">
                                We admit children from age four (4), irrespective of religion, nationality, and social status. Begin your journey toward excellence today.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-6">
                                <button className="px-12 py-6 bg-white text-blue-600 rounded-2xl font-black text-xl hover:shadow-2xl transition-all">
                                    Apply Online
                                </button>
                                <button className="px-12 py-6 bg-blue-700 text-white border border-blue-500 rounded-2xl font-black text-xl hover:bg-blue-800 transition-all">
                                    Visit Campus
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
