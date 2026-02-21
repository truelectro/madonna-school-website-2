'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import MadonnaLogo from '@/components/ui/MadonnaLogo'

const navLinks = [
    { name: 'Home', href: '/' },
    {
        name: 'About',
        href: '/about',
        subLinks: [
            { name: 'History', href: '/about/history' },
            { name: 'Staff & Administration', href: '/about/staff' },
            { name: 'Hall of Fame', href: '/about/hall-of-fame' },
        ],
    },
    {
        name: 'Admissions',
        href: '/admission',
        subLinks: [
            { name: 'Admission Policy & Process', href: '/admission/process' },
            { name: 'Curriculum Offered', href: '/admission/curriculum' },
        ],
    },
    {
        name: 'Academics',
        href: '/academics',
        subLinks: [
            { name: 'School Calendar', href: '/academics/calendar' },
        ],
    },
    {
        name: 'Madonna @ 60',
        href: '/anniversary',
        subLinks: [
            { name: '60th Anniversary Plan', href: '/anniversary/plan' },
            { name: 'MOSA (Alumni)', href: '/anniversary/mosa' },
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

    // Determine if we are on a page with a dark header (e.g., home or specific inner pages)
    const hasDarkHeader = pathname === '/'

    // Text color logic:
    // If scrolled, always dark text (because navbar bg is white)
    // If not scrolled and on a dark header page, white text
    // If not scrolled and on a light header page, dark text
    const isDarkText = isScrolled || !hasDarkHeader

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleMobileDropdown = (name: string) => {
        if (openMobileDropdown === name) {
            setOpenMobileDropdown(null)
        } else {
            setOpenMobileDropdown(name)
        }
    }

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2 group">
                    <MadonnaLogo className="w-auto h-12 md:h-14" isDarkText={isDarkText} />
                </Link>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center gap-6 xl:gap-8">
                    {navLinks.map((link) => (
                        <div key={link.name} className="relative group">
                            {link.subLinks ? (
                                <button className={`flex items-center gap-1 font-medium transition hover:text-blue-400 ${isDarkText ? 'text-gray-700' : 'text-white/90'}`}>
                                    {link.name}
                                    <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                                </button>
                            ) : (
                                <Link
                                    href={link.href}
                                    className={`font-medium transition hover:text-blue-400 ${isDarkText ? 'text-gray-700' : 'text-white/90'}`}
                                >
                                    {link.name}
                                </Link>
                            )}

                            {/* Dropdown Menu */}
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
                    <button onClick={() => setIsOpen(!isOpen)} className="p-2 -mr-2">
                        {isOpen ? (
                            <X className={isDarkText ? 'text-gray-900' : 'text-white'} />
                        ) : (
                            <Menu className={isDarkText ? 'text-gray-900' : 'text-white'} />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl max-h-[80vh] overflow-y-auto animate-in slide-in-from-top duration-300">
                    <div className="flex flex-col py-4 px-6 gap-2">
                        {navLinks.map((link) => (
                            <div key={link.name} className="flex flex-col">
                                {link.subLinks ? (
                                    <>
                                        <button
                                            onClick={() => toggleMobileDropdown(link.name)}
                                            className="flex items-center justify-between py-3 text-gray-900 text-lg font-medium hover:text-blue-600 text-left"
                                        >
                                            {link.name}
                                            <ChevronDown size={20} className={`transition-transform duration-300 ${openMobileDropdown === link.name ? 'rotate-180 text-blue-600' : 'text-gray-400'}`} />
                                        </button>

                                        <div className={`flex flex-col pl-4 border-l-2 border-gray-100 ml-2 overflow-hidden transition-all duration-300 ${openMobileDropdown === link.name ? 'max-h-96 opacity-100 pb-2' : 'max-h-0 opacity-0'}`}>
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
                            <button className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-lg">
                                Apply Now
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}
