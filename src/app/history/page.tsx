import { Calendar, Award, Star, Trophy, Medal } from 'lucide-react';
import Image from 'next/image';
import HeroMouseOrb from "@/components/ui/HeroMouseOrb";
import { sanityFetch } from "@/sanity/lib/client";
import { PortableText } from "next-sanity";
import { BlockRenderer } from "@/components/sections/BlockRenderer";

export const revalidate = 0;

export const metadata = {
    title: 'History | Madonna School Koforidua',
    description: 'A legacy of faith, education, and community service starting from 1964.',
};

export default async function HistoryPage() {
    const historyQuery = `*[_type == "historyPage"][0]`;
    const historyData = (await sanityFetch<any>(historyQuery)) || {};

    const extraBlocks = historyData?.pageBuilder || [];

    const title = historyData.headerTitle || "Our History";
    const subtitle = historyData.headerSubtitle || "A legacy of faith, education, and community service starting from 1964.";

    const timelineEvents = historyData.timelineEvents?.length > 0 ? historyData.timelineEvents : [
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
            <section className="bg-[#071322] pt-40 pb-32 mb-16 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-400/5 rounded-full blur-[140px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
                <HeroMouseOrb />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-400/10 backdrop-blur-md rounded-full text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-8 border border-amber-400/20">
                        About Our School
                    </div>
                    <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tight">{title}</h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
                        {subtitle}
                    </p>
                </div>
            </section>

            <section className="container mx-auto px-6 max-w-5xl">
                <div className="relative border-l border-slate-300/80 ml-4 md:ml-8 pb-8">
                    {timelineEvents.map((event, i) => (
                        <div key={i} className="mb-12 ml-6 md:ml-8 relative group">
                            <div className="absolute -left-[31px] md:-left-[39px] bg-white border-2 border-[#B8860B] w-4 h-4 rounded-full mt-2 group-hover:scale-125 group-hover:bg-[#D4AF37] transition-all duration-300 shadow-sm"></div>

                            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200/80 hover:shadow-md transition-all duration-300">
                                <div className="flex items-center gap-2.5 mb-3">
                                    <Calendar className="text-[#B8860B] w-5 h-5" />
                                    <span className="text-xl font-extrabold text-[#071322] tracking-tight">{event.year}</span>
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">{event.title}</h3>
                                <p className="text-base text-slate-600 leading-relaxed font-normal">
                                    {event.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-200/80 text-center">
                    <Award className="w-12 h-12 text-[#B8860B] mx-auto mb-4" />
                    <h2 className="text-2xl font-extrabold text-slate-900 mb-4 uppercase tracking-wider">{historyData.debtOfGratitudeTitle || "A Debt of Gratitude"}</h2>
                    <div className="text-base text-slate-600 leading-relaxed max-w-3xl mx-auto font-normal">
                        {historyData.debtOfGratitudeContent ? (
                            <PortableText value={historyData.debtOfGratitudeContent} />
                        ) : (
                            <p>The school owes a big debt of gratitude to all the many benefactors who helped with each project. We also greatly appreciate the late Dominic Andoh, Archbishop Charles Gabriel Palmer-Buckle, Bishop Joseph Afriah-Agyekum, then Msgr. Francis Twum-Barimah, Fr. Paul Abankwah, Fr. Andrew Dunyo who were all local Managers. May God bless them generously!</p>
                        )}
                    </div>
                </div>
            </section>

            {extraBlocks.length > 0 && <BlockRenderer blocks={extraBlocks} />}
        </main>
    );
}
