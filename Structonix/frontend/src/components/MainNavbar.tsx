'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X, Search, Grid3x3 } from 'lucide-react';

export function MainNavbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/', hasDropdown: false },
        { name: 'Pages', href: '/pages', hasDropdown: true },
        { name: 'Projects', href: '/projects', hasDropdown: true },
        { name: 'Shop', href: '/shop', hasDropdown: true },
        { name: 'Blog', href: '/blog', hasDropdown: false },
        { name: 'Contacts', href: '/contacts', hasDropdown: false },
    ];

    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    {/* Logo & Grid Icon */}
                    <div className="flex items-center gap-4 py-5">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-primary flex items-center justify-center">
                                <span className="text-white font-bold text-xl">S</span>
                            </div>
                            <span className="text-2xl font-bold text-dark-slate">Structonix</span>
                        </Link>

                        {/* Grid/Menu Icon */}
                        <button
                            className="p-2 text-dark-slate hover:text-primary transition-colors"
                            aria-label="Open menu"
                        >
                            <Grid3x3 className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative group">
                                <Link
                                    href={link.href}
                                    className="flex items-center gap-1 text-dark-slate hover:text-primary transition-colors font-medium text-[15px]"
                                >
                                    {link.name}
                                    {link.hasDropdown && (
                                        <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
                                    )}
                                </Link>
                                {/* Dropdown placeholder */}
                                {link.hasDropdown && (
                                    <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                        <div className="py-2">
                                            <Link
                                                href={`${link.href}/option-1`}
                                                className="block px-4 py-2 text-sm text-dark-slate hover:bg-primary/10 hover:text-primary transition-colors"
                                            >
                                                Option 1
                                            </Link>
                                            <Link
                                                href={`${link.href}/option-2`}
                                                className="block px-4 py-2 text-sm text-dark-slate hover:bg-primary/10 hover:text-primary transition-colors"
                                            >
                                                Option 2
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Right Side: Search Icon & CTA Button */}
                    <div className="flex items-center">
                        {/* Search Icon */}
                        <button
                            className="hidden lg:block p-3 text-dark-slate hover:text-primary transition-colors"
                            aria-label="Search"
                        >
                            <Search className="w-5 h-5" />
                        </button>

                        {/* Get In Touch Button - Full Height */}
                        <Link
                            href="/contact"
                            className="hidden lg:flex items-center bg-primary hover:bg-primary/90 text-white px-8 h-[80px] font-semibold transition-colors text-[15px]"
                        >
                            Get In Touch
                        </Link>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-2 text-dark-slate hover:text-primary transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden border-t border-secondary/20 py-4">
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="flex items-center justify-between text-dark-slate hover:text-primary transition-colors font-medium py-2"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                    {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                className="bg-primary hover:bg-primary/90 text-white px-6 py-3 font-semibold transition-colors mt-2 text-center"
                            >
                                Get In Touch
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
