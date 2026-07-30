import { BookOpen, GraduationCap, Users, CheckCircle2, FileText, Calendar, Clock, ArrowRight, ShieldAlert, Baby } from "lucide-react";
import HeroMouseOrb from "@/components/ui/HeroMouseOrb";
import { sanityFetch } from "@/sanity/lib/client";
import { BlockRenderer } from "@/components/sections/BlockRenderer";

export const revalidate = 0;

export const metadata = {
    title: 'Admissions & Curriculum | Madonna School Koforidua',
    description: 'Learn about the admission rules, processes, requirements, and curriculum for Madonna School Koforidua.',
};

// --- Defaults ---
const defaultGeneralRules = [
    "The School admits children from age four (4), irrespective of religion, nationality and social status.",
    "It is expected that the religious beliefs and practices of the Catholic Church be respected once admitted.",
    "Admission is entirely at the sole discretion of the school administration, which reserves the right to accept or refuse any child without explanation.",
    "The school may admit pupils to any class at any time during the academic term/year, subject to vacancy availability.",
    "Where there is a possibility of admission, the child must pass an entrance examination and/or an interview."
];

const defaultKg1Rules = [
    "Only children who turn age four (4) by September of the year in question qualify for KG 1 admission.",
    "Parents must complete a registration form and the child must pass a Kindergarten Readiness Test/Assessment.",
    "The School also interviews the parents/guardians of the child."
];

const defaultWithdrawalRules = [
    "Parents are required to submit a written notice to the Headmistress whenever a child leaves.",
    "This notice must be submitted at least one month before the child leaves.",
    "A child may be withdrawn temporarily (not exceeding one calendar month) and re-admitted upon advance payment of fees.",
    "A child missing two weeks of school without notice is considered withdrawn, and full term fees must be paid."
];

const defaultOnAdmissionRequirements = [
    'Submit a medical report indicating any special health needs before the first day.',
    'Sign an undertaking understanding the rules and regulations.',
    'Ensure the child abides by school regulations to maintain discipline.'
];

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

function BabyIcon({ size, className }: { size: number, className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <circle cx="12" cy="11.5" r="3" />
            <path d="M10 14h4a4 4 0 0 1 4 4v2H6v-2a4 4 0 0 1 4-4Z" />
            <path d="M12 21v1" />
        </svg>
    )
}

const iconMap = [BabyIcon, Users, GraduationCap];
const colorMap = ['bg-pink-500', 'bg-sky-500', 'bg-blue-600'];
const shadowMap = ['shadow-pink-500/20', 'shadow-sky-500/20', 'shadow-blue-600/20'];

