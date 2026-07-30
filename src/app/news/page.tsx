import { Newspaper, Calendar, ArrowRight } from "lucide-react";
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
            <section className="bg-[#071322] pt-32 pb-24 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-400/5 rounded-full blur-[140px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
                <HeroMouseOrb />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-400/10 backdrop-blur-md rounded-full text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-8 border border-amber-400/20">
                        From Our School
                    </div>
                    <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tight text-white">Latest <span className="text-[#D4AF37]">News</span></h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
                        Stay updated with the heartbeat of Madonna School.
                    </p>
                </div>
            </section>

            <div className="bg-[#FAF9F6] py-16 md:py-24">
                <section className="container mx-auto px-6">
                    {newsItems.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {newsItems.map((item: any, i: number) => (
                                <div key={i} className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300">
                                    <div className="aspect-video bg-slate-100 overflow-hidden relative">
                                        <div className="absolute top-5 left-5 z-10">
                                            <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[#B8860B] text-xs font-bold uppercase tracking-wider border border-slate-200/60">
                                                Update
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-8">
                                        <div className="flex items-center gap-2.5 text-slate-400 font-semibold text-xs mb-3 uppercase tracking-wider">
                                            <Calendar size={14} /> {new Date(item.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                        </div>
                                        <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#B8860B] transition-colors tracking-tight leading-snug">
                                            {item.title}
                                        </h2>
                                        <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-2 font-normal">
                                            {item.excerpt}
                                        </p>
                                        <div className="flex items-center gap-1.5 text-[#B8860B] font-bold text-xs uppercase tracking-wider group-hover:gap-3 transition-all">
                                            Read Full Story <ArrowRight size={16} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16 md:py-24 bg-white rounded-3xl border border-slate-200/80 shadow-sm">
                            <Newspaper size={48} className="text-slate-300 mx-auto mb-4" />
                            <h2 className="text-xl font-bold text-slate-400 uppercase tracking-wider">No news published yet</h2>
                            <p className="text-slate-500 mt-2 font-normal text-sm">Check back soon for announcements and articles from Madonna School.</p>
                        </div>
                    )}
                </section>

                {/* Newsletter */}
                <section className="container mx-auto px-6 mt-16 md:mt-24">
                    <div className="bg-[#071322] rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden border border-slate-800">
                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-400/10 backdrop-blur-md rounded-full text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-6 border border-amber-400/20">
                                Stay Connected
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">Don&apos;t miss an update.</h2>
                            <p className="text-slate-300 text-base md:text-lg mb-8 max-w-xl mx-auto font-normal">Subscribe to our newsletter for school announcements, event dates, and student achievements.</p>
                            <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="flex-1 px-6 py-3.5 bg-white/5 border border-white/15 rounded-xl focus:outline-none focus:border-amber-400 transition-colors text-white text-sm placeholder:text-slate-500"
                                />
                                <button className="px-8 py-3.5 bg-[#D4AF37] hover:bg-[#c49f27] text-[#071322] rounded-xl font-bold text-sm transition-all shadow-md shadow-amber-500/10">
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
