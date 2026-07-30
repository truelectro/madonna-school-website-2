import Link from 'next/link'
import { GraduationCap, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react'
import MadonnaLogo from '@/components/ui/MadonnaLogo'

export default function Footer() {
    return (
        <footer className="bg-[#071322] text-white pt-20 pb-12 border-t border-slate-800/60">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-slate-800/80 pb-16 mb-10">
                <div className="space-y-6">
                    <Link href="/" className="flex items-center gap-2 group">
                        <MadonnaLogo className="w-auto h-12" isDarkText={false} />
                    </Link>
                    <p className="text-slate-400 text-sm leading-relaxed font-normal">
                        Providing a holistic foundation of academic excellence, moral integrity, and discipline for future leaders since 1964.
                    </p>
                    <div className="flex gap-3 pt-2">
                        <Link href="https://www.facebook.com/profile.php?id=61583297365243&name=xhp_nt__fb__action__open_user" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800/80 rounded-xl flex items-center justify-center text-slate-300 hover:bg-[#D4AF37] hover:text-[#071322] transition-all">
                            <Facebook size={18} />
                        </Link>
                        <Link href="https://www.instagram.com/madonna_school_koforidua/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800/80 rounded-xl flex items-center justify-center text-slate-300 hover:bg-[#D4AF37] hover:text-[#071322] transition-all">
                            <Instagram size={18} />
                        </Link>
                    </div>
                </div>

                <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-6">Quick Links</h3>
                    <ul className="space-y-3 text-sm text-slate-300">
                        <li><Link href="/about" className="hover:text-[#D4AF37] transition-colors">About Our School</Link></li>
                        <li><Link href="/academics" className="hover:text-[#D4AF37] transition-colors">Academic Calendar</Link></li>
                        <li><Link href="/admission" className="hover:text-[#D4AF37] transition-colors">Admissions & Policy</Link></li>
                        <li><Link href="/hall-of-fame" className="hover:text-[#D4AF37] transition-colors">Hall of Fame</Link></li>
                        <li><Link href="/news" className="hover:text-[#D4AF37] transition-colors">Latest News & Updates</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-6">Community</h3>
                    <ul className="space-y-3 text-sm text-slate-300">
                        <li><Link href="/anniversary-plan" className="hover:text-[#D4AF37] transition-colors">Madonna @ 60 Jubilee</Link></li>
                        <li><Link href="/mosa" className="hover:text-[#D4AF37] transition-colors">MOSA Alumni Network</Link></li>
                        <li><Link href="/history" className="hover:text-[#D4AF37] transition-colors">Our 1964 History</Link></li>
                        <li><Link href="/contact" className="hover:text-[#D4AF37] transition-colors">Contact Administration</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-6">Contact Info</h3>
                    <ul className="space-y-4 text-sm text-slate-300">
                        <li className="flex items-start gap-3">
                            <MapPin className="text-[#D4AF37] w-5 h-5 shrink-0 mt-0.5" />
                            <span>Madonna School, P.O. Box 227, Koforidua, Eastern Region, Ghana</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="text-[#D4AF37] w-5 h-5 shrink-0" />
                            <span>+233(0)342022770</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail className="text-[#D4AF37] w-5 h-5 shrink-0" />
                            <span>madonnaschoolgh@gmail.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                <p>
                    © {new Date().getFullYear()} Madonna School, Koforidua. All rights reserved.
                </p>
                <div className="flex gap-6 text-slate-400">
                    <span>Sacrifice • Success • Service</span>
                </div>
            </div>
        </footer>
    )
}
