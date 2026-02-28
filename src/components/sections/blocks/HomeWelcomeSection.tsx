import { urlFor } from "@/sanity/lib/client";
import Image from "next/image";

import { PortableText } from "next-sanity";
import { HighlightedText } from "@/components/ui/HighlightedText";

export function HomeWelcomeSection({ data }: { data: any }) {
    const welcomeImageUrl = data.image ? urlFor(data.image).url() : null;

    return (
        <section className="py-16 md:py-24 bg-blue-50 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className={`mx-auto bg-white rounded-[40px] shadow-2xl shadow-blue-900/5 border border-blue-100 ${welcomeImageUrl
                    ? 'max-w-7xl flex flex-col lg:flex-row items-center gap-12 lg:gap-16 p-8 md:p-12'
                    : 'max-w-4xl p-12 md:p-16'
                    }`}>
                    {welcomeImageUrl && (
                        <div className="w-full lg:w-1/2 relative aspect-square lg:aspect-[4/5] rounded-[30px] overflow-hidden shadow-lg border border-gray-100 flex-shrink-0">
                            <Image
                                src={welcomeImageUrl}
                                alt={data.title || "Welcome to Madonna School"}
                                fill
                                className="object-cover"
                            />
                        </div>
                    )}

                    <div className={welcomeImageUrl ? "w-full lg:w-1/2" : ""}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 text-sm font-bold tracking-wider uppercase mb-8 rounded-full">
                            {data.tag || "Welcome Message"}
                        </div>
                        <HighlightedText
                            text={data.title || "Celebrating 60 Years of Excellence."}
                            as="h2"
                            className="text-3xl md:text-5xl font-black text-gray-900 mb-8 leading-tight tracking-tight"
                        />
                        <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-medium">
                            {data.text ? (
                                <PortableText value={data.text} />
                            ) : (
                                <p>Welcome to Madonna School.</p>
                            )}
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
    );
}
