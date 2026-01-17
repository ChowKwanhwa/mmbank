'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Zap, BarChart3 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

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
                    className="object-cover opacity-60 mix-blend-screen"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/20 to-black" />
                <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black to-transparent" />
            </div>

            {/* Decorative Glows */}
            <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-brand-orange/30 rounded-full blur-[140px] animate-pulse pointer-events-none" />
            <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-orange-600/20 rounded-full blur-[120px] pointer-events-none" />

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

                    {/* Stats/Features Banner */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-28"
                    >
                        {[
                            {
                                icon: BarChart3,
                                title: t.hero.features.yield,
                                desc: language === 'en'
                                    ? "0.3% - 1.1% daily returns backed by real-world market making activity."
                                    : "0.3% - 1.1% 的每日回报，由真实的做市活动提供支持。"
                            },
                            {
                                icon: ShieldCheck,
                                title: t.hero.features.reserves,
                                desc: language === 'en'
                                    ? "Governance-free smart contracts with audited on-chain transparency."
                                    : "无治理智能合约，具有经过审计的链上透明度。"
                            },
                            {
                                icon: Zap,
                                title: t.hero.features.audited,
                                desc: language === 'en'
                                    ? "Zero human intervention. Rules-based market making and profit distribution."
                                    : "零人为干预。基于规则的做市和利润分配。"
                            }
                        ].map((feature, i) => (
                            <div key={i} className="glass-card p-10 text-left border-white/5 hover:border-brand-orange/30 transition-all group">
                                <div className="w-14 h-14 bg-brand-orange/10 rounded-2xl flex items-center justify-center text-brand-orange mb-6 group-hover:scale-110 group-hover:bg-brand-orange/20 transition-all shadow-[0_0_15px_rgba(255,109,1,0.1)]">
                                    <feature.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 group-hover:text-brand-orange transition-colors">{feature.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
