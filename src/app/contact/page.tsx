import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen pt-32 pb-20">
            <section className="container mx-auto px-6 mb-20 text-center">
                <h1 className="text-5xl md:text-8xl font-black text-gray-900 mb-8 tracking-tighter uppercase">Reach <span className="text-blue-600">Out</span></h1>
                <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
                    Questions about admission, curriculum, or visiting? We're here to help you every step of the way.
                </p>
            </section>

            <section className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/* Contact Info */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="p-10 bg-gray-50 rounded-[40px] border border-gray-100">
                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 mb-6 shadow-sm">
                                <Phone size={24} />
                            </div>
                            <h3 className="text-xl font-black mb-2 uppercase tracking-tight">Call Us</h3>
                            <p className="text-gray-500 font-bold">+233(0)342022770</p>
                            <p className="text-gray-400 text-sm mt-2">Mon - Fri, 8:00 AM - 4:00 PM</p>
                        </div>

                        <div className="p-10 bg-blue-600 rounded-[40px] text-white">
                            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-white mb-6 backdrop-blur-md">
                                <Mail size={24} />
                            </div>
                            <h3 className="text-xl font-black mb-2 uppercase tracking-tight">Email Us</h3>
                            <p className="text-blue-100 font-bold">madonnaschoolgh@gmail.com</p>
                            <p className="text-blue-200/60 text-sm mt-2">We typically reply within 24 hours</p>
                        </div>

                        <div className="p-10 bg-gray-900 rounded-[40px] text-white">
                            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-6 backdrop-blur-md">
                                <MapPin size={24} />
                            </div>
                            <h3 className="text-xl font-black mb-2 uppercase tracking-tight">Visit Us</h3>
                            <p className="text-gray-400 font-medium">123 Scholar Avenue, Education Hub City, State 12345</p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2 bg-white rounded-[50px] p-10 md:p-20 shadow-2xl shadow-blue-500/5 border border-gray-50">
                        <div className="flex items-center gap-4 mb-12">
                            <MessageSquare className="text-blue-600" size={32} />
                            <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight">Send a Message</h2>
                        </div>

                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-sm font-black text-gray-400 uppercase tracking-widest pl-1">Full Name</label>
                                    <input type="text" className="w-full px-8 py-5 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all font-medium" placeholder="John Doe" />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-sm font-black text-gray-400 uppercase tracking-widest pl-1">Email Address</label>
                                    <input type="email" className="w-full px-8 py-5 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all font-medium" placeholder="john@example.com" />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label className="text-sm font-black text-gray-400 uppercase tracking-widest pl-1">Subject</label>
                                <select className="w-full px-8 py-5 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all font-medium appearance-none">
                                    <option>General Inquiry</option>
                                    <option>Admission Support</option>
                                    <option>Curriculum Questions</option>
                                    <option>Alumni Affairs</option>
                                </select>
                            </div>
                            <div className="space-y-3">
                                <label className="text-sm font-black text-gray-400 uppercase tracking-widest pl-1">Your Message</label>
                                <textarea rows={6} className="w-full px-8 py-5 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all font-medium resize-none" placeholder="How can we help you?"></textarea>
                            </div>
                            <button className="w-full lg:w-max px-12 py-6 bg-blue-600 text-white rounded-2xl font-black text-xl hover:bg-blue-700 transition-all flex items-center justify-center gap-3">
                                Send Message <Send size={20} />
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}
