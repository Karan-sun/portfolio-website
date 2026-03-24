export interface Skill {
  name: string;
  level: number;
  rank: 'S' | 'A' | 'B' | 'C';
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Quest {
  id: string;
  codename: string;
  realName: string;
  status: 'COMPLETED' | 'IN PROGRESS';
  difficulty: 'S-RANK MISSION' | 'A-RANK MISSION' | 'B-RANK MISSION' | 'C-RANK MISSION';
  objective: string;
  tech: string[];
  achievements: string[];
  link: string;
  boss: string;
  special?: string;
}

export interface ChronicleNode {
  id: string;
  title: string;
  organization: string;
  period: string;
  animeRank: string;
  achievements?: string[];
  quote?: string;
  isActive?: boolean;
}

export interface Trophy {
  id: string;
  title: string;
  issuer: string;
  tier: 'LEGENDARY' | 'EPIC' | 'RARE' | 'UNCOMMON';
}

export interface LoreEntry {
  id: string;
  number: string;
  text: string;
  icon: string;
}
