'use client';

import { useState, useEffect, useRef } from 'react';
import { CheckCircle2, HardHat, Users, Trophy } from 'lucide-react';

interface StatItem {
    icon: any;
    endValue: number;
    suffix: string;
    label: string;
}

const stats: StatItem[] = [
    { icon: Trophy, endValue: 40, suffix: "+", label: "Years of Experience" },
    { icon: HardHat, endValue: 1500, suffix: "+", label: "Projects Completed" },
    { icon: Users, endValue: 350, suffix: "+", label: "Dedicated Employees" },
    { icon: CheckCircle2, endValue: 99, suffix: "%", label: "Client Satisfaction" }
];

const Counter = ({ endValue, duration = 2000 }: { endValue: number, duration?: number }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef<HTMLSpanElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTime: number;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            // Easing function (easeOutExpo)
            const easeOut = (x: number) => x === 1 ? 1 : 1 - Math.pow(2, -10 * x);

            setCount(Math.floor(easeOut(percentage) * endValue));

            if (progress < duration) {
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(endValue);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [isVisible, endValue, duration]);

    return <span ref={countRef}>{count}</span>;
}

export function AboutStats() {
    return (
        <section className="py-20 bg-dark-slate text-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="p-6">
                            <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                            <div className="text-4xl md:text-5xl font-bold mb-2 text-primary flex justify-center items-center">
                                <Counter endValue={stat.endValue} />
                                <span>{stat.suffix}</span>
                            </div>
                            <div className="text-gray-400 font-medium uppercase tracking-wider text-sm">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
