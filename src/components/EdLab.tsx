import React, { useState } from "react";
import { Compass, Sparkles, BookOpen, Clock, Users, Target, ClipboardCheck, ArrowRight, CornerDownRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { designEducationProgram } from "../data";

export default function EdLab() {
  const [targetVal, setTargetVal] = useState<string>("workers");
  const [goalVal, setGoalVal] = useState<string>("digital");
  const [isDesigning, setIsDesigning] = useState<boolean>(false);
  const [programBlueprint, setProgramBlueprint] = useState(() => designEducationProgram("workers", "digital"));

  const targets = [
    { id: "workers", name: "💼 직장인", desc: "실무 효율 극대화" },
    { id: "seniors", name: "🌟 시니어", desc: "디지털 일상 생활 테크" },
    { id: "youth", name: "🚀 청년 계층", desc: "취업 및 직무 역량 빌딩" },
    { id: "residents", name: "🏡 지역 주민", desc: "소통 및 지역 거버넌스" },
  ];

  const goals = [
    { id: "digital", name: "📱 디지털 역량", desc: "AI 비서, 에듀테크, 기기 활용" },
    { id: "community", name: "🤝 커뮤니티 활성화", desc: "스토리텔링, 주민 소통회" },
    { id: "job", name: "📊 취업 및 직무 향상", desc: "코디네이터 실습 및 수료" },
    { id: "humanities", name: "📚 교양 & 인문학", desc: "글쓰기 소책자 및 문화교실" },
  ];

  const handleDesignClick = () => {
    setIsDesigning(true);
    setTimeout(() => {
      const blueprint = designEducationProgram(targetVal, goalVal);
      setProgramBlueprint(blueprint);
      setIsDesigning(false);
    }, 700);
  };

  return (
    <section id="ed-lab" className="py-24 md:py-32 px-6 md:px-12 bg-brand-cream border-t border-brand-charcoal relative overflow-hidden">
      {/* Decorative subtle pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#1A1A1A_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Title */}
        <div className="mb-16 text-center" id="edlab-heading">
          <span className="font-mono text-xs uppercase tracking-[0.2em] font-black text-brand-sage inline-flex items-center gap-1.5 bg-brand-beige border border-brand-charcoal px-4 py-1.5 rounded-none mb-3">
            <Compass size={12} className="animate-spin-slow text-brand-sage" />
            Interactive Simulation Desk
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-black tracking-tighter text-brand-charcoal mt-1">
            교육 프로그램 기획 데스크
          </h2>
          <p className="font-sans text-sm text-brand-charcoal/70 max-w-xl mx-auto mt-3 font-medium">
            평생교육사 유혜민의 세련된 커리큘럼 설계 기질을 시운전해 보세요. 
            학습 대상층과 교육 목적에 비추어 기획-상담-성과 분석이 총망라된 설계서를 출력합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Config Selector (5 cols) */}
          <div className="lg:col-span-5 space-y-6" id="edlab-selectors-panel">
            {/* Target Select */}
            <div className="p-6 rounded-none bg-brand-beige border-2 border-brand-charcoal space-y-4 shadow-xs">
              <div className="flex items-center gap-2 border-b border-brand-charcoal/10 pb-3">
                <Users size={16} className="text-brand-sage" />
                <span className="text-[10px] font-mono font-black tracking-wider text-brand-charcoal uppercase">1. 학습 대상선정 (Target Group)</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {targets.map((item) => {
                  const isSel = targetVal === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setTargetVal(item.id)}
                      className={`p-3 rounded-none border text-left cursor-pointer transition-all duration-300 focus:outline-hidden ${
                        isSel
                          ? "bg-brand-charcoal text-brand-beige border-brand-charcoal shadow-xs"
                          : "bg-brand-cream/65 hover:bg-brand-cream border-brand-charcoal/20 text-brand-charcoal"
                      }`}
                      id={`lab-target-${item.id}`}
                    >
                      <p className="font-sans font-black text-xs">{item.name}</p>
                      <p className={`font-sans text-[10px] mt-1 font-medium ${isSel ? "text-brand-beige/80" : "text-brand-charcoal/60"}`}>{item.desc}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Goal Select */}
            <div className="p-6 rounded-none bg-brand-beige border-2 border-brand-charcoal space-y-4 shadow-xs">
              <div className="flex items-center gap-2 border-b border-brand-charcoal/10 pb-3">
                <Target size={16} className="text-brand-sage" />
                <span className="text-[10px] font-mono font-black tracking-wider text-brand-charcoal uppercase">2. 핵심 학습 목표 (Educational Goals)</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {goals.map((item) => {
                  const isSel = goalVal === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setGoalVal(item.id)}
                      className={`p-3 rounded-none border text-left cursor-pointer transition-all duration-300 focus:outline-hidden ${
                        isSel
                          ? "bg-brand-charcoal text-brand-beige border-brand-charcoal shadow-xs"
                          : "bg-brand-cream/65 hover:bg-brand-cream border-brand-charcoal/20 text-brand-charcoal"
                      }`}
                      id={`lab-goal-${item.id}`}
                    >
                      <p className="font-sans font-black text-xs whitespace-nowrap overflow-hidden text-ellipsis">{item.name}</p>
                      <p className={`font-sans text-[9px] mt-1 line-clamp-1 font-medium ${isSel ? "text-brand-beige/80" : "text-brand-charcoal/60"}`}>{item.desc}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Simulation CTA button */}
            <button
              onClick={handleDesignClick}
              disabled={isDesigning}
              className={`w-full py-4.5 rounded-none bg-brand-charcoal text-brand-beige hover:bg-[#2A2A2A] hover:-translate-y-0.5 border-2 border-brand-charcoal transition-all duration-350 font-mono text-xs font-bold tracking-[0.2em] uppercase flex items-center justify-center gap-2 cursor-pointer shadow-xs disabled:opacity-75`}
              id="lab-trigger-design"
            >
              {isDesigning ? (
                <>
                  <div className="w-5 h-5 border-2 border-brand-beige border-t-transparent rounded-none animate-spin" />
                  <span>실무 시뮬레이션 기획안 설계 중...</span>
                </>
              ) : (
                <>
                  <Sparkles size={14} className="text-brand-beige" />
                  <span>기획 설계 보고서 출력</span>
                  <ArrowRight size={14} className="text-brand-sage" />
                </>
              )}
            </button>
          </div>

          {/* Curated Interactive Spreadsheet displaying the results (7 cols) */}
          <div className="lg:col-span-7" id="edlab-blueprint-pane">
            <AnimatePresence mode="wait">
              <motion.div
                key={programBlueprint.programName + (isDesigning ? "-loading" : "")}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35 }}
                className={`p-8 rounded-none border-2 bg-brand-beige shadow-xs transition-all duration-300 relative flex flex-col justify-between min-h-[500px] border-brand-charcoal`}
              >
                {/* Vintage stamp design top right */}
                <div className="absolute top-6 right-6 border border-dashed border-brand-charcoal/60 px-4 py-2 flex flex-col items-center select-none rotate-[2deg]">
                  <span className="font-mono text-[9px] text-brand-charcoal font-black tracking-widest leading-none">EDU_BLUEPRINT</span>
                  <span className="font-mono text-[8px] text-brand-sage mt-1 font-bold uppercase leading-none">STAMP_ID // {targetVal.toUpperCase()}-{goalVal.toUpperCase()}</span>
                </div>

                <div className="space-y-6">
                  {/* Category Pill Tag */}
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[9px] bg-brand-charcoal text-brand-beige uppercase px-2.5 py-1 tracking-widest font-black rounded-none">
                      교육 과정 기획안
                    </span>
                    <span className="font-mono text-[9px] text-brand-charcoal/70 border border-brand-charcoal px-2.5 py-1 font-black rounded-none bg-brand-cream">
                      기획자: 유혜민 평생교육사
                    </span>
                  </div>

                  {/* Course Title name */}
                  <h3 className="font-serif text-2xl md:text-3xl font-black text-brand-charcoal leading-tight tracking-tighter">
                    {programBlueprint.programName}
                  </h3>

                  {/* Key Metadata Table Info */}
                  <div className="grid grid-cols-2 gap-4 border-y-2 border-brand-charcoal py-4 font-sans text-xs">
                    <div className="space-y-1">
                      <p className="font-mono text-[10px] text-brand-sage font-black uppercase tracking-wider">학습 대상</p>
                      <p className="font-sans font-bold text-brand-charcoal text-sm">{programBlueprint.target}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="font-mono text-[10px] text-brand-sage font-black uppercase tracking-wider">교육 분류</p>
                      <p className="font-sans font-bold text-brand-charcoal text-sm">{programBlueprint.goal}</p>
                    </div>
                    <div className="space-y-1 pt-2 border-t border-brand-charcoal/10">
                      <p className="font-mono text-[10px] text-brand-sage font-black uppercase tracking-wider">운영 기간</p>
                      <p className="font-sans font-bold text-brand-charcoal text-sm flex items-center gap-1.5">
                        <Clock size={12} className="text-brand-sage" />
                        {programBlueprint.duration}
                      </p>
                    </div>
                    <div className="space-y-1 pt-2 border-t border-brand-charcoal/10">
                      <p className="font-mono text-[10px] text-brand-sage font-black uppercase tracking-wider">특징 범주</p>
                      <p className="font-sans font-black text-brand-sage text-sm">학습자 중심 성과형</p>
                    </div>
                  </div>

                  {/* Weekly Course Blueprint */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-1.5">
                      <BookOpen size={14} className="text-brand-sage" />
                      <h4 className="text-xs font-mono font-black tracking-widest text-brand-charcoal uppercase">// 주요 주차별 커리큘럼</h4>
                    </div>
                    <div className="space-y-3 pl-1.5">
                      {programBlueprint.coreCurriculum.map((week, idx) => (
                        <div key={idx} className="flex items-start gap-2.5">
                          <CornerDownRight size={14} className="text-brand-sage shrink-0 mt-0.5" />
                          <p className="font-sans text-xs md:text-sm text-brand-charcoal/90 leading-relaxed font-semibold">
                            {week}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Counseling Support Support details */}
                  <div className="pt-4 space-y-2 border-t border-brand-charcoal/10">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-none bg-brand-sage animate-pulse" />
                      <h4 className="text-[10px] font-mono font-black tracking-widest text-[#3D5A50] uppercase">학습자 밀착 설계 방침</h4>
                    </div>
                    <p className="font-sans text-xs text-brand-charcoal/80 leading-relaxed pl-3.5 italic font-medium">
                      {programBlueprint.counselingStrategy}
                    </p>
                  </div>
                </div>

                {/* KPI metrics at the bottom */}
                <div className="mt-8 pt-5 border-t border-brand-charcoal/20 bg-brand-cream border border-brand-charcoal sm:px-6 py-4.5 rounded-none flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
                  <div className="flex items-center gap-2">
                    <ClipboardCheck size={15} className="text-brand-sage" />
                    <span className="font-mono text-[9px] uppercase font-black text-brand-charcoal tracking-widest">사후 성과 분석 평정</span>
                  </div>
                  <p className="font-sans text-xs font-black text-[#3D5A50] uppercase tracking-wider bg-white border border-brand-charcoal px-3 py-1">
                    {programBlueprint.evaluationKpi}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
