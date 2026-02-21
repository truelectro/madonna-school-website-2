import Image from "next/image";
import { urlFor } from "@/sanity/lib/client";

export function GallerySection({ data }: { data: any }) {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                {data.heading && (
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight">
                            {data.heading}
                        </h2>
                    </div>
                )}

                {data.images && data.images.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {data.images.map((img: any, i: number) => {
                            // Alternate spanning logic for a dynamic mosaic layout if needed,
                            // or keep it simple. We will keep it simple and beautiful.
                            return (
                                <div key={i} className="relative aspect-square rounded-[32px] overflow-hidden group shadow-lg">
                                    <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />
                                    <Image
                                        src={urlFor(img).url()}
                                        alt={`Gallery image ${i + 1}`}
                                        fill
                                        className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </section>
    );
}
