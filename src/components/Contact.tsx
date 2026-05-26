import React, { useState } from "react";
import { Phone, Mail, Globe, MapPin, Copy, Check, Send, Sparkles, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PERSONAL_INFO } from "../data";

export default function Contact() {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [senderName, setSenderName] = useState("");
  const [senderOrg, setSenderOrg] = useState("");
  const [subject, setSubject] = useState("recrutement");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [sendingProcess, setSendingProcess] = useState(false);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName || !message) return;

    setSendingProcess(true);
    // Simulate beautiful dispatch sequence
    setTimeout(() => {
      setSendingProcess(false);
      setIsSent(true);
    }, 1200);
  };

  const resetForm = () => {
    setSenderName("");
    setSenderOrg("");
    setSubject("recrutement");
    setMessage("");
    setIsSent(false);
  };

  const subjectTitles: Record<string, string> = {
    recrutement: "💼 정규직 채용 및 면접 제안",
    collaboration: "🤝 평생 기획 사업 협업 제안",
    consulting: "📚 1:1 교육 컨설팅 문의",
    greeting: "👋 단순 격려 및 네트워킹 한마디",
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 bg-brand-charcoal text-brand-beige border-t-2 border-brand-charcoal relative overflow-hidden">
      {/* Editorial Backdrop accents */}
      <div className="absolute top-[10%] left-[5%] text-neutral-800/15 pointer-events-none select-none -z-10 font-serif text-[24vw] tracking-tighter leading-none block">
        CONTACT
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Heading */}
        <div className="mb-20 text-center" id="contact-heading">
          <span className="font-mono text-xs uppercase tracking-[0.2em] font-black text-brand-sage inline-flex items-center gap-1.5 bg-neutral-900 border border-neutral-800 px-4 py-1.5 rounded-none mb-3">
            <Sparkles size={11} className="text-brand-sage" />
            Connect Now
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-black tracking-tighter mt-1 text-white">
            새로운 배움의 시작을 함께하세요
          </h2>
          <p className="font-sans text-sm text-brand-beige/70 max-w-lg mx-auto mt-3 font-medium">
            평생교육사 유혜민에게 궁금한 사항이 있거나 채용, 사업 연계, 
            강사 파트너십을 의논하고자 하신다면 언제든 문을 두드려 주십시오.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Traditional Cards & Instant Copy info (5 cols) */}
          <div className="lg:col-span-5 space-y-7" id="contact-traditional-info">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#3D5A50] font-black block mb-1">
              // Contact Directory
            </span>

            {/* Direct Cards Stack */}
            <div className="space-y-4">
              {/* Phone card */}
              <div className="p-5 rounded-none bg-neutral-900 border-2 border-neutral-800 hover:border-[#3D5A50] transition-colors duration-300 flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-none bg-neutral-800 flex items-center justify-center text-brand-sage">
                    <Phone size={16} />
                  </div>
                  <div>
                    <p className="font-sans text-[9px] text-brand-beige/40 uppercase tracking-widest block font-black">Call Me Direct</p>
                    <p className="font-mono font-bold text-sm md:text-base text-brand-beige mt-0.5">{PERSONAL_INFO.contact.phone}</p>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.contact.phone, "phone")}
                  className="p-2 bg-neutral-850 hover:bg-neutral-800 border border-neutral-800 text-brand-beige/50 hover:text-brand-beige cursor-pointer transition-colors focus:outline-hidden rounded-none"
                  title="전화번호 복사"
                  id="copy-phone-btn"
                >
                  {copiedField === "phone" ? <Check size={14} className="text-brand-sage" /> : <Copy size={14} />}
                </button>
              </div>

              {/* Email card */}
              <div className="p-5 rounded-none bg-neutral-900 border-2 border-neutral-800 hover:border-[#3D5A50] transition-colors duration-300 flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-none bg-neutral-800 flex items-center justify-center text-brand-sage">
                    <Mail size={16} />
                  </div>
                  <div>
                    <p className="font-sans text-[9px] text-brand-beige/40 uppercase tracking-widest block font-black">Email Address</p>
                    <p className="font-mono font-bold text-xs md:text-sm text-brand-beige mt-0.5">{PERSONAL_INFO.contact.email}</p>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.contact.email, "email")}
                  className="p-2 bg-neutral-850 hover:bg-neutral-800 border border-neutral-800 text-brand-beige/50 hover:text-brand-beige cursor-pointer transition-colors focus:outline-hidden rounded-none"
                  title="이메일 복사"
                  id="copy-email-btn"
                >
                  {copiedField === "email" ? <Check size={14} className="text-brand-sage" /> : <Copy size={14} />}
                </button>
              </div>

              {/* Website link card */}
              <div className="p-5 rounded-none bg-neutral-900 border-2 border-neutral-800 hover:border-[#3D5A50] transition-colors duration-300 flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-none bg-neutral-800 flex items-center justify-center text-brand-sage">
                    <Globe size={16} />
                  </div>
                  <div>
                    <p className="font-sans text-[9px] text-brand-beige/40 uppercase tracking-widest block font-black">Personal Website</p>
                    <a
                      href={`http://${PERSONAL_INFO.contact.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono font-bold text-xs md:text-sm hover:underline hover:text-brand-sage mt-0.5 block cursor-pointer text-brand-beige"
                    >
                      {PERSONAL_INFO.contact.website}
                    </a>
                  </div>
                </div>
                <div className="p-2 text-brand-sage/70">
                  <Globe size={14} />
                </div>
              </div>

              {/* Locations card */}
              <div className="p-5 rounded-none bg-neutral-900 border-2 border-neutral-800 hover:border-[#3D5A50] transition-colors duration-300 flex items-center group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-none bg-neutral-800 flex items-center justify-center text-brand-sage">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <p className="font-sans text-[9px] text-brand-beige/40 uppercase tracking-widest block font-black">Location Base</p>
                    <p className="font-sans text-xs md:text-sm text-brand-beige mt-0.5 font-bold">{PERSONAL_INFO.contact.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Notification alert block */}
            <div className="p-4 rounded-none bg-neutral-900 border border-[#3D5A50]/40 flex gap-3 text-[11px] leading-relaxed text-brand-beige/60">
              <AlertCircle size={15} className="text-brand-sage shrink-0 mt-0.5" />
              <p className="font-sans font-medium">
                * 위 이메일이나 전화를 통한 문의는 평일 오전 9시부터 오후 6시 사이에 실시간 응답이 원활하며, 
                야간/주말 접수 건 역시 가급적 24시간 이내에 세밀한 피드백을 드립니다.
              </p>
            </div>
          </div>

          {/* Right Column: Dynamic Inquiry Simulation Slip (7 cols) */}
          <div className="lg:col-span-7 bg-neutral-900/60 p-8 md:p-10 rounded-none border-2 border-[#1A1A1A] shadow-xs" id="contact-inquiry-box">
            <AnimatePresence mode="wait">
              {!isSent ? (
                <motion.form
                  key="inquiry-form"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleMessageSubmit}
                  className="space-y-6"
                >
                  <div className="border-b border-neutral-800 pb-4">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-[#3D5A50] font-black block">
                      // Quick Inquiry Terminal
                    </span>
                    <h3 className="font-serif text-xl font-black mt-1 text-brand-beige tracking-tight">
                      간편 제안서 송신함
                    </h3>
                  </div>

                  {/* Name + Org Group */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="sender-name" className="font-mono text-[9px] uppercase font-black text-[#3D5A50] tracking-widest">제안자 대표 성함 *</label>
                      <input
                        type="text"
                        id="sender-name"
                        required
                        value={senderName}
                        onChange={(e) => setSenderName(e.target.value)}
                        placeholder="예: 홍길동 팀장"
                        className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 focus:border-[#3D5A50] hover:border-neutral-700 rounded-none text-xs font-sans text-brand-beige outline-hidden transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="sender-org" className="font-mono text-[9px] uppercase font-black text-[#3D5A50] tracking-widest">소속 기관 / 부서</label>
                      <input
                        type="text"
                        id="sender-org"
                        value={senderOrg}
                        onChange={(e) => setSenderOrg(e.target.value)}
                        placeholder="예: 서초문화원 기획팀"
                        className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 focus:border-[#3D5A50] hover:border-neutral-700 rounded-none text-xs font-sans text-brand-beige outline-hidden transition-colors"
                      />
                    </div>
                  </div>

                  {/* Category Subject Select */}
                  <div className="space-y-1.5">
                    <label htmlFor="subject-select" className="font-mono text-[9px] uppercase font-black text-[#3D5A50] tracking-widest">문의 및 제안 목적</label>
                    <select
                      id="subject-select"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 focus:border-[#3D5A50] hover:border-neutral-700 rounded-none text-xs font-sans text-brand-beige outline-hidden transition-colors cursor-pointer"
                    >
                      <option value="recrutement">💼 평생교육사 채용 제안 및 기획직 초빙</option>
                      <option value="collaboration">🤝 지역 기여 공동 프로그램 기획 협업</option>
                      <option value="consulting">📚 교육 기금 공모 서류 작성 기술 자문</option>
                      <option value="greeting">👋 교육 방향성 응원 메시지 및 인사</option>
                    </select>
                  </div>

                  {/* Text Message box */}
                  <div className="space-y-1.5">
                    <label htmlFor="message-body" className="font-mono text-[9px] uppercase font-black text-[#3D5A50] tracking-widest">제안 구체 사항 / 응원 메시지 *</label>
                    <textarea
                      id="message-body"
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="학습자 가치를 최우선으로 생각하는 유혜민 평생교육사에게 전달하고 싶은 내용을 간략히 남겨주세요."
                      className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 focus:border-[#3D5A50] hover:border-neutral-700 rounded-none text-xs font-sans text-brand-beige outline-hidden transition-colors resize-none leading-relaxed"
                    />
                  </div>

                  {/* Submission triggers */}
                  <button
                    type="submit"
                    disabled={sendingProcess || !senderName || !message}
                    className="w-full py-4 rounded-none bg-brand-sage hover:bg-[#2F463F] text-[#F9F7F2] transition-all duration-300 font-mono text-xs font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2 cursor-pointer shadow-xs disabled:opacity-50"
                    id="submit-inquiry-btn"
                  >
                    {sendingProcess ? (
                      <>
                        <div className="w-4 h-4 border-2 border-brand-cream border-t-transparent rounded-none animate-spin" />
                        <span>전송 패킷 모듈 전송 중...</span>
                      </>
                    ) : (
                      <>
                        <Send size={13} className="text-brand-cream" />
                        <span>유혜민 교육사에게 실시간 안전 송신</span>
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-slip"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8 py-6 text-center"
                >
                  {/* Rotating visual envelope / check indicator */}
                  <div className="w-16 h-16 rounded-none bg-brand-sage/10 border border-brand-sage flex items-center justify-center mx-auto text-brand-sage">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                    >
                      <Send size={28} />
                    </motion.div>
                  </div>

                  <div className="space-y-3.5">
                    <h3 className="font-serif text-2xl font-black text-brand-beige tracking-tight">
                      메시지가 가치 있게 전송되었습니다!
                    </h3>
                    
                    <div className="font-sans text-xs text-brand-beige/70 space-y-1.5 max-w-md mx-auto leading-relaxed text-left">
                      <p>
                        <strong>발신기관/담당자:</strong> {senderOrg ? `${senderOrg} ` : ""}{senderName}님 <br />
                        <strong>선택 주제:</strong> {subjectTitles[subject]}
                      </p>
                      <hr className="border-neutral-800 my-3" />
                      <p className="italic bg-neutral-950 p-4 border border-[#3D5A50]/20 rounded-none text-[11px] text-green-100 font-mono leading-relaxed">
                        &ldquo;{message}&rdquo;
                      </p>
                    </div>
                  </div>

                  {/* Auto consultation responder simulation */}
                  <div className="p-5 rounded-none bg-neutral-950 border border-brand-sage text-left max-w-lg mx-auto space-y-2">
                    <p className="text-[9px] font-mono uppercase text-brand-sage font-black flex items-center gap-1.5 tracking-widest">
                      <span className="w-1.5 h-1.5 bg-brand-sage animate-ping" />
                      Yuh Hyemin Automatic Desk Matcher
                    </p>
                    <p className="font-sans text-xs text-brand-beige/85 leading-relaxed font-semibold">
                      안녕하세요! {senderName}님, 유혜민입니다. 제안주신 사항은 제 업무 편람에 
                      즉시 수록되었습니다. 기재해주신 부서 정보 및 {subjectTitles[subject]} 목적으로 판단하여, 
                      <strong> 24시간 이내에 이메일({PERSONAL_INFO.contact.email})</strong>이나 전화로 세심하게 연락 올리겠습니다. 귀중한 제안 진심으로 감사드립니다!
                    </p>
                  </div>

                  <button
                    onClick={resetForm}
                    className="px-6 py-3 border border-[#3D5A50] hover:bg-neutral-900 rounded-none text-brand-beige/80 hover:text-brand-beige text-xs font-mono font-bold tracking-widest uppercase transition-all cursor-pointer"
                    id="new-inquiry-btn"
                  >
                    추가 문의사항 남기기
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Brand Copyright footer details */}
        <div className="mt-24 pt-10 border-t border-neutral-850 flex flex-col md:flex-row items-center justify-between gap-6 text-brand-beige/30 font-mono text-[9px] tracking-widest uppercase">
          <span>&copy; {new Date().getFullYear()} YU HYEMIN. ALL RIGHTS RESERVED.</span>
          <div className="flex gap-6 font-bold">
            <span className="text-brand-sage">Artistic Flair Theme</span>
            <span>SEOUL, SOUTH KOREA</span>
          </div>
        </div>

      </div>
    </section>
  );
}
