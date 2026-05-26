import { WorkExperience, Education, Skill, Strength, CuratedProgram } from "./types";

export const PERSONAL_INFO = {
  name: "유혜민",
  englishName: "HYEMIN YUH",
  title: "LIFELONG EDUCATION SPECIALIST",
  roleSub: "평생교육사 • 교육 디자이너",
  contact: {
    phone: "010-3395-7031",
    email: "yuhyemin731@gmail.com",
    website: "https://portfolio-test-260526-hm.vercel.app/",
    location: "Seoul, South Korea",
  },
  profile: "평생교육 기획과 운영 분야에서 다양한 학습 프로그램을 설계하고 참여자 성과를 관리해 온 평생교육사입니다. 학습자 중심의 교육 환경을 구축하며 지역사회와 기관의 성장에 기여하는 것을 목표로 하고 있습니다. 데이터 기반의 교육 운영과 효과적인 커뮤니케이션을 중요하게 생각하며, 문제 해결 과정에서 협업을 적극 활용합니다. 변화하는 교육 트렌드와 디지털 학습 기술에 대한 지속적인 관심을 바탕으로 더 나은 학습 경험을 제공하고자 합니다.",
};

export const SKILLS_DATA: Skill[] = [
  {
    id: "planning",
    name: "교육 프로그램 기획",
    starRating: 5,
    maxRating: 5,
    details: "지역사회 수요 분석 및 최적화된 강의 커리큘럼 설계, 신규 디지털 평생학습 과정 도입 전문",
  },
  {
    id: "counseling",
    name: "학습자 상담 및 관리",
    starRating: 4,
    maxRating: 5,
    details: "다양한 연령대 맞춤형 1:1 진로 상담 및 정교화된 학습 케어, 소통 채널 체계 구축을 통한 만족도 제고",
  },
  {
    id: "analysis",
    name: "교육 성과 분석",
    starRating: 4,
    maxRating: 5,
    details: "학습 데이터 기반의 품질 평가, 이수율 조사 및 성과 환류 보고서 기반의 차기 프로그램 개선 기여",
  },
];

export const STRENGTHS_DATA: Strength[] = [
  {
    id: "language",
    name: "언어표현",
    description: "학습자, 강사, 유관기관 담당자의 입장을 배려하며 복잡한 정책적·실무적 교육 제안을 간결하고 설득력 있게 전달합니다.",
    example: "다양한 주민 민원에 공감적으로 해결책을 안내하고 명확한 강의 개설 기획안을 도출해낸 바 있습니다.",
    quote: "소통은 단순히 말하는 것이 아닌, 학습자가 변화하게 만드는 첫걸음입니다.",
  },
  {
    id: "strategy",
    name: "전략적사고",
    description: "단기적인 교육 운영을 넘어 인구 변화와 디지털 가속성 등의 메가 트렌드를 분석하여 기관의 지속 가능한 모델을 정립합니다.",
    example: "지역 주민의 이탈 원인을 세밀한 데이터 수치로 파악하고, 직장인 저녁 특강 세그먼트를 개설하여 공백율을 줄였습니다.",
    quote: "교육의 성공은 체계적인 데이터 시각화와 예측에서 시작됩니다.",
  },
  {
    id: "confidence",
    name: "자신감",
    description: "새로운 과제나 급격하게 변화하는 교육 플랫폼 전환기에 앞서 솔선수범하여 도전을 단행합니다.",
    example: "구리시 재직 시 생소한 비대면 줌(Zoom) 교육 키트 매뉴얼을 주도적으로 마련하여 전체 강사의 디지털 수용 속도를 2배 높였습니다.",
    quote: "어려운 과업은 성장을 자극하는 가장 좋은 기회입니다.",
  },
  {
    id: "rapport",
    name: "친밀감",
    description: "10대 학생부터 70대 성인 학습자까지 누구나 마음을 터놓을 수 있는 편안한 경청 자세로 두터운 연대감을 쌓아갑니다.",
    example: "성북구 평생학습원 재직 당시, 지속적인 다과 면담을 통해 소외 계층의 출석율을 독려하고 복지 사각을 직접 챙겼습니다.",
    quote: "학습율의 바탕은 언제나 인격적 다정함과 깊은 라포(Rapport) 구축입니다.",
  },
  {
    id: "harmony",
    name: "화합",
    description: "다양한 이해관계가 상충하는 공동체 공간에서 갈등 요소를 부드럽고 합리적으로 조율하여 협력적인 추진을 이끕니다.",
    example: "서초구 교육지원과의 한정된 자산 속에서 강사 간의 예산 갈등을 커뮤니티 파트너십 강화를 유도해 연대 시너지로 해결했습니다.",
    quote: "혼자 가면 빨리 가지만, 화합하여 교육으로 갈 때는 함께 멀리 갈 수 있습니다.",
  },
  {
    id: "curiosity",
    name: "호기심",
    description: "생성형 AI 툴 활용 교육법, 메타버스 학습, 실시간 피드백 시스템 등 신기술 교육 도구를 끊임없이 탐구하고 현장에 도입합니다.",
    example: "전통적인 강좌 포트폴리오에 AI 트렌드 마스터링 과정을 제안 및 기획하여 개설 당일 정원 마감 신화를 기록했습니다.",
    quote: "배움에 대한 궁금함이 멈추지 않는 한, 평생교육사는 가장 훌륭한 길잡이입니다.",
  },
];

