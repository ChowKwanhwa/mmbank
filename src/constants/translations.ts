export type Language = 'en' | 'zh';

export const translations = {
    en: {
        nav: {
            problems: "Problems",
            ecosystem: "Ecosystem",
            staking: "Staking",
            tokenomics: "Tokenomics",
            connect: "Connect Wallet"
        },
        hero: {
            badge: "Revolutionizing Yield",
            title1: "First On-Chain Bank",
            title2: "Stable Cash Flow",
            subtitle: "The evolution of DeFi. A truly decentralized banking system providing sustainable on-chain revenue through algorithmic market making.",
            ctaPrimary: "Launch App",
            ctaSecondary: "Read Whitepaper",
            features: {
                yield: "Smart Yield",
                reserves: "Real Reserves",
                audited: "Fully Audited"
            }
        },
        protocol: {
            badge: "THE ENGINE ROOM",
            title: "Multi-Engine",
            titleHighlight: "Ecosystem",
            subtitle: "A modular, decentralized architecture driving liquidity through cross-sector engines.",
            core: "Banking CORE",
            engines: {
                gamefi: "GameFi",
                rwa: "RWA",
                defi: "DeFi",
                ai: "AI"
            }
        },
        architecture: {
            badge: "Protocol Infrastructure",
            title: "Transparent",
            titleHighlight: "Architecture",
            subtitle: "Ensuring maximum security and efficiency through a multi-layered verification system.",
            layers: {
                application: "Application Layer",
                engine: "Ecosystem Engine",
                settlement: "Settlement Layer"
            },
            cards: {
                revenue: "Revenue Streams",
                treasury: "Asset Treasury",
                burning: "Burn Engine",
                rewards: "Reward Pool"
            }
        },
        yield: {
            badge: "Yield Optimization",
            title: "Market Making",
            titleHighlight: "Cycles",
            subtitle: "Capital efficiency maximized through automated liquidity cycles.",
            cycles: [
                { title: "Stable Yield", desc: "Low-risk algorithmic liquidity provision." },
                { title: "Dynamic Arbitrage", desc: "Cross-exchange price discrepancy capture." },
                { title: "Leveraged Staking", desc: "Optimized rewards for long-term holders." },
                { title: "Protocol Growth", desc: "Full ecosystem revenue redistribution." }
            ]
        },
        tokenomics: {
            badge: "Ecosystem Sustainability",
            title: "Transparent",
            titleHighlight: "Tokenomics",
            subtitle: "FBT is a utility token minted via market-making behavior. No pre-mine, no private sale, 100% decentralized.",
            supply: "Supply Allocation",
            deflation: "Deflationary Mechanism",
            burnDesc: "* Guaranteed reduction via algorithmic burning",
            stats: {
                total: "Total Supply",
                circulating: "Circulating",
                audit: "Audit Status",
                monthlyBurn: "Monthly Burn",
                verified: "Verified",
                burnAvg: "1.5% Avg"
            }
        },
        security: {
            title: "Foundation of",
            titleHighlight: "Trust",
            subtitle: "Security is not an afterthought; it's built into every line of our immutable code.",
            features: [
                { title: "Audited Contracts", desc: "Core logic verified by leading blockchain security firms." },
                { title: "Locked Liquidity", desc: "LP tokens permanently burnt/locked to prevent rugpulls." },
                { title: "On-Chain Monitoring", desc: "Real-time visibility into all capital flows and reserves." },
                { title: "AI Risk Control", desc: "Automated liquidity balancing and price stabilization." }
            ]
        },
        footer: {
            desc: "The first truly decentralized bank providing stable, sustainable on-chain cash flow for users and institutions. Built on BSC.",
            ecosystem: "Ecosystem",
            resources: "Resources",
            links: {
                stake: "Stake USDT",
                mint: "Mint FBT",
                aggregator: "Yield Aggregator",
                governance: "Governance",
                docs: "Documentation",
                audit: "Security Audit",
                media: "Media Kit",
                terms: "Terms of Service"
            },
            rights: "© 2024 MM BANK. All rights reserved.",
            powered: "Powered by BSC Mainnet · On-Chain Banking System"
        }
    },
    zh: {
        nav: {
            problems: "核心痛点",
            ecosystem: "生态系统",
            staking: "质押收益",
            tokenomics: "代币经济",
            connect: "连接钱包"
        },
        hero: {
            badge: "革新收益模式",
            title1: "首家链上银行",
            title2: "稳定现金流",
            subtitle: "DeFi 的进化。一个真正的去中心化银行系统，通过算法做市提供可持续的链上收入。",
            ctaPrimary: "立即启动",
            ctaSecondary: "白皮书",
            features: {
                yield: "智能收益",
                reserves: "真实储备",
                audited: "全面审计"
            }
        },
        protocol: {
            badge: "底层引擎室",
            title: "多引擎",
            titleHighlight: "生态架构",
            subtitle: "模块化去中心化架构，通过跨领域引擎驱动流动性。",
            core: "银行核心核心",
            engines: {
                gamefi: "链游生态",
                rwa: "真实资产",
                defi: "去中心化金融",
                ai: "人工智能"
            }
        },
        architecture: {
            badge: "协议基础设施",
            title: "透明",
            titleHighlight: "架构体系",
            subtitle: "通过多层验证系统确保极致的安全与效率。",
            layers: {
                application: "应用层",
                engine: "生态引擎",
                settlement: "结算层"
            },
            cards: {
                revenue: "收入流",
                treasury: "资产国库",
                burning: "销毁引擎",
                rewards: "奖励池"
            }
        },
        yield: {
            badge: "收益优化",
            title: "做市盈利",
            titleHighlight: "周期循环",
            subtitle: "通过自动化流动性周期实现资本效率最大化。",
            cycles: [
                { title: "稳健收益", desc: "低风险算法流动性提供。" },
                { title: "动态套利", desc: "捕捉跨交易所价格差异。" },
                { title: "杠杆质押", desc: "为长期持有者优化奖励。" },
                { title: "协议增长", desc: "生态系统收入全额再分配。" }
            ]
        },
        tokenomics: {
            badge: "生态可持续性",
            title: "透明",
            titleHighlight: "代币经济",
            subtitle: "FBT 是通过做市行为铸造的实用代币。无预挖，无私募，100% 去中心化。",
            supply: "供应分配",
            deflation: "通缩机制",
            burnDesc: "* 通过算法销毁保证供应持续减少",
            stats: {
                total: "总供应量",
                circulating: "流通量",
                audit: "审计状态",
                monthlyBurn: "月度销毁",
                verified: "已验证",
                burnAvg: "平均 1.5%"
            }
        },
        security: {
            title: "信任的",
            titleHighlight: "基石",
            subtitle: "安全并非事后想法；它已深深植入我们每一行不可篡改的代码中。",
            features: [
                { title: "审计合约", desc: "核心逻辑由领先的区块链安全公司验证。" },
                { title: "锁定流动性", desc: "LP 代币永久销毁/锁定，防止跑路风险。" },
                { title: "链上监控", desc: "实时透明查看所有资金流向和储备情况。" },
                { title: "AI 风险控制", desc: "自动化的流动性平衡和价格稳定机制。" }
            ]
        },
        footer: {
            desc: "首个真正的去中心化银行，为用户和机构提供稳定、可持续的链上现金流。构建于 BSC。",
            ecosystem: "生态系统",
            resources: "相关资源",
            links: {
                stake: "质押 USDT",
                mint: "铸造 FBT",
                aggregator: "收益聚合器",
                governance: "治理",
                docs: "官方文档",
                audit: "安全审计",
                media: "媒体素材",
                terms: "服务协议"
            },
            rights: "© 2024 MM BANK. 版权所有。",
            powered: "由 BSC 主网提供动力 · 链上银行业务系统"
        }
    }
};
