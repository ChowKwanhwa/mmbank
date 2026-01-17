'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useLanguage } from '@/context/LanguageContext';
import { Globe } from 'lucide-react';

export function Navbar() {
    const { language, setLanguage, t } = useLanguage();

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'zh' : 'en');
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/10 bg-black/50 backdrop-blur-md">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3">
                    <div className="relative w-10 h-10">
                        <Image
                            src="/assets/mmbank_logo_icon.png"
                            alt="MM Bank Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 hidden sm:block">
                        MM BANK
                    </span>
                </Link>

                <div className="flex items-center gap-4 md:gap-8">
                    <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-400">
                        <Link href="#problem" className="hover:text-brand-orange transition-colors">{t.nav.problems}</Link>
                        <Link href="#architecture" className="hover:text-brand-orange transition-colors">{t.nav.ecosystem}</Link>
                        <Link href="#staking" className="hover:text-brand-orange transition-colors">{t.nav.staking}</Link>
                        <Link href="#tokenomics" className="hover:text-brand-orange transition-colors">{t.nav.tokenomics}</Link>
                    </div>

                    <div className="flex items-center gap-3">
                        {/* Language Toggle */}
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-brand-orange/30 hover:bg-brand-orange/5 transition-all group"
                        >
                            <Globe className="w-4 h-4 text-gray-400 group-hover:text-brand-orange transition-colors" />
                            <span className="text-[10px] font-black uppercase text-gray-400 group-hover:text-white">
                                {language === 'en' ? '中文' : 'EN'}
                            </span>
                        </button>

                        <ConnectButton
                            accountStatus="avatar"
                            chainStatus="icon"
                            showBalance={false}
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
}
