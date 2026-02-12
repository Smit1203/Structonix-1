'use client';

import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    {
        id: '01',
        title: 'Industrial cleaning and degreasing',
        description: 'Allan wrasse climbing gourami amur pike Arctic char, steelhead sprat sea lamprey grunion.',
        image: 'https://plus.unsplash.com/premium_photo-1682144783087-fe52612b1f0d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: '/services/cleaning'
    },
    {
        id: '02',
        title: 'Phosphate coating',
        description: 'Allan wrasse climbing gourami amur pike Arctic char, steelhead sprat sea lamprey grunion.',
        image: 'https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f?auto=format&fit=crop&w=800&q=80',
        link: '/services/coating'
    },
    {
        id: '03',
        title: 'Chemical processing of super alloys',
        description: 'Allan wrasse climbing gourami amur pike Arctic char, steelhead sprat sea lamprey grunion.',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
        link: '/services/processing'
    }
];

export function HomepageServices() {
    return (
        <section className="py-20 md:py-32 bg-[#E0E1E4]">
            <div className="container mx-auto px-4">

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8"
                >
                    <div className="max-w-2xl">
                        <p className="text-primary font-bold tracking-widest uppercase mb-4 text-sm">Services</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-dark-slate leading-tight">
                            Awesome services <br /> from industrial company
                        </h2>
                    </div>
                    <div className="max-w-md">
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Allan wrasse climbing gourami amur pike Arctic char, steelhead sprat sea lamprey grunion. Walleye poolfish sand goby butterfly ray stream catfish.
                        </p>
                        <Link
                            href="/services"
                            className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm hover:text-dark-slate transition-colors group"
                        >
                            Awesome Services
                            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                        </Link>
                    </div>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2
                            }
                        }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                            }}
                        >
                            <Link
                                href={service.link}
                                className="group relative block h-[500px] overflow-hidden bg-dark-slate"
                            >
                                {/* Image Background */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                    style={{ backgroundImage: `url(${service.image})` }}
                                >
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                                </div>

                                {/* Large Number Overlay */}
                                <div className="absolute top-10 left-1/2 -translate-x-1/2 z-10">
                                    <span className="text-[120px] font-bold text-white/50 leading-none font-sans select-none">
                                        {service.id}
                                    </span>
                                </div>

                                {/* Bottom Content Area */}
                                <div className="absolute bottom-0 left-0 w-full bg-dark-navy p-8 transition-colors duration-300 group-hover:bg-primary z-20">
                                    <div className="flex justify-between items-start">
                                        <h3 className="text-2xl font-bold text-white mb-2 max-w-[80%]">
                                            {service.title}
                                        </h3>
                                        <ArrowUpRight className="w-6 h-6 text-white opacity-50 group-hover:opacity-100 transition-opacity" />
                                    </div>

                                    <div className="max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-500 ease-in-out">
                                        <p className="text-white/90 mt-4 text-sm leading-relaxed border-t border-white/20 pt-4">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
