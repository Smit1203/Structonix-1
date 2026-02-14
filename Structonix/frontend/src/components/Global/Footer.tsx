'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-dark-navy text-white pt-16 pb-8 border-t border-white/10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-primary flex items-center justify-center">
                                <span className="text-white font-bold text-xl">S</span>
                            </div>
                            <span className="text-2xl font-bold text-white tracking-tight">Structonix</span>
                        </div>
                        <p className="text-gray-400 leading-relaxed font-secondary">
                            Professional industrial & construction solutions. Building the future with precision and excellence.
                        </p>
                        <div className="flex items-center gap-4">
                            <SocialLink href="#" icon={<Twitter className="w-5 h-5" />} label="Twitter" />
                            <SocialLink href="#" icon={<Facebook className="w-5 h-5" />} label="Facebook" />
                            <SocialLink href="#" icon={<Instagram className="w-5 h-5" />} label="Instagram" />
                            <SocialLink href="#" icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 relative inline-block">
                            Quick Links
                            <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-primary rounded-full translate-y-2"></span>
                        </h3>
                        <ul className="space-y-4 font-secondary">
                            <li><FooterLink href="/about">About Us</FooterLink></li>
                            <li><FooterLink href="/projects">Our Projects</FooterLink></li>
                            <li><FooterLink href="/services">Services</FooterLink></li>
                            <li><FooterLink href="/contact">Contact</FooterLink></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 relative inline-block">
                            Our Services
                            <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-primary rounded-full translate-y-2"></span>
                        </h3>
                        <ul className="space-y-4 font-secondary">
                            <li><FooterLink href="/services/construction">General Construction</FooterLink></li>
                            <li><FooterLink href="/services/renovation">Property Renovation</FooterLink></li>
                            <li><FooterLink href="/services/design">Architecture Design</FooterLink></li>
                            <li><FooterLink href="/services/consulting">Project Consulting</FooterLink></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 relative inline-block">
                            Contact Us
                            <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-primary rounded-full translate-y-2"></span>
                        </h3>
                        <ul className="space-y-6 font-secondary">
                            <li className="flex items-start gap-4">
                                <div className="mt-1 bg-primary/10 p-2 rounded-full text-primary">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <span className="text-gray-300">523 Sylvan Ave, 5th Floor<br />Mountain View, CA 94041</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="bg-primary/10 p-2 rounded-full text-primary">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <span className="text-gray-300">+1 (800) 987 456 98</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="bg-primary/10 p-2 rounded-full text-primary">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <span className="text-gray-300">info@structonix.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-secondary text-sm text-gray-400">
                    <p>© 2024 Structonix. All rights reserved.</p>
                    <div className="flex items-center gap-8">
                        <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
    return (
        <a
            href={href}
            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
            aria-label={label}
        >
            {icon}
        </a>
    );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link href={href} className="text-gray-400 hover:text-primary hover:pl-2 transition-all duration-300 block">
            {children}
        </Link>
    );
}
