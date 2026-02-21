import Link from 'next/link'
import { GraduationCap, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-20 pb-10">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-gray-800 pb-16 mb-10">
                <div className="space-y-6">
                    <Link href="/" className="flex items-center gap-2">
                        <GraduationCap className="w-8 h-8 text-blue-400" />
                        <span className="text-xl font-bold tracking-tight">MADONNA SCHOOL</span>
                    </Link>
                    <p className="text-gray-400 leading-relaxed">
                        Providing a foundation of excellence and preparing the next generation of global leaders with values and discipline.
                    </p>
                    <div className="flex gap-4 mt-6">
                        <Link href="https://www.facebook.com/profile.php?id=61583297365243&name=xhp_nt__fb__action__open_user" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                            <Facebook size={20} />
                        </Link>
                        <Link href="https://www.instagram.com/madonna_school_koforidua/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                            <Instagram size={20} />
                        </Link>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-bold mb-6 italic border-l-4 border-blue-500 pl-4">Quick Links</h3>
                    <ul className="space-y-4 text-gray-400">
                        <li><Link href="/about" className="hover:text-blue-400 transition">About Us</Link></li>
                        <li><Link href="/academics" className="hover:text-blue-400 transition">Academics</Link></li>
                        <li><Link href="/admission" className="hover:text-blue-400 transition">Admissions</Link></li>
                        <li><Link href="/news" className="hover:text-blue-400 transition">Latest News</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-bold mb-6 italic border-l-4 border-blue-500 pl-4">Admissions</h3>
                    <ul className="space-y-4 text-gray-400">
                        <li><Link href="#" className="hover:text-blue-400 transition">How to Apply</Link></li>
                        <li><Link href="#" className="hover:text-blue-400 transition">Tuition & Fees</Link></li>
                        <li><Link href="#" className="hover:text-blue-400 transition">Scholarships</Link></li>
                        <li><Link href="#" className="hover:text-blue-400 transition">Book a Tour</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-bold mb-6 italic border-l-4 border-blue-500 pl-4">Contact Info</h3>
                    <ul className="space-y-4 text-gray-400">
                        <li className="flex items-start gap-3">
                            <MapPin className="text-blue-400 w-5 h-5 shrink-0 mt-1" />
                            <span>123 Scholar Avenue, Education Hub City</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="text-blue-400 w-5 h-5 shrink-0" />
                            <span>+233(0)342022770</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail className="text-blue-400 w-5 h-5 shrink-0" />
                            <span>madonnaschoolgh@gmail.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-gray-500 text-sm">
                    © {new Date().getFullYear()} Madonna School. All rights reserved.
                </p>
                <div className="flex gap-8 text-gray-500 text-sm">
                    <Link href="#" className="hover:text-white transition">Privacy Policy</Link>
                    <Link href="#" className="hover:text-white transition">Terms of Service</Link>
                </div>
            </div>
        </footer>
    )
}
