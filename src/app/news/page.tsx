import { Newspaper, Calendar, ArrowRight, Sparkles } from "lucide-react";
import Link from 'next/link';
import { client, sanityFetch } from "@/sanity/lib/client";
import HeroMouseOrb from "@/components/ui/HeroMouseOrb";

export const revalidate = 0; // Disable static caching so changes show up instantly

export const metadata = {
    title: 'News & Updates | Madonna School Koforidua',
    description: 'Stay updated with the latest news, events, and announcements from Madonna School Koforidua.',
};

export default async function NewsPage() {
    const newsQuery = `*[_type == "news"] | order(publishedAt desc) {
        title,
        "slug": slug.current,
        publishedAt,
        "excerpt": pt::text(content)
    }`;
    const newsItems = await sanityFetch<any[]>(newsQuery) || [];

    return (
        <main className="min-h-screen">
            {/* Page Header */}
            <section className="bg-[#051324] pt-32 pb-24 text-white relative overflow-hidden">
                {/* Animated Gradient Orbs */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />
                <HeroMouseOrb />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full text-sky-200 text-sm font-bold tracking-wider uppercase mb-8 border border-white/10">
                        <Sparkles size={16} className="text-sky-400" /> From Our School
                    </div>
                    <h1 className="text-3xl md:text-8xl font-black mb-6 tracking-tight">Latest <span className="text-sky-400">News</span></h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-medium">
                        Stay updated with the heartbeat of Madonna School.
                    </p>
                </div>
            </section>

            <div className="bg-gray-50 py-20">
                <section className="container mx-auto px-6">
                    {newsItems.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {newsItems.map((item: any, i: number) => (
                                <div key={i} className="group cursor-pointer bg-white rounded-[40px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                    <div className="aspect-video bg-gray-100 overflow-hidden relative">
                                        <div className="absolute top-6 left-6 z-10">
                                            <span className="px-4 py-1 bg-white/90 backdrop-blur-md rounded-full text-sky-600 text-xs font-black uppercase tracking-widest border border-gray-100 italic">
                                                Update
                                            </span>
                                        </div>
                                        <div className="absolute inset-0 bg-sky-600/0 group-hover:bg-sky-600/10 transition-colors duration-500" />
                                    </div>
                                    <div className="p-8">
                                        <div className="flex items-center gap-3 text-gray-400 font-bold text-sm mb-4 uppercase tracking-widest">
                                            <Calendar size={16} /> {new Date(item.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                        </div>
                                        <h2 className="text-3xl font-black text-gray-900 mb-6 group-hover:text-sky-600 transition-colors tracking-tight leading-tight">
                                            {item.title}
                                        </h2>
                                        <p className="text-gray-500 text-lg leading-relaxed mb-8 line-clamp-2 font-medium">
                                            {item.excerpt}
                                        </p>
                                        <div className="flex items-center gap-2 text-sky-600 font-black text-sm uppercase tracking-widest group-hover:gap-4 transition-all">
                                            Read Full Story <ArrowRight size={20} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-24 bg-white rounded-[40px] border border-gray-100 shadow-sm">
                            <Newspaper size={64} className="text-gray-200 mx-auto mb-6" />
                            <h2 className="text-2xl font-black text-gray-400 uppercase tracking-widest">No news yet</h2>
                            <p className="text-gray-400 mt-4 font-medium">Check back soon for updates from Madonna School.</p>
                        </div>
                    )}
                </section>

                {/* Newsletter */}
                <section className="container mx-auto px-6 mt-20">
                    <div className="bg-[#051324] rounded-[60px] p-12 md:p-24 text-center text-white relative overflow-hidden border border-white/5">
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full text-sky-200 text-sm font-bold tracking-wider uppercase mb-8 border border-white/10">
                                <Sparkles size={14} className="text-sky-400" /> Stay Connected
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">Don&apos;t miss a thing.</h2>
                            <p className="text-gray-400 text-xl mb-12 max-w-xl mx-auto font-medium">Subscribe to our monthly newsletter for school updates, parent tips, and more.</p>
                            <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="flex-1 px-8 py-5 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-sky-400 transition-colors text-white placeholder:text-gray-500"
                                />
                                <button className="px-10 py-5 bg-sky-500 hover:bg-sky-600 text-white rounded-2xl font-black transition-all shadow-xl shadow-sky-500/20">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
