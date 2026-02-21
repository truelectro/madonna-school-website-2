import { Calendar, Award, Star, Trophy, Medal, Sparkles } from 'lucide-react';
import Image from 'next/image';
import HeroMouseOrb from "@/components/ui/HeroMouseOrb";

export const metadata = {
    title: 'History | Madonna School Koforidua',
    description: 'A legacy of faith, education, and community service starting from 1964.',
};

export default function HistoryPage() {
    const timelineEvents = [
        {
            year: "1964",
            title: "The Vision Begins",
            description: "The Holy Spirit Sisters left St. Agnes in Koforidua when the government took over. The next year, members of New Juaben asked them to start an international school. Rev. Fr. Otto Walters, SVD, collaborated with the Sisters to start Madonna School."
        },
        {
            year: "1965",
            title: "First Classes",
            description: "A Kindergarten (KG 1) began in an Information Centre in town and later moved to the Sisters' Living Quarters. Sister Gerard Smith headed the school alongside Sister Anna Unterweger. There were ten children in Kindergarten and 14 in class 1."
        },
        {
            year: "1967",
            title: "A New Building",
            description: "A new school building was blessed by Bishop Oliver Bowers. The first year was noisy with bulldozers, concrete mixers, carpenters, and masons working on the building."
        },
        {
            year: "1972",
            title: "Full Administration",
            description: "Sister Gerard became a full-time Headmistress, leading the school as its first batch of students took the Common Entrance Examination."
        },
        {
            year: "1977",
            title: "Second Headmistress",
            description: "Sister Maria Prokesch became the second Headmistress, bringing a strong focus to prayer groups and spiritual growth."
        },
        {
            year: "1983",
            title: "New Leadership",
            description: "Sister Yvonne Pereira headed the school until 1986. During her tenure, she left us the beautiful grotto and the statue of our Lady of Fatima."
        },
        {
            year: "1986",
            title: "Academic Expansion",
            description: "Sister Lilia Tiu took over administration. Under her leadership, the Science Block and Classrooms were completed. In 1989, the first batch of Junior Secondary students was enrolled and the Home Science Block was finished."
        },
        {
            year: "1995",
            title: "Infrastructural Growth",
            description: "Sister Mary Laureen Lahnan became Headmistress. The Junior High School building, the Library, and the Assembly Hall proudly became part of Madonna School."
        },
        {
            year: "2001",
            title: "The Digital Age",
            description: "Sister Lilia returned for a second tenure. The Computer Laboratory was built, giving children the opportunity to learn modern ICT skills."
        },
        {
            year: "2013 - 2016",
            title: "Modern Innovations",
            description: "Sr. Mary Lamisi Adomolga became the first Ghanaian Sister to head Madonna School. She spearheaded the acquisition of new school buses, the construction of walkways, the sick bay, the MOSA Computer Lab reroofing, and the school walling project."
        }
    ];

    return (
        <main className="min-h-screen pb-20 bg-gray-50">
            {/* Header */}
            <section className="bg-[#051324] pt-40 pb-32 mb-20 text-white relative overflow-hidden">
                {/* Animated Gradient Orbs */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
                <HeroMouseOrb />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full text-sky-200 text-sm font-bold tracking-wider uppercase mb-8 border border-white/10">
                        <Sparkles size={16} className="text-sky-400" /> About Our School
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tight">Our History</h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-medium">
                        A legacy of faith, education, and community service starting from 1964.
                    </p>
                </div>
            </section>

            <section className="container mx-auto px-6 max-w-5xl">
                <div className="relative border-l-4 border-blue-200 ml-6 md:ml-10 pb-10">
                    {timelineEvents.map((event, i) => (
                        <div key={i} className="mb-16 ml-10 relative group">
                            <div className="absolute -left-[54px] bg-white border-4 border-blue-600 w-8 h-8 rounded-full mt-1.5 group-hover:scale-125 transition-transform duration-300 shadow-md"></div>

                            <div className="bg-white p-8 rounded-[30px] shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                <div className="flex items-center gap-3 mb-4">
                                    <Calendar className="text-blue-600 w-6 h-6" />
                                    <span className="text-2xl font-black text-blue-600 tracking-tight">{event.year}</span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{event.title}</h3>
                                <p className="text-lg text-gray-600 leading-relaxed font-medium">
                                    {event.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-10 bg-white p-10 rounded-[40px] shadow-lg border border-gray-100 text-center">
                    <Award className="w-16 h-16 text-indigo-600 mx-auto mb-6" />
                    <h2 className="text-3xl font-black text-gray-900 mb-6 uppercase tracking-tight">A Debt of Gratitude</h2>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto font-medium">
                        The school owes a big debt of gratitude to all the many benefactors who helped with each project. We also greatly appreciate the late Dominic Andoh, Archbishop Charles Gabriel Palmer-Buckle, Bishop Joseph Afriah-Agyekum, then Msgr. Francis Twum-Barimah, Fr. Paul Abankwah, Fr. Andrew Dunyo who were all local Managers. May God bless them generously!
                    </p>
                </div>
            </section>
        </main>
    );
}
