import { BookOpen, GraduationCap, Users } from "lucide-react";
import HeroMouseOrb from "@/components/ui/HeroMouseOrb";
import { sanityFetch } from "@/sanity/lib/client";
import { BlockRenderer } from "@/components/sections/BlockRenderer";

export const revalidate = 0;

export const metadata = {
    title: 'Curriculum | Madonna School Koforidua',
    description: 'Learn about the curriculum offered at Madonna School — from Kindergarten to Junior High School.',
};

// Custom simple Baby icon since it isn't in lucide
function BabyIcon({ size, className }: { size: number, className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <circle cx="12" cy="11.5" r="3" />
            <path d="M10 14h4a4 4 0 0 1 4 4v2H6v-2a4 4 0 0 1 4-4Z" />
            <path d="M12 21v1" />
        </svg>
    )
}

// Default hardcoded levels (used when CMS data isn't populated yet)
const defaultLevels = [
    {
        title: 'Kindergarten',
        duration: '2 Years',
        description: 'Laying the foundational building blocks of learning through play, interaction, and structured early childhood curricula.'
    },
    {
        title: 'Primary School',
        duration: '6 Years',
        description: 'Developing core competencies in numeracy, literacy, science, and the arts to build a strong academic foundation.'
    },
    {
        title: 'Junior High School',
        duration: '3 Years',
        description: 'Preparing students for higher education through rigorous academics, critical thinking, and advanced subject focus.'
    }
];

const iconMap = [BabyIcon, Users, GraduationCap];
const colorMap = ['bg-pink-500', 'bg-sky-500', 'bg-blue-600'];
const shadowMap = ['shadow-pink-500/20', 'shadow-sky-500/20', 'shadow-blue-600/20'];

export default async function CurriculumPage() {
    const query = `*[_type == "curriculumPage"][0]`;
    const data = (await sanityFetch<any>(query)) || {};

    const headerTitle = data.headerTitle || "Curriculum Offered";
    const headerSubtitle = data.headerSubtitle || "According to the current education reforms by Ghana Education Service (GES), our Basic school has been redefined to provide a holistic and modern learning structure.";
    const levels = data.levels?.length > 0 ? data.levels : defaultLevels;
    const extraBlocks = data.pageBuilder || [];

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
                        Academics
                    </div>
                    <h1 className="text-3xl md:text-8xl font-black mb-6 tracking-tight">{headerTitle.split(' ').slice(0, -1).join(' ')} <br /><span className="text-sky-400">{headerTitle.split(' ').slice(-1)[0]}</span></h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-medium">
                        {headerSubtitle}
                    </p>
                </div>
            </section>

            <div className="bg-gray-50 py-20">
                <section className="container mx-auto px-6 max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {levels.map((level: any, i: number) => {
                            const Icon = iconMap[i % iconMap.length];
                            const color = colorMap[i % colorMap.length];
                            const shadow = shadowMap[i % shadowMap.length];
                            return (
                                <div key={i} className="bg-white p-10 rounded-[40px] shadow-xl shadow-gray-200/50 border border-gray-100 hover:-translate-y-2 transition-transform duration-300 group">
                                    <div className={`w-16 h-16 ${color} rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg ${shadow} group-hover:scale-110 transition-transform`}>
                                        <Icon size={32} />
                                    </div>
                                    <div className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-black uppercase tracking-widest rounded-full mb-4">
                                        {level.duration}
                                    </div>
                                    <h3 className="text-3xl font-black text-gray-900 mb-4">{level.title}</h3>
                                    <p className="text-gray-500 leading-relaxed font-medium">
                                        {level.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </section>
            </div>

            {extraBlocks.length > 0 && <BlockRenderer blocks={extraBlocks} />}
        </main>
    );
}
