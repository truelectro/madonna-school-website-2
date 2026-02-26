import { BookOpen, GraduationCap, Users, Sparkles } from "lucide-react";
import HeroMouseOrb from "@/components/ui/HeroMouseOrb";

export const metadata = {
    title: 'Curriculum | Madonna School Koforidua',
    description: 'Learn about the curriculum offered at Madonna School — from Kindergarten to Junior High School.',
};

// Custom simple Baby icon since it isn't imported from lucide
function BabyIcon({ size, className }: { size: number, className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <circle cx="12" cy="11.5" r="3" />
            <path d="M10 14h4a4 4 0 0 1 4 4v2H6v-2a4 4 0 0 1 4-4Z" />
            <path d="M12 21v1" />
        </svg>
    )
}

export default function CurriculumPage() {
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
                        <Sparkles size={16} className="text-sky-400" /> Academics
                    </div>
                    <h1 className="text-3xl md:text-8xl font-black mb-6 tracking-tight">Curriculum <br /><span className="text-sky-400">Offered</span></h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-medium">
                        According to the current education reforms by Ghana Education Service (GES), our Basic school has been redefined to provide a holistic and modern learning structure.
                    </p>
                </div>
            </section>

            <div className="bg-gray-50 py-20">
                <section className="container mx-auto px-6 max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            {
                                title: 'Kindergarten',
                                duration: '2 Years',
                                icon: BabyIcon,
                                color: 'bg-pink-500',
                                shadow: 'shadow-pink-500/20',
                                desc: 'Laying the foundational building blocks of learning through play, interaction, and structured early childhood curricula.'
                            },
                            {
                                title: 'Primary School',
                                duration: '6 Years',
                                icon: Users,
                                color: 'bg-sky-500',
                                shadow: 'shadow-sky-500/20',
                                desc: 'Developing core competencies in numeracy, literacy, science, and the arts to build a strong academic foundation.'
                            },
                            {
                                title: 'Junior High School',
                                duration: '3 Years',
                                icon: GraduationCap,
                                color: 'bg-blue-600',
                                shadow: 'shadow-blue-600/20',
                                desc: 'Preparing students for higher education through rigorous academics, critical thinking, and advanced subject focus.'
                            }
                        ].map((level, i) => (
                            <div key={i} className="bg-white p-10 rounded-[40px] shadow-xl shadow-gray-200/50 border border-gray-100 hover:-translate-y-2 transition-transform duration-300 group">
                                <div className={`w-16 h-16 ${level.color} rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg ${level.shadow} group-hover:scale-110 transition-transform`}>
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
            </div>
        </main>
    );
}
