import { Mail, Phone, MapPin, Send, MessageSquare, Sparkles } from "lucide-react";
import HeroMouseOrb from "@/components/ui/HeroMouseOrb";

export const metadata = {
    title: 'Contact Us | Madonna School Koforidua',
    description: 'Get in touch with Madonna School. We are here to help with admission inquiries, curriculum questions, and more.',
};

export default function ContactPage() {
    return (
        <main className="min-h-screen">
            {/* Page Header */}
            <section className="bg-[#051324] pt-32 pb-24 text-white relative overflow-hidden">
                {/* Animated Gradient Orbs */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />
                <HeroMouseOrb />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full text-sky-200 text-sm font-bold tracking-wider uppercase mb-8 border border-white/10">
                        <Sparkles size={16} className="text-sky-400" /> Get In Touch
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tight">Reach <span className="text-sky-400">Out</span></h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-medium">
                        Questions about admission, curriculum, or visiting? We&apos;re here to help you every step of the way.
                    </p>
                </div>
            </section>

            <div className="bg-gray-50 py-20">
                <section className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        {/* Contact Info */}
                        <div className="lg:col-span-1 space-y-8">
                            <div className="p-10 bg-white rounded-[40px] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                <div className="w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-600 mb-6 shadow-sm">
                                    <Phone size={24} />
                                </div>
                                <h3 className="text-xl font-black mb-2 uppercase tracking-tight text-gray-900">Call Us</h3>
                                <p className="text-gray-700 font-bold">+233(0)342022770</p>
                                <p className="text-gray-400 text-sm mt-2">Mon - Fri, 8:00 AM - 4:00 PM</p>
                            </div>

                            <div className="p-10 bg-blue-600 rounded-[40px] text-white shadow-xl shadow-blue-500/20">
                                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-white mb-6 backdrop-blur-md">
                                    <Mail size={24} />
                                </div>
                                <h3 className="text-xl font-black mb-2 uppercase tracking-tight">Email Us</h3>
                                <p className="text-blue-100 font-bold">madonnaschoolgh@gmail.com</p>
                                <p className="text-blue-200/60 text-sm mt-2">We typically reply within 24 hours</p>
                            </div>

                            <div className="p-10 bg-[#051324] rounded-[40px] text-white border border-white/10">
                                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-sky-400 mb-6 backdrop-blur-md">
                                    <MapPin size={24} />
                                </div>
                                <h3 className="text-xl font-black mb-2 uppercase tracking-tight">Visit Us</h3>
                                <p className="text-gray-400 font-medium">Madonna School, Koforidua, Eastern Region, Ghana</p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2 bg-white rounded-[50px] p-10 md:p-20 shadow-2xl shadow-blue-500/5 border border-gray-100">
                            <div className="flex items-center gap-4 mb-12">
                                <div className="w-14 h-14 bg-sky-100 rounded-2xl flex items-center justify-center text-sky-600">
                                    <MessageSquare size={28} />
                                </div>
                                <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight">Send a Message</h2>
                            </div>

                            <form className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-sm font-black text-gray-400 uppercase tracking-widest pl-1">Full Name</label>
                                        <input type="text" className="w-full px-8 py-5 bg-gray-50 rounded-2xl border border-gray-100 focus:ring-2 focus:ring-sky-400 focus:bg-white transition-all font-medium outline-none" placeholder="John Doe" />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-sm font-black text-gray-400 uppercase tracking-widest pl-1">Email Address</label>
                                        <input type="email" className="w-full px-8 py-5 bg-gray-50 rounded-2xl border border-gray-100 focus:ring-2 focus:ring-sky-400 focus:bg-white transition-all font-medium outline-none" placeholder="john@example.com" />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-sm font-black text-gray-400 uppercase tracking-widest pl-1">Subject</label>
                                    <select className="w-full px-8 py-5 bg-gray-50 rounded-2xl border border-gray-100 focus:ring-2 focus:ring-sky-400 focus:bg-white transition-all font-medium appearance-none outline-none">
                                        <option>General Inquiry</option>
                                        <option>Admission Support</option>
                                        <option>Curriculum Questions</option>
                                        <option>Alumni Affairs</option>
                                    </select>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-sm font-black text-gray-400 uppercase tracking-widest pl-1">Your Message</label>
                                    <textarea rows={6} className="w-full px-8 py-5 bg-gray-50 rounded-2xl border border-gray-100 focus:ring-2 focus:ring-sky-400 focus:bg-white transition-all font-medium resize-none outline-none" placeholder="How can we help you?"></textarea>
                                </div>
                                <button className="w-full lg:w-max px-12 py-6 bg-sky-500 hover:bg-sky-600 text-white rounded-2xl font-black text-xl transition-all shadow-xl shadow-sky-500/20 flex items-center justify-center gap-3 group">
                                    Send Message <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
