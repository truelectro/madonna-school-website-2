"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export function HomeHeroCarousel({ heroImageUrls }: { heroImageUrls: string[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (heroImageUrls.length <= 1) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % heroImageUrls.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [heroImageUrls.length]);

    return (
        <section className="relative z-30 -mt-24 md:-mt-32 lg:-mt-48 px-6 container mx-auto mb-12 md:mb-20 pointer-events-none">
            <div className="relative w-full aspect-[4/5] sm:aspect-video lg:aspect-[21/9] rounded-[40px] overflow-hidden shadow-2xl border-4 border-[#051324] bg-gray-200 pointer-events-auto group">
                {heroImageUrls.length > 0 ? (
                    <>
                        {heroImageUrls.map((url, index) => (
                            <Image
                                key={index}
                                src={url}
                                alt={`Hero Image ${index + 1}`}
                                fill
                                className={`object-cover object-center group-hover:scale-105 transition-all duration-1000 ease-in-out ${index === currentIndex ? "opacity-100 relative z-10" : "opacity-0 absolute inset-0 z-0"}`}
                                priority={index === 0}
                            />
                        ))}
                        {/* Carousel Indicators */}
                        {heroImageUrls.length > 1 && (
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                                {heroImageUrls.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentIndex(index)}
                                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-white w-8" : "bg-white/50 hover:bg-white/80"}`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        )}
                    </>
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-800 text-gray-500 font-bold relative z-10">
                        No Images Selected
                    </div>
                )}
                <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent z-[15] pointer-events-none" />
            </div>
        </section>
    );
}
