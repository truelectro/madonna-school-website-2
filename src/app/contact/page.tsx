import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import HeroMouseOrb from "@/components/ui/HeroMouseOrb";
import { sanityFetch } from "@/sanity/lib/client";
import { BlockRenderer } from "@/components/sections/BlockRenderer";
import { ContactForm } from "@/components/ui/ContactForm";

export const revalidate = 0;

export const metadata = {
    title: 'Contact Us | Madonna School Koforidua',
    description: 'Get in touch with Madonna School. We are here to help with admission inquiries, curriculum questions, and more.',
};

export default async function ContactPage() {
    const contactQuery = `*[_type == "contactPage"][0]`;
    const contactData = (await sanityFetch<any>(contactQuery)) || {};

    const extraBlocks = contactData?.pageBuilder || [];
    return (
        <main className="min-h-screen">
            {/* Page Header */}
            <section className="bg-[#071322] pt-32 pb-24 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-400/5 rounded-full blur-[140px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
                <HeroMouseOrb />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-400/10 backdrop-blur-md rounded-full text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-8 border border-amber-400/20">
                        Get In Touch
                    </div>
                    <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tight">{contactData.headerTitle || <>Reach <span className="text-[#D4AF37]">Out</span></>}</h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
                        {contactData.headerSubtitle || "Questions about admission, curriculum, or visiting? We're here to help you every step of the way."}
                    </p>
                </div>
            </section>

            <div className="bg-[#FAF9F6] py-16 md:py-24">
                <section className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Contact Info */}
                        <div className="lg:col-span-1 space-y-6">
                            <div className="p-8 bg-white rounded-3xl border border-slate-200/80 shadow-sm">
                                <div className="w-12 h-12 bg-amber-400/15 text-[#B8860B] rounded-2xl flex items-center justify-center mb-5 border border-amber-400/20">
                                    <Phone size={22} />
                                </div>
                                <h3 className="text-lg font-bold mb-1 uppercase tracking-wider text-slate-900">Call Us</h3>
                                <p className="text-slate-800 font-bold text-base">{contactData.phone || "+233(0)342022770"}</p>
                                <p className="text-slate-500 text-xs mt-1">{contactData.workingHours || "Mon - Fri, 8:00 AM - 4:00 PM"}</p>
                            </div>

                            <div className="p-8 bg-[#09162A] rounded-3xl text-white shadow-xl border border-slate-800">
                                <div className="w-12 h-12 bg-amber-400/20 text-[#D4AF37] rounded-2xl flex items-center justify-center mb-5 border border-amber-400/30">
                                    <Mail size={22} />
                                </div>
                                <h3 className="text-lg font-bold mb-1 uppercase tracking-wider text-amber-400">Email Us</h3>
                                <p className="text-slate-200 font-semibold text-sm">{contactData.email || "madonnaschoolgh@gmail.com"}</p>
                                <p className="text-slate-400 text-xs mt-1">{contactData.responseTime || "We typically reply within 24 hours"}</p>
                            </div>

                            <div className="p-8 bg-white rounded-3xl text-slate-900 border border-slate-200/80 shadow-sm">
                                <div className="w-12 h-12 bg-slate-100 text-slate-800 rounded-2xl flex items-center justify-center mb-5 border border-slate-200">
                                    <MapPin size={22} />
                                </div>
                                <h3 className="text-lg font-bold mb-1 uppercase tracking-wider text-slate-900">Visit Us</h3>
                                <p className="text-slate-600 font-normal text-sm">{contactData.address || "Madonna School, P.O. Box 227, Koforidua, Eastern Region, Ghana"}</p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2 bg-white rounded-3xl p-8 md:p-14 shadow-xl border border-slate-200/80">
                            <div className="flex items-center gap-3 mb-10">
                                <div className="w-12 h-12 bg-amber-400/15 text-[#B8860B] rounded-2xl flex items-center justify-center border border-amber-400/20">
                                    <MessageSquare size={24} />
                                </div>
                                <h2 className="text-2xl font-extrabold text-slate-900 uppercase tracking-tight">Send a Message</h2>
                            </div>

                            <ContactForm />
                        </div>
                    </div>
                </section>
            </div>

            {extraBlocks.length > 0 && <BlockRenderer blocks={extraBlocks} />}
        </main>
    );
}
