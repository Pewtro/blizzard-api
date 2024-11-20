export interface CharacterClassResponse {
  femaleName: string;
  icon: string;
  maleName: string;
  name: string;
  skillCategories: Array<SkillCategory>;
  skills: Record<'active' | 'passive', Array<Skill>>;
  slug: string;
}

export interface SkillResponse {
  runes: Array<Rune>;
  skill: Skill;
}

interface Rune {
  description: string;
  descriptionHtml: string;
  level: number;
  name: string;
  slug: string;
  type: string;
}

interface Skill {
  description: string;
  descriptionHtml: string;
  flavorText?: string;
  icon: string;
  level: number;
  name: string;
  slug: string;
  tooltipUrl: string;
}

interface SkillCategory {
  name: string;
  slug: string;
}
