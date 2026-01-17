'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

// Advanced floating particles with multiple layers
const FloatingParticles = () => {
    const [particles, setParticles] = React.useState<any[]>([]);
    const [glowOrbs, setGlowOrbs] = React.useState<any[]>([]);

    React.useEffect(() => {
        // Small fast particles
        setParticles([...Array(25)].map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 4 + 2,
            duration: 8 + Math.random() * 12,
            delay: Math.random() * 5,
            moveX: (Math.random() - 0.5) * 100
        })));

        // Large glowing orbs
        setGlowOrbs([...Array(6)].map((_, i) => ({
            id: i,
            x: 10 + Math.random() * 80,
            y: 10 + Math.random() * 80,
            size: 80 + Math.random() * 120,
            duration: 15 + Math.random() * 20,
            delay: Math.random() * 8
        })));
    }, []);

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Large ambient glow orbs */}
            {glowOrbs.map((orb) => (
                <motion.div
                    key={`orb-${orb.id}`}
                    className="absolute rounded-full"
                    style={{
                        left: `${orb.x}%`,
                        top: `${orb.y}%`,
                        width: orb.size,
                        height: orb.size,
                        background: `radial-gradient(circle, rgba(255,109,1,0.15) 0%, transparent 70%)`,
                    }}
                    animate={{
                        x: [0, 50, -30, 0],
                        y: [0, -40, 30, 0],
                        scale: [1, 1.3, 0.9, 1],
                        opacity: [0.3, 0.6, 0.4, 0.3],
                    }}
                    transition={{
                        duration: orb.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: orb.delay
                    }}
                />
            ))}

            {/* Rising particles */}
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute bg-brand-orange rounded-full"
                    style={{
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                        width: p.size,
                        height: p.size,
                        boxShadow: `0 0 ${p.size * 3}px rgba(255,109,1,0.6)`,
                    }}
                    animate={{
                        y: [0, -150, -300],
                        x: [0, p.moveX],
                        opacity: [0, 0.8, 0],
                        scale: [0.5, 1.2, 0.3]
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        ease: "easeOut",
                        delay: p.delay
                    }}
                />
            ))}
        </div>
    );
};

// Animated light streaks
const LightStreaks = () => {
    const [streaks, setStreaks] = React.useState<any[]>([]);

    React.useEffect(() => {
        setStreaks([...Array(5)].map((_, i) => ({
            id: i,
            startX: Math.random() * 100,
            width: 2 + Math.random() * 3,
            duration: 3 + Math.random() * 4,
            delay: i * 1.5
        })));
    }, []);

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {streaks.map((s) => (
                <motion.div
                    key={`streak-${s.id}`}
                    className="absolute h-32 rounded-full"
                    style={{
                        left: `${s.startX}%`,
                        width: s.width,
                        background: `linear-gradient(to bottom, transparent, rgba(255,109,1,0.5), transparent)`,
                    }}
                    animate={{
                        top: ['-10%', '110%'],
                        opacity: [0, 0.6, 0]
                    }}
                    transition={{
                        duration: s.duration,
                        repeat: Infinity,
                        ease: "linear",
                        delay: s.delay
                    }}
                />
            ))}
        </div>
    );
};

// Pulsing rings around the center
const PulsingRings = () => (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[1, 2, 3].map((ring) => (
            <motion.div
                key={ring}
                className="absolute rounded-full border border-brand-orange/20"
                style={{
                    width: 200 + ring * 150,
                    height: 200 + ring * 150,
                }}
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                    duration: 4 + ring,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: ring * 0.5
                }}
            />
        ))}
    </div>
);

// Floating geometric shapes
const FloatingShapes = () => {
    const [shapes, setShapes] = React.useState<any[]>([]);

    React.useEffect(() => {
        setShapes([...Array(8)].map((_, i) => ({
            id: i,
            x: 5 + Math.random() * 90,
            y: 5 + Math.random() * 90,
            size: 20 + Math.random() * 40,
            rotation: Math.random() * 360,
            duration: 20 + Math.random() * 15,
            delay: Math.random() * 10,
            type: i % 3 // 0: square, 1: diamond, 2: hexagon-like
        })));
    }, []);

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {shapes.map((s) => (
                <motion.div
                    key={`shape-${s.id}`}
                    className={`absolute border border-brand-orange/10 ${s.type === 0 ? 'rounded-lg' : s.type === 1 ? 'rotate-45' : 'rounded-full'}`}
                    style={{
                        left: `${s.x}%`,
                        top: `${s.y}%`,
                        width: s.size,
                        height: s.size,
                    }}
                    animate={{
                        rotate: [s.rotation, s.rotation + 180, s.rotation + 360],
                        y: [0, -30, 0],
                        opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{
                        duration: s.duration,
                        repeat: Infinity,
                        ease: "linear",
                        delay: s.delay
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

            {/* Animated Background Gradient */}
            <motion.div
                className="absolute inset-0 opacity-30"
                animate={{
                    background: [
                        'radial-gradient(ellipse at 20% 30%, rgba(255,109,1,0.15) 0%, transparent 50%)',
                        'radial-gradient(ellipse at 80% 70%, rgba(255,109,1,0.15) 0%, transparent 50%)',
                        'radial-gradient(ellipse at 50% 50%, rgba(255,109,1,0.15) 0%, transparent 50%)',
                        'radial-gradient(ellipse at 20% 30%, rgba(255,109,1,0.15) 0%, transparent 50%)',
                    ]
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Decorative Glows - Enhanced */}
            <motion.div
                className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-brand-orange/20 rounded-full blur-[140px] pointer-events-none"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
            />

            {/* Advanced Particle Effects */}
            <PulsingRings />
            <FloatingShapes />
            <LightStreaks />
            <FloatingParticles />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {/* Animated Badge */}
                        <motion.span
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-orange/20 border border-brand-orange/40 text-brand-orange text-xs font-bold tracking-widest uppercase mb-8 shadow-[0_0_20px_rgba(255,109,1,0.2)]"
                            animate={{
                                boxShadow: [
                                    '0 0 20px rgba(255,109,1,0.2)',
                                    '0 0 40px rgba(255,109,1,0.4)',
                                    '0 0 20px rgba(255,109,1,0.2)',
                                ]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <motion.span
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            >
                                <Zap className="w-3.5 h-3.5 fill-current" />
                            </motion.span>
                            {t.hero.badge}
                        </motion.span>

                        {/* Title with enhanced glow */}
                        <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tight">
                            {t.hero.title1} & <br />
                            <motion.span
                                className="text-gradient inline-block"
                                animate={{
                                    textShadow: [
                                        '0 0 30px rgba(255,109,1,0.3)',
                                        '0 0 60px rgba(255,109,1,0.5)',
                                        '0 0 30px rgba(255,109,1,0.3)',
                                    ]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                {t.hero.title2}
                            </motion.span>
                        </h1>
                        <p className="text-lg md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                            {t.hero.subtitle}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            {/* Primary button with pulse effect */}
                            <motion.button
                                className="px-10 py-5 bg-brand-orange hover:bg-orange-500 text-white rounded-2xl font-black text-lg transition-all flex items-center gap-3 group orange-shadow hover:scale-105 active:scale-95 relative overflow-hidden cursor-default"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                    animate={{
                                        x: ['-100%', '100%']
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "linear",
                                        repeatDelay: 3
                                    }}
                                />
                                <span className="relative z-10">{language === 'en' ? 'Coming Soon' : '即将上线'}</span>
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
        </section>
    );
}
