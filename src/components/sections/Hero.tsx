'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const FloatingParticles = () => {
    const [particles, setParticles] = React.useState<any[]>([]);

    React.useEffect(() => {
        setParticles([...Array(15)].map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 3 + 1,
            duration: 10 + Math.random() * 20,
            delay: Math.random() * 5
        })));
    }, []);

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute bg-brand-orange/30 rounded-full blur-[1px]"
                    style={{
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                        width: p.size,
                        height: p.size,
                    }}
                    animate={{
                        y: [-20, -100],
                        opacity: [0, 0.5, 0],
                        scale: [1, 1.5, 1]
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        ease: "linear",
                        delay: p.delay
                    }}
                />
            ))}
        </div>
    );
};

export function Hero() {
    const { t, language } = useLanguage();

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Dynamic Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/hero_bg.png"
                    alt="MM Bank Background"
                    fill
                    className="object-cover opacity-80 mix-blend-screen"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/20 to-black" />
                <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black to-transparent" />
            </div>

            {/* Decorative Glows */}
            <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-brand-orange/20 rounded-full blur-[140px] animate-pulse pointer-events-none" />
            <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />

            <FloatingParticles />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-orange/20 border border-brand-orange/40 text-brand-orange text-xs font-bold tracking-widest uppercase mb-8 shadow-[0_0_20px_rgba(255,109,1,0.2)]">
                            <Zap className="w-3.5 h-3.5 fill-current" />
                            {t.hero.badge}
                        </span>
                        <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tight">
                            {t.hero.title1} & <br />
                            <span className="text-gradient drop-shadow-[0_0_30px_rgba(255,109,1,0.3)]">{t.hero.title2}</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                            {t.hero.subtitle}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <button className="px-10 py-5 bg-brand-orange hover:bg-orange-500 text-white rounded-2xl font-black text-lg transition-all flex items-center gap-3 group orange-shadow hover:scale-105 active:scale-95">
                                {t.hero.ctaPrimary}
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </button>
                            <button className="px-10 py-5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl font-bold text-lg transition-all backdrop-blur-md hover:border-brand-orange/30">
                                {t.hero.ctaSecondary}
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

