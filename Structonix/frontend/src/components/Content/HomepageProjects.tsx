'use client';

import { useState } from 'react';
import Slider from 'react-slick';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Re-using slick css from global or banner if not already globally imported, 
// but usually it's good practice to ensure they are available.
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const projects = [
    {
        id: 1,
        number: '01',
        title: 'Chemical refinement complex',
        location: 'Houston, USA',
        description: 'Allan wrasse climbing gourami amur pike Arctic char, steelhead sprat se',
        image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 2,
        number: '02',
        title: 'Machine tools for light industry',
        location: 'Kyiv, Ukraine',
        description: 'Allan wrasse climbing gourami amur pike Arctic char, steelhead sprat se',
        image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 3,
        number: '03',
        title: 'Sustainable energy plant',
        location: 'Berlin, Germany',
        description: 'Allan wrasse climbing gourami amur pike Arctic char, steelhead sprat se',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop'
    },
    {
        id: 4,
        number: '04',
        title: 'Logistic center expansion',
        location: 'Warsaw, Poland',
        description: 'Allan wrasse climbing gourami amur pike Arctic char, steelhead sprat se',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop'
    }
];

export function HomepageProjects() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: false,
        arrows: false, // We might add custom arrows later or rely on drag
        infinite: true,
        speed: 500,
        slidesToShow: 2.2, // Show partial slides
        slidesToScroll: 1,
        centerMode: true,
        centeredSlides: true,
        initialSlide: 1, // Start at 02 like image? Or just 0
        beforeChange: (current: number, next: number) => setCurrentSlide(next),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1.5,
                    centerMode: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: false
                }
            }
        ]
    };

    return (
        <section className="pt-20 md:pt-32 pb-0 bg-white overflow-hidden">
            <div className="container mx-auto px-4 mb-16">
                <div className="flex flex-col md:flex-row justify-between items-end gap-12">
                    {/* Header Left */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl"
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <span className="w-1 h-1 rounded-full bg-primary"></span>
                            <span className="text-primary font-bold tracking-widest uppercase text-xs">Projects</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-dark-slate leading-[1.1] mb-8">
                            Successfully completed <br /> projects for our clients
                        </h2>
                        <Link
                            href="/projects"
                            className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs hover:text-dark-slate transition-colors group"
                        >
                            More Projects
                            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                        </Link>
                    </motion.div>

                    {/* Header Right: Stats */}
                    <div className="flex items-center gap-4 hidden md:flex">
                        <span className="text-[80px] lg:text-[100px] font-bold text-outline leading-none text-[#E0E1E4]" style={{ WebkitTextStrokeColor: '#CDD3D8', opacity: 0.6 }}>
                            250+
                        </span>
                        <div className="h-24 w-px bg-gray-200 mx-2"></div>
                        <span className="writing-mode-vertical text-xs font-bold uppercase tracking-widest text-dark-slate rotate-180" style={{ writingMode: 'vertical-rl' }}>
                            Projects <br /> Completed
                        </span>
                    </div>
                </div>
            </div>

            {/* Full Width Slider Section */}
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
                {/* Decorative Black Box Top Right of slider container */}
                <div className="absolute -top-16 right-0 w-24 h-32 bg-dark-navy z-10 hidden lg:block"></div>
                <div className="absolute -top-16 right-24 w-24 h-16 bg-white z-10 hidden lg:block"></div> {/* Spacer? */}

                <Slider {...settings} className="projects-slider">
                    {projects.map((project, index) => {
                        const isActive = index === currentSlide;
                        return (
                            <div key={project.id} className="px-1 md:px-2 outline-none">
                                <div className="relative h-[400px] md:h-[500px] lg:h-[600px] group overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/10"></div>

                                    {/* Number Overlay */}
                                    <div className={`absolute bottom-8 left-8 md:bottom-12 md:left-12 z-20 transition-all duration-300 ${isActive ? 'opacity-0' : 'opacity-100'}`}>
                                        <span className="text-6xl md:text-8xl font-bold text-outline text-white/50">
                                            {project.number}
                                        </span>
                                    </div>

                                    {/* Active State Card */}
                                    <AnimatePresence>
                                        {isActive && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 50 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 20 }}
                                                transition={{ duration: 0.5, ease: "easeOut" }}
                                                className="absolute bottom-0 left-0 bg-dark-navy p-8 md:p-12 w-full md:w-[85%] lg:w-[70%] max-w-xl z-30"
                                            >
                                                <span className="text-6xl md:text-7xl font-bold text-outline block mb-4" style={{ WebkitTextStrokeColor: '#F4991A' }}>
                                                    {project.number}
                                                </span>
                                                <h3 className="text-white text-2xl md:text-3xl font-bold mb-2 leading-tight">
                                                    {project.title}
                                                </h3>
                                                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
                                                    {project.description}
                                                </p>
                                                {/* Arrow Bottom Right of Card */}
                                                <div className="absolute bottom-0 right-0 w-12 h-12 flex items-center justify-center">
                                                    {/* Use a simple arrow icon or decorative lines */}
                                                    <ArrowUpRight className="w-6 h-6 text-primary" />
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Mobile only active info (always show something on mobile?) - simpler version */}
                                    <div className="md:hidden absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                        <h3 className="text-white text-xl font-bold mb-1">{project.title}</h3>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </Slider>
            </div>

            <style jsx global>{`
                .slick-slide {
                    transition: opacity 0.3s ease;
                }
                .slick-slide.slick-active {
                   /* z-index: 10; */
                }
                /* Ensure slider overflows nicely */
                .projects-slider .slick-list,
                .projects-slider .slick-track {
                    height: 100%;
                }
                .projects-slider .slick-slide > div {
                    height: 100%;
                }
            `}</style>

        </section>
    );
}
