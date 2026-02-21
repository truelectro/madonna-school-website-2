import { CheckCircle2, FileText, Calendar, Clock, ArrowRight, ShieldAlert, Baby, Sparkles, GraduationCap } from "lucide-react";

export const metadata = {
    title: 'Admission Policy | Madonna School Koforidua',
    description: 'Learn about the admission rules, processes, and requirements for Madonna School Koforidua.',
};

export default function AdmissionProcessPage() {
    return (
        <main className="min-h-screen">
            {/* Page Header */}
            <section className="bg-[#051324] pt-32 pb-24 text-white relative overflow-hidden">
                {/* Animated Gradient Orbs */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full text-sky-200 text-sm font-bold tracking-wider uppercase mb-8 border border-white/10">
                        <Sparkles size={16} className="text-sky-400" /> Join Our Family
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tight">Admission <br /><span className="text-sky-400">Policy</span></h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-medium">
                        The journey toward excellence starts here. Learn about our admission rules, processes, and requirements.
                    </p>
                </div>
            </section>

            <div className="bg-gray-50 py-20">
                <section className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-20">
                        {/* General Rules & KG1 */}
                        <div className="lg:w-2/3">
                            <h2 className="text-3xl font-black text-gray-900 mb-12 uppercase tracking-tighter decoration-blue-600 decoration-4 underline underline-offset-8">General Rules</h2>
                            <div className="space-y-8 mb-20">
                                {[
                                    "The School admits children from age four (4), irrespective of religion, nationality and social status.",
                                    "It is expected that the religious beliefs and practices of the Catholic Church be respected once admitted.",
                                    "Admission is entirely at the sole discretion of the school administration, which reserves the right to accept or refuse any child without explanation.",
                                    "The school may admit pupils to any class at any time during the academic term/year, subject to vacancy availability.",
                                    "Where there is a possibility of admission, the child must pass an entrance examination and/or an interview."
                                ].map((rule, i) => (
                                    <div key={i} className="flex gap-6 group items-start">
                                        <div className="mt-1 text-sky-500 flex-shrink-0"><CheckCircle2 size={24} /></div>
                                        <p className="text-lg text-gray-600 leading-relaxed font-medium group-hover:text-gray-900 transition-colors">{rule}</p>
                                    </div>
                                ))}
                            </div>

                            <h2 className="text-3xl font-black text-gray-900 mb-12 uppercase tracking-tighter decoration-indigo-600 decoration-4 underline underline-offset-8 flex items-center gap-4">
                                <Baby size={36} className="text-indigo-600" /> KG 1 Admission
                            </h2>
                            <div className="space-y-8 mb-20">
                                {[
                                    "Only children who turn age four (4) by September of the year in question qualify for KG 1 admission.",
                                    "Parents must complete a registration form and the child must pass a Kindergarten Readiness Test/Assessment.",
                                    "The School also interviews the parents/guardians of the child."
                                ].map((rule, i) => (
                                    <div key={i} className="flex gap-6 group items-start">
                                        <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-sm">{i + 1}</div>
                                        <p className="text-lg text-gray-600 leading-relaxed font-medium">{rule}</p>
                                    </div>
                                ))}
                            </div>

                            <h2 className="text-3xl font-black text-gray-900 mb-12 uppercase tracking-tighter decoration-red-500 decoration-4 underline underline-offset-8 flex items-center gap-4">
                                <ShieldAlert size={36} className="text-red-500" /> Withdrawal Policy
                            </h2>
                            <div className="bg-red-50 p-8 rounded-[30px] border border-red-100">
                                <ul className="space-y-6">
                                    {[
                                        "Parents are required to submit a written notice to the Headmistress whenever a child leaves.",
                                        "This notice must be submitted at least one month before the child leaves.",
                                        "A child may be withdrawn temporarily (not exceeding one calendar month) and re-admitted upon advance payment of fees.",
                                        "A child missing two weeks of school without notice is considered withdrawn, and full term fees must be paid."
                                    ].map((rule, i) => (
                                        <li key={i} className="flex gap-4 items-start text-red-900 font-medium text-lg">
                                            <div className="mt-2 w-2 h-2 rounded-full bg-red-400 flex-shrink-0" />
                                            {rule}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Requirements & CTA */}
                        <div className="lg:w-1/3">
                            <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-xl mb-10 sticky top-32">
                                <h2 className="text-2xl font-black text-gray-900 mb-8 border-b border-gray-200 pb-6 uppercase tracking-tight">On Admission</h2>
                                <p className="text-gray-500 mb-8 font-medium italic">
                                    Ignorance of these rules and regulations will not be an excuse for any infringement, for which sanctions will be strictly applied.
                                </p>
                                <ul className="space-y-6 mb-10">
                                    {[
                                        'Submit a medical report indicating any special health needs before the first day.',
                                        'Sign an undertaking understanding the rules and regulations.',
                                        'Ensure the child abides by school regulations to maintain discipline.'
                                    ].map((req, i) => (
                                        <li key={i} className="flex items-start gap-4 text-gray-700 font-bold text-md">
                                            <CheckCircle2 className="text-sky-500 w-6 h-6 flex-shrink-0 mt-1" />
                                            {req}
                                        </li>
                                    ))}
                                </ul>
                                <button className="w-full py-5 bg-sky-500 hover:bg-sky-600 text-white rounded-2xl font-black text-xl transition-all shadow-xl shadow-sky-500/20 flex items-center justify-center gap-3 group">
                                    Apply Now <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
