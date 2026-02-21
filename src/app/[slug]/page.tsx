import { client } from "@/sanity/lib/client";
import { BlockRenderer } from "@/components/sections/BlockRenderer";
import { PortableText } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/client";
import { notFound } from "next/navigation";

export const revalidate = 60; // Revalidate every 60 seconds


export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug;
    const query = `*[_type == "page" && slug.current == $slug][0] { title }`;
    const page = await client.fetch(query, { slug });

    if (!page) return { title: 'Not Found' };

    return {
        title: `${page.title} | Madonna School Koforidua`,
    };
}

export default async function DynamicPage({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug;
    const query = `*[_type == "page" && slug.current == $slug][0]`;
    const page = await client.fetch(query, { slug });

    if (!page) {
        notFound();
    }

    // Check if the page uses the new Page Builder
    const hasPageBuilder = page.pageBuilder && page.pageBuilder.length > 0;

    return (
        <main className="min-h-screen">
            {/* If Page Builder is used, render the modular blocks */}
            {hasPageBuilder ? (
                <div className="pt-20">
                    <BlockRenderer blocks={page.pageBuilder} />
                </div>
            ) : (
                // Fallback to legacy simple content rendering
                <div className="pt-32 pb-20">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto">
                            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 tracking-tight">
                                {page.title}
                            </h1>
                            {page.heroImage && (
                                <div className="relative aspect-video rounded-[40px] overflow-hidden mb-12 shadow-2xl">
                                    <Image
                                        src={urlFor(page.heroImage).url()}
                                        alt={page.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            )}
                            {page.content && (
                                <div className="text-gray-600 font-medium space-y-6 text-xl leading-relaxed">
                                    <PortableText
                                        value={page.content}
                                        components={{
                                            block: {
                                                h1: ({ children }) => <h1 className="text-4xl md:text-5xl font-black text-gray-900 mt-12 mb-6">{children}</h1>,
                                                h2: ({ children }) => <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-10 mb-6">{children}</h2>,
                                                h3: ({ children }) => <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">{children}</h3>,
                                                normal: ({ children }) => <p className="mb-6">{children}</p>,
                                            },
                                        }}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}
