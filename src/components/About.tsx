import React, { useState } from "react";
import { Star, FileText, Sparkles, Heart, HelpCircle, CheckCircle2, ChevronRight, MessageSquareQuote } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PERSONAL_INFO, SKILLS_DATA, STRENGTHS_DATA } from "../data";

export default function About() {
  const [selectedStrengthIndex, setSelectedStrengthIndex] = useState<number>(0);

  const activeStrength = STRENGTHS_DATA[selectedStrengthIndex];

  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 bg-wrap border-t border-brand-charcoal relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6" id="about-section-heading">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] font-black text-brand-sage block mb-3">
              // Professional Profile
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-black tracking-tighter text-brand-charcoal">
              학습자 지향적 평생교육 모델을 수립하다
            </h2>
          </div>
          <p className="font-mono text-xs text-brand-sage tracking-wider max-w-xs md:text-right leading-relaxed font-bold">
            * 변화하는 교육 트렌드와 디지털 학습 솔루션을 융합하여 기획하고 설계합니다.
          </p>
        </div>

        {/* Profile Card & Bio Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24" id="profile-detailed-story">
          {/* Left Block - Bio Letter */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-serif text-2xl font-bold text-brand-charcoal italic decoration-brand-sage/40 underline underline-offset-8">
              "배운다는 것은 삶을 풍요롭게 확장하는 예술입니다"
            </h3>
            <p className="font-sans text-brand-charcoal/80 leading-relaxed text-base md:text-lg whitespace-pre-line font-medium">
              {PERSONAL_INFO.profile}
            </p>
            
            <div className="p-6 rounded-none bg-brand-cream border border-brand-charcoal flex items-start gap-4 mt-8">
              <span className="text-3xl text-brand-sage select-none font-serif font-bold">“</span>
              <p className="font-sans text-sm italic text-brand-charcoal/80 leading-relaxed mt-2 font-medium">
                유혜민 평생교육사는 서울과 경기 권역 일대 자치구에서 디지털 역량 교육과 세대 연계 교과를 기획하며, 
                <strong> 9+개 이상의 실무 공모 사업 및 야간 프로그램</strong>을 누수 없이 마감시킨 탁월한 이력을 유지하고 있습니다.
              </p>
            </div>
          </div>

          {/* Right Block - Graphic Core Competencies Rating - Noura style */}
          <div className="lg:col-span-5 p-8 rounded-none bg-brand-cream border-2 border-brand-charcoal space-y-8 shadow-xs">
            <div className="flex items-center justify-between border-b border-brand-charcoal pb-4">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-brand-charcoal">
                Core Abilities
              </span>
              <span className="font-mono text-[9px] bg-brand-charcoal text-brand-beige px-2 py-0.5 rounded-none font-extrabold tracking-widest">
                CERTIFIED
              </span>
            </div>

            <div className="space-y-6" id="skills-rating-container">
              {SKILLS_DATA.map((skill) => {
                const percentage = Math.round((skill.starRating / skill.maxRating) * 100);
                return (
                  <div key={skill.id} className="space-y-2">
                    <div className="flex justify-between text-xs font-mono font-bold uppercase tracking-wider text-brand-charcoal">
                      <span>{skill.name}</span>
                      <span className="italic opacity-80">{percentage}%</span>
                    </div>
                    {/* Artistic Flat Progress bar lines */}
                    <div className="w-full h-[2.5px] bg-[#E5E2D9] overflow-hidden">
                      <div
                        className="h-full bg-brand-charcoal"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <p className="font-sans text-xs text-brand-charcoal/70 leading-relaxed pt-1 font-medium">
                      {skill.details}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 6th Strengths Dashboard Section */}
        <div className="border-t border-brand-charcoal pt-20" id="6th-strengths-dashboard">
          <div className="text-center md:text-left mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.2em] font-black text-brand-sage block mb-2">
              // CliftonStrengths Profile
            </span>
            <h3 className="font-serif text-3xl font-black text-brand-charcoal tracking-tighter">
              유혜민 평생교육사를 정의하는 <span className="underline decoration-brand-sage decoration-4 underline-offset-4">6가지 강점</span>
            </h3>
            <p className="font-mono text-xs text-brand-charcoal/60 mt-3 font-semibold">
              * 각 강점 단추를 눌러 평생교육 실무에서 어떻게 발휘되는지 구체적인 피드백을 확인해보세요.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            {/* Left Box: Strengths Menu list (Sleek raw modernist tabs) */}
            <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-4" id="strengths-selector-container">
              {STRENGTHS_DATA.map((strength, index) => {
                const isSelected = selectedStrengthIndex === index;
                return (
                  <button
                    key={strength.id}
                    onClick={() => setSelectedStrengthIndex(index)}
                    className={`p-4 md:p-5 rounded-none text-left border cursor-pointer transition-all duration-300 flex items-center justify-between group focus:outline-hidden ${
                      isSelected
                        ? "bg-brand-charcoal text-brand-beige border-brand-charcoal shadow-xs"
                        : "bg-brand-cream hover:bg-brand-clay/30 border-brand-charcoal text-brand-charcoal"
                    }`}
                    id={`strength-btn-${strength.id}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-7 h-7 rounded-none flex items-center justify-center text-xs font-mono font-bold border ${
                        isSelected ? "bg-brand-sage text-brand-beige border-brand-beige/20" : "bg-brand-beige text-brand-charcoal border-brand-charcoal"
                      }`}>
                        {index + 1}
                      </div>
                      <span className="font-sans font-black text-xs md:text-sm uppercase tracking-wider group-hover:translate-x-1 transition-transform duration-300">
                        {strength.name}
                      </span>
                    </div>
                    <ChevronRight size={15} className={`transition-transform duration-300 ${isSelected ? "rotate-90 text-brand-sage" : "opacity-45 group-hover:opacity-100"}`} />
                  </button>
                );
              })}
            </div>

            {/* Right Box: Dynamic strength display pane (Flat structured card) */}
            <div className="lg:col-span-7" id="strengths-display-pane">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStrength.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="h-full p-8 md:p-10 rounded-none border-2 border-brand-charcoal bg-brand-cream/40 flex flex-col justify-between shadow-xs relative overflow-hidden"
                >
                  {/* Decorative watermarked word */}
                  <div className="absolute top-0 right-0 p-4 font-serif font-black text-6xl text-brand-charcoal/[0.03] select-none pointer-events-none">
                    {activeStrength.name}
                  </div>

                  <div className="relative z-10 space-y-8">
                    {/* Header */}
                    <div className="flex items-center gap-2 text-brand-sage">
                      <Sparkles size={14} />
                      <span className="font-mono text-[10px] font-extrabold uppercase tracking-widest">STRENGTH {selectedStrengthIndex + 1}</span>
                    </div>

                    {/* Title */}
                    <h4 className="font-serif text-3xl font-black text-brand-charcoal tracking-tighter">
                      {activeStrength.name}
                    </h4>

                    {/* Core definition */}
                    <div className="space-y-3">
                      <h5 className="font-mono font-bold text-[10px] tracking-widest uppercase text-brand-charcoal/50">강점 정의</h5>
                      <p className="font-sans text-brand-charcoal/90 text-base md:text-lg leading-relaxed font-semibold">
                        {activeStrength.description}
                      </p>
                    </div>

                    {/* Case Example */}
                    <div className="p-5 rounded-none bg-brand-cream border border-brand-charcoal space-y-2">
                      <div className="flex items-center gap-1.5 text-xs text-brand-sage font-bold font-mono uppercase tracking-widest">
                        <CheckCircle2 size={13} />
                        <span>교육 현장에서의 실천 사례</span>
                      </div>
                      <p className="font-sans text-xs md:text-sm text-brand-charcoal/80 leading-relaxed font-medium">
                        {activeStrength.example}
                      </p>
                    </div>
                  </div>

                  {/* Motivational Quote block */}
                  <div className="relative z-10 border-t border-brand-charcoal/20 pt-6 mt-8 flex gap-3.5 items-start">
                    <MessageSquareQuote size={24} className="text-brand-sage shrink-0 mt-0.5" />
                    <p className="font-serif italic text-sm md:text-base text-brand-charcoal/80 leading-normal">
                      &ldquo;{activeStrength.quote}&rdquo;
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
