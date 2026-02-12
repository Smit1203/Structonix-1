'use client';

import { useState } from 'react';
import Slider from 'react-slick';
import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';

// Import css files for slick-carousel (must be imported here or in global css)
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const slides = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop',
        title: 'Special industrial production ',
        highlight: 'for business',
        titleEnd: ' process in our places',
        description: 'allan wrasse climbing gourami amur pike Arctic char, steelhead sprat sea lamprey grunion. Walleye poolfish sand goby butterfly ray stream catfish jewfish. Spanish',
        cta: 'Explore more',
        link: '/services'
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1662218934109-eba4e22a6f3f?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Innovative engineering solutions ',
        highlight: 'for future',
        titleEnd: ' development projects',
        description: 'Providing top-tier construction and engineering solutions for large-scale industrial projects with precision and excellence.',
        cta: 'View Projects',
        link: '/projects'
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1722842895153-ba7bf9d53dfb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Sustainable manufacturing ',
        highlight: 'systems',
        titleEnd: ' for modern industry',
        description: 'State-of-the-art facilities and sustainable practices building the next generation of industrial infrastructure.',
        cta: 'Contact Us',
        link: '/contact'
    }
];

export function HomepageBanner() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        beforeChange: (current: number, next: number) => setCurrentSlide(next),
        customPaging: (i: number) => (
            <div className={`text-sm font-medium transition-colors duration-300 ${i === currentSlide ? 'text-primary' : 'text-gray-400'}`}>
                0{i + 1}
            </div>
        ),
        appendDots: (dots: any) => (
            <div
                style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: '5.333%', // Matches w-1/12 roughly, can be adjusted or use Tailwind classes
                    backgroundColor: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 20,
                    borderRight: '1px solid #eee'
                }}
            >
                <ul className="flex flex-col gap-8 vertical-dots items-center w-full"> {dots} </ul>
            </div>
        ),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    dots: true,
                    arrows: false,
                    customPaging: (i: number) => (
                        <div className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentSlide ? 'bg-primary w-6' : 'bg-white/50 hover:bg-white'} `}></div>
                    ),
                    appendDots: (dots: any) => (
                        <div
                            style={{
                                position: 'absolute',
                                bottom: '30px',
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                zIndex: 30, // Higher z-index
                                padding: '0 20px'
                            }}
                        >
                            <ul className="flex gap-3 items-center justify-center w-full"> {dots} </ul>
                        </div>
                    )
                }
            }
        ]
    };

    return (
        <section className="relative w-full h-[85vh] min-h-[600px] overflow-hidden bg-dark-navy">
            <Slider {...settings} className="h-full banner-slider">
                {slides.map((slide, index) => (
                    <div key={slide.id} className="relative w-full h-[85vh] min-h-[600px] outline-none">
                        {/* Background Image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms]"
                            style={{
                                backgroundImage: `url(${slide.image})`,
                                transform: index === currentSlide ? 'scale(1.1)' : 'scale(1)'
                            }}
                        >
                            <div className="absolute inset-0 bg-black/30"></div>
                        </div>

                        {/* Content Container */}
                        <div className="relative z-10 h-full container mx-auto px-4 flex items-center">
                            <div className="flex flex-col lg:flex-row w-full gap-8 items-center">

                                {/* Left Spacer for Dots */}
                                <div className="hidden lg:block w-1/12 flex-shrink-0"></div>

                                {/* Main Text Content */}
                                <div className="w-full lg:w-full flex flex-col justify-center text-white pl-8 md:pl-0">
                                    {index === currentSlide && (
                                        <motion.div
                                            initial="hidden"
                                            animate="visible"
                                            variants={{
                                                hidden: { opacity: 0, y: 30 },
                                                visible: {
                                                    opacity: 1,
                                                    y: 0,
                                                    transition: {
                                                        duration: 0.8,
                                                        ease: "easeOut",
                                                        staggerChildren: 0.2
                                                    }
                                                }
                                            }}
                                        >
                                            <motion.h1
                                                variants={{
                                                    hidden: { opacity: 0, y: 20 },
                                                    visible: { opacity: 1, y: 0 }
                                                }}
                                                className="text-4xl md:text-5xl lg:text-[64px] font-bold leading-[1.1] mb-6 font-sans"
                                            >
                                                {slide.title}
                                                <span className="relative inline-block mx-2">
                                                    {slide.highlight}
                                                    <motion.span
                                                        initial={{ width: 0 }}
                                                        animate={{ width: '100%' }}
                                                        transition={{ delay: 1, duration: 0.8, ease: "easeInOut" }}
                                                        className="absolute bottom-1 left-0 h-1 bg-primary"
                                                    />
                                                </span>
                                                {slide.titleEnd}
                                            </motion.h1>

                                            <motion.p
                                                variants={{
                                                    hidden: { opacity: 0, x: -20 },
                                                    visible: { opacity: 1, x: 0 }
                                                }}
                                                className="text-gray-200 text-sm md:text-base leading-relaxed mb-10 max-w-xl font-secondary border-l-2 border-primary/50 pl-4"
                                            >
                                                {slide.description}
                                            </motion.p>

                                            <motion.div
                                                variants={{
                                                    hidden: { opacity: 0, y: 20 },
                                                    visible: { opacity: 1, y: 0 }
                                                }}
                                            >
                                                <Link
                                                    href={slide.link}
                                                    className="inline-flex items-center gap-4 group"
                                                >
                                                    <span className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">
                                                        {slide.cta}
                                                    </span>
                                                    <span className="w-12 h-12 bg-primary flex items-center justify-center transition-transform duration-300 group-hover:bg-[#d68515]">
                                                        <ArrowRight className="w-5 h-5 text-white -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                                    </span>
                                                </Link>
                                            </motion.div>
                                        </motion.div>
                                    )}
                                </div>

                                {/* Play Button Area */}
                                <div className="w-full lg:w-5/12 flex items-center justify-center lg:justify-start pl-0 lg:pl-12">
                                    {index === currentSlide && (
                                        <motion.button
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
                                            className="w-24 h-24 border border-white/50 flex items-center justify-center group"
                                            aria-label="Play Video"
                                        >
                                            <Play className="w-10 h-10 text-white fill-transparent stroke-[1] ml-1 group-hover:scale-110 transition-transform duration-300" />
                                        </motion.button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>

            {/* Bottom Right Info Box */}
            <div className="absolute bottom-0 right-0 bg-dark-navy/100 text-white p-6 md:px-10 md:py-6 hidden md:block z-20 max-w-xs">
                <p className="text-xs text-gray-400 font-bold tracking-widest uppercase mb-1">CALL US:</p>
                <p className="text-xl font-secondary">+1 800 638 975</p>
            </div>

            {/* Orange Decorative Box for contact box */}
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-white z-20 translate-y-full"></div> {/* Placeholder for complex geometry if needed, keeping simple first */}

            {/* Global Style overrides for vertical Slick dots */}
            <style jsx global>{`
                .vertical-dots li {
                    display: block;
                    margin-bottom: 2rem;
                    position: relative;
                }
                .vertical-dots li::after {
                    content: '';
                    position: absolute;
                    left: 2px;
                    bottom: -20px;
                    width: 1px;
                    height: 15px; /* Line between dots */
                    background-color: rgba(255,255,255,0.2);
                }
                 .vertical-dots li:last-child::after {
                    display: none;
                }
                .vertical-dots li.slick-active div {
                    color: #F4991A;
                    transform: scale(1.2);
                }
                 /* Active line indicator next to the active number */
                .vertical-dots li.slick-active::before {
                    content: '';
                    position: absolute;
                    left: -15px;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 2px;
                    height: 20px;
                    background-color: #F4991A;
                }
            `}</style>
        </section>
    );
}
