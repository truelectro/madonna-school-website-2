import { Newspaper, Calendar, ArrowRight } from "lucide-react";
import Link from 'next/link';
import { client } from "@/sanity/lib/client";

export const revalidate = 60; // Revalidate every 60 seconds

export default async function NewsPage() {
    const newsQuery = `*[_type == "news"] | order(publishedAt desc) {
        title,
        "slug": slug.current,
        publishedAt,
        "excerpt": pt::text(content)
    }`;
    const newsItems = await client.fetch(newsQuery) || [];

    return (
        <main className="min-h-screen pt-32 pb-20">
            <section className="container mx-auto px-6 mb-20">
                <div className="flex flex-col md:flex-row justify-between items-end gap-10 border-b border-gray-100 pb-16">
                    <div className="max-w-2xl">
                        <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight">Latest <span className="text-blue-600">News</span></h1>
                        <p className="text-xl text-gray-500 font-medium">Stay updated with the heartbeat of Madonna School.</p>
                    </div>
                    <Newspaper size={80} className="text-blue-50/50 hidden md:block" />
                </div>
            </section>

            <section className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {newsItems.map((item, i) => (
                        <div key={i} className="group cursor-pointer">
                            <div className="aspect-video bg-gray-100 rounded-[40px] mb-8 overflow-hidden relative">
                                <div className="absolute top-6 left-6 z-10">
                                    <span className="px-4 py-1 bg-white/90 backdrop-blur-md rounded-full text-blue-600 text-xs font-black uppercase tracking-widest border border-gray-100 italic">
                                        Update
                                    </span>
                                </div>
                                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors duration-500" />
                            </div>
                            <div className="px-4">
                                <div className="flex items-center gap-3 text-gray-400 font-bold text-sm mb-4 uppercase tracking-widest">
                                    <Calendar size={16} /> {new Date(item.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                </div>
                                <h2 className="text-3xl font-black text-gray-900 mb-6 group-hover:text-blue-600 transition-colors tracking-tight leading-tight">
                                    {item.title}
                                </h2>
                                <p className="text-gray-500 text-lg leading-relaxed mb-8 line-clamp-2 font-medium">
                                    {item.excerpt}
                                </p>
                                <div className="flex items-center gap-2 text-blue-600 font-black text-sm uppercase tracking-widest group-hover:gap-4 transition-all">
                                    Read Full Story <ArrowRight size={20} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Newsletter */}
            <section className="container mx-auto px-6 mt-32">
                <div className="bg-gray-900 rounded-[60px] p-12 md:p-24 text-center text-white relative overflow-hidden">
                    <div className="absolute -top-12 -left-12 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
                    <h2 className="text-4xl font-black mb-8 tracking-tight">Don't miss a thing.</h2>
                    <p className="text-gray-400 text-xl mb-12 max-w-xl mx-auto font-medium">Subscribe to our monthly newsletter for school updates, parent tips, and more.</p>
                    <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="flex-1 px-8 py-5 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-blue-500 transition-colors"
                        />
                        <button className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-black hover:bg-blue-700 transition-all">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}
