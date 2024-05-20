export interface FollowerResponse {
  slug: string;
  name: string;
  realName: string;
  portrait: string;
  skills: Array<Skill>;
}

interface Skill {
  slug: string;
  name: string;
  icon: string;
  level: number;
  tooltipUrl: string;
  description: string;
  descriptionHtml: string;
}
