'use client';

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { ProtocolArchitecture } from "@/components/sections/PainPoints";
import { Architecture } from "@/components/sections/Architecture";
import { StackingYield } from "@/components/sections/StackingYield";
import { Tokenomics } from "@/components/sections/Tokenomics";
import { Security, Footer } from "@/components/sections/Security";

const FadeInSection = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    exit={{ opacity: 0, y: -50, filter: "blur(10px)" }}
    viewport={{ once: true, margin: "-10%" }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
  >
    {children}
  </motion.div>
);

const FullScreenStack = ({ children, zIndex }: { children: React.ReactNode, zIndex: number }) => (
  <div className="sticky top-0 h-screen w-full overflow-hidden" style={{ zIndex }}>
    {children}
  </div>
);

const SectionOverlay = ({ children, zIndex, opacity, height = "min-h-screen" }: { children: React.ReactNode, zIndex: number, opacity?: any, height?: string }) => (
  <motion.div
    style={{ zIndex, opacity }}
    className={`sticky top-0 w-full ${height} frosted-bg shadow-[0_-50px_100px_rgba(0,0,0,0.8)] border-t border-white/10`}
  >
    {children}
  </motion.div>
);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate opacity ranges for each section in the stack
  // Section 1: Hero
  const heroOpacity = useTransform(scrollYProgress, [0, 0.05, 0.1], [1, 0.5, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);

  // Section 2: Protocol Hub (Fades when Architecture arrives)
  const hubOpacity = useTransform(scrollYProgress, [0.15, 0.2, 0.25], [1, 1, 0]);

  // Section 3: Ecosystem Architecture (Fades when Staking starts)
  const archOpacity = useTransform(scrollYProgress, [0.35, 0.4, 0.45], [1, 1, 0]);

  // Section 4: Stacking Yield (Fades when Tokenomics arrives)
  const yieldOpacity = useTransform(scrollYProgress, [0.65, 0.7, 0.75], [1, 1, 0]);

  return (
    <main ref={containerRef} className="min-h-screen bg-black text-white selection:bg-brand-orange/30">
      <Navbar />

      {/* 1. Hero Section (Base Layer) */}
      <div className="sticky top-0 h-screen w-full overflow-hidden z-0">
        <motion.div style={{ opacity: heroOpacity, scale: heroScale }}>
          <Hero />
        </motion.div>
      </div>

      {/* 2. Protocol Architecture Hub */}
      <SectionOverlay zIndex={10} opacity={hubOpacity}>
        <ProtocolArchitecture />
      </SectionOverlay>

      {/* 3. Multi-Engine Architecture */}
      <SectionOverlay zIndex={20} opacity={archOpacity}>
        <Architecture />
      </SectionOverlay>

      {/* 4. Stacking Yield cycles */}
      <motion.div
        style={{ zIndex: 30, opacity: yieldOpacity }}
        className="relative shadow-[0_-50px_100px_rgba(0,0,0,0.8)] border-t border-white/10 bg-black"
      >
        <StackingYield />
      </motion.div>

      {/* 5. Tokenomics Overlay */}
      <SectionOverlay zIndex={40}>
        <Tokenomics />
      </SectionOverlay>

      {/* 6. Security & Final sections Overlay */}
      <SectionOverlay zIndex={50}>
        <Security />
        <Footer />
      </SectionOverlay>
    </main>
  );
}
