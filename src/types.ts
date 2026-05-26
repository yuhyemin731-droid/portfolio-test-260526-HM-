export interface WorkExperience {
  id: string;
  institution: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  keySkills: string[];
  tag: string;
}

export interface Education {
  id: string;
  degree: string;
  major: string;
  institution: string;
  period: string;
}

export interface Skill {
  id: string;
  name: string;
  starRating: number;
  maxRating: number;
  details: string;
}

export interface Strength {
  id: string;
  name: string;
  description: string;
  example: string;
  quote: string;
}

export interface CuratedProgram {
  programName: string;
  target: string;
  goal: string;
  duration: string;
  coreCurriculum: string[];
  counselingStrategy: string;
  evaluationKpi: string;
  backgroundPattern: string;
}
