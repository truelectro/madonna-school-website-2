import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/client";

export function HeroSection({ data }: { data: any }) {
    return (
        <section className="relative min-h-[90vh] flex items-center bg-blue-900 text-white overflow-hidden py-24">
            {data.backgroundImage && (
                <div className="absolute inset-0 overflow-hidden z-0">
                    <Image
                        src={urlFor(data.backgroundImage).url()}
                        alt="Hero Background"
                        fill
                        className="object-cover opacity-50 mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-black/40 z-10" />
                </div>
            )}
            {!data.backgroundImage && (
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 z-10" />
                    <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] animate-pulse" />
                    <div className="absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[120px] animate-pulse delay-700" />
                </div>
            )}

            <div className="container mx-auto px-6 relative z-20">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.05] tracking-tight">
                        {data.heading}
                    </h1>
                    {data.subheading && (
                        <p className="text-xl md:text-2xl mb-12 text-gray-200 leading-relaxed max-w-3xl mx-auto font-light">
                            {data.subheading}
                        </p>
                    )}
                    {data.ctaLabel && data.ctaLink && (
                        <div className="flex justify-center">
                            <Link href={data.ctaLink} className="px-10 py-5 bg-blue-600 hover:bg-blue-700 transition-all rounded-2xl font-bold text-lg shadow-2xl shadow-blue-500/40 inline-flex items-center justify-center group">
                                {data.ctaLabel}
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
