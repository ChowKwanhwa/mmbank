'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, Percent, ArrowUpRight } from 'lucide-react';

const cycles = [
    {
        days: "1 Day",
        daily: "0.3%",
        monthly: "9.4%",
        color: "bg-orange-600",
        gradient: "from-orange-950/90 via-black to-black",
    },
    {
        days: "15 Days",
        daily: "0.6%",
        monthly: "19.7%",
        color: "bg-orange-500",
        gradient: "from-orange-900/90 via-black to-black",
    },
    {
        days: "30 Days",
        daily: "1.0%",
        monthly: "34.8%",
        color: "bg-orange-400",
        gradient: "from-orange-850/90 via-black to-black",
    },
    {
        days: "60 Days",
        daily: "1.1%",
        monthly: "46.2%",
        color: "bg-brand-orange",
        gradient: "from-brand-orange/20 via-black to-black",
    },
];

import { useLanguage } from '@/context/LanguageContext';

const CycleCard = ({ cycle, index, range, progress }: { cycle: any, index: number, range: number[], progress: any }) => {
    const { language } = useLanguage();

    // Offset the 'y' movement so they enter from the bottom
    const y = useTransform(progress, range, [1000, 0]);

    // Scale down older cards slightly to give a layered look
    const nextCardStart = range[1];
    const scale = useTransform(progress, [range[0], range[0] + 0.05, nextCardStart, nextCardStart + 0.05], [0.9, 1, 1, 0.95]);

    // Cards appear and then STAY at opacity 1
    const opacity = useTransform(progress, [range[0] - 0.05, range[0]], [0, 1]);

    return (
        <motion.div
            style={{ y, scale, opacity, zIndex: 10 + index }}
            className={`absolute inset-0 flex items-center justify-center p-12`}
        >
            <div className={`w-full max-w-5xl glass-card overflow-hidden bg-gradient-to-br ${cycle.gradient} border-2 border-brand-orange/40 shadow-[0_0_80px_rgba(255,109,1,0.2)] relative group`}>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-orange to-transparent opacity-60" />
                <div className="grid md:grid-cols-2 gap-12 p-8 md:p-20 relative z-10">
                    <div className="flex flex-col justify-center">
                        <div className="flex items-center gap-3 text-brand-orange font-black text-xl mb-6 tracking-tighter">
                            <Calendar className="w-8 h-8" />
                            {language === 'en' ? "STAKING PERIOD" : "质押周期"}
                        </div>
                        <h3 className="text-6xl md:text-8xl font-black mb-8 tracking-tight text-white">
                            {cycle.days.replace("Days", language === 'en' ? "Days" : "天").replace("Day", language === 'en' ? "Day" : "天")}
                        </h3>
                        <p className="text-gray-400 text-xl leading-relaxed max-w-md font-medium">
                            {language === 'en' ? (
                                <>Optimized for <span className="text-brand-orange font-bold">sustainable liquidity</span>. The compound interest engine ensures exponential growth through autonomous market making.</>
                            ) : (
                                <>为<span className="text-brand-orange font-bold">可持续流动性</span>优化。复利引擎通过自动做市确保指数级增长。</>
                            )}
                        </p>
                    </div>

                    <div className="flex flex-col justify-center gap-8">
                        <div className="p-10 rounded-[2rem] bg-white/[0.02] border border-white/10 group-hover:border-brand-orange/30 transition-all duration-500 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10"><Percent className="w-20 h-20 text-brand-orange" /></div>
                            <div className="flex items-center justify-between mb-4 relative z-10">
                                <span className="text-gray-400 font-bold uppercase tracking-widest text-sm">{language === 'en' ? "Daily Yield" : "日收益"}</span>
                                <Percent className="w-6 h-6 text-brand-orange" />
                            </div>
                            <div className="text-6xl md:text-7xl font-black text-white relative z-10">{cycle.daily}</div>
                        </div>

                        <div className="p-10 rounded-[2rem] bg-brand-orange/5 border border-brand-orange/40 orange-shadow relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-20"><ArrowUpRight className="w-20 h-20 text-brand-orange" /></div>
                            <div className="flex items-center justify-between mb-4 relative z-10">
                                <span className="text-brand-orange font-black uppercase tracking-widest text-sm">{language === 'en' ? "Est. Monthly" : "预计月化"}</span>
                                <ArrowUpRight className="w-6 h-6 text-brand-orange" />
                            </div>
                            <div className="text-6xl md:text-7xl font-black text-brand-orange relative z-10 drop-shadow-[0_0_20px_rgba(255,109,1,0.4)]">{cycle.monthly}</div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

// Mobile-specific simple card layout
const MobileCycleCard = ({ cycle, index }: { cycle: any, index: number }) => {
    const { language } = useLanguage();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`glass-card overflow-hidden bg-gradient-to-br ${cycle.gradient} border border-brand-orange/30 p-5`}
        >
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-brand-orange" />
                    <span className="text-white font-black text-lg">
                        {cycle.days.replace("Days", language === 'en' ? "Days" : "天").replace("Day", language === 'en' ? "Day" : "天")}
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/[0.03] rounded-xl p-4 border border-white/5">
                    <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-1">
                        {language === 'en' ? "Daily" : "日收益"}
                    </div>
                    <div className="text-2xl font-black text-white">{cycle.daily}</div>
                </div>
                <div className="bg-brand-orange/10 rounded-xl p-4 border border-brand-orange/30">
                    <div className="text-[10px] text-brand-orange font-bold uppercase tracking-wider mb-1">
                        {language === 'en' ? "Monthly" : "月收益"}
                    </div>
                    <div className="text-2xl font-black text-brand-orange">{cycle.monthly}</div>
                </div>
            </div>
        </motion.div>
    );
};

export function StackingYield() {
    const { t } = useLanguage();
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <>
            {/* Mobile Layout - Simple vertical list */}
            <section id="staking" className="md:hidden py-20 px-6 bg-black">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <h2 className="text-3xl font-black tracking-tight mb-3 uppercase">
                        {t.yield.title} <span className="text-gradient">{t.yield.titleHighlight}</span>
                    </h2>
                    <p className="text-gray-500 text-sm font-medium">{t.yield.subtitle}</p>
                </motion.div>

                <div className="space-y-4 max-w-md mx-auto">
                    {cycles.map((cycle, i) => (
                        <MobileCycleCard key={i} cycle={cycle} index={i} />
                    ))}
                </div>
            </section>

            {/* Desktop Layout - Stacking scroll effect */}
            <section ref={containerRef} className="hidden md:block relative h-[400vh] bg-black">
                <div className="sticky top-0 h-screen overflow-hidden">
                    {/* Section Header - Sticky-pinned */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="absolute top-24 left-0 right-0 z-[60] text-center"
                    >
                        <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-4 uppercase">
                            {t.yield.title} <span className="text-gradient">{t.yield.titleHighlight}</span>
                        </h2>
                        <p className="text-gray-500 text-xl font-medium tracking-wide">{t.yield.subtitle}</p>
                    </motion.div>

                    <div className="relative h-full w-full">
                        {cycles.map((cycle, i) => {
                            // Start stacking after a 15% scroll delay (dead zone for header)
                            const start = 0.15 + (i * 0.75) / cycles.length;
                            const end = 0.15 + ((i + 1) * 0.75) / cycles.length;
                            return (
                                <CycleCard
                                    key={i}
                                    cycle={cycle}
                                    index={i}
                                    range={[start, end]}
                                    progress={scrollYProgress}
                                />
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}
