'use client';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'framer-motion';

// Sample logos (using placeholders or text for now, or generic icons)
// Ideally would use SVGs or images. Using placeholder text/shapes for structure.
const partners = [
    { id: 1, name: 'Tata Group', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/512px-Tata_logo.svg.png' },
    { id: 2, name: 'Aditya Birla Group', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Aditya_Birla_Group_Logo.svg/512px-Aditya_Birla_Group_Logo.svg.png' },
    { id: 3, name: 'Adani Group', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Adani_Group_logo.svg/512px-Adani_Group_logo.svg.png' },
    { id: 4, name: 'Reliance Industries', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Reliance_Industries_Logo.svg/512px-Reliance_Industries_Logo.svg.png' },
    { id: 5, name: 'Mahindra Group', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Mahindra_Rise_New_Logo.svg/512px-Mahindra_Rise_New_Logo.svg.png' },
    { id: 6, name: 'Larsen & Toubro', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/L%26T.svg/512px-L%26T.svg.png' },
];

export function HomepagePartners() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };

    return (
        <section className="py-12 px-4 md:px-20 bg-[#F5F7FA] relative overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-gray-400 font-bold tracking-widest text-sm">. Partners</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-dark-slate max-w-xl leading-tight">
                        Partners who trust <br /> Industrium co
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="partner-slider"
                >
                    <Slider {...settings}>
                        {partners.map((partner) => (
                            <div key={partner.id} className="px-4">
                                <div className="h-24 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 cursor-pointer">
                                    {/* Using simple text representation style based on image if images aren't real yet */}
                                    <img
                                        src={partner.logo}
                                        alt={partner.name}
                                        className="max-h-12 w-auto object-contain"
                                    />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </motion.div>
            </div>
        </section >
    );
}
