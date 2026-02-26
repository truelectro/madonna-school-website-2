import { GraduationCap, ShieldCheck, Award } from "lucide-react";

export function HomePhilosophySection({ data }: { data: any }) {
    const icons = [GraduationCap, ShieldCheck, Award];
    const colors = ['bg-blue-600', 'bg-indigo-600', 'bg-blue-400'];

    return (
        <section className="py-16 md:py-32 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-24">
                    <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 tracking-tight"
                        dangerouslySetInnerHTML={{ __html: data.title || "A Legacy of Excellence" }} />
                    <p className="text-xl text-gray-500 leading-relaxed font-medium">
                        {data.subtitle || "For over six decades, Madonna School has been at the forefront of educational innovation."}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {data.cards?.map((item: any, i: number) => {
                        const Icon = icons[i % icons.length];
                        const color = colors[i % colors.length];
                        return (
                            <div key={i} className="p-12 bg-gray-50 rounded-[40px] hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 group border border-transparent hover:border-gray-100">
                                <div className={`w-16 h-16 ${color} rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform`}>
                                    <Icon size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-lg">{item.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
