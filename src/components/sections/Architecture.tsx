'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Box, Workflow, Database, Sparkles } from 'lucide-react';

const layers = [
    {
        title: "Application Layer",
        items: ["GameFi", "DeFi", "PayFi", "AI Protocol"],
        description: "High-performance interface for end-user applications generating consistent transaction volume.",
        icon: Box
    },
    {
        title: "Fortuna Bank (Stabilizer)",
        items: ["Liquidity Management", "Yield Generation", "AI Risk Control"],
        description: "The intelligent core engine maintaining ecosystem equilibrium and sustainable value distribution.",
        icon: Workflow
    },
    {
        title: "Core Asset Layer",
        items: ["USDT (Base Liquidity)", "FBT (Proof of Stake)"],
        description: "The immutable foundation of value, ensuring deep liquidity and transparent asset backing.",
        icon: Database
    }
];

const ClientOnlyParticles = () => {
    const [particles, setParticles] = React.useState<any[]>([]);

    React.useEffect(() => {
        setParticles([...Array(6)].map((_, i) => ({
            id: i,
            x: Math.random() * 20 - 10,
            duration: 3 + Math.random() * 2,
            top: 20 + Math.random() * 60,
            left: 20 + Math.random() * 60,
            delay: i * 0.5
        })));
    }, []);

    return (
        <>
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    animate={{
                        y: [0, -40, 0],
                        x: [0, p.x, 0],
                        opacity: [0.2, 0.5, 0.2]
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        delay: p.delay
                    }}
                    className="absolute w-1.5 h-1.5 bg-brand-orange rounded-full blur-[1px]"
                    style={{
                        top: `${p.top}%`,
                        left: `${p.left}%`
                    }}
                />
            ))}
        </>
    );
};

import { useLanguage } from '@/context/LanguageContext';

export function Architecture() {
    const { t, language } = useLanguage();
    const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

    const layers = [
        {
            title: t.architecture.layers.application,
            items: ["GameFi", "DeFi", "PayFi", "AI Protocol"],
            description: "High-performance interface for end-user applications generating consistent transaction volume.",
            icon: Box
        },
        {
            title: t.architecture.layers.engine,
            items: ["Liquidity Management", "Yield Generation", "AI Risk Control"],
            description: "The intelligent core engine maintaining ecosystem equilibrium and sustainable value distribution.",
            icon: Workflow
        },
        {
            title: t.architecture.layers.settlement,
            items: ["USDT (Base Liquidity)", "FBT (Proof of Stake)"],
            description: "The immutable foundation of value, ensuring deep liquidity and transparent asset backing.",
            icon: Database
        }
    ];

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY, currentTarget } = e;
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const x = (clientX - left) / width - 0.5;
        const y = (clientY - top) / height - 0.5;
        setMousePos({ x, y });
    };

    return (
        <section id="architecture" className="min-h-screen md:h-screen flex items-center bg-black/50 overflow-hidden" onMouseMove={handleMouseMove}>
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 xl:gap-20">
                    <div className="lg:w-1/2 space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            <div className="flex items-center gap-2 text-brand-orange font-bold tracking-widest text-xs uppercase">
                                <Sparkles className="w-4 h-4" />
                                {t.architecture.badge}
                            </div>
                            <h2 className="text-4xl md:text-6xl xl:text-7xl font-black leading-[0.9] tracking-tighter">
                                {t.architecture.title}<br />
                                <span className="text-brand-orange">{t.architecture.titleHighlight}</span>
                            </h2>
                            <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
                                {t.architecture.subtitle}
                            </p>
                        </motion.div>

                        <div className="grid gap-4 mt-8">
                            {layers.map((layer, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="p-5 glass-card group hover:bg-brand-orange/5"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="p-2.5 rounded-xl bg-brand-orange/10 text-brand-orange group-hover:scale-110 transition-transform">
                                            <layer.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">{layer.title}</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {layer.items.map((item, i) => (
                                                    <span key={i} className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-gray-400 font-bold uppercase tracking-wider">{item}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-1/2 relative">
                        <motion.div
                            style={{
                                rotateY: mousePos.x * 15,
                                rotateX: -mousePos.y * 15,
                                transformStyle: "preserve-3d"
                            }}
                            className="relative aspect-square max-w-lg mx-auto flex flex-col items-center justify-center transition-transform duration-300"
                        >
                            {/* Animated Flow Lines (SVG) */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 400 400">
                                <motion.circle
                                    cx="200" cy="200" r="130"
                                    fill="none"
                                    stroke="url(#grad2)"
                                    strokeWidth="1.5"
                                    strokeDasharray="8,12"
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                />
                                <defs>
                                    <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#FF6D01" stopOpacity="0" />
                                        <stop offset="50%" stopColor="#FF6D01" stopOpacity="0.4" />
                                        <stop offset="100%" stopColor="#FF6D01" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            <ClientOnlyParticles />

                            <div className="relative z-10 flex flex-col items-center gap-8">
                                <motion.div
                                    whileHover={{ scale: 1.05, translateZ: 30 }}
                                    className="w-64 p-4 glass-card border-brand-orange/20 bg-brand-orange/5 text-center shadow-[0_0_40px_rgba(255,109,1,0.1)]"
                                >
                                    <span className="font-black text-brand-orange tracking-[0.2em] text-[10px] uppercase">{t.architecture.layers.application}</span>
                                </motion.div>

                                <div className="h-10 w-0.5 bg-gradient-to-b from-brand-orange/40 via-brand-orange to-brand-orange/40 animate-pulse" />

                                <motion.div
                                    whileHover={{ scale: 1.1, translateZ: 60 }}
                                    animate={{ y: [0, -8, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="w-[18rem] h-40 glass-card border-brand-orange/50 bg-brand-orange/15 flex flex-col items-center justify-center p-6 shadow-[0_0_60px_rgba(255,109,1,0.3)] relative overflow-hidden"
                                >
                                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-brand-orange to-transparent opacity-60" />
                                    <span className="font-black text-white text-3xl tracking-tighter italic mb-1 uppercase">MM Bank</span>
                                    <span className="text-[9px] font-bold text-brand-orange tracking-[0.4em] uppercase">{language === "en" ? "The Stabilizer" : "稳定器"}</span>
                                </motion.div>

                                <div className="h-10 w-0.5 bg-gradient-to-b from-brand-orange/40 via-brand-orange to-brand-orange/40 animate-pulse delay-500" />

                                <motion.div
                                    whileHover={{ scale: 1.05, translateZ: 30 }}
                                    className="w-64 p-4 glass-card border-white/10 bg-white/5 text-center shadow-[0_0_30px_rgba(0,0,0,0.5)]"
                                >
                                    <span className="font-black text-gray-500 tracking-[0.2em] text-[10px] uppercase">{t.architecture.layers.settlement}</span>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
