'use client';

import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { AboutStats } from './AboutStats';

export function AboutUs() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=80"
                        alt="Structonix About Us Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-dark-slate/70"></div>
                </div>

                <div className="relative z-10 container mx-auto px-4 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">About Structonix</h1>
                    <div className="flex items-center justify-center gap-2 text-white/80 text-lg uppercase tracking-widest font-medium">
                        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                        <span>/</span>
                        <span className="text-primary">About Us</span>
                    </div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-20 container mx-auto px-10 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="w-full lg:w-1/2">
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=800&q=80"
                                    alt="Engineering Team"
                                    className="w-full rounded-lg shadow-2xl"
                                />
                                <div className="absolute -bottom-10 -right-10 w-2/3 hidden md:block">
                                    <img
                                        src="https://images.unsplash.com/photo-1516216628859-9bccecab13ca?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt="Construction Site"
                                        className="w-full rounded-lg shadow-2xl border-8 border-white"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 lg:pl-10 mt-10 lg:mt-0">
                            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Who We Are</span>
                            <h2 className="text-4xl font-bold text-dark-slate mb-6 leading-tight">Building the Future, Restoring the Past.</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Structonix has been a leader in industrial construction and engineering solutions for over 40 years. We pride ourselves on delivering complex projects on time and within budget, without compromising on quality or safety.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Our team of dedicated professionals brings decades of experience to every job site. From massive infrastructure projects to specialized industrial facilities, we have the expertise to handle it all.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    "Certified Professional Team",
                                    "Eco-Friendly Construction",
                                    "Latest Technology Integration",
                                    "24/7 Support & Maintenance"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                                        <span className="text-dark-slate font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <AboutStats />

            {/* Core Values / Why Choose Us */}
            <section className="py-20 md:py-32 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Our Core Values</span>
                        <h2 className="text-4xl font-bold text-dark-slate">Why Clients Trust Structonix</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Safety First",
                                description: "We maintain the highest safety standards in the industry, ensuring the well-being of our team and your project.",
                                image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80"
                            },
                            {
                                title: "Quality Assurance",
                                description: "Our rigorous quality control processes guarantee that every structure we build stands the test of time.",
                                image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=600&q=80"
                            },
                            {
                                title: "Sustainable Building",
                                description: "We are committed to green building practices, minimizing environmental impact while maximizing efficiency.",
                                image: "https://images.unsplash.com/photo-1461353214467-5d8f411db37a?auto=format&fit=crop&w=600&q=80"
                            }
                        ].map((card, index) => (
                            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-300">
                                <div className="h-64 overflow-hidden">
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-dark-slate mb-4 group-hover:text-primary transition-colors">{card.title}</h3>
                                    <p className="text-gray-600 leading-relaxed mb-6">{card.description}</p>
                                    <Link href="/services" className="text-primary font-bold uppercase text-sm tracking-wider hover:underline">
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
