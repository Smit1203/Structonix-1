'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function HomepageAboutUs() {
    return (
        <section className="py-20 md:py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Left Column: Images (Overlapping Layout) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full lg:w-1/2 relative min-h-[500px] flex items-center justify-center lg:justify-start"
                    >
                        {/* Main Rectangle Image (Bottom Layer) */}
                        <div className="relative w-[85%] h-[400px] lg:h-[500px] ml-auto lg:ml-[15%]">
                            <img
                                src="https://images.unsplash.com/photo-1716037991590-c975184b37df?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Construction Site"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>

                        {/* Overlapping Square Image (Top Left) */}
                        <div className="absolute top-10 left-0 w-[45%] h-[45%] border-8 border-white shadow-xl z-10">
                            <img
                                src="https://images.unsplash.com/photo-1542621334-a254cf47733d?auto=format&fit=crop&w=800&q=80"
                                alt="Worker Detail"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Right Column: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="w-full lg:w-1/2 space-y-4"
                    >
                        <div className="flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-primary"></span>
                            <span className="text-primary font-bold tracking-widest uppercase text-sm">About Industrium co</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-slate leading-tight">
                            We work for you since 1980
                        </h2>

                        <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                            <p className="font-semibold text-dark-slate">
                                Allan wrasse climbing gourami amur pike Arctic char, steelhead sprat sea lamprey grunion. Walleye poolfish sand goby butterfly ray stream catfish jewfish.
                            </p>
                            <p>
                                Spanish mackerel yellow weaver sixgill. Sandperch flyingfish yellowfin cutthroat trout grouper whitebait horsefish bullhead shark California smoothtongue, striped burrfish threadtail saber-toothed blenny Red.
                            </p>
                        </div>

                        <Link
                            href="/about"
                            className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm hover:text-dark-slate transition-colors group mt-4"
                        >
                            More About Industrium
                            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                        </Link>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