export const EXPERIENCES_DATA: WorkExperience[] = [
  {
    id: "exp-1",
    institution: "서초구 교육지원과",
    role: "평생교육사 (실무관)",
    period: "2025.08 – 현재",
    description: "지역 주민과 직장인을 타겟으로 삼는 맞춤형 평생교육 마스터클래스 과정을 기획하고 종합 운영하고 있습니다. 주민들의 만족도 및 이수율 증진을 위한 밀착형 참여자 마일리지 체계를 도입하여 성과를 이끌었습니다.",
    achievements: [
      "직장인을 위한 평일 야간 '퇴근길 에듀-라운지' 기획 및 런칭 (만족도 97.4%)",
      "학습자 마일리지 케어 및 카카오 알림톡 관리 체계 구축을 통해 누적 참여도 전년비 24% 향상",
      "만족도 조사 통계 소프트웨어를 통한 사후 분석으로 교육 품질 정량 개선화 수립 (3.8점 -> 4.7점)",
    ],
    keySkills: ["교육 프로그램 기획", "디지털 성과 시각화", "학습자 리텐션 케어"],
    tag: "공공 행정",
  },
  {
    id: "exp-2",
    institution: "구리시 평생학습과",
    role: "평생교육사",
    period: "2020.01 – 2023.02",
    description: "온·오프라인 하이브리드 평생교실 콘텐츠 개발 사업 및 인프라 구축 매뉴얼 수립을 추진하였습니다. 강사와의 원활한 다리 역할을 자처하여 우수 강사를 지속 유지하고 이수율 만족도를 대폭 올린 중점 역사를 가집니다.",
    achievements: [
      "구리시 로컬 기반 32개 온·오프 연계 교육 커리큘럼 신규 개발 총괄",
      "강사-학습자 양방향 디지털 컨설팅 소통 창구 개설을 통한 문의 응답성 개선 (대기시간 70% 감소)",
      "학습 데이터 기반 개별 상담 케어 도입으로 중도 이탈률 18%에서 4.5%로 수직 감소 달성",
    ],
    keySkills: ["하이브리드 콘텐츠 기획", "강사 매니지먼트", "이탈 방지 데이터 분석"],
    tag: "지자체 사업",
  },
  {
    id: "exp-3",
    institution: "성북구 교육지원과",
    role: "교육운영 담당자",
    period: "2017.03 – 2019.12",
    description: "지자체 소속 평생 기여 주민들의 참여 기회를 극대화하고 소외계층 연계 행정 프로그램을 개발하였습니다. 기관의 대외 신인도 및 대외 인지도를 견인하는 우수 커뮤니티 거버넌스를 이뤄냈습니다.",
    achievements: [
      "노장청 통합 세대공감 클래스 '인생 한바퀴' 우수 시범 기획안 수립 및 교육부 최우수 시범 사업 지정 참여",
      "취약계층 접근성 극대화를 위한 '찾아가는 골목 평생 배움터' 사업 행정 및 현장 운영 리드",
      "지역사회 연계 네트워크 12개 복지 허브 구축 및 활성화를 통한 신규 수강 비율 30% 증가 도출",
    ],
    keySkills: ["지역사회 네트워크", "세대 소통 교육", "지자체 제안 공모"],
    tag: "지역사회 연계",
  },
];

