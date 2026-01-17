import {
    PieChart, Pie, Cell, ResponsiveContainer, Tooltip,
    AreaChart, Area, XAxis, YAxis, CartesianGrid
} from 'recharts';
import { motion, AnimatePresence } from 'framer-motion';
import { Coins, Activity, ShieldCheck, Flame, PieChart as PieIcon, LineChart as ChartIcon } from 'lucide-react';

const distributionData = [
    { name: 'LP Pool', value: 76.19, color: '#FF6D01' },
    { name: 'Payment Treasury', value: 14.29, color: '#FF9500' },
    { name: 'Node Incentives', value: 9.52, color: '#FFB700' },
];

const burnTrendData = [
    { month: 'Start', supply: 100 },
    { month: 'Month 3', supply: 85 },
    { month: 'Month 6', supply: 72 },
    { month: 'Month 9', supply: 58 },
    { month: 'Month 12', supply: 45 },
    { month: 'Month 15', supply: 34 },
    { month: 'Month 18', supply: 26 },
];

import { useLanguage } from '@/context/LanguageContext';

const StatCard = ({ label, value, icon: Icon, delay }: { label: string, value: string, icon: any, delay: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className="glass-card p-6 text-center relative overflow-hidden group"
    >
        {/* Animated Background Pulse */}
        <div className="absolute inset-0 bg-brand-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute -right-4 -top-4 w-24 h-24 bg-brand-orange/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        <div className="relative z-10 flex flex-col items-center">
            <div className="mb-4 relative">
                <div className="absolute inset-0 bg-brand-orange/20 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-500" />
                <div className="p-3 bg-brand-orange/10 rounded-xl text-brand-orange border border-brand-orange/20 relative">
                    <Icon className="w-6 h-6 animate-pulse" />
                </div>
            </div>
            <div className="text-[10px] text-brand-orange font-black uppercase tracking-widest mb-1">{label}</div>
            <div className="text-2xl font-black text-white">{value}</div>
        </div>
    </motion.div>
);

export function Tokenomics() {
    const { t, language } = useLanguage();

    const distributionData = [
        { name: language === 'en' ? 'LP Pool' : 'LP 池', value: 76.19, color: '#FF6D01' },
        { name: language === 'en' ? 'Payment Treasury' : '支付金库', value: 14.29, color: '#FF9500' },
        { name: language === 'en' ? 'Node Incentives' : '节点激励', value: 9.52, color: '#FFB700' },
    ];

    const burnTrendData = [
        { month: language === 'en' ? 'Start' : '启动', supply: 100 },
        { month: language === 'en' ? 'Month 3' : '3个月', supply: 85 },
        { month: language === 'en' ? 'Month 6' : '6个月', supply: 72 },
        { month: language === 'en' ? 'Month 9' : '9个月', supply: 58 },
        { month: language === 'en' ? 'Month 12' : '12个月', supply: 45 },
        { month: language === 'en' ? 'Month 15' : '15个月', supply: 34 },
        { month: language === 'en' ? 'Month 18' : '18个月', supply: 26 },
    ];

    return (
        <section id="tokenomics" className="min-h-screen md:h-screen py-16 md:py-10 relative overflow-hidden bg-black flex flex-col justify-center">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-brand-orange/5 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-brand-orange/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 xl:scale-100">
                <div className="text-center mb-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 mb-4"
                    >
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
                        <span className="text-[10px] font-black text-brand-orange uppercase tracking-[0.2em]">{t.tokenomics.badge}</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-3 tracking-tighter uppercase leading-[0.9]">
                        {t.tokenomics.title} <span className="text-brand-orange">{t.tokenomics.titleHighlight}</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                        {t.tokenomics.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    {/* Distribution Pie Chart */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="glass-card p-6 md:p-8 relative group"
                    >
                        <div className="flex items-center gap-2.5 mb-6">
                            <div className="p-1.5 bg-brand-orange/10 rounded-lg text-brand-orange border border-brand-orange/20">
                                <PieIcon className="w-4 h-4" />
                            </div>
                            <h3 className="text-lg font-black uppercase tracking-tight">{t.tokenomics.supply}</h3>
                        </div>

                        <div className="h-56 md:h-72 w-full relative">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-brand-orange/20 rounded-full animate-pulse-ring" />

                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={distributionData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={55}
                                        outerRadius={85}
                                        paddingAngle={8}
                                        dataKey="value"
                                        stroke="rgba(255,255,255,0.05)"
                                        strokeWidth={1.5}
                                    >
                                        {distributionData.map((entry, index) => (
                                            <Cell
                                                key={`cell-${index}`}
                                                fill={entry.color}
                                                className="hover:opacity-80 transition-opacity cursor-pointer filter drop-shadow-[0_0_8px_rgba(255,109,1,0.25)]"
                                            />
                                        ))}
                                    </Pie>
                                    <Tooltip
                                        contentStyle={{ backgroundColor: 'rgba(0,0,0,0.9)', border: '1px solid rgba(255,109,1,0.2)', borderRadius: '12px', backdropFilter: 'blur(10px)', fontSize: '12px' }}
                                        itemStyle={{ color: '#fff' }}
                                    />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="flex flex-wrap justify-center gap-4 mt-6">
                            {distributionData.map((item, i) => (
                                <div key={i} className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                                    <span className="text-[10px] text-gray-400 font-black uppercase tracking-wider">{item.name}</span>
                                    <span className="text-[10px] text-white font-bold">{item.value}%</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Deflation Area Chart */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="glass-card p-6 md:p-8 relative group"
                    >
                        <div className="flex items-center gap-2.5 mb-6">
                            <div className="p-1.5 bg-brand-orange/10 rounded-lg text-brand-orange border border-brand-orange/20">
                                <Flame className="w-4 h-4" />
                            </div>
                            <h3 className="text-lg font-black uppercase tracking-tight">{t.tokenomics.deflation}</h3>
                        </div>

                        <div className="h-48 md:h-72 w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={burnTrendData}>
                                    <defs>
                                        <linearGradient id="colorSupply" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#FF6D01" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#FF6D01" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="5 5" stroke="rgba(255,255,255,0.05)" vertical={false} />
                                    <XAxis
                                        dataKey="month"
                                        stroke="#52525b"
                                        fontSize={9}
                                        tickLine={false}
                                        axisLine={false}
                                        dy={10}
                                        className="font-black uppercase tracking-widest"
                                    />
                                    <YAxis
                                        stroke="#52525b"
                                        fontSize={9}
                                        tickLine={false}
                                        axisLine={false}
                                        tickFormatter={(val) => `${val}%`}
                                        className="font-bold"
                                    />
                                    <Tooltip
                                        contentStyle={{ backgroundColor: 'rgba(0,0,0,0.9)', border: '1px solid rgba(255,109,1,0.2)', borderRadius: '12px', backdropFilter: 'blur(10px)', fontSize: '12px' }}
                                        itemStyle={{ color: '#fff' }}
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="supply"
                                        stroke="#FF6D01"
                                        strokeWidth={3}
                                        fillOpacity={1}
                                        fill="url(#colorSupply)"
                                        className="filter drop-shadow-[0_0_15px_rgba(255,109,1,0.3)]"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                        <p className="text-center text-[8px] text-gray-500 mt-6 font-black uppercase tracking-[0.2em] italic">
                            {t.tokenomics.burnDesc}
                        </p>
                    </motion.div>
                </div>

                {/* FBT Details Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <StatCard label={t.tokenomics.stats.total} value={language === 'en' ? "2.1 Trillion" : "2.1 万亿"} icon={Coins} delay={0.1} />
                    <StatCard label={t.tokenomics.stats.circulating} value={language === 'en' ? "540 Billion" : "5400 亿"} icon={Activity} delay={0.2} />
                    <StatCard label={t.tokenomics.stats.audit} value={t.tokenomics.stats.verified} icon={ShieldCheck} delay={0.3} />
                    <StatCard label={t.tokenomics.stats.monthlyBurn} value={t.tokenomics.stats.burnAvg} icon={Flame} delay={0.4} />
                </div>
            </div>
        </section>
    );
}
