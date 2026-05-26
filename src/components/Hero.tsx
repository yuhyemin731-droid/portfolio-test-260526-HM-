import React from "react";
import { ArrowDown, Mail, Compass, Star, Sparkles, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { PERSONAL_INFO } from "../data";

interface HeroProps {
  onLearnMore: () => void;
}

export default function Hero({ onLearnMore }: HeroProps) {
  return (
    <section
      id="hero"
      className="min-h-screen pt-32 pb-16 md:py-36 px-6 md:px-12 flex flex-col justify-center relative overflow-hidden bg-brand-beige"
    >
      {/* Editorial Watermark background */}
      <div className="absolute top-1/4 right-[5%] -translate-y-1/2 pointer-events-none select-none -z-10 opacity-5">
        <span className="font-serif text-[18vw] font-black text-brand-charcoal tracking-tighter leading-none block">
          EDU
        </span>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Typographical content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left order-2 lg:order-1" id="hero-text-container">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none bg-brand-cream border border-brand-charcoal text-brand-sage font-mono text-[10px] font-extrabold uppercase tracking-widest mb-6"
            id="hero-badge"
          >
            <Sparkles size={11} className="text-brand-sage" />
            <span>{PERSONAL_INFO.title}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-6xl md:text-7xl xl:text-8xl font-black tracking-tighter text-brand-charcoal leading-none mb-6"
            id="hero-main-title"
          >
            유혜민
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="w-20 h-[5px] bg-brand-charcoal mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-sans text-sm md:text-base text-brand-charcoal/80 leading-relaxed max-w-xl mb-10 border-l-2 border-brand-sage pl-4 font-medium"
            id="hero-subphrase"
          >
            평생교육 기획과 운영 분야에서 다양한 학습 프로그램을 설계하고 참여자 성과를 관리해 온 평생교육사입니다. 
            학습자 중심의 실질적인 만족을 유도하고, 다정함과 화합을 통해 지역사회 성장에 단단히 기여하고 있습니다.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-4 items-center mb-16"
            id="hero-cta-buttons"
          >
            <button
              onClick={onLearnMore}
              className="group px-7 py-4 rounded-none bg-brand-charcoal text-brand-beige hover:bg-[#2A2A2A] hover:-translate-y-0.5 transition-all duration-305 font-mono text-[11px] font-bold uppercase tracking-[0.2em] flex items-center gap-2 cursor-pointer shadow-xs"
              id="hero-cta"
            >
              Explore Portfolio
              <ArrowDown size={14} className="transition-transform duration-300 group-hover:translate-y-1" />
            </button>
            <a
              href="#contact"
              className="px-7 py-4 rounded-none border border-brand-charcoal hover:bg-brand-cream/50 transition-all duration-300 font-mono text-[11px] font-bold uppercase tracking-[0.2em] flex items-center gap-2 cursor-pointer"
              id="hero-secondary-cta"
            >
              <Mail size={14} className="text-brand-sage" />
              Contact Me
            </a>
          </motion.div>

          {/* Core Key Statistics in crisp grid border layout */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-3 border-t border-brand-charcoal pt-10 w-full"
            id="hero-stats-panel"
          >
            <div className="border-r border-brand-charcoal/20 pr-4">
              <span className="font-serif text-4xl md:text-5xl font-black text-brand-charcoal block mb-1 leading-none">09+</span>
              <span className="font-mono text-[9px] text-[#3D5A50] uppercase tracking-widest font-bold block">진행 프로그램</span>
            </div>
            <div className="border-r border-brand-charcoal/20 px-4">
              <span className="font-serif text-4xl md:text-5xl font-black text-brand-charcoal block mb-1 leading-none">97.4%</span>
              <span className="font-mono text-[9px] text-[#3D5A50] uppercase tracking-widest font-bold block">만족도 지표</span>
            </div>
            <div className="pl-4">
              <span className="font-serif text-4xl md:text-5xl font-black text-brand-charcoal block mb-1 leading-none">1:1</span>
              <span className="font-mono text-[9px] text-[#3D5A50] uppercase tracking-widest font-bold block">개별 맞춤 케어</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Visual Frame */}
        <div className="lg:col-span-5 flex justify-center order-1 lg:order-2" id="hero-image-pane">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-72 h-72 sm:w-85 sm:h-85 md:w-96 md:h-96"
          >
            {/* Outline box matching Noura's layout style */}
            <div className="absolute inset-0 border border-brand-charcoal/40 rounded-none rotate-3 scale-102 pointer-events-none" />
            <div className="absolute inset-0 border-2 border-brand-charcoal rounded-none -rotate-1" />

            {/* Generated Profile Avatar Image container */}
            <div className="absolute inset-2 bg-brand-cream border border-brand-charcoal rounded-none overflow-hidden select-none">
              <img
                src="/src/assets/images/profile_avatar_1779793658403.png"
                alt="YU HYEMIN PORTRAIT"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Micro badges floating around - sharp corners and crisp outline */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -top-3 -left-6 bg-brand-charcoal text-brand-beige border border-brand-charcoal px-3.5 py-2 rounded-none rotate-[-4deg] flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider font-bold shadow-xs"
              id="hero-float-badge-1"
            >
              <Compass size={13} className="text-brand-cream animate-spin-slow" />
              <span>평생교육사 🌟</span>
            </motion.div>

            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute bottom-10 -right-8 bg-brand-beige border-2 border-brand-charcoal px-3.5 py-2 rounded-none rotate-[2deg] flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider font-bold shadow-xs"
              id="hero-float-badge-2"
            >
              <Star size={13} className="text-brand-sage fill-brand-sage" />
              <span>기획인증 ★★★★★</span>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="absolute -bottom-4 left-1/4 bg-brand-cream border border-brand-charcoal px-4 py-2 rounded-none flex items-center gap-2 text-[10px] font-mono font-bold text-brand-charcoal shadow-xs"
              id="hero-float-badge-3"
            >
              <MapPin size={12} className="text-brand-sage" />
              <span className="uppercase tracking-widest text-[#3D5A50]">Seoul</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
