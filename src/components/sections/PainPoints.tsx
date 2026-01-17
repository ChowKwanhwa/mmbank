'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Landmark, Cpu, Globe, Banknote } from 'lucide-react';

import { useLanguage } from '@/context/LanguageContext';

export function ProtocolArchitecture() {
    const { t } = useLanguage();

    const nodes = [
        { id: 'gamefi', label: t.protocol.engines.gamefi, sub: 'MODULAR SMART CONTRACTS', icon: Gamepad2, pos: 'top' },
        { id: 'rwa', label: t.protocol.engines.rwa, sub: 'REAL WORLD TOKENS', icon: Globe, pos: 'left' },
        { id: 'defi', label: t.protocol.engines.defi, sub: 'UNIVERSAL ASSET BRIDGE', icon: Landmark, pos: 'right' },
        { id: 'ai', label: t.protocol.engines.ai, sub: '', icon: Cpu, pos: 'bottom' },
    ];

    return (
        <section id="architecture-hub" className="min-h-screen md:h-screen relative flex items-center justify-center overflow-hidden">
            <div className="container mx-auto px-6 relative z-10 scale-[0.85] md:scale-100">
                <div className="text-center mb-8 md:mb-16">
                    <h4 className="text-brand-orange font-bold uppercase tracking-[0.2em] text-xs mb-3">{t.protocol.badge}</h4>
                    <h2 className="text-3xl md:text-6xl font-black text-white tracking-tight uppercase">
                        {t.protocol.title} <span className="text-white/40">{t.protocol.titleHighlight}</span>
                    </h2>
                </div>

                <div className="relative max-w-4xl mx-auto h-[450px] md:h-[600px] flex items-center justify-center">
                    {/* Animated Background Rings */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-[200px] h-[200px] border border-white/5 rounded-full" />
                        <div className="w-[350px] h-[350px] border border-white/5 rounded-full" />
                        <div className="w-[500px] h-[500px] border border-white/5 rounded-full hidden md:block" />
                    </div>

                    {/* Central Hub */}
                    <div className="relative z-20 group scale-90 md:scale-100">
                        {/* Multiple Pulsing Rings for depth */}
                        <div className="absolute inset-0 -m-3 rounded-full border-2 border-brand-orange/40 animate-pulse-ring" />
                        <div className="absolute inset-0 -m-3 rounded-full border border-brand-orange/20 animate-pulse-ring [animation-delay:1s]" />

                        {/* Strong Central Glow */}
                        <div className="absolute inset-0 -m-12 bg-brand-orange/20 blur-[50px] rounded-full animate-pulse opacity-60" />

                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-gradient-to-b from-brand-orange/30 to-black border-2 border-brand-orange/60 flex flex-col items-center justify-center p-6 backdrop-blur-md shadow-[0_0_80px_rgba(255,109,1,0.4)]"
                        >
                            <Banknote className="w-16 h-16 text-brand-orange mb-3 drop-shadow-[0_0_12px_rgba(255,109,1,0.8)]" />
                            <div className="text-center">
                                <h3 className="text-2xl font-black tracking-tight text-white uppercase text-glow-orange leading-none">{t.protocol.core.split(' ')[0]}</h3>
                                <p className="text-brand-orange font-bold text-[10px] tracking-widest uppercase mt-0.5">{t.protocol.core.split(' ')[1]}</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Satellite Nodes and Connecting Lines */}
                    {nodes.map((node, i) => {
                        const positions: Record<string, string> = {
                            top: '-translate-y-[160px] md:-translate-y-[240px]',
                            bottom: 'translate-y-[140px] md:translate-y-[220px]',
                            left: '-translate-x-[130px] md:-translate-x-[300px]',
                            right: 'translate-x-[130px] md:translate-x-[300px]',
                        };

                        const isVertical = node.pos === 'top' || node.pos === 'bottom';

                        return (
                            <React.Fragment key={node.id}>
                                {/* Connecting Line (Animated Flow) */}
                                <div
                                    className={`absolute top-1/2 left-1/2 -z-10 origin-center pointer-events-none
                    ${isVertical ? 'w-[1px] h-[180px] md:h-[260px]' : 'h-[1px] w-[140px] md:w-[320px]'}
                    ${node.pos === 'top' ? '-translate-y-full -translate-x-1/2' : ''}
                    ${node.pos === 'bottom' ? 'translate-y-0 -translate-x-1/2' : ''}
                    ${node.pos === 'left' ? '-translate-x-full -translate-y-1/2' : ''}
                    ${node.pos === 'right' ? 'translate-x-0 -translate-y-1/2' : ''}
                    overflow-hidden
                  `}
                                >
                                    <div className={`w-full h-full bg-gradient-to-${isVertical ? 'b' : 'r'} from-transparent via-brand-orange/30 to-transparent relative`}>
                                        <motion.div
                                            animate={isVertical ? { y: [0, 300] } : { x: [0, 400] }}
                                            transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
                                            className={`absolute ${isVertical ? 'w-full h-16' : 'h-full w-16'} bg-gradient-to-${isVertical ? 'b' : 'r'} from-transparent via-brand-orange to-transparent opacity-50`}
                                        />
                                    </div>
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + i * 0.1 }}
                                    className={`absolute ${positions[node.pos]} z-30`}
                                >
                                    <div className={`glass-card border-white/5 hover:border-brand-orange/40 group transition-all duration-300
                                        ${(node.pos === 'left' || node.pos === 'right')
                                            ? 'flex-col items-center text-center px-4 py-5 gap-3 md:flex-row md:items-center md:text-left md:px-8 md:py-4 md:gap-4'
                                            : 'px-5 py-3 md:px-8 md:py-4 gap-4'
                                        } flex`}>
                                        <div className="bg-brand-orange/10 p-2.5 rounded-lg group-hover:scale-110 transition-transform">
                                            <node.icon className="w-5 h-5 text-brand-orange" />
                                        </div>
                                        <div className={`${(node.pos === 'left' || node.pos === 'right') ? 'text-center md:text-left' : 'text-left'}`}>
                                            <h4 className="text-lg font-black text-white">{node.label}</h4>
                                            {node.sub && <p className="text-[8px] text-gray-500 font-bold tracking-tight uppercase mt-0.5">{node.sub}</p>}
                                        </div>
                                    </div>
                                </motion.div>
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
