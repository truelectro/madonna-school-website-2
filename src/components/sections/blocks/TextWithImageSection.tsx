import Image from "next/image";
import { PortableText } from "next-sanity";
import { urlFor } from "@/sanity/lib/client";

export function TextWithImageSection({ data }: { data: any }) {
    const isImageRight = data.imagePosition === "right";

    return (
        <section className="py-16 md:py-24 bg-white overflow-hidden relative">
            <div className="container mx-auto px-6">
                <div className={`flex flex-col lg:flex-row items-center gap-16 md:gap-24 ${isImageRight ? "lg:flex-row-reverse" : ""}`}>

                    {/* Image Area */}
                    <div className="w-full lg:w-1/2 relative group">
                        <div className="absolute inset-0 bg-blue-600/5 mix-blend-multiply rounded-[40px] md:rounded-[60px] transform -rotate-3 group-hover:rotate-0 transition-transform duration-700 pointer-events-none" />
                        <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] overflow-hidden rounded-[40px] md:rounded-[60px] shadow-2xl">
                            {data.image && (
                                <Image
                                    src={urlFor(data.image).url()}
                                    alt={data.heading || "Section Image"}
                                    fill
                                    className="object-cover transform group-hover:scale-105 transition-transform duration-1000"
                                />
                            )}
                        </div>
                    </div>

                    {/* Text Area */}
                    <div className="w-full lg:w-1/2">
                        {data.heading && (
                            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 leading-tight tracking-tight">
                                {data.heading}
                            </h2>
                        )}
                        {data.content && (
                            <div className="text-gray-600 font-medium space-y-6 text-lg md:text-xl leading-relaxed">
                                <PortableText
                                    value={data.content}
                                    components={{
                                        block: {
                                            h1: ({ children }) => <h1 className="text-4xl md:text-5xl font-black text-gray-900 mt-12 mb-6">{children}</h1>,
                                            h2: ({ children }) => <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-10 mb-6">{children}</h2>,
                                            h3: ({ children }) => <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">{children}</h3>,
                                            h4: ({ children }) => <h4 className="text-xl md:text-2xl font-bold text-gray-900 mt-6 mb-4">{children}</h4>,
                                            normal: ({ children }) => <p className="mb-6">{children}</p>,
                                            blockquote: ({ children }) => <blockquote className="border-l-4 border-blue-600 pl-6 italic text-gray-700 bg-blue-50/50 py-4 pr-4 rounded-r-2xl my-8">{children}</blockquote>,
                                        },
                                        list: {
                                            bullet: ({ children }) => <ul className="list-disc pl-6 space-y-2 mb-6">{children}</ul>,
                                            number: ({ children }) => <ol className="list-decimal pl-6 space-y-2 mb-6">{children}</ol>,
                                        },
                                        marks: {
                                            strong: ({ children }) => <strong className="font-bold text-gray-900">{children}</strong>,
                                            em: ({ children }) => <em className="italic">{children}</em>,
                                            link: ({ children, value }) => (
                                                <a href={value.href} className="text-blue-600 font-bold hover:underline underline-offset-4 transition-all">
                                                    {children}
                                                </a>
                                            ),
                                        }
                                    }}
                                />
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
}