export default async function AdmissionsPage() {
    const query = `*[_type == "admissionsPage"][0]`;
    const data = (await sanityFetch<any>(query)) || {};

    const headerTitle = data.headerTitle || "Admissions";
    const headerSubtitle = data.headerSubtitle || "The journey toward excellence starts here. Learn about our admission rules, processes, and curriculum.";

    const policyTitle = data.policyTitle || "Admission Policy";
    const generalRules = data.generalRules?.length > 0 ? data.generalRules : defaultGeneralRules;
    const kg1Rules = data.kg1Rules?.length > 0 ? data.kg1Rules : defaultKg1Rules;
    const withdrawalRules = data.withdrawalRules?.length > 0 ? data.withdrawalRules : defaultWithdrawalRules;
    const onAdmissionNote = data.onAdmissionNote || "Ignorance of these rules and regulations will not be an excuse for any infringement, for which sanctions will be strictly applied.";
    const onAdmissionRequirements = data.onAdmissionRequirements?.length > 0 ? data.onAdmissionRequirements : defaultOnAdmissionRequirements;

    const curriculumTitle = data.curriculumTitle || "Curriculum Offered";
    const curriculumSubtitle = data.curriculumSubtitle || "According to the current education reforms by Ghana Education Service (GES), our Basic school has been redefined to provide a holistic and modern learning structure.";
    const levels = data.levels?.length > 0 ? data.levels : defaultLevels;

    const extraBlocks = data.pageBuilder || [];

    return (
        <main className="min-h-screen">
            {/* Page Header */}
            <section className="bg-[#071322] pt-32 pb-24 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-400/5 rounded-full blur-[140px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
                <HeroMouseOrb />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-400/10 backdrop-blur-md rounded-full text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-8 border border-amber-400/20">
                        Join Our Family
                    </div>
                    {headerTitle.split(' ').length > 1 ? (
                        <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tight">
                            {headerTitle.split(' ').slice(0, -1).join(' ')} <br /><span className="text-[#D4AF37]">{headerTitle.split(' ').slice(-1)[0]}</span>
                        </h1>
                    ) : (
                        <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tight">
                            {headerTitle}
                        </h1>
                    )}
                    <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
                        {headerSubtitle}
                    </p>
                </div>
            </section>

            {/* Combined Content Area */}
            <div className="bg-[#FAF9F6] py-16 md:py-24">
                <section className="container mx-auto px-6 max-w-7xl">
                    <div className="flex flex-col lg:flex-row gap-16">

                        {/* Main Content (Rules + Curriculum) */}
                        <div className="lg:w-2/3">
                            {/* Policy Section */}
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">{policyTitle}</h2>
                            <h3 className="text-xl font-bold text-slate-900 mb-6 uppercase tracking-wide border-b-2 border-amber-400/80 pb-2 inline-block">General Rules</h3>
                            <div className="space-y-5 mb-14">
                                {generalRules.map((rule: string, i: number) => (
                                    <div key={i} className="flex gap-4 group items-start">
                                        <div className="mt-1 text-[#B8860B] flex-shrink-0"><CheckCircle2 size={20} /></div>
                                        <p className="text-base text-slate-600 leading-relaxed font-normal group-hover:text-slate-900 transition-colors">{rule}</p>
                                    </div>
                                ))}
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-6 uppercase tracking-wide border-b-2 border-amber-400/80 pb-2 flex items-center gap-3 inline-flex">
                                <Baby size={24} className="text-[#B8860B]" /> KG 1 Admission
                            </h3>
                            <div className="space-y-4 mb-14">
                                {kg1Rules.map((rule: string, i: number) => (
                                    <div key={i} className="flex gap-4 group items-start">
                                        <div className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-amber-400/15 text-[#B8860B] flex items-center justify-center font-bold text-xs border border-amber-400/30">{i + 1}</div>
                                        <p className="text-base text-slate-600 leading-relaxed font-normal">{rule}</p>
                                    </div>
                                ))}
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-6 uppercase tracking-wide border-b-2 border-amber-400/80 pb-2 flex items-center gap-3 inline-flex">
                                <ShieldAlert size={24} className="text-[#B8860B]" /> Withdrawal Policy
                            </h3>
                            <div className="bg-amber-50/50 p-8 rounded-2xl border border-amber-200/60 mb-16">
                                <ul className="space-y-4">
                                    {withdrawalRules.map((rule: string, i: number) => (
                                        <li key={i} className="flex gap-3 items-start text-slate-800 font-medium text-sm md:text-base leading-relaxed">
                                            <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#B8860B] flex-shrink-0" />
                                            {rule}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Curriculum Section */}
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">{curriculumTitle}</h2>
                            <p className="text-base md:text-lg text-slate-600 font-normal mb-8 max-w-3xl leading-relaxed">
                                {curriculumSubtitle}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                                {levels.map((level: any, i: number) => {
                                    const Icon = iconMap[i % iconMap.length];
                                    return (
                                        <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/80 hover:shadow-md transition-all duration-300 group">
                                            <div className="w-12 h-12 bg-[#071322] rounded-xl flex items-center justify-center text-[#D4AF37] mb-5 border border-slate-700">
                                                <Icon size={24} />
                                            </div>
                                            <div className="inline-block px-3 py-1 bg-amber-400/10 text-[#B8860B] text-xs font-bold uppercase tracking-wider rounded-full mb-3 border border-amber-400/20">
                                                {level.duration}
                                            </div>
                                            <h3 className="text-xl font-bold text-slate-900 mb-2">{level.title}</h3>
                                            <p className="text-slate-600 leading-relaxed font-normal text-sm">
                                                {level.description}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>

                        </div>

                        {/* Sidebar */}
                        <div className="lg:w-1/3">
                            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-lg mb-10 sticky top-32">
                                <h2 className="text-xl font-extrabold text-slate-900 mb-6 border-b border-slate-100 pb-4 uppercase tracking-wider">On Admission</h2>
                                <p className="text-slate-500 mb-6 font-normal italic text-sm leading-relaxed">
                                    {onAdmissionNote}
                                </p>
                                <ul className="space-y-4 mb-8">
                                    {onAdmissionRequirements.map((req: string, i: number) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-700 font-semibold text-sm">
                                            <CheckCircle2 className="text-[#B8860B] w-5 h-5 flex-shrink-0 mt-0.5" />
                                            {req}
                                        </li>
                                    ))}
                                </ul>
                                <button className="w-full py-4 bg-[#D4AF37] hover:bg-[#c49f27] text-[#071322] rounded-2xl font-bold text-base transition-all shadow-md shadow-amber-500/10 flex items-center justify-center gap-2 group">
                                    Apply Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {extraBlocks.length > 0 && <BlockRenderer blocks={extraBlocks} />}
        </main>
    );
}
