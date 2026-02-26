import StaffCard from "@/components/ui/StaffCard";
import { client, sanityFetch } from "@/sanity/lib/client";
import { Sparkles, Users } from "lucide-react";
import HeroMouseOrb from "@/components/ui/HeroMouseOrb";

export const revalidate = 0;

export const metadata = {
    title: 'Staff & Administration | Madonna School Koforidua',
    description: 'Meet the dedicated team of educators and professionals nurturing our future leaders.',
};

export default async function StaffPage() {
    let sanityStaff = await sanityFetch<any[]>(`*[_type == "staff"] | order(order asc)`) ?? [];

    const administration = sanityStaff.filter((s: any) => s.category === 'administration' || s.role === 'Headmistress' || s.role === 'Assistant Headmistress');
    const teaching = sanityStaff.filter((s: any) => s.category === 'teaching' || (s.role !== 'Headmistress' && s.role !== 'Assistant Headmistress' && s.role !== 'Staff' && !s.category));
    const nonTeaching = sanityStaff.filter((s: any) => s.category === 'non_teaching' || s.role === 'Staff');

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
                        <Sparkles size={16} className="text-sky-400" /> Our Team
                    </div>
                    <h1 className="text-3xl md:text-8xl font-black mb-6 tracking-tight">Staff & <span className="text-sky-400">Administration</span></h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-medium">
                        Meet the dedicated team of educators and professionals nurturing our future leaders.
                    </p>
                </div>
            </section>

            <div className="bg-gray-50 py-20">
                <section className="container mx-auto px-6 max-w-7xl">
                    {/* Administration */}
                    <div className="mb-24">
                        <h2 className="text-3xl font-black text-gray-900 mb-10 text-center uppercase tracking-widest decoration-blue-200 decoration-4 underline underline-offset-8">Administration</h2>
                        <div className="flex flex-wrap justify-center gap-8">
                            {administration.map((staff: any, index: number) => (
                                <div key={index} className="w-full sm:w-64">
                                    <StaffCard staff={staff} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Teaching Staff */}
                    <div className="mb-24">
                        <h2 className="text-3xl font-black text-gray-900 mb-10 text-center uppercase tracking-widest decoration-indigo-200 decoration-4 underline underline-offset-8">Teaching Staff</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                            {teaching.map((staff: any, index: number) => (
                                <StaffCard key={index} staff={staff} />
                            ))}
                        </div>
                    </div>

                    {/* Non Teaching Staff */}
                    <div>
                        <h2 className="text-3xl font-black text-gray-900 mb-10 text-center uppercase tracking-widest decoration-gray-300 decoration-4 underline underline-offset-8">Non-Teaching Staff</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                            {nonTeaching.map((staff: any, index: number) => (
                                <StaffCard key={index} staff={staff} />
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
