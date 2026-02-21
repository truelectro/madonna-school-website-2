import { BookOpen, GraduationCap, Users } from "lucide-react";

export default function CurriculumPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 bg-gray-50">
            {/* Header */}
            <section className="bg-indigo-600 py-24 mb-20 text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.1),transparent)]" />
                <div className="container mx-auto px-6 relative z-10">
                    <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tight leading-none uppercase">Curriculum <br />Offered</h1>
                    <p className="text-xl md:text-3xl text-indigo-100 max-w-3xl font-medium leading-relaxed">
                        According to the current education reforms by Ghana Education Service (GES), our Basic school has been redefined to provide a holistic and modern learning structure.
                    </p>
                </div>
            </section>

            <section className="container mx-auto px-6 max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {[
                        {
                            title: 'Kindergarten',
                            duration: '2 Years',
                            icon: BabyIcon,
                            color: 'bg-pink-500',
                            desc: 'Laying the foundational building blocks of learning through play, interaction, and structured early childhood curricula.'
                        },
                        {
                            title: 'Primary School',
                            duration: '6 Years',
                            icon: Users,
                            color: 'bg-blue-500',
                            desc: 'Developing core competencies in numeracy, literacy, science, and the arts to build a strong academic foundation.'
                        },
                        {
                            title: 'Junior High School',
                            duration: '3 Years',
                            icon: GraduationCap,
                            color: 'bg-indigo-600',
                            desc: 'Preparing students for higher education through rigorous academics, critical thinking, and advanced subject focus.'
                        }
                    ].map((level, i) => (
                        <div key={i} className="bg-white p-10 rounded-[40px] shadow-xl shadow-gray-200/50 border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
                            <div className={`w-16 h-16 ${level.color} rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg`}>
                                <level.icon size={32} />
                            </div>
                            <div className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-black uppercase tracking-widest rounded-full mb-4">
                                {level.duration}
                            </div>
                            <h3 className="text-3xl font-black text-gray-900 mb-4">{level.title}</h3>
                            <p className="text-gray-500 leading-relaxed font-medium">
                                {level.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}

// Custom simple Baby icon since it isn't imported
function BabyIcon({ size, className }: { size: number, className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <circle cx="12" cy="11.5" r="3" />
            <path d="M10 14h4a4 4 0 0 1 4 4v2H6v-2a4 4 0 0 1 4-4Z" />
            <path d="M12 21v1" />
        </svg>
    )
}