export const EDUCATION_DATA: Education[] = [
  {
    id: "edu-1",
    degree: "Master's Degree",
    major: "평생교육학 전공",
    institution: "한국교육대학교 대학원",
    period: "2017.03 – 2019.02",
  },
  {
    id: "edu-2",
    degree: "Bachelor's Degree",
    major: "교육학 전공",
    institution: "한국대학교",
    period: "2013.03 – 2017.02",
  },
];

// Simple consulting generator simulation for the interactive desk section
export function designEducationProgram(target: string, goal: string): CuratedProgram {
  const targetLabelMap: Record<string, string> = {
    youth: "청년 (Young Adults)",
    residents: "지역 주민 (Local Residents)",
    workers: "직장인 (Working Professionals)",
    seniors: "시니어 (Seniors)",
  };

  const goalLabelMap: Record<string, string> = {
    digital: "디지털 역량 강화 (Digital Skills)",
    community: "지역사회 커뮤니티 활성화 (Community)",
    job: "직무 역량 강화 (Job Skills)",
    humanities: "인문학 & 교양 (Humanities)",
  };

  const t = targetLabelMap[target] || target;
  const g = goalLabelMap[goal] || goal;

  // Let's create specific beautiful programs based on combination
  if (target === "workers" && goal === "digital") {
    return {
      programName: "✨ 퇴근길 생성형 AI 에듀 마일스톤 과정",
      target: t,
      goal: g,
      duration: "총 8주 (주 1회, 야간 19:30 - 21:30)",
      coreCurriculum: [
        "1~2주차: 직장인의 하루를 바꾸는 생성형 AI 기본 개념 및 프롬프트 핵심 비결",
        "3~4주차: 데이터 정리와 보고서 시각화를 돕는 스마트 AI 에이전트 실습",
        "5~6주차: 실무 프레젠테이션 및 카드 뉴스 자동 제작 및 협업 워크플로우 대폭 개선",
        "7~8주차: 생성형 AI 윤리 및 업무 성격을 극대화하는 맞춤형 개인 에이전트 설계 발표",
      ],
      counselingStrategy: "실시간 슬랙(Slack) Q&A 채널 운영 및 매주 수강 소감 데이터 분석 기반 난이도 최적화 1:1 슬롯 제공",
      evaluationKpi: "최종 학습 기획안 포트폴리오 이수율 95% 이상 달성 및 수강 만족도 목표 4.8점 지향",
      backgroundPattern: "from-amber-50 to-orange-100 border-orange-200",
    };
  }

  if (target === "seniors" && goal === "digital") {
    return {
      programName: "🌟 실버 세대를 위한 스마트 라이프 테크 아카데미",
      target: t,
      goal: g,
      duration: "총 6주 (주 1회, 오전 10:00 - 12:00)",
      coreCurriculum: [
        "1~2주차: 스마트폰 완벽 마스터! 은행 위젯부터 모바일 기차표 예매까지",
        "3~4주차: 키오스크(음식점, 병원, 무인발급기) 실전 정복! 모의 환경 스터디 버스 투어",
        "5~6주차: 소중한 가족에게 보내는 카카오톡 소통 기법 및 나만의 원터치 사진 메시지 제작",
      ],
      counselingStrategy: "실버 스마트 헬퍼(보조 강사) 1:2 밀착 매칭 상담 및 왕초보 패스로 심리적 장벽 완화",
      evaluationKpi: "오프라인 키오스크 실전 테스트 100% 미션 성공률 및 시니어 교육 지속 성취도 90% 돌파",
      backgroundPattern: "from-emerald-50 to-teal-100 border-teal-200",
    };
  }

  if (target === "residents" && goal === "community") {
    return {
      programName: "🏡 주민이 디자인하는 로컬 스토리텔러 양성 교실",
      target: t,
      goal: g,
      duration: "총 10주 (주 1회, 오후 14:00 - 16:00)",
      coreCurriculum: [
        "1~3주차: 우리 동네 숨은 영웅과 역사적 명소 아카이빙 기초 기법",
        "4~6주차: 소통과 화합을 이끄는 마을 축제 기획 가이딩 및 인터뷰 콘텐츠 제작",
        "7~9주차: 공인 가이드로 나아가는 주민 전용 도서 또는 블로그 소책자 출판 워크샵",
        "10주차: 성과 공유회 및 로컬 역사 가이드 무료 해설 자격 투어 개최",
      ],
      counselingStrategy: "마을 사랑방 커피타임 토크 소위원회 운영으로 교육 중 발생 갈등 전면 사전 조율",
      evaluationKpi: "주민 자치 가이드맵 출판 성과물 1건 도출 및 지속적인 주민 인프라 네트워크 3곳 이상 연계 구축",
      backgroundPattern: "from-sky-50 to-blue-100 border-blue-200",
    };
  }

  if (target === "youth" && goal === "job") {
    return {
      programName: "🚀 로봇 레이아웃 기반 실무형 교육 코디네이터 부트캠프",
      target: t,
      goal: g,
      duration: "총 12주 (주 2회, 하이브리드 운영)",
      coreCurriculum: [
        "1~4주차: 평생교육 프로그램 분석, 정부 보조금 매칭 공모 서류 작성 기초",
        "5~8주차: 에듀테크 플랫폼 관리 및 LMS(학습관리시스템) 대시보드 실전 운영 기법",
        "9~11주차: 강사 매칭 및 현직 실무자와 함께하는 지역 주민 협업 프로젝트 현장 멘토링",
        "12주차: 프로젝트 발표회 및 이력서/자기소개서 작성 1:1 마이크로 피드백",
      ],
      counselingStrategy: "교육학 전공 선배(유혜민 멘토 직접 등판)의 격주 오프라인 커피챗 및 개인 성취도 분석 맞춤형 진로 피드백",
      evaluationKpi: "성과 발표 수강생 취·창업 지원 연결률 40% 이상 확보 및 과정 수료율 98% 조기 완성",
      backgroundPattern: "from-purple-50 to-violet-100 border-violet-200",
    };
  }

  // Fallback program generator dynamically based on selection
  return {
    programName: `📘 ${t}을(를) 위한 ${g.replace(/\(.*\)/, "")} 파이어니어 코스`,
    target: t,
    goal: g,
    duration: "총 8주 (주 1회, 2시간)",
    coreCurriculum: [
      `1~2주차: 해당 목표를 위한 핵심 현황 파악 및 ${t}의 학습 요구 구체화`,
      `3~4주차: 주도적인 교류 및 학습 설계 도구 도입과 실시간 워크샵 진행`,
      `5~6주차: 소셜 멘토링 및 교육 코스 구체화, 맞춤형 멘토 상담 제공`,
      `7~8주차: 최종 학습 성과 평가 및 지역 연계 우수 수료 수기 수록집 출판`,
    ],
    counselingStrategy: "유혜민 평생교육사의 차별화된 1:1 심층 상담 멘토링 시스템 및 개인 성취도 마일리지 시각화 케어",
    evaluationKpi: "과정 수강 이수율 92% 돌파 및 사후 학습자 교육 지속 관심 만족도 4.5/5.0 이상 달성",
    backgroundPattern: "from-stone-50 to-zinc-100 border-stone-200",
  };
}
