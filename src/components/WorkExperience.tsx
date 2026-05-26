import React, { useState } from "react";
import { Briefcase, GraduationCap, ChevronRight, MapPin, Calendar, Award, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { EXPERIENCES_DATA, EDUCATION_DATA } from "../data";

export default function WorkExperience() {
  const [activeExpId, setActiveExpId] = useState<string | null>("exp-1");

  const toggleExp = (id: string) => {
    setActiveExpId(activeExpId === id ? null : id);
  };

  return (
    <section id="experience" className="py-24 md:py-32 px-6 md:px-12 bg-wrap border-t border-brand-charcoal bg-brand-beige">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="mb-20 text-left" id="career-section-header">
          <span className="font-mono text-xs uppercase tracking-[0.2em] font-black text-brand-sage block mb-3">
            // Work History & Academic Foundation
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-black tracking-tighter text-brand-charcoal">
            실전과 전문 지식의 융합
          </h2>
          <p className="font-sans text-sm text-brand-charcoal/70 mt-3 max-w-xl font-medium">
            지자체 산하 교육행정 실무에서 주도해 온 평생교육 기획 성과와 
            대학원에서 체계화한 교육학적 이론을 기반으로 견고한 커리큘럼을 만들어 왔습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Work Experience Timeline (Col SPAN 7) */}
          <div className="lg:col-span-7 space-y-6" id="career-experience-column">
            <div className="flex items-center gap-2.5 pb-4 border-b-2 border-brand-charcoal">
              <span className="p-1.5 rounded-none bg-brand-charcoal text-brand-beige">
                <Briefcase size={16} />
              </span>
              <h3 className="font-serif text-xl font-black text-brand-charcoal tracking-tight">
                Professional Journey
              </h3>
            </div>

            <div className="space-y-5">
              {EXPERIENCES_DATA.map((exp, index) => {
                const isOpen = activeExpId === exp.id;
                return (
                  <div
                    key={exp.id}
                    className={`rounded-none border-2 transition-all duration-300 ${
                      isOpen
                        ? "bg-brand-cream border-brand-charcoal shadow-xs"
                        : "bg-brand-cream/40 hover:bg-brand-cream border-brand-charcoal/20 hover:border-brand-charcoal"
                    }`}
                    id={`exp-card-${exp.id}`}
                  >
                    {/* Header trigger button */}
                    <button
                      onClick={() => toggleExp(exp.id)}
                      className="w-full p-6 text-left flex items-start justify-between gap-4 cursor-pointer focus:outline-hidden font-sans"
                    >
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-sans font-black text-lg md:text-xl text-brand-charcoal tracking-tight">
                            {exp.institution}
                          </span>
                          <span className="font-mono text-[9px] font-black bg-brand-charcoal text-brand-beige px-2 py-0.5 rounded-none uppercase tracking-widest">
                            {exp.tag}
                          </span>
                        </div>
                        
                        <p className="font-serif text-sm md:text-base font-bold text-brand-sage italic leading-none">
                          {exp.role}
                        </p>
                        
                        <div className="flex items-center gap-3.5 pt-1 text-xs text-[#3D5A50] font-mono font-bold">
                          <span className="flex items-center gap-1">
                            <Calendar size={12} />
                            {exp.period}
                          </span>
                        </div>
                      </div>

                      <div className={`w-8 h-8 rounded-none border border-brand-charcoal/20 flex items-center justify-center transition-transform duration-300 ${isOpen ? "rotate-90 bg-brand-charcoal text-brand-beige border-brand-charcoal" : "bg-transparent text-brand-charcoal/60"}`}>
                        <ChevronRight size={15} />
                      </div>
                    </button>

                    {/* Expandable achievements detail block */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-1 space-y-5 border-t border-brand-charcoal/20">
                            {/* Summary sentence */}
                            <p className="font-sans text-xs md:text-sm text-brand-charcoal/80 leading-relaxed bg-brand-beige p-3.5 rounded-none border border-brand-charcoal font-medium">
                              {exp.description}
                            </p>

                            {/* Core Bullet achievements */}
                            <div className="space-y-3">
                              <h4 className="font-mono text-[10px] uppercase font-black tracking-widest text-brand-sage">
                                KEY ACHIEVEMENTS // 기여 성과 데이터
                              </h4>
                              <div className="space-y-2.5 pl-1">
                                {exp.achievements.map((item, idx) => (
                                  <div key={idx} className="flex items-start gap-2.5">
                                    <CheckCircle size={14} className="text-brand-sage shrink-0 mt-0.5" />
                                    <p className="font-sans text-xs md:text-sm text-brand-charcoal/95 leading-relaxed font-semibold">
                                      {item}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Applied Core Competence tags */}
                            <div className="flex flex-wrap gap-2 pt-3 border-t border-brand-charcoal/10">
                              {exp.keySkills.map((tagSk) => (
                                <span
                                  key={tagSk}
                                  className="font-mono text-[9px] bg-white border border-brand-charcoal text-brand-charcoal px-3 py-1 font-bold uppercase tracking-wider rounded-none"
                                >
                                  {tagSk.toUpperCase()}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Education timeline segment (Col SPAN 5) Styled as a SOLID DEEP GREEN container */}
          <div className="lg:col-span-5 space-y-6" id="academic-education-column">
            <div className="p-8 rounded-none bg-brand-sage text-[#F9F7F2] border-2 border-brand-charcoal space-y-8 shadow-xs">
              <div className="flex items-center gap-2.5 pb-4 border-b border-[#F9F7F2]/20">
                <span className="p-1 rounded-none bg-[#F9F7F2] text-brand-sage">
                  <GraduationCap size={16} />
                </span>
                <h3 className="font-serif text-xl font-bold uppercase tracking-tight text-[#F9F7F2]">
                  Education Profile
                </h3>
              </div>

              <div className="space-y-6 relative pl-3 before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[1px] before:bg-[#F9F7F2]/20 font-sans">
                {EDUCATION_DATA.map((edu, idx) => (
                  <div key={edu.id} className="relative group" id={`edu-card-${edu.id}`}>
                    {/* Square bullet node */}
                    <div className="absolute -left-[15.5px] top-[6px] w-2 h-2 rounded-none bg-[#F9F7F2] border border-brand-sage" />
                    
                    <div className="transition-all duration-300">
                      <span className="font-mono text-[9px] font-black uppercase tracking-widest text-[#F9F7F2]/70 block mb-1">
                        {edu.degree.toUpperCase()}
                      </span>
                      
                      <h4 className="font-serif font-black text-lg text-[#F9F7F2] tracking-tight">
                        {edu.institution}
                      </h4>
                      
                      <p className="font-sans font-bold text-xs text-[#F9F7F2]/80 mt-1">
                        {edu.major}
                      </p>
                      
                      <div className="flex items-center gap-1 mt-2 text-[10px] text-[#F9F7F2]/60 font-mono font-bold tracking-wider">
                        <Calendar size={11} />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Micro branding stamp on the side */}
            <div className="p-6 rounded-none border-2 border-brand-charcoal bg-brand-cream text-brand-charcoal space-y-3 shadow-xs">
              <Award size={18} className="text-brand-sage" />
              <p className="font-serif italic text-xs font-semibold leading-relaxed">
                &ldquo;평생교육은 평생 배우고 싶어 하는 마음을 잃지 않는 이들을 돌보는 아름다운 공적 의무입니다.&rdquo;
              </p>
              <p className="font-mono text-[9px] uppercase tracking-widest font-bold text-brand-charcoal/50">
                // CERTIFIED SPECIALIST / 평생교육사
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
