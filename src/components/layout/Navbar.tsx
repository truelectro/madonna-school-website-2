'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import MadonnaLogo from '@/components/ui/MadonnaLogo'

const navLinks = [
    { name: 'Home', href: '/' },
    {
        name: 'About',
        href: '/about',
        subLinks: [
            { name: 'History', href: '/history' },
            { name: 'Staff & Administration', href: '/about/staff' },
            { name: 'Hall of Fame', href: '/hall-of-fame' },
        ],
    },
    { name: 'Admissions', href: '/admission' },
    { name: 'Academics', href: '/academics' },
    {
        name: 'Madonna @ 60',
        href: '/anniversary-plan',
        subLinks: [
            { name: '60th Anniversary Plan', href: '/anniversary-plan' },
            { name: 'MOSA (Alumni)', href: '/mosa' },
        ],
    },
    { name: 'News', href: '/news' },
    { name: 'Contact Us', href: '/contact' },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null)
    const pathname = usePathname()

    const hasDarkHeader = true
    const isDarkText = isScrolled || !hasDarkHeader

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleMobileDropdown = (name: string) => {
        setOpenMobileDropdown(openMobileDropdown === name ? null : name)
    }

    return (
        <nav className={`fixed w-full z-[100] transition-all duration-300 ${isScrolled || isOpen ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center relative z-[110]">
                <Link href="/" className="flex items-center gap-2 group" onClick={() => setIsOpen(false)}>
                    <MadonnaLogo className="w-auto h-12 md:h-14" isDarkText={isScrolled || isOpen || !hasDarkHeader} />
                </Link>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center gap-6 xl:gap-8">
                    {navLinks.map((link) => (
                        <div key={link.name} className="relative group">
                            {link.subLinks ? (
                                <Link href={link.href} className={`flex items-center gap-1 font-medium transition hover:text-blue-400 ${isDarkText ? 'text-gray-700' : 'text-white/90'}`}>
                                    {link.name}
                                    <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                                </Link>
                            ) : (
                                <Link
                                    href={link.href}
                                    className={`font-medium transition hover:text-blue-400 ${isDarkText ? 'text-gray-700' : 'text-white/90'}`}
                                >
                                    {link.name}
                                </Link>
                            )}

                            {link.subLinks && (
                                <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-3 w-56 flex flex-col relative overflow-hidden">
                                        {link.subLinks.map((subLink) => (
                                            <Link
                                                key={subLink.name}
                                                href={subLink.href}
                                                className="px-5 py-2.5 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                                            >
                                                {subLink.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                    <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition font-semibold ml-2">
                        Apply
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden flex items-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="relative w-10 h-10 flex items-center justify-center focus:outline-none"
                    >
                        <div className="relative w-6 h-5">
                            <span
                                className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'rotate-45 translate-y-2.5' : 'translate-y-0'
                                    } ${isScrolled || isOpen || !hasDarkHeader ? 'text-gray-900' : 'text-white'}`}
                            />
                            <span
                                className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] top-2 ${isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                                    } ${isScrolled || isOpen || !hasDarkHeader ? 'text-gray-900' : 'text-white'}`}
                            />
                            <span
                                className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] top-4 ${isOpen ? '-rotate-45 -translate-y-2.5' : 'translate-y-0'
                                    } ${isScrolled || isOpen || !hasDarkHeader ? 'text-gray-900' : 'text-white'}`}
                            />
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu — Persistent for Slide In/Out */}
            <div
                className={`lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-2xl max-h-[85vh] overflow-y-auto z-[90] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen
                    ? 'translate-y-0 opacity-100'
                    : '-translate-y-full opacity-0 pointer-events-none'
                    }`}
            >
                <div className="flex flex-col py-6 px-6 gap-2">
                    {navLinks.map((link) => (
                        <div key={link.name} className="flex flex-col">
                            {link.subLinks ? (
                                <>
                                    <div className="flex items-center justify-between w-full">
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className="py-3 text-gray-900 text-lg font-medium hover:text-blue-600 text-left flex-1"
                                        >
                                            {link.name}
                                        </Link>
                                        <button
                                            onClick={() => toggleMobileDropdown(link.name)}
                                            className="p-3 -mr-3"
                                        >
                                            <ChevronDown size={20} className={`transition-transform duration-300 ${openMobileDropdown === link.name ? 'rotate-180 text-blue-600' : 'text-gray-400'}`} />
                                        </button>
                                    </div>

                                    <div className={`flex flex-col pl-4 border-l-2 border-gray-100 ml-2 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${openMobileDropdown === link.name ? 'max-h-[400px] opacity-100 pb-2' : 'max-h-0 opacity-0'}`}>
                                        {link.subLinks.map((subLink) => (
                                            <Link
                                                key={subLink.name}
                                                href={subLink.href}
                                                onClick={() => setIsOpen(false)}
                                                className="py-2.5 text-gray-600 hover:text-blue-600"
                                            >
                                                {subLink.name}
                                            </Link>
                                        ))}
                                    </div>
                                </>
                            ) : (
                                <Link
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="py-3 text-gray-900 text-lg font-medium hover:text-blue-600"
                                >
                                    {link.name}
                                </Link>
                            )}
                        </div>
                    ))}
                    <div className="pt-4 mt-2 border-t border-gray-100">
                        <Link
                            href="/admission"
                            onClick={() => setIsOpen(false)}
                            className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-lg flex items-center justify-center"
                        >
                            Apply Now
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
