import { urlFor } from "@/sanity/lib/client";
import Image from "next/image";
import { CheckCircle2, Users } from "lucide-react";
import { PortableText } from "next-sanity";
import { HighlightedText } from "@/components/ui/HighlightedText";

export function HomeDifferenceSection({ data }: { data: any }) {
    const imageUrl = data.image ? urlFor(data.image).url() : null;

    return (
        <section className="py-16 md:py-32 bg-gray-50 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-24">
                    <div className="lg:w-1/2">
                        <div className="inline-block px-4 py-1 bg-blue-100 text-blue-700 text-xs font-black uppercase tracking-widest rounded-full mb-6">
                            {data.tag || "Our Distinction"}
                        </div>
                        <HighlightedText
                            text={data.title || "The Madonna Difference."}
                            as="h2"
                            className="text-4xl md:text-6xl font-black mb-10 text-gray-900 leading-tight tracking-tighter"
                        />
                        <div className="text-xl text-gray-600 mb-12 leading-relaxed font-medium">
                            {data.text ? (
                                <PortableText value={data.text} />
                            ) : (
                                <p>We go beyond the classroom.</p>
                            )}
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {data.bullets?.map((item: string, i: number) => (
                                <div key={i} className="flex items-center gap-4 text-gray-800 font-bold text-lg">
                                    <CheckCircle2 className="text-blue-600 w-6 h-6 flex-shrink-0" />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:w-1/2 relative">
                        <div className="aspect-[4/5] bg-gray-200 rounded-[60px] overflow-hidden shadow-3xl relative group">
                            {imageUrl ? (
                                <Image
                                    src={imageUrl}
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
    );
}
