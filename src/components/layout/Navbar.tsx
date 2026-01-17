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
            <div className="w-full px-4 pr-5 md:px-6 h-16 md:h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 md:gap-3 shrink-0">
                    <div className="relative w-8 h-8 md:w-10 md:h-10">
                        <Image
                            src="/assets/mmbank_logo_icon.png"
                            alt="MM Bank Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <span className="text-lg md:text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 hidden sm:block">
                        MM BANK
                    </span>
                </Link>

                <div className="flex items-center gap-2 md:gap-8">
                    <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-400">
                        <Link href="#problem" className="hover:text-brand-orange transition-colors">{t.nav.problems}</Link>
                        <Link href="#architecture" className="hover:text-brand-orange transition-colors">{t.nav.ecosystem}</Link>
                        <Link href="#staking" className="hover:text-brand-orange transition-colors">{t.nav.staking}</Link>
                        <Link href="#tokenomics" className="hover:text-brand-orange transition-colors">{t.nav.tokenomics}</Link>
                    </div>

                    <div className="flex items-center gap-2 md:gap-3">
                        {/* Language Toggle */}
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center gap-1 md:gap-1.5 px-2 md:px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-brand-orange/30 hover:bg-brand-orange/5 transition-all group"
                        >
                            <Globe className="w-3.5 h-3.5 md:w-4 md:h-4 text-gray-400 group-hover:text-brand-orange transition-colors" />
                            <span className="text-[10px] font-black uppercase text-gray-400 group-hover:text-white">
                                {language === 'en' ? '中文' : 'EN'}
                            </span>
                        </button>

                        <ConnectButton.Custom>
                            {({
                                account,
                                chain,
                                openAccountModal,
                                openChainModal,
                                openConnectModal,
                                mounted,
                            }) => {
                                const ready = mounted;
                                const connected = ready && account && chain;

                                return (
                                    <div
                                        {...(!ready && {
                                            'aria-hidden': true,
                                            style: {
                                                opacity: 0,
                                                pointerEvents: 'none',
                                                userSelect: 'none',
                                            },
                                        })}
                                    >
                                        {(() => {
                                            if (!connected) {
                                                return (
                                                    <button
                                                        onClick={openConnectModal}
                                                        className="px-3 md:px-4 py-2 bg-brand-orange hover:bg-orange-500 text-white text-xs md:text-sm font-bold rounded-lg transition-all whitespace-nowrap"
                                                    >
                                                        {language === 'en' ? 'Connect' : '连接'}
                                                    </button>
                                                );
                                            }

                                            if (chain.unsupported) {
                                                return (
                                                    <button
                                                        onClick={openChainModal}
                                                        className="px-3 py-2 bg-red-500 text-white text-xs font-bold rounded-lg"
                                                    >
                                                        Wrong
                                                    </button>
                                                );
                                            }

                                            return (
                                                <button
                                                    onClick={openAccountModal}
                                                    className="px-3 py-2 bg-brand-orange/20 border border-brand-orange/40 text-brand-orange text-xs font-bold rounded-lg"
                                                >
                                                    {account.displayName}
                                                </button>
                                            );
                                        })()}
                                    </div>
                                );
                            }}
                        </ConnectButton.Custom>
                    </div>
                </div>
            </div>
        </nav>
    );
}
