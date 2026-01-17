import React from 'react';
import Image from 'next/image';
import { Shield, Eye, Lock, RefreshCcw } from 'lucide-react';

import { useLanguage } from '@/context/LanguageContext';

export function Security() {
    const { t, language } = useLanguage();

    const securityFeatures = [
        {
            icon: Shield,
            title: t.security.features[0].title,
            description: t.security.features[0].desc
        },
        {
            icon: Lock,
            title: t.security.features[1].title,
            description: t.security.features[1].desc
        },
        {
            icon: Eye,
            title: t.security.features[2].title,
            description: t.security.features[2].desc
        },
        {
            icon: RefreshCcw,
            title: t.security.features[3].title,
            description: t.security.features[3].desc
        }
    ];

    return (
        <section className="py-16 lg:py-24 bg-black relative overflow-hidden flex flex-col justify-center">
            <div className="absolute inset-0 bg-orange-glow pointer-events-none opacity-10" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-orange/30 to-transparent" />

            <div className="container mx-auto px-6 relative z-10 scale-[0.95] xl:scale-100">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-black mb-4">{t.security.title} <span className="text-brand-orange">{t.security.titleHighlight}</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
                        {t.security.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {securityFeatures.map((feature, i) => (
                        <div key={i} className="glass-card p-6 md:p-8 border-white/5 hover:border-brand-orange/50 transition-all group relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <feature.icon className="w-16 h-16" />
                            </div>
                            <div className="mb-6 p-3 bg-brand-orange/10 w-fit rounded-xl group-hover:scale-110 group-hover:bg-brand-orange/20 transition-all">
                                <feature.icon className="w-6 h-6 text-brand-orange" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-brand-orange transition-colors">{feature.title}</h3>
                            <p className="text-gray-400 text-xs leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function Footer() {
    const { t, language } = useLanguage();

    return (
        <footer className="py-12 lg:py-16 border-t border-brand-orange/20 bg-black relative overflow-hidden">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-orange/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 scale-[0.95] xl:scale-100">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-16 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="relative w-10 h-10">
                                <Image
                                    src="/assets/mmbank_logo_icon.png"
                                    alt="MM Bank Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-2xl font-black tracking-tighter uppercase">MM BANK</span>
                        </div>
                        <p className="text-gray-500 max-w-md mb-8 text-base leading-relaxed">
                            {t.footer.desc}
                        </p>
                        <div className="flex gap-3">
                            {['Twitter', 'Telegram', 'GitHub'].map((social, i) => (
                                <button key={i} className="px-4 py-2 rounded-lg bg-white/[0.03] hover:bg-brand-orange/10 border border-white/5 hover:border-brand-orange/30 text-gray-400 hover:text-brand-orange transition-all text-[10px] font-black uppercase tracking-widest">
                                    {social}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-black mb-6 italic uppercase tracking-widest text-[10px] border-l-4 border-brand-orange pl-4">{t.footer.ecosystem}</h4>
                        <ul className="space-y-3 text-gray-500 text-xs font-medium">
                            <li><button className="hover:text-brand-orange transition-colors">{t.footer.links.stake}</button></li>
                            <li><button className="hover:text-brand-orange transition-colors">{t.footer.links.mint}</button></li>
                            <li><button className="hover:text-brand-orange transition-colors">{t.footer.links.aggregator}</button></li>
                            <li><button className="hover:text-brand-orange transition-colors">{t.footer.links.governance}</button></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-black mb-6 italic uppercase tracking-widest text-[10px] border-l-4 border-brand-orange pl-4">{t.footer.resources}</h4>
                        <ul className="space-y-3 text-gray-500 text-xs font-medium">
                            <li><button className="hover:text-brand-orange transition-colors">{t.footer.links.docs}</button></li>
                            <li><button className="hover:text-brand-orange transition-colors">{t.footer.links.audit}</button></li>
                            <li><button className="hover:text-brand-orange transition-colors">{t.footer.links.media}</button></li>
                            <li><button className="hover:text-brand-orange transition-colors">{t.footer.links.terms}</button></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-600 font-black uppercase tracking-widest">
                    <p>{t.footer.rights}</p>
                    <div className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        <p>{t.footer.powered} · {language === 'en' ? "On-Chain Banking System" : "链上银行系统"}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
