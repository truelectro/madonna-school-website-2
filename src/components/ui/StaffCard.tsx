import Image from 'next/image'
import { urlFor } from '@/sanity/lib/client'

interface StaffCardProps {
    staff: {
        name: string
        role: string
        image: any
        bio?: string
    }
}

export default function StaffCard({ staff }: StaffCardProps) {
    if (!staff) return null;

    return (
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 group">
            <div className="relative h-80 overflow-hidden">
                {staff.image && staff.image.asset ? (
                    <Image
                        src={urlFor(staff.image).url()}
                        alt={staff.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                ) : (
                    <div className="w-full h-full bg-blue-50 flex items-center justify-center text-blue-200">
                        <span className="text-4xl font-bold">{staff.name ? staff.name[0] : 'M'}</span>
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <p className="text-white text-sm line-clamp-3">{staff.bio}</p>
                </div>
            </div>
            <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{staff.name}</h3>
                <p className="text-blue-600 font-medium text-sm tracking-wide uppercase">{staff.role}</p>
            </div>
        </div>
    )
}
