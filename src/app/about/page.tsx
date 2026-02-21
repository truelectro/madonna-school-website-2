import { ShieldCheck, Target, Eye, History as HistoryIcon, Award } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen pt-32 pb-20">
            {/* Page Header */}
            <section className="bg-gray-50 py-20 mb-20 border-b border-gray-100">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight">Our <span className="text-blue-600">Story</span></h1>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
                        Discover the legacy, values, and vision that drive Madonna School towards academic and moral excellence.
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="container mx-auto px-6 mb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="p-12 bg-blue-600 rounded-[50px] text-white overflow-hidden relative group">
                        <div className="absolute top-0 right-0 p-12 text-white/5 transform group-hover:scale-110 transition-transform duration-700">
                            <Target size={200} />
                        </div>
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-md">
                                <Target size={32} />
                            </div>
                            <h2 className="text-3xl font-black mb-6 uppercase tracking-tighter">Our Mission</h2>
                            <p className="text-xl text-blue-50/90 leading-relaxed font-medium">
                                To provide a holistic and rigorous education that empowers students with critical thinking, moral integrity, and the leadership skills necessary to excel in a rapidly changing global society.
                            </p>
                        </div>
                    </div>

                    <div className="p-12 bg-gray-900 rounded-[50px] text-white overflow-hidden relative group">
                        <div className="absolute top-0 right-0 p-12 text-white/5 transform group-hover:scale-110 transition-transform duration-700">
                            <Eye size={200} />
                        </div>
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-md">
                                <Eye size={32} />
                            </div>
                            <h2 className="text-3xl font-black mb-6 uppercase tracking-tighter">Our Vision</h2>
                            <p className="text-xl text-gray-400 leading-relaxed font-medium">
                                To be the leading center of educational excellence in the region, recognized for producing graduates who are not only academically brilliant but also ethically grounded and socially responsible.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* History Section */}
            <section className="container mx-auto px-6 mb-32">
                <div className="flex flex-col lg:flex-row items-center gap-20">
                    <div className="lg:w-1/2">
                        <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-8">
                            <HistoryIcon size={32} />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 tracking-tight">Founded in 1964. Built for Infinity.</h2>
                        <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-medium">
                            <p>
                                Madonna School was established with a clear mandate: to create an oasis of learning where discipline and academic rigor are inseparable. Over the decades, we have evolved from a small local school into a beacon of educational distinction.
                            </p>
                            <p>
                                Our journey has been marked by continuous innovation, from building state-of-the-art libraries to integrating digital learning platforms, all while maintaining the core values that have defined us for over 60 years.
                            </p>
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { label: 'Founded', val: '1964' },
                                { label: 'Excellence', val: '100%' },
                                { label: 'Faculty', val: '50+' },
                                { label: 'Awards', val: '200+' },
                            ].map((stat, i) => (
                                <div key={i} className="p-10 bg-gray-50 rounded-3xl text-center border border-gray-100">
                                    <div className="text-4xl font-black text-blue-600 mb-2">{stat.val}</div>
                                    <div className="text-gray-400 font-bold text-xs uppercase tracking-widest">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="bg-gray-900 py-32 text-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20 md:mb-32">
                        <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Our Core Values</h2>
                        <p className="text-xl text-gray-400 font-medium tracking-tight">The pillars that sustain our institution.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {[
                            { title: 'Integrity', desc: 'Acting with honesty and strong moral principles at all times.' },
                            { title: 'Service', desc: 'Dedicating ourselves to the growth and welfare of our community.' },
                            { title: 'Innovation', desc: 'Embracing new ideas and methods to enhance learning.' },
                            { title: 'Discipline', desc: 'Fostering the self-control necessary for personal and academic mastery.' },
                        ].map((v, i) => (
                            <div key={i} className="space-y-6">
                                <div className="text-blue-500 font-black text-6xl opacity-20">0{i + 1}</div>
                                <h3 className="text-2xl font-bold">{v.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-lg">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
