import StaffCard from "@/components/ui/StaffCard";
import { client } from "@/sanity/lib/client";

export default async function StaffPage() {
    let sanityStaff = await client.fetch(`*[_type == "staff"] | order(order asc)`);

    const administration = sanityStaff.filter((s: any) => s.category === 'administration' || s.role === 'Headmistress' || s.role === 'Assistant Headmistress');
    const teaching = sanityStaff.filter((s: any) => s.category === 'teaching' || (s.role !== 'Headmistress' && s.role !== 'Assistant Headmistress' && s.role !== 'Staff' && !s.category));
    const nonTeaching = sanityStaff.filter((s: any) => s.category === 'non_teaching' || s.role === 'Staff');

    return (
        <main className="min-h-screen pt-32 pb-20 bg-gray-50">
            {/* Header */}
            <section className="bg-blue-900 py-24 mb-20 text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.05),transparent)]" />
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight uppercase">Staff & <span className="text-blue-400">Administration</span></h1>
                    <p className="text-xl text-blue-200 max-w-2xl mx-auto font-medium">
                        Meet the dedicated team of educators and professionals nurturing our future leaders.
                    </p>
                </div>
            </section>

            <section className="container mx-auto px-6 max-w-7xl">
                {/* Administration */}
                <div className="mb-24">
                    <h2 className="text-3xl font-black text-gray-900 mb-10 text-center uppercase tracking-widest decoration-blue-200 decoration-4 underline underline-offset-8">Administration</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
                        {administration.map((staff: any, index: number) => (
                            <StaffCard key={index} staff={staff} />
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
        </main>
    );
}
