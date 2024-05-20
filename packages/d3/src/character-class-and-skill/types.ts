export interface CharacterClassResponse {
  slug: string;
  name: string;
  maleName: string;
  femaleName: string;
  icon: string;
  skillCategories: Array<SkillCategory>;
  skills: Record<'active' | 'passive', Array<Skill>>;
}

interface SkillCategory {
  slug: string;
  name: string;
}

interface Skill {
  slug: string;
  name: string;
  icon: string;
  level: number;
  tooltipUrl: string;
  description: string;
  descriptionHtml: string;
  flavorText?: string;
}

export interface SkillResponse {
  skill: Skill;
  runes: Array<Rune>;
}

interface Rune {
  slug: string;
  type: string;
  name: string;
  level: number;
  description: string;
  descriptionHtml: string;
}
