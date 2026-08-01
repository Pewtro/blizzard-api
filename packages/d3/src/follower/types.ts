export type Follower = 'enchantress' | 'scoundrel' | 'templar';

export interface FollowerResponse {
  name: string;
  portrait: string;
  realName: string;
  skills: Array<Skill>;
  slug: Follower;
}

interface Skill {
  description: string;
  descriptionHtml: string;
  icon: string;
  level: number;
  name: string;
  slug: string;
  tooltipUrl: string;
}
