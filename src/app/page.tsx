import { ArrowRight, GraduationCap, Users, Calendar, Award, CheckCircle2, TrendingUp, Sparkles, ShieldCheck } from "lucide-react";
import Link from 'next/link';
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/client";
import Image from "next/image";

export const revalidate = 60; // Revalidate every 60 seconds

export default async function Home() {
    const query = `*[_type == "page" && slug.current == "home"][0]`;
    const page = await client.fetch(query) || {};

    const heroImageUrl = page?.heroImage ? urlFor(page.heroImage).url() : null;

    // Find the welcome section to find if it has an image
    const welcomeSection = page?.pageBuilder?.find((block: any) => block._type === 'textWithImageSection' && block.heading?.includes('Welcome') || block.heading?.includes('Celebrating'));
    const welcomeImageUrl = welcomeSection?.image ? urlFor(welcomeSection.image).url() : null;

    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-[95vh] flex items-center bg-blue-900 text-white overflow-hidden pt-20">
                {heroImageUrl && (
                    <Image
                        src={heroImageUrl}
                        alt="Madonna School Campus"
                        fill
                        className="object-cover object-center md:object-top opacity-60 mix-blend-overlay"
                        priority
                    />
                )}

                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className={"absolute inset-0 z-10 " + (heroImageUrl ? "bg-blue-900/60" : "bg-black/40")} />
                    {/* Animated Gradient Orbs */}
                    <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] animate-pulse" />
                    <div className="absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[120px] animate-pulse delay-700" />
                </div>

                <div className="container mx-auto px-6 relative z-20">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/30 backdrop-blur-md rounded-full text-blue-200 text-sm font-bold tracking-wider uppercase mb-8 border border-blue-400/30">
                            <Sparkles size={16} /> Sacrifice • Success • Service
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black mb-10 leading-[1.05] tracking-tight">
                            Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Leaders</span> <br />Are Built.
                        </h1>
                        <p className="text-xl md:text-2xl mb-12 text-gray-200 leading-relaxed max-w-2xl font-light">
                            Providing a holistic education that empowers students with critical thinking, moral integrity, and leadership skills. A legacy of excellence since 1964.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6">
                            <Link href="/admission" className="px-10 py-5 bg-blue-600 hover:bg-blue-700 transition-all rounded-2xl font-bold text-lg shadow-2xl shadow-blue-500/40 flex items-center justify-center gap-3 group">
                                Apply Today <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="/about" className="px-10 py-5 bg-white/10 hover:bg-white/20 transition-all backdrop-blur-2xl border border-white/20 rounded-2xl font-bold text-lg flex items-center justify-center">
                                Our History
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Floating Metrics */}
                <div className="absolute bottom-16 right-6 lg:right-24 z-20 hidden lg:block">
                    <div className="bg-white/5 backdrop-blur-3xl border border-white/10 p-10 rounded-[40px] flex gap-16">
                        {[
                            { label: 'Founding Year', value: '1964', icon: Calendar },
                            { label: 'B.E.C.E Results', value: 'Top 1%', icon: TrendingUp },
                            { label: 'Regional Champions', value: '5-Time', icon: Award },
                        ].map((stat, i) => (
                            <div key={i} className="flex flex-col items-center">
                                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-4 text-blue-400">
                                    <stat.icon size={24} />
                                </div>
                                <div className="text-3xl font-black text-white mb-1 tracking-tighter">{stat.value}</div>
                                <div className="text-blue-300/60 text-[10px] font-black uppercase tracking-[0.2em]">{stat.label}</div>
                            </div>
                        ))}
                    </div>
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
                                <div className="absolute inset-0 bg-blue-600/5 mix-blend-multiply" />
                                <div className="absolute inset-0 flex items-center justify-center text-blue-100 transform group-hover:scale-105 transition-transform duration-1000">
                                    <Users size={300} strokeWidth={0.5} />
                                </div>
                            </div>
                            <div className="absolute -bottom-12 -left-12 bg-white p-12 rounded-[40px] shadow-2xl border border-gray-100 max-w-sm">
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
